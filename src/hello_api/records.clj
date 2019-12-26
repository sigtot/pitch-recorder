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
    (jdbc/insert! pg-db :record {:guess (body "guess") :actual (body "actual")}))
  (json/write-str {:ok true}))
