(ns squares-lgj.engine
  (:require [quil.core :as q :include-macros true]
            [squares-lgj.io :as io]
            [squares-lgj.render :as render]))

(def min-vel (* 1 render/base-unit))
(def max-vel (* 3 render/base-unit))

(defn rand-pos []
  {:x (rand-int (- render/max-width render/square-width))
   :y (rand-int (- render/max-height render/square-height))})

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

(defn new-candy []
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
        new-vel (if (and (<= 0 new-x 490) (<= 0 new-y 490))
                  (:vel enemy)
                  {:x (- vx) :y (- vy)})]
    {:pos {:x (max 0 (min new-x 490))
           :y (max 0 (min new-y 490))}
     :vel new-vel}))

(defn spawn-enemy [status enemies]
  (cond
    (= status :enemy) []
    (= status :candy) (conj enemies (new-enemy))
    :default enemies))

(defn update-state [state]
  (let [status  (cond
                  (collision? (:player state) (:candy state)) :candy
                  (reduce #(or (collision? (:player state) %2) %1) false (:enemies state)) :enemy
                  :default :nothing)]
    (as-> state $
      (assoc-in $ [:player] (io/get-player))
      (update-in $ [:enemies] #(map move-square %))
      (assoc-in $ [:lost] status)
      (assoc-in $ [:candy] (if (= status :candy)
                             (new-candy)
                             (:candy state)))
      (update-in $ [:score] (cond
                              (= status :candy) inc
                              (= status :enemy) (fn[a] 0)
                              :default identity))
      (update-in $ [:enemies] #(spawn-enemy status %)))))
