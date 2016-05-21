(ns integrativo-xlsowl.core
  (:require [clojure.java.io :as io])
  (:require [dk.ative.docjure.spreadsheet :as xls])
  (:require [clojure.string :as str])
  (:require [clojure.math.combinatorics :as combo]))

;; (def xlsfile "/home/eudes/Downloads/Data_and_Generatorv13.xlsm")
(def xls-file "/home/eudes/wars/integrativo-xlsowl/resources/Data_and_Generatorv13.xlsm")

(def column-key-map 
  {"Protein" :protein-name
   "Gene" :gene-name
   "Organism" :organism
   "Org" :organism
   "BioProcess" :biological_process
   "BiologicalProcess" :biological_process
   "MolecularFunction" :molecular-function
   "MolFunc" :molecular-function
   "CellComponent" :cell-component
   "Comp" :cell-component})



(defn split-data-values [data-list]
  (map (fn [data-item]
         (for [entry-key (keys data-item)
               :let [splited-value (str/split (entry-key data-item) #";")]]
           (map (partial hash-map entry-key) splited-value)))
       data-list))

(defn combine-data-values [data-list]
  (map (fn [data-item]
         (apply combo/cartesian-product data-item))
       data-list))

(defn combine-final-data [workbook]

  (let [initial-time-millis (System/currentTimeMillis)        
        final-data (->> (xls/select-sheet "final-data" workbook)
                        (xls/select-columns {:C :protein-name 
                                             :D :gene-name
                                             :E :organism
                                             :F :biological-process
                                             :G :molecular-function
                                             :H :cell-component
                                             :L :description}))
        ;; sub-final-data (subvec final-data 7 52)
        ;; sub-final-data-splited (combine-data-values sub-final-data)
]

    (-> final-data
        (subvec 7 52)
        split-data-values
        combine-data-values)))


(combine-final-data (xls/load-workbook xls-file))

;; sub-owl-elements2 (subvec owl-elements2 29 107)
;; owl-elements2 (->> (xls/select-sheet "owl-elements2" workbook)
;;                    (xls/select-columns {:A :id
;;                                         :B :owl-axiom}))

(defn -main
  "Application Entry Point"
  [xlsfile]

  (if (.exists (io/file xlsfile))
    (import-file xlsfile)
    (println "File does not exists!")))
