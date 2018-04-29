(ns squares-lgj.render
  (:require [quil.core :as q :include-macros true]))

(def max-width (min 600 js/window.innerWidth))
(def max-height (min 600 js/window.innerHeight))

(def base-unit (/ (min max-height max-width) 100))

(def square-width (* 5 base-unit))
(def square-height (* 5 base-unit))

(def player-color [0 0 255])
(def candy-color [0 255 0])
(def enemy-color [255 0 0])

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
  (apply q/fill [0 0 255])
  (q/text-size 20)
  (q/text "Score" 25 25)
  (q/text-num score 90 25))

(defn start [state]
  (apply q/fill enemy-color)
  (q/text-size 40)
  (q/text "Squares" 160 220)
  (q/text-size 20)
  (q/text "Click to start!" 255 355)
  state)

(defn playing [state]
  (player (:player state))
  (candy (:candy state))
  (score (:score state))
  (doseq [e (:enemies state)] (enemy e)))

(defn game-over [state]
  (apply q/fill enemy-color)
  (let [score (:score state)
        max-score (max (:max-score state) score)]
    (q/text-size 40)
    (q/text "Game over!" 155 255)
    (q/text-size 20)
    (q/text "Score" 155 355)
    (q/text-num score 255 355)
    (q/text "Max score" 155 455)
    (q/text-num max-score 255 455)
    (q/text "Click to start again" 155 555)
    (assoc-in state [:max-score] max-score)))

(defn state [state]
  (q/background 0 0 0)
  (condp = (:mode state)
    :start (start state)
    :playing   (playing state)
    :game-over (game-over state)
    :default state))
