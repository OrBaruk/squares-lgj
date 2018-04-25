(ns quil.sketch
  (:require [quil.util :as u :include-macros true]
            [quil.middlewares.deprecated-options :as do]
            [goog.dom :as dom]
            [goog.events :as events]
            [goog.style :as style]
            [goog.events.EventType :as EventType])
  (:require-macros [quil.sketch]))

; Processing runs Processing.init() on DOMCOntentLoad event.
; That function removes all sketches created before that point.
; This is unexpected behavior from Quil point of view and
; Processing.init() doesn't do anything relevant to Quil anyway.
(.disableInit js/Processing)

(def ^:dynamic
  *applet* nil)

(defn current-applet [] *applet*)

(u/generate-quil-constants :cljs
                           rendering-modes (:java2d :p2d :p3d :opengl))

(defn resolve-renderer [mode]
  (u/resolve-constant-key mode rendering-modes))

(defn set-size [applet width height]
  (let [el (.-quil-canvas applet)]
    (.setAttribute el "width" width)
    (.setAttribute el "height" height)
    (set! (.-width applet)
          (.parseInt js/window (style/getComputedStyle el "width")))
    (set! (.-height applet)
          (.parseInt js/window (style/getComputedStyle el "height")))))

(defn size
  ([width height]
   (.size (current-applet) (int width) (int height)))

  ([width height mode]
   (.size (current-applet) (int width) (int height) (u/resolve-constant-key mode rendering-modes))))

(defn- bind-handlers [prc opts]
  (doseq [[processing-name quil-name] {:setup :setup
                                       :draw :draw

                                       :keyPressed :key-pressed
                                       :keyReleased :key-released
                                       :keyTyped :key-typed

                                       :mouseClicked :mouse-clicked
                                       :mouseDragged :mouse-dragged
                                       :mouseMoved :mouse-moved
                                       :mousePressed :mouse-pressed
                                       :mouseReleased :mouse-released
                                       :mouseOut :mouse-exited
                                       :mouseOver :mouse-entered
                                       :mouseScrolled :mouse-wheel}]
    (when-let [handler (opts quil-name)]
      (aset prc (name processing-name)
            (fn []
              (quil.sketch/with-sketch prc
                (handler)))))))

(defn make-sketch [options]
  (let [opts            (->> (:middleware options [])
                             (cons do/deprecated-options)
                             (apply comp)
                             (#(% options))
                             (merge {:size [500 300]}))

        sketch-size     (or (:size opts) [200 200])
        renderer        (:renderer opts)
        features        (set (:features opts))

        setup (fn []
                (->> (if renderer [renderer] [])
                     (concat sketch-size)
                     (apply size))
                (when (:settings opts) ((:settings opts)))
                (when (:setup opts) ((:setup opts))))
        mouse-wheel (when (:mouse-wheel opts)
                      ;; -1 need for compability with Clojure version
                      #((:mouse-wheel opts) (* -1 (.-mouseScroll *applet*))))

        opts (assoc opts
                    :setup setup
                    :mouse-wheel mouse-wheel)
        attach-function (fn [prc]
                          (bind-handlers prc opts)
                          (set! (.-quil prc) (atom nil))
                          (set! (.-target-frame-rate prc) (atom 60)))
        sketch (js/Processing.Sketch. attach-function)]
    (when (contains? features :global-key-events)
      (aset (aget sketch "options") "globalKeyEvents" true))
    sketch))

(defn destroy-previous-sketch [host-elem]
  (when-let [proc-obj (.-processing-obj host-elem)]
    (.exit proc-obj)))

(defn sketch [& opts]
  (let [opts-map (apply hash-map opts)
        host-elem (dom/getElement (:host opts-map))
        renderer (or (:renderer opts-map) :p2d)]
    (if host-elem
      (do
        (if (.-processing-context host-elem)
          (when-not (= renderer (.-processing-context host-elem))
            (.warn js/console "WARNING: Using different context on one canvas!"))
          (set! (.-processing-context host-elem) renderer))
        (destroy-previous-sketch host-elem)
        (let [proc-obj (js/Processing. host-elem (make-sketch opts-map))]
          (set! (.-processing-obj host-elem) proc-obj)
          (set! (.-quil-canvas proc-obj) host-elem)
          proc-obj))
      (.error js/console
              (if (:host opts-map)
                (str "ERROR: Cannot find host element: " (:host opts-map))
                "ERROR: Cannot create sketch. :host is not specified or element not found.")))))

(def sketch-init-list (atom (list)))

(defn empty-body? []
  (let [child (.-childNodes (.-body js/document))]
    ; seems hacky, we should come up with better way of
    ; checking whether body is empty or not
    (<= (.-length child) 1)))

(defn add-canvas [canvas-id]
  (let [canvas (.createElement js/document "canvas")]
    (.setAttribute canvas "id" canvas-id)
    (.appendChild (.-body js/document) canvas)))

(defn init-sketches []
  (let [add-elem? (empty-body?)]
    (doseq [sk @sketch-init-list]
      (when add-elem?
        (add-canvas (:host-id sk)))
      ((:fn sk))))
  (reset! sketch-init-list []))

(defn add-sketch-to-init-list [sk]
  (swap! sketch-init-list conj sk)
  ; if page already loaded immediately init sketch we just added
  (when (= (.-readyState js/document) "complete")
    (init-sketches)))

(events/listenOnce js/window EventType/LOAD init-sketches)
