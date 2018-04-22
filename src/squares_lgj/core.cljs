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
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.
  {:player {:x 50 :y 100}
   :enemies [{:x 0 :y 0 :vx 5 :vy 0}
             {:x 0 :y 0 :vx 0 :vy 5}]
   :candy (new-candy)
   :lost false})

(def player-color [100 255 255])
(def candy-color [200 255 255])
(def enemy-color [50 255 255])

(defn draw-player [player]
  (let [x (:x player)
        y (:y player)]
    (apply q/fill player-color)
    (q/rect x y 30 50)))

(defn draw-candy [candy]
    (apply q/fill candy-color)
    (q/rect (:x candy) (:y candy) 50 30))

(defn spawn-candy [state]
  (assoc-in state [:candy] (new-candy)))

(defn move-player [state x y]
  (assoc-in state [:player]
            {:x (+ (:x (:player state)) x)
            :y (+ (:y (:player state)) y)}))

(defn move-enemy [enemy]
  {:x (mod (+ (:x enemy) (:vx enemy)) 500)
   :y (mod (+ (:y enemy) (:vy enemy)) 500)
   :vx (:vx enemy)
   :vy (:vy enemy)})

(defn update-state [state]
  {:player (:player state)
   :enemies (map move-enemy (:enemies state))
   :candy (new-candy)
   :lost (:lost state)})

(defn draw-enemy [enemy]
  (apply q/fill enemy-color)
  (q/rect (:x enemy) (:y enemy) 10 10))

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
  (draw-player (:player state))
  (draw-candy (:candy state))
  (count (map draw-enemy (:enemies state))))

(defn handle-key
  [state key]
  (condp = key
        :up (move-player state 0 -10)
        :down (move-player state 0 10)
        :left (move-player state -10 0)
        :right (move-player state 10 0)
        state))

(defn key-pressed
  [state event]
  (handle-key state (:key event)))

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
    :key-pressed key-pressed
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)
