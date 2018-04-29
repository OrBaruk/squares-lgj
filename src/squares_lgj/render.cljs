(ns squares-lgj.render
  (:require [quil.core :as q :include-macros true]))

(def max-width (min 600 js/window.innerWidth))
(def max-height (min 600 js/window.innerHeight))

(def base-unit (/ (min max-height max-width) 100))

(def square-width (* 10 base-unit))
(def square-height (* 10 base-unit))

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
  (apply q/fill enemy-color)
  (q/text-num score 255 255))

(defn state [state]
  (q/background 245 245 245)
  (player (:player state))
  (candy (:candy state))
  (score (:score state))
  (count (map enemy (:enemies state))))
