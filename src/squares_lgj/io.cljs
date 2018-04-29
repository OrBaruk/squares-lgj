(ns squares-lgj.io
  (:require [quil.core :as q :include-macros true]
            [squares-lgj.render :as render]))

(defn get-player []
  {:pos {:x (min (q/mouse-x) (- render/max-width render/square-width)) :y (min (q/mouse-y) (- render/max-height render/square-height))}})

(defn handle-mouse [state]
  (condp = (:mode state)
    :start (assoc-in state [:mode] :playing)
    :game-over (assoc-in state [:mode] :playing)
    :playing state
    :default state))
