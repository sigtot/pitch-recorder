(ns pitch-api.swagger
  (:require [ring.swagger.swagger2 :as rs]
            [compojure.core :as cc]
            [schema.core :as s])
  (:import (clojure.lang IFn AFn)))

(s/defschema Record {:guess  s/Int
                     :actual s/Int})

(defn doc []
  (s/with-fn-validation
    (rs/swagger-json
      {:info  {:version     "1.0.0"
               :title       "API Docs"
               :description "Docs for the API"}
       :paths {"/api/records" {:get  {:summary     "Get records"
                                      :description "Show all records"
                                      :responses   {200 {:schema      Record
                                                         :description "Everything works as expected"}
                                                    404 {:description "(Not implemented)"}}}
                               :post {:summary     "Create record"
                                      :description "Create a new record"
                                      :parameters  {:body Record}
                                      :responses   {200 {:schema      Record
                                                         :description "Everything works as expected"}}}}}})))

(defprotocol With-swagger
  (get-doc [this]))

(defrecord Route [path method swagger childs handler]
  With-swagger
  (get-doc [this] (:swagger this))

  compojure.response/Renderable
  (render [_ request]
    ((first handler) request))

  IFn
  (invoke [_ request]
    (handler request))
  (invoke [_ request respond raise]
    (handler request respond raise))

  (applyTo [this args]
    (AFn/applyToHelper this args)))

(defn make-route [method path args swagger body]
  `(map->Route {:path    ~path
                :method  ~method
                :swagger ~swagger
                :handler ~(cc/compile-route method path args (list `(do ~@body)))}))

(defmacro GET "Generate a `GET` route with swagger docs."
  [path args swagger & body]
  (make-route :get path args swagger body))

(defmacro POST "Generate a `POST` route with swagger docs."
  [path args swagger & body]
  (make-route :post path args swagger body))
