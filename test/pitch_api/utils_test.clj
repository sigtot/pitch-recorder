(ns pitch-api.utils-test
  (:require [clojure.test :refer :all]
            [pitch-api.utils :refer :all]))


(deftest test-utils
  (testing "json converts to keyworded clojure map ok"
    (let [converted (json-to-map {"guess" 12 "actual" 13})]
      (is (= converted {:guess 12 :actual 13})))))
