(ns pitch-api.records
  (:require [clojure.data.json :as json]
            [clojure.java.jdbc :as jdbc]
            [pitch-api.spec :as specs]
            [pitch-api.utils :as utils]
            [pitch-api.db :refer [pg-db]]))

(defn get-records []
  (json/write-str
    (jdbc/query pg-db
                ["SELECT * FROM record"])))

(defn post-records [request]
  (let [entity (utils/json-to-map (request :body))]
    (if-let [err (specs/malformed? ::specs/record entity)]
      err
      (do (jdbc/insert! pg-db :record entity)
       (json/write-str {:ok true})))))
