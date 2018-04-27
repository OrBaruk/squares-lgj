(ns squares-lgj.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def max-width 500)
(def max-height 500)

(def square-width 10)
(def square-height 10)

(def player-color [0 255 0])
(def candy-color [0 0 255])
(def enemy-color [255 0 0])

(def min-vel 2)
(def max-vel 5)

(defn rand-pos []
  {:x (rand-int (- max-width square-width))
   :y (rand-int (- max-height square-height))})

(defn rand-vel []
  (let [aux (+ (rand-int (- max-vel min-vel)) min-vel)
        v (if (zero? (rand-int 2))
                     (- 0 aux)
                     aux)]
    (if (zero? (rand-int 2))
      {:x v :y 0}
      {:x 0 :y v})))

(defn new-enemy []
  {:pos (rand-pos)
   :vel (rand-vel)})

(defn new-candy []
  {:pos (rand-pos)})

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  ;; (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:player {:pos {:x 100 :y 100}}
   :enemies []
   :candy (new-candy)
   :score 0
   :lost :nothing})
(defn collision? [a b]
  (let [xa (:x (:pos a))
        ya (:y (:pos a))
        xb (:x (:pos b))
        yb (:y (:pos b))]
    (and
     (< (- (max xa xb) (min xa xb)) square-width)
     (< (- (max ya yb) (min ya yb)) square-height))))

(defn move-square [enemy]
  (let [vx (:x (:vel enemy))
        vy (:y (:vel enemy))
        x (:x (:pos enemy))
        y (:y (:pos enemy))
        new-x (+ x vx)
        new-y (+ y vy)
        new-vel (if (and (<= 0 new-x 490) (<= 0 new-y 490))
                  (:vel enemy)
                  {:x (- vx) :y (- vy)})]
    {:pos {:x (max 0 (min new-x 490))
           :y (max 0 (min new-y 490))}
     :vel new-vel}))

(defn spawn-enemy [status enemies]
  (cond
    (= status :enemy) []
    (= status :candy) (conj enemies (new-enemy))
    :default enemies))

(defn get-player []
  {:pos {:x (min (q/mouse-x) (- max-width square-width)) :y (min (q/mouse-y) (- max-height square-height))}})

(defn update-state [state]
  (let [status  (cond
                  (collision? (:player state) (:candy state)) :candy
                  (reduce #(or (collision? (:player state) %2) %1) false (:enemies state)) :enemy
                  :default :nothing)]
    (as-> state $
      (assoc-in $ [:player] (get-player))
      (update-in $ [:enemies] #(map move-square %))
      (assoc-in $ [:lost] status)
      (assoc-in $ [:candy] (if (= status :candy)
                             (new-candy)
                             (:candy state)))
      (update-in $ [:score] (cond
                              (= status :candy) inc
                              (= status :enemy) (fn[a] 0)
                              :default identity))
      (update-in $ [:enemies] #(spawn-enemy status %)))))

(defn draw-player [player]
  (apply q/fill player-color)
  (q/rect (:x (:pos player)) (:y (:pos player)) square-width square-height))

(defn draw-candy [candy]
  (apply q/fill candy-color)
  (q/rect (:x (:pos candy)) (:y (:pos candy)) square-width square-height))

(defn draw-enemy [enemy]
  (apply q/fill enemy-color)
  (q/rect (:x (:pos enemy)) (:y (:pos enemy)) square-width square-height))

(defn draw-score [score]
  (apply q/fill enemy-color)
  (q/text-num score 255 255))

(defn draw-state [state]
  (q/background 245 245 245)
  (draw-player (:player state))
  (draw-candy (:candy state))
  (draw-score (:score state))
  (count (map draw-enemy (:enemies state))))

(defn on-key-down [state event]
  (case (:key event)
    (:w :up) (assoc-in state [:player :vel :y] -5)
    (:s :down) (assoc-in state [:player :vel :y] 5)
    (:a :left) (assoc-in state [:player :vel :x] -5)
    (:d :right) (assoc-in state [:player :vel :x] 5)
    state))

(defn on-key-up [state event]
  (case (:key event)
    (:w :up) (assoc-in state [:player :vel :y] 0)
    (:s :down) (assoc-in state [:player :vel :y] 0)
    (:a :left) (assoc-in state [:player :vel :x] 0)
    (:d :right) (assoc-in state [:player :vel :x] 0)
    state))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch squares-lgj
    :host "squares-lgj"
    :size [max-width max-height]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :key-pressed on-key-down
    :key-released on-key-up
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
