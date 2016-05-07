(ns ring-app.core
  (:require [ring.adapter.jetty :as jetty]
            [ring.util.http-response :as response]
            [compojure.core :as compojure]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.format :refer [wrap-restful-format]]))

(defn response-handler [request]
  (response/ok
    (str "<html><body> your IP is:"
         (:remote-addr request)
         "</body></html>")))

(defn wrap-formats [handler]
  (wrap-restful-format
   handler
   {:formats [:json-kw :transit-json :transit-msgpack]}))

(def handler
  (compojure/routes
    (compojure/GET "/" request response-handler)
    (compojure/GET "/test" [] (response/ok {:test 11}))
    (compojure/GET "/:id" [id] (str "<p>the id is: " id "</p>"))
    (compojure/POST "/json" [id] (response/ok {:result id}))
    ))
 
(defn -main []
  (jetty/run-jetty
   (-> #'handler
       wrap-formats
       wrap-reload)
    {:port 3000
     :join? false}))
