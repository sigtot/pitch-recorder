(ns hello-api.core
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(defroutes app-routes
           (GET "/records" [] "Not implemented")
           (route/not-found "Page not found"))

(def app
  (wrap-defaults app-routes site-defaults))
