// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs_first_project.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
if(typeof cljs_first_project.core.conn !== 'undefined'){
} else {
cljs_first_project.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
alert("Hello World");

//# sourceMappingURL=core.js.map