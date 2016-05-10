(ns integrativo-xlsowl.core
  (:require [clojure.java.io :as io])
  (:require [dk.ative.docjure.spreadsheet :as xls])
  (:require [clojure.string :as str]))

;; (def xlsfile "/home/eudes/Downloads/Data_and_Generatorv13.xlsm")

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

(defn derived-rows [wb rows]
  
  ;; (map (fn [x] (clojure.string/split x #";")) rows)
)

(defn import-file [xlsfile]

  (let [initial-time-millis (System/currentTimeMillis)
        wb (xls/load-workbook xlsfile)
        final-data (->> (xls/select-sheet "final-data" wb)
                        (xls/select-columns {:C :protein-name 
                                             :D :gene-name
                                             :E :organism
                                             :F :biological-process
                                             :G :molecular-function
                                             :H :cell-component
                                             :L :description}))
        owl-elements2 (->> (xls/select-sheet "owl-elements2" wb)
                           (xls/select-columns {:A :id
                                                :B :owl-axiom}))
        sub-final-data (subvec final-data 7 8; 52
                               )
        sub-owl-elements2 (subvec owl-elements2 29 107)
        ] 

    (derived-rows wb sub-final-data)
    ;; (println sub-final-data)

))

(import-file xlsfile)


(defn -main
  "Application Entry Point"
  [xlsfile]

  (if (.exists (io/file xlsfile))
    (import-file xlsfile)
    (println "File does not exists!")))
)
