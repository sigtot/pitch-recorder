(ns hello-api.records
  (:require [compojure.core :refer :all]
            [clojure.data.json :as json]
            [clojure.java.jdbc :as jdbc]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.cors :refer [wrap-cors]]
            [hello-api.db :refer [pg-db]]))

(defn get-records []
  (json/write-str
    (jdbc/query pg-db
                ["select * from record"])))
