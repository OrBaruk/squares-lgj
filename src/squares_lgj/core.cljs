(ns squares-lgj.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]
            [squares-lgj.render :as render]
            [squares-lgj.engine :as engine]
            [squares-lgj.io :as io]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  (q/no-cursor)
  {:player {:pos {:x 100 :y 100}}
   :enemies []
   :candy (engine/spawn-candy)
   :score 0
   :max-score 0
   :mode :start})

(defn ^:export run-sketch []
  (q/defsketch squares-lgj
    :host "squares-lgj"
    :size [render/max-width render/max-height]
    :setup setup
    :update engine/update-state
    :draw render/state
    :mouse-pressed io/handle-mouse
    :middleware [m/fun-mode]))
