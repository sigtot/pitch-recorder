(defproject hello-api "1.0.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/java.jdbc "0.7.11"]
                 [org.clojure/data.json "0.2.7"]
                 [org.postgresql/postgresql "42.1.4"]
                 [metosin/ring-swagger "0.26.2"]
                 [ring/ring-core "1.6.3"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [ring/ring-defaults "0.3.2"]
                 [ring-cors "0.1.13"]
                 [ring/ring-json "0.5.0"]
                 [metosin/muuntaja "0.6.4"]
                 [compojure "1.6.1"]]
  :plugins [[lein-ring "0.12.5"]]
  :ring {:handler hello-api.core/app}
  :repl-options {:init-ns hello-api.core}
  :profiles
  {:dev {:dependencies [[ring/ring-mock "0.3.2"]]}}
  :jvm-opts ["-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5010"])

