(ns pitch-api.swagger
  (:require [ring.swagger.swagger2 :as rs]
            [schema.core :as s]))

(s/defschema Record {:guess  s/Int
                     :actual s/Int})

(defn doc []
  (s/with-fn-validation
    (rs/swagger-json
      {:info  {:version     "1.0.0"
               :title       "API Docs"
               :description "Docs for the API"}
       :paths {"/records" {:get {:summary     "Get records"
                                 :description "Show all records"
                                 :responses   {200 {:schema      Record
                                                    :description "Everything works as expected"}
                                               404 {:description "(Not implemented)"}}}
                           :post {:summary    "Create record"
                                 :description "Create a new record"
                                 :parameters  {:body Record}
                                 :responses   {200 {:schema      Record
                                                    :description "Everything works as expected"}}}}}})))