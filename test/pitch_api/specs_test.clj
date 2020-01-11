(ns pitch-api.specs-test
  (:require [clojure.test :refer :all]
            [pitch-api.spec :as specs]))

(deftest test-specs
  (testing "record spec evaluates ok"
    (let [record {:guess 12 :actual 13}]
      (is (= (specs/malformed? ::specs/record record ) nil)))))
