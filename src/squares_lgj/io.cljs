(ns squares-lgj.io
  (:require [quil.core :as q :include-macros true]
            [squares-lgj.render :as render]))

(defn get-player []
  {:pos {:x (min (q/mouse-x) (- render/max-width render/square-width)) :y (min (q/mouse-y) (- render/max-height render/square-height))}})

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
