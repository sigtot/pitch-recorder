(ns hello-api.core-test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [hello-api.core :refer :all]))

(deftest test-records
  (testing "/records"
    (let [response (app (mock/request :get "/records"))]
      (is (= (:status response) 200))))
  (testing "not-found route"
    (let [response (app (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))
