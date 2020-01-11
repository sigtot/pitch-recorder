(ns pitch-api.utils
  (:require [clojure.data.json :as json]))

(defn json-to-map [body] (-> body
                             (json/write-str)
                             (json/read-str :key-fn keyword)))
