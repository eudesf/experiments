(ns integrativo-xlsowl.core
  (:require [clojure.java.io :as io])
  (:require [dk.ative.docjure.spreadsheet :as xls])
  (:require [clojure.string :as str])
  (:require [clojure.math.combinatorics :as combo])
  (:require [cprop.core :refer [load-config]]))

(def conf (load-config))

(def expandmap 
  {:protein-name ["Protein"]
   :gene-name ["Gene"]
   :organism ["Organism" "Org"]
   :biological-process ["BioProcess" "BiologicalProcess"]
   :molecular-function ["MolecularFunction" "MolFunc"]
   :cell-component ["CellComponent" "Comp"]
   :phenotype ["Situation"]
   :molecule ["Molecule"]})

(def literal-expandmap 
  {:molecule "Homocysteine"})

(defn add-literals [data-list]
  (map (partial merge literal-expandmap) data-list))

(defn split-data-values [data-list]
  (map (fn [data-item]
         (for [entry-key (keys data-item)
               :let [splited-value (str/split (str (entry-key data-item)) #";")]]
           (map (partial hash-map entry-key) splited-value)))
       data-list))

(defn combine-data-values [data-list]
  (map (fn [data-item]
         (apply combo/cartesian-product data-item))
       data-list))

(defn remove-empties [datamap-list]
  (filter (fn [datamap] (not-any? #(or (nil? %) (= "" %)) (vals datamap))) datamap-list))

(defn combine-final-data [workbook]
  (let [final-data (->> (xls/select-sheet 
                         (get-in conf [:final-data :tab-name] "final-data") 
                         workbook)
                        (xls/select-columns {:C :protein-name 
                                             :D :gene-name
                                             :E :organism
                                             :F :biological-process
                                             :G :molecular-function
                                             :H :cell-component
                                             :M :phenotype}))]

    (-> final-data
        (subvec 
         (get-in conf [:final-data :begin-line] 7) 
         (inc (get-in conf [:final-data :end-line] 52)))
        remove-empties
        add-literals
        split-data-values
        combine-data-values
)))

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

(defn expand-model [workbook datamap-result]
  (let [modelmap-all (->> (xls/select-sheet 
                           (get-in conf [:owl-elements :tab-name] "owl-elements2") workbook)
                           (xls/select-columns {:B :owl-axiom}))
        modelmap-body (subvec modelmap-all 
                              (get-in conf [:owl-elements :body :begin-line] 29) 
                              (inc (get-in conf [:owl-elements :body :end-line] 107)))
        modelmap-heading (subvec modelmap-all 
                              (get-in conf [:owl-elements :heading :begin-line] 1)
                              (inc (get-in conf [:owl-elements :heading :end-line] 29)))
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

(defn write-result! [result]
  (with-open [wtr (clojure.java.io/writer "result.owl")]
    (binding [*out* wtr]
      (doseq [result-item result]
        (apply println result-item))
      (println "\n</Ontology>"))))

(defn remove-duplicates [result]
  (cons (first result) (set (rest result))))

(defn -main []
  (let [wb (xls/load-workbook 
            (get conf :xls-file "resources/Data_and_Generatorv13.xlsm"))]
    (->> 
     (combine-final-data wb)   
     (expand-model wb)         
     remove-duplicates
     write-result!
     )))
