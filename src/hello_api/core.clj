(ns hello-api.core
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [clojure.java.jdbc :as jdbc]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(def pg-db {:dbtype "postgresql"
            :dbname "notes"
            :host "localhost"
            :user "postgres"
            :password "pass"})

(defn get-records [request]
  (jdbc/query pg-db
              ["select * from record"]))

(defroutes app-routes
           (GET "/records" [] get-records)
           (route/not-found "Page not found"))


(def app
  (wrap-defaults app-routes site-defaults))
