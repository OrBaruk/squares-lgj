(ns squares-lgj.engine
  (:require [quil.core :as q :include-macros true]
            [squares-lgj.io :as io]
            [squares-lgj.render :as render]))

(def min-vel (* 1 render/base-unit))
(def max-vel (* 2 render/base-unit))

(def max-x (- render/max-width render/square-width))
(def max-y (- render/max-height render/square-height))

(defn rand-pos []
  {:x (rand-int max-x)
   :y (rand-int max-y)})

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

(defn spawn-candy []
  {:pos (rand-pos)})

(defn collision? [a b]
  (let [xa (:x (:pos a))
        ya (:y (:pos a))
        xb (:x (:pos b))
        yb (:y (:pos b))]
    (and
     (< (- (max xa xb) (min xa xb)) render/square-width)
     (< (- (max ya yb) (min ya yb)) render/square-height))))

(defn move-square [enemy]
  (let [vx (:x (:vel enemy))
        vy (:y (:vel enemy))
        x (:x (:pos enemy))
        y (:y (:pos enemy))
        new-x (+ x vx)
        new-y (+ y vy)
        new-vel (if (and (<= 0 new-x max-x) (<= 0 new-y max-y))
                  (:vel enemy)
                  {:x (- vx) :y (- vy)})]
    {:pos {:x (max 0 (min new-x max-y))
           :y (max 0 (min new-y max-y))}
     :vel new-vel}))

(defn spawn-enemy [event enemies]
  (cond
    (= event :enemy) []
    (= event :candy) (conj enemies (new-enemy))
    :default enemies))

(defn check-collisions [state]
  (cond
    (collision? (:player state) (:candy state)) :candy
    (reduce #(or (collision? (:player state) %2) %1) false (:enemies state)) :enemy
    :default :nothing))

(defn play [state]
  (let [event  (check-collisions state)]
    (-> state
        (assoc-in [:candy] (condp = event
                             :candy (spawn-candy)
                             (:candy state)))
        (update-in [:mode] (condp = event
                             :enemy (fn [a] :game-over)
                             identity))
        (update-in [:score] (condp = event
                              :candy inc
                              identity))
        (assoc-in [:player] (io/get-player))
        (update-in [:enemies] #(map move-square %))
        (update-in [:enemies] #(spawn-enemy event %)))))

(defn update-state [state]
  (condp = (:mode state)
    :playing (play state)
    state))
