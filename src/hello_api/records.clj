(ns hello-api.records
  (:require [clojure.data.json :as json]
            [clojure.java.jdbc :as jdbc]
            [hello-api.db :refer [pg-db]]))

(defn get-records []
  (json/write-str
    (jdbc/query pg-db
                ["SELECT * FROM record"])))

(defn post-records [request]
  (let [body (request :body)]
    (jdbc/execute! pg-db
                ["INSERT INTO record (guess, actual, time) VALUES (?, ?, NOW())"
                 (body "guess") (body "actual")]))
  (json/write-str {:ok true}))
