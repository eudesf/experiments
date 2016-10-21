// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__10364){
var map__10389 = p__10364;
var map__10389__$1 = ((((!((map__10389 == null)))?((((map__10389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10389):map__10389);
var m = map__10389__$1;
var n = cljs.core.get.call(null,map__10389__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__10389__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10391_10413 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10392_10414 = null;
var count__10393_10415 = (0);
var i__10394_10416 = (0);
while(true){
if((i__10394_10416 < count__10393_10415)){
var f_10417 = cljs.core._nth.call(null,chunk__10392_10414,i__10394_10416);
cljs.core.println.call(null,"  ",f_10417);

var G__10418 = seq__10391_10413;
var G__10419 = chunk__10392_10414;
var G__10420 = count__10393_10415;
var G__10421 = (i__10394_10416 + (1));
seq__10391_10413 = G__10418;
chunk__10392_10414 = G__10419;
count__10393_10415 = G__10420;
i__10394_10416 = G__10421;
continue;
} else {
var temp__4657__auto___10422 = cljs.core.seq.call(null,seq__10391_10413);
if(temp__4657__auto___10422){
var seq__10391_10423__$1 = temp__4657__auto___10422;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10391_10423__$1)){
var c__3675__auto___10424 = cljs.core.chunk_first.call(null,seq__10391_10423__$1);
var G__10425 = cljs.core.chunk_rest.call(null,seq__10391_10423__$1);
var G__10426 = c__3675__auto___10424;
var G__10427 = cljs.core.count.call(null,c__3675__auto___10424);
var G__10428 = (0);
seq__10391_10413 = G__10425;
chunk__10392_10414 = G__10426;
count__10393_10415 = G__10427;
i__10394_10416 = G__10428;
continue;
} else {
var f_10429 = cljs.core.first.call(null,seq__10391_10423__$1);
cljs.core.println.call(null,"  ",f_10429);

var G__10430 = cljs.core.next.call(null,seq__10391_10423__$1);
var G__10431 = null;
var G__10432 = (0);
var G__10433 = (0);
seq__10391_10413 = G__10430;
chunk__10392_10414 = G__10431;
count__10393_10415 = G__10432;
i__10394_10416 = G__10433;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10434 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3289__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3289__auto__)){
return or__3289__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10434);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10434)))?cljs.core.second.call(null,arglists_10434):arglists_10434));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10395_10435 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10396_10436 = null;
var count__10397_10437 = (0);
var i__10398_10438 = (0);
while(true){
if((i__10398_10438 < count__10397_10437)){
var vec__10399_10439 = cljs.core._nth.call(null,chunk__10396_10436,i__10398_10438);
var name_10440 = cljs.core.nth.call(null,vec__10399_10439,(0),null);
var map__10402_10441 = cljs.core.nth.call(null,vec__10399_10439,(1),null);
var map__10402_10442__$1 = ((((!((map__10402_10441 == null)))?((((map__10402_10441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10402_10441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10402_10441):map__10402_10441);
var doc_10443 = cljs.core.get.call(null,map__10402_10442__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10444 = cljs.core.get.call(null,map__10402_10442__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10440);

cljs.core.println.call(null," ",arglists_10444);

if(cljs.core.truth_(doc_10443)){
cljs.core.println.call(null," ",doc_10443);
} else {
}

var G__10445 = seq__10395_10435;
var G__10446 = chunk__10396_10436;
var G__10447 = count__10397_10437;
var G__10448 = (i__10398_10438 + (1));
seq__10395_10435 = G__10445;
chunk__10396_10436 = G__10446;
count__10397_10437 = G__10447;
i__10398_10438 = G__10448;
continue;
} else {
var temp__4657__auto___10449 = cljs.core.seq.call(null,seq__10395_10435);
if(temp__4657__auto___10449){
var seq__10395_10450__$1 = temp__4657__auto___10449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10395_10450__$1)){
var c__3675__auto___10451 = cljs.core.chunk_first.call(null,seq__10395_10450__$1);
var G__10452 = cljs.core.chunk_rest.call(null,seq__10395_10450__$1);
var G__10453 = c__3675__auto___10451;
var G__10454 = cljs.core.count.call(null,c__3675__auto___10451);
var G__10455 = (0);
seq__10395_10435 = G__10452;
chunk__10396_10436 = G__10453;
count__10397_10437 = G__10454;
i__10398_10438 = G__10455;
continue;
} else {
var vec__10404_10456 = cljs.core.first.call(null,seq__10395_10450__$1);
var name_10457 = cljs.core.nth.call(null,vec__10404_10456,(0),null);
var map__10407_10458 = cljs.core.nth.call(null,vec__10404_10456,(1),null);
var map__10407_10459__$1 = ((((!((map__10407_10458 == null)))?((((map__10407_10458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10407_10458.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10407_10458):map__10407_10458);
var doc_10460 = cljs.core.get.call(null,map__10407_10459__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_10461 = cljs.core.get.call(null,map__10407_10459__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_10457);

cljs.core.println.call(null," ",arglists_10461);

if(cljs.core.truth_(doc_10460)){
cljs.core.println.call(null," ",doc_10460);
} else {
}

var G__10462 = cljs.core.next.call(null,seq__10395_10450__$1);
var G__10463 = null;
var G__10464 = (0);
var G__10465 = (0);
seq__10395_10435 = G__10462;
chunk__10396_10436 = G__10463;
count__10397_10437 = G__10464;
i__10398_10438 = G__10465;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__10409 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__10410 = null;
var count__10411 = (0);
var i__10412 = (0);
while(true){
if((i__10412 < count__10411)){
var role = cljs.core._nth.call(null,chunk__10410,i__10412);
var temp__4657__auto___10466__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10466__$1)){
var spec_10467 = temp__4657__auto___10466__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10467));
} else {
}

var G__10468 = seq__10409;
var G__10469 = chunk__10410;
var G__10470 = count__10411;
var G__10471 = (i__10412 + (1));
seq__10409 = G__10468;
chunk__10410 = G__10469;
count__10411 = G__10470;
i__10412 = G__10471;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__10409);
if(temp__4657__auto____$1){
var seq__10409__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10409__$1)){
var c__3675__auto__ = cljs.core.chunk_first.call(null,seq__10409__$1);
var G__10472 = cljs.core.chunk_rest.call(null,seq__10409__$1);
var G__10473 = c__3675__auto__;
var G__10474 = cljs.core.count.call(null,c__3675__auto__);
var G__10475 = (0);
seq__10409 = G__10472;
chunk__10410 = G__10473;
count__10411 = G__10474;
i__10412 = G__10475;
continue;
} else {
var role = cljs.core.first.call(null,seq__10409__$1);
var temp__4657__auto___10476__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___10476__$2)){
var spec_10477 = temp__4657__auto___10476__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_10477));
} else {
}

var G__10478 = cljs.core.next.call(null,seq__10409__$1);
var G__10479 = null;
var G__10480 = (0);
var G__10481 = (0);
seq__10409 = G__10478;
chunk__10410 = G__10479;
count__10411 = G__10480;
i__10412 = G__10481;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map