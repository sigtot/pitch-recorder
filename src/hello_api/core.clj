(ns hello-api.core
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [clojure.data.json :as json]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.cors :refer [wrap-cors]]
            [muuntaja.core :as m]
            [ring.util.response :as r]
            [hello-api.records :as records]
            [hello-api.swagger :as swagger])
  (:import (java.sql Time)))

(extend-type Time
  json/JSONWriter
  (-write [time out]
    (json/-write (str time) out)))

(defroutes app-routes
           (GET "/records" []
             (r/response (->> (records/get-records)
                              (m/encode "application/json"))))
           (POST "/records" req
             (r/response (->> (records/post-records req)
                              (m/encode "application/json"))))
           (GET "/doc" []
             (r/response (->> (swagger/doc)
                              (m/encode "application/json"))))
           (route/not-found "Page not found"))

(def app
  (-> app-routes
      wrap-json-body
      wrap-json-response
      (wrap-defaults api-defaults)
      (wrap-cors
        :access-control-allow-origin [#".*"]
        :access-control-allow-methods [:get])))
