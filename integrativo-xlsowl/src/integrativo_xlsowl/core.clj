(ns integrativo-xlsowl.core
  (:require [clojure.java.io :as io])
  (:require [dk.ative.docjure.spreadsheet :as xls])
  (:require [clojure.string :as str])
  (:require [clojure.math.combinatorics :as combo]))

;; (def xls-file "/home/eudes/wars/integrativo-xlsowl/resources/Data_and_Generatorv13.xlsm")

(def expandmap 
  {:protein-name ["Protein"]
   :gene-name ["Gene"]
   :organism ["Organism" "Org"]
   :biological-process ["BioProcess" "BiologicalProcess"]
   :molecular-function ["MolecularFunction" "MolFunc"]
   :cell-component ["CellComponent" "Comp"]
   :description ["Situation"]
   :molecule ["Molecule"]})

(def literal-expandmap 
  {:molecule "Homocysteine"})

(defn add-literals [data-list]
  (map (partial merge literal-expandmap) data-list))

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
  (let [final-data (->> (xls/select-sheet "final-data" workbook)
                        (xls/select-columns {:C :protein-name 
                                             :D :gene-name
                                             :E :organism
                                             :F :biological-process
                                             :G :molecular-function
                                             :H :cell-component
                                             :L :description}))]

    (-> final-data
        (subvec 7 52)
        (add-literals)
        split-data-values
        combine-data-values
)))

(defn expand-model [workbook datamap-result]
  (let [modelmap-all (->> (xls/select-sheet "owl-elements2" workbook)
                           (xls/select-columns {:B :owl-axiom}))
        modelmap-body (subvec modelmap-all 29 107)
        modelmap-heading (subvec modelmap-all 1 29)
        model-heading (map :owl-axiom modelmap-heading)]

    (cons [(str/join "\n" model-heading)
           "\n\n<!--==== END OF HEADING ====-->\n"] 
          (for [datamap-list datamap-result
                datamap-item datamap-list
                modelmap modelmap-body
                :let [result []]]
            
            (->> (reduce merge datamap-item)
                 (expand-model-item modelmap)
                 (conj result))))))


(defn expand-model-item [modelmap datamap]
  (reduce (fn [axiom-str datamap-key]
            (reduce (fn [axiom-str column]
                      (str/replace axiom-str
                                   (re-pattern (str "\\$" column "\\$"))
                                   (str/replace (datamap-key datamap) #"[^\w\d]" "_")))
                    axiom-str
                    (datamap-key expandmap)))
          
          (:owl-axiom modelmap)
          (keys datamap)))


/(defn write-result! [result]
  (with-open [wtr (clojure.java.io/writer "result.owl")]
    (binding [*out* wtr]
      (doseq [result-item result]
        (apply println result-item))
      (println "\n</Ontology>"))))

(defn remove-duplicates [result]
  (cons (first result) (set (rest result))))

(defn -main []
  (let [wb (xls/load-workbook xls-file)]
    (->> 
     ;; combine all final data values
     (combine-final-data wb)   
     
     ;; expand the varibles in the model with the final data
     (expand-model wb)         

     remove-duplicates

     ;; write to file
     write-result!
     )))
