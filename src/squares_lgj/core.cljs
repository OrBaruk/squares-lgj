(ns squares-lgj.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn new-candy []
  {:x (rand 500)
   :y (rand 500)})

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  ;; (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:player {:x 50 :y 100 :vx 0 :vy 0}
   :enemies [{:x 0 :y 0 :vx 5 :vy 0}
             {:x 0 :y 0 :vx 0 :vy 5}]
   :candy (new-candy)
   :score 0
   :lost :nothing})

(def player-color [0 255 0])
(def candy-color [0 0 255])
(def enemy-color [255 0 0])

(defn draw-player [player]
  (let [x (:x player)
        y (:y player)]
    (apply q/fill player-color)
    (q/rect x y 10 10)))

(defn draw-candy [candy]
    (apply q/fill candy-color)
    (q/rect (:x candy) (:y candy) 10 10))

(defn collision? [a b]
  (and
   (< (- (max (:x a) (:x b)) (min (:x a) (:x b))) 10)
   (< (- (max (:y a) (:y b)) (min (:y a) (:y b))) 10)))

(defn move-square [enemy]
  {:x (mod (+ (:x enemy) (:vx enemy)) 500)
   :y (mod (+ (:y enemy) (:vy enemy)) 500)
   :vx (:vx enemy)
   :vy (:vy enemy)})

(defn update-state [state]
  (let [status  (cond
                  (collision? (:player state) (:candy state)) :candy
                  (reduce #(or (collision? (:player state) %2) %1) false (:enemies state)) :enemy
                  :default :nothing)]
    (as-> state $
      (update-in $ [:player] move-square)
      (update-in $ [:enemies] #(map move-square %))
      (assoc-in $ [:lost] status)
      (assoc-in $ [:candy] (if (= status :candy)
                             (new-candy)
                             (:candy state)))
      (update-in $ [:score] (cond
                              (= status :candy) inc
                              (= status :enemy) (fn[a] 0)
                              :default identity)))))

(defn draw-enemy [enemy]
  (apply q/fill enemy-color)
  (q/rect (:x enemy) (:y enemy) 10 10))

(defn draw-score [score]
  (apply q/fill enemy-color)
  (q/text-num score 255 255))

(defn draw-state [state]
  (condp = (:lost state)
    :candy (q/background 0 255 255)
    :enemy (q/background 255 255 0)
    :nothing (q/background 245 245 245))
  (draw-player (:player state))
  (draw-candy (:candy state))
  (draw-score (:score state))
  (count (map draw-enemy (:enemies state))))

(defn on-key-down [state event]
  (case (:key event)
    (:w :up) (assoc-in state [:player :vy] -5)
    (:s :down) (assoc-in state [:player :vy] 5)
    (:a :left) (assoc-in state [:player :vx] -5)
    (:d :right) (assoc-in state [:player :vx] 5)
    state))

(defn on-key-up [state event]
  (case (:key event)
    (:w :up) (assoc-in state [:player :vy] 0)
    (:s :down) (assoc-in state [:player :vy] 0)
    (:a :left) (assoc-in state [:player :vx] 0)
    (:d :right) (assoc-in state [:player :vx] 0)
    state))

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch squares-lgj
    :host "squares-lgj"
    :size [500 500]
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
