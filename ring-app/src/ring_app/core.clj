(ns ring-app.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.http-response :as response]
            [compojure.core :as compojure]
            [ring.middleware.reload :refer [wrap-reload]]))

(defn response-handler [request]
  (response/ok
    (str "<html><body> your IP is:"
         (:remote-addr request)
         "</body></html>")))

(def handler
  (compojure/routes
    (compojure/GET "/" request response-handler)
    (compojure/GET "/:id" [id] (str "<p>the id is: " id "</p>"))))

(defn -main []
  (jetty/run-jetty
    handler
    {:port 3000
     :join? false}))
