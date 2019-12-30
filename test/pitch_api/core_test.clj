(ns pitch-api.core-test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [pitch-api.core :refer :all]))

(deftest test-records
  (testing "/api/records"
    (let [response (app (mock/request :get "/api/records"))]
      (is (= (:status response) 200))))
  (testing "not-found route"
    (let [response (app (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))
