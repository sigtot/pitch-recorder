(ns hello-api.core
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [clj-time.format :as tformat]
            [clojure.data.json :as json]
            [clojure.java.jdbc :as jdbc]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]])
  (:import (java.sql Time)))

(def pg-db {:dbtype "postgresql"
            :dbname "notes"
            :host "localhost"
            :user "postgres"
            :password "pass"})

(extend-type Time
  json/JSONWriter
  (-write [time out]
    (json/-write (str time) out)))

(defn get-records [request]
  (json/write-str (jdbc/query pg-db
              ["select * from record"])))

(defroutes app-routes
           (GET "/records" [] get-records)
           (route/not-found "Page not found"))

(def app
  (wrap-defaults app-routes site-defaults))
