(ns hello-api.core
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [clojure.data.json :as json]
            [clojure.java.jdbc :as jdbc]
            [ring.swagger.swagger2 :as rs]
            [schema.core :as s]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.cors :refer [wrap-cors]]
            [muuntaja.core :as m]
            [ring.util.response :as r])
  (:import (java.sql Time)))

(def pg-db {:dbtype   "postgresql"
            :dbname   "notes"
            :host     "localhost"
            :user     "postgres"
            :password "pass"})

(extend-type Time
  json/JSONWriter
  (-write [time out]
    (json/-write (str time) out)))

(defn get-records []
  (json/write-str
    (jdbc/query pg-db
                ["select * from record"])))

(rs/swagger-json {})
(s/defschema Record {:guess  s/Int
                     :actual s/Int
                     :time   s/Int})

(defn doc-records []
  (s/with-fn-validation
    (rs/swagger-json
      {:info  {:version     "1.0.0"
               :title       "API Docs"
               :description "Docs for the API"}
       :paths {"/records" {:get {:summary     "Records"
                                 :description "Show all records"
                                 :parameters  {:path {:id s/Str}
                                               :body Record}
                                 :responses   {200 {:schema      Record
                                                    :description "Everything works as expected"}
                                               404 {:description "(Not implemented)"}}}}}})))

(defroutes app-routes
           (GET "/records" []
             (r/response (->> (get-records)
                              (m/encode "application/json"))))
           (GET "/doc" []
             (r/response (->> (doc-records)
                              (m/encode "application/json"))))
           (route/not-found "Page not found"))

(def app
  (-> app-routes
      wrap-json-body
      wrap-json-response
      (wrap-defaults site-defaults)
      (wrap-cors
        :access-control-allow-origin [#".*"]
        :access-control-allow-methods [:get])))
