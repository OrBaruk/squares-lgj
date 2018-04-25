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
  {:player {:x 50 :y 100 :vx 0 :vy 0}
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
    (q/rect x y 10 10)))

(defn draw-candy [candy]
    (apply q/fill candy-color)
    (q/rect (:x candy) (:y candy) 10 10))

(defn spawn-candy [state]
  (assoc-in state [:candy] (new-candy)))

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
  ;; (js/console.log (:lost state))
  (as-> state $
   (update-in $ [:player] move-square)
   (update-in $ [:enemies] #(map move-square %))
   (assoc-in $ [:lost]
             (cond
               (collision? (:player $) (:candy $)) :candy
               ;; (reduce #(or (collision? (:player $) %1) %2) true (:enemies $)) :enemy
               :default :nothing)


   )))

(defn draw-enemy [enemy]
  (apply q/fill enemy-color)
  (q/rect (:x enemy) (:y enemy) 10 10))

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (condp #(= (:lost state) %)
    :candy (q/background 0)
    :enemy (q/background 125)
    :nothing (q/background 255))
  (draw-player (:player state))
  (draw-candy (:candy state))
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
