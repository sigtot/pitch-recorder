(ns hello-api.records
  (:require [clojure.data.json :as json]
            [clojure.java.jdbc :as jdbc]
            [hello-api.db :refer [pg-db]]))

(defn get-records []
  (json/write-str
    (jdbc/query pg-db
                ["select * from record"])))
