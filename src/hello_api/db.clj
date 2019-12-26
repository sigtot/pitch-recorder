(ns hello-api.db
  (:require [compojure.core :refer :all]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.cors :refer [wrap-cors]]))

(def pg-db {:dbtype   "postgresql"
            :dbname   "notes"
            :host     "localhost"
            :user     "postgres"
            :password "pass"})

