(ns pitch-api.records
  (:require [clojure.data.json :as json]
            [clojure.java.jdbc :as jdbc]
            [pitch-api.spec :as specs]
            [pitch-api.utils :as utils]
            [pitch-api.db :refer [pg-db]]
            [muuntaja.core :as m]
            [compojure.core :refer [context routes]]
            [pitch-api.swagger :refer [GET POST]]
            [ring.util.response :as r]))

(defn get-records []
  (json/write-str
    (jdbc/query pg-db
                ["SELECT * FROM record"])))

(defn post-records [request]
  (let [entity (utils/json-to-map (request :body))]
    (if-let [err (specs/malformed? ::specs/record entity)]
      err
      (do (jdbc/insert! pg-db :record entity)
          (json/write-str {:ok true})))))

(defn records-api []
  (context "/records" []
    (routes
      (GET "/" []
           {:spec ::specs/record}
           (r/response (->> (get-records)
                            (m/encode "application/json"))))
      (POST "/" req
            {:spec ::specs/record}
            (r/response (->> (post-records req)
                             (m/encode "application/json")))))))
