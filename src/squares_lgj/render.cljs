(ns squares-lgj.render
  (:require [quil.core :as q :include-macros true]))

(def max-width (min 600 js/window.innerWidth))
(def max-height (min 600 js/window.innerHeight))

(def base-unit (/ (min max-height max-width) 100))

(def square-width (* 5 base-unit))
(def square-height (* 5 base-unit))

(def white [245 245 245])
(def black [10 10 10])
(def red [245 0 0])
(def green [0 245 0])
(def blue [0 0 245])

(def player-color blue)
(def candy-color green)
(def enemy-color red)

(defn square [square]
  (q/rect (:x (:pos square)) (:y (:pos square)) square-width square-height))

(defn player [player]
  (apply q/fill player-color)
  (square player))

(defn candy [candy]
  (apply q/fill candy-color)
  (square candy))

(defn enemy [enemy]
  (apply q/fill enemy-color)
  (square enemy))

(defn score [score]
  (apply q/fill white)
  (q/text-size 20)
  (q/text "Score" 25 25)
  (q/text-num score 90 25))

(defn start [state]
  (apply q/fill red)
  (q/text-size 45)
  (q/text "Squares" 140 200)
  (apply q/fill white)
  (q/text-size 25)
  (q/text "Click to start" 255 355)
  (player {:pos {:x 215 :y 330}})
  (enemy {:pos {:x 320 :y 170}})
  (candy {:pos {:x 25 :y 25}}))

(defn playing [state]
  (player (:player state))
  (candy (:candy state))
  (score (:score state))
  (doseq [e (:enemies state)] (enemy e)))

(defn game-over [state]
  (player (:player state))
  (candy (:candy state))
  (doseq [e (:enemies state)] (enemy e))
  (apply q/fill white)
  (let [score (:score state)
        max-score (max (:max-score state) score)]
    (q/text-size 40)
    (q/text "Game over!" 155 255)
    (q/text-size 20)
    (q/text "Score" 205 295)
    (q/text-num (:score state) 285 295)
    (q/text "Max" 205 320)
    (q/text-num max-score 285 320)
    (q/text "Click to restart" 205 355)))

(defn state [state]
  (q/background 10 10 10)
  (condp = (:mode state)
    :start (start state)
    :playing   (playing state)
    :game-over (game-over state)
    :default state))
