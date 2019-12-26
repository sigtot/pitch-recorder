(ns hello-api.swagger
  (:require [compojure.core :refer :all]
            [ring.swagger.swagger2 :as rs]
            [schema.core :as s]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.json :refer [wrap-json-response wrap-json-body]]
            [ring.middleware.cors :refer [wrap-cors]]
            [hello-api.records :refer [get-records]]))

(s/defschema Record {:guess  s/Int
                     :actual s/Int
                     :time   s/Int})

(defn doc []
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