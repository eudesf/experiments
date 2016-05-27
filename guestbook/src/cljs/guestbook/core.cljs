(ns guestbook.core
  (:require [reagent.core :as reagent :refer [atom]]))

(-> (.getElementById js/document "content")
    (.-innerHTML)
    (set! "Hello World!"))

(defn home []
  [:h2 "Hello Reagent"])

(reagent/render [home]
 (.getElementById js/document "content"))

