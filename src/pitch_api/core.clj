(ns pitch-api.core
  (:require [compojure.core :refer [context GET POST]]
            [compojure.route :as route]
            [clojure.data.json :as json]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.cors :refer [wrap-cors]]
            [muuntaja.core :as m]
            [ring.util.response :as r]
            [pitch-api.records :refer [records-api]]
            [pitch-api.swagger :as swagger])
  (:import (java.sql Timestamp)))

(extend-type Timestamp
  json/JSONWriter
  (-write [date out]
    (json/-write (str date) out)))

(def app-routes
  (swagger/routes
    (context "/api" {}
      (swagger/routes
        (records-api)
        (GET "/doc" []
          (r/response (->> (swagger/doc)
                           (m/encode "application/json"))))))
    (route/not-found "Page not found")))

(def app
  (-> app-routes
      wrap-json-body
      wrap-json-response
      (wrap-defaults api-defaults)
      (wrap-cors
        :access-control-allow-origin [#".*"]
        :access-control-allow-methods [:get :post])))
