(ns hello-api.records
  (:require [clojure.data.json :as json]
            [clojure.java.jdbc :as jdbc]
            [hello-api.db :refer [pg-db]]))

(defn get-records []
  (json/write-str
    (jdbc/query pg-db
                ["SELECT * FROM record"])))

(defn post-records [request]
  (let [body-json (json/write-str (request :body))]
    (let [body (json/read-str body-json :key-fn keyword)]
      (jdbc/insert! pg-db :record body)) )
  (json/write-str {:ok true}))
