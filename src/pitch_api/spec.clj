(ns pitch-api.spec
  (:require [clojure.spec.alpha :as s]
            [cheshire.core :as json]))

(s/def :record/guess int?)
(s/def :record/actual int?)
(s/def ::record (s/keys :req-un [:record/guess :record/actual]))

(defn malformed? [spec value]
  (when-let [error (s/explain-data spec value)]
    {:errors {:message error
              :data    (json/encode error)}}))
