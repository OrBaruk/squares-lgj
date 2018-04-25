// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
Processing.disableInit();
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$java2d,(Processing.prototype.PConstants["JAVA2D"]),cljs.core.cst$kw$p2d,(Processing.prototype.PConstants["P2D"]),cljs.core.cst$kw$p3d,(Processing.prototype.PConstants["P3D"]),cljs.core.cst$kw$opengl,(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes);
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var el = applet.quil_canvas;
el.setAttribute("width",width);

el.setAttribute("height",height);

applet.width = window.parseInt(goog.style.getComputedStyle(el,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(el,"height"));
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__5546 = arguments.length;
switch (G__5546) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet().size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet().size((width | (0)),(height | (0)),quil.util.resolve_constant_key(mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__5548 = cljs.core.seq(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$keyPressed,cljs.core.cst$kw$mouseOut,cljs.core.cst$kw$mouseScrolled,cljs.core.cst$kw$mouseDragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$keyReleased,cljs.core.cst$kw$mouseClicked,cljs.core.cst$kw$mouseReleased,cljs.core.cst$kw$mousePressed,cljs.core.cst$kw$mouseMoved,cljs.core.cst$kw$mouseOver,cljs.core.cst$kw$keyTyped,cljs.core.cst$kw$draw],[cljs.core.cst$kw$key_DASH_pressed,cljs.core.cst$kw$mouse_DASH_exited,cljs.core.cst$kw$mouse_DASH_wheel,cljs.core.cst$kw$mouse_DASH_dragged,cljs.core.cst$kw$setup,cljs.core.cst$kw$key_DASH_released,cljs.core.cst$kw$mouse_DASH_clicked,cljs.core.cst$kw$mouse_DASH_released,cljs.core.cst$kw$mouse_DASH_pressed,cljs.core.cst$kw$mouse_DASH_moved,cljs.core.cst$kw$mouse_DASH_entered,cljs.core.cst$kw$key_DASH_typed,cljs.core.cst$kw$draw]));
var chunk__5549 = null;
var count__5550 = (0);
var i__5551 = (0);
while(true){
if((i__5551 < count__5550)){
var vec__5552 = chunk__5549.cljs$core$IIndexed$_nth$arity$2(null,i__5551);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5552,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5552,(1),null);
var temp__5457__auto___5560 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5457__auto___5560)){
var handler_5561 = temp__5457__auto___5560;
(prc[cljs.core.name(processing_name)] = ((function (seq__5548,chunk__5549,count__5550,i__5551,handler_5561,temp__5457__auto___5560,vec__5552,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_5555 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_5561.cljs$core$IFn$_invoke$arity$0 ? handler_5561.cljs$core$IFn$_invoke$arity$0() : handler_5561.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_5555;
}});})(seq__5548,chunk__5549,count__5550,i__5551,handler_5561,temp__5457__auto___5560,vec__5552,processing_name,quil_name))
);
} else {
}


var G__5562 = seq__5548;
var G__5563 = chunk__5549;
var G__5564 = count__5550;
var G__5565 = (i__5551 + (1));
seq__5548 = G__5562;
chunk__5549 = G__5563;
count__5550 = G__5564;
i__5551 = G__5565;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__5548);
if(temp__5457__auto__){
var seq__5548__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__5548__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__5548__$1);
var G__5566 = cljs.core.chunk_rest(seq__5548__$1);
var G__5567 = c__4319__auto__;
var G__5568 = cljs.core.count(c__4319__auto__);
var G__5569 = (0);
seq__5548 = G__5566;
chunk__5549 = G__5567;
count__5550 = G__5568;
i__5551 = G__5569;
continue;
} else {
var vec__5556 = cljs.core.first(seq__5548__$1);
var processing_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5556,(0),null);
var quil_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5556,(1),null);
var temp__5457__auto___5570__$1 = (opts.cljs$core$IFn$_invoke$arity$1 ? opts.cljs$core$IFn$_invoke$arity$1(quil_name) : opts.call(null,quil_name));
if(cljs.core.truth_(temp__5457__auto___5570__$1)){
var handler_5571 = temp__5457__auto___5570__$1;
(prc[cljs.core.name(processing_name)] = ((function (seq__5548,chunk__5549,count__5550,i__5551,handler_5571,temp__5457__auto___5570__$1,vec__5556,processing_name,quil_name,seq__5548__$1,temp__5457__auto__){
return (function (){
var _STAR_applet_STAR_5559 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return (handler_5571.cljs$core$IFn$_invoke$arity$0 ? handler_5571.cljs$core$IFn$_invoke$arity$0() : handler_5571.call(null));
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_5559;
}});})(seq__5548,chunk__5549,count__5550,i__5551,handler_5571,temp__5457__auto___5570__$1,vec__5556,processing_name,quil_name,seq__5548__$1,temp__5457__auto__))
);
} else {
}


var G__5572 = cljs.core.next(seq__5548__$1);
var G__5573 = null;
var G__5574 = (0);
var G__5575 = (0);
seq__5548 = G__5572;
chunk__5549 = G__5573;
count__5550 = G__5574;
i__5551 = G__5575;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (){var G__5578 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.comp,cljs.core.cons(quil.middlewares.deprecated_options.deprecated_options,cljs.core.cst$kw$middleware.cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)));
var fexpr__5577 = ((function (G__5578){
return (function (p1__5576_SHARP_){
return (p1__5576_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__5576_SHARP_.cljs$core$IFn$_invoke$arity$1(options) : p1__5576_SHARP_.call(null,options));
});})(G__5578))
;
return fexpr__5577(G__5578);
})()], 0));
var sketch_size = (function (){var or__3922__auto__ = cljs.core.cst$kw$size.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set(cljs.core.cst$kw$features.cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.sketch.size,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__5579_5583 = cljs.core.cst$kw$settings.cljs$core$IFn$_invoke$arity$1(opts);
(fexpr__5579_5583.cljs$core$IFn$_invoke$arity$0 ? fexpr__5579_5583.cljs$core$IFn$_invoke$arity$0() : fexpr__5579_5583.call(null));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts))){
var fexpr__5580 = cljs.core.cst$kw$setup.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__5580.cljs$core$IFn$_invoke$arity$0 ? fexpr__5580.cljs$core$IFn$_invoke$arity$0() : fexpr__5580.call(null));
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
var G__5582 = ((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll);
var fexpr__5581 = cljs.core.cst$kw$mouse_DASH_wheel.cljs$core$IFn$_invoke$arity$1(opts);
return (fexpr__5581.cljs$core$IFn$_invoke$arity$1 ? fexpr__5581.cljs$core$IFn$_invoke$arity$1(G__5582) : fexpr__5581.call(null,G__5582));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$setup,setup,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$mouse_DASH_wheel,mouse_wheel], 0));
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers(prc,opts__$1);

prc.quil = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);

return prc.target_frame_rate = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((60));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_(features,cljs.core.cst$kw$global_DASH_key_DASH_events)){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5457__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5457__auto__)){
var proc_obj = temp__5457__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4502__auto__ = [];
var len__4499__auto___5586 = arguments.length;
var i__4500__auto___5587 = (0);
while(true){
if((i__4500__auto___5587 < len__4499__auto___5586)){
args__4502__auto__.push((arguments[i__4500__auto___5587]));

var G__5588 = (i__4500__auto___5587 + (1));
i__4500__auto___5587 = G__5588;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var host_elem = (function (){var G__5585 = cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map);
return goog.dom.getElement(G__5585);
})();
var renderer = (function (){var or__3922__auto__ = cljs.core.cst$kw$renderer.cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.cst$kw$p2d;
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch(host_elem);

var proc_obj = (new Processing(host_elem,quil.sketch.make_sketch(opts_map)));
host_elem.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem;

return proc_obj;
} else {
return console.error((cljs.core.truth_(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$host.cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq5584){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq5584));
});

quil.sketch.sketch_init_list = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__5595 = quil.sketch.empty_body_QMARK_();
var seq__5589_5596 = cljs.core.seq(cljs.core.deref(quil.sketch.sketch_init_list));
var chunk__5590_5597 = null;
var count__5591_5598 = (0);
var i__5592_5599 = (0);
while(true){
if((i__5592_5599 < count__5591_5598)){
var sk_5600 = chunk__5590_5597.cljs$core$IIndexed$_nth$arity$2(null,i__5592_5599);
if(cljs.core.truth_(add_elem_QMARK__5595)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_5600));
} else {
}

var fexpr__5593_5601 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_5600);
(fexpr__5593_5601.cljs$core$IFn$_invoke$arity$0 ? fexpr__5593_5601.cljs$core$IFn$_invoke$arity$0() : fexpr__5593_5601.call(null));


var G__5602 = seq__5589_5596;
var G__5603 = chunk__5590_5597;
var G__5604 = count__5591_5598;
var G__5605 = (i__5592_5599 + (1));
seq__5589_5596 = G__5602;
chunk__5590_5597 = G__5603;
count__5591_5598 = G__5604;
i__5592_5599 = G__5605;
continue;
} else {
var temp__5457__auto___5606 = cljs.core.seq(seq__5589_5596);
if(temp__5457__auto___5606){
var seq__5589_5607__$1 = temp__5457__auto___5606;
if(cljs.core.chunked_seq_QMARK_(seq__5589_5607__$1)){
var c__4319__auto___5608 = cljs.core.chunk_first(seq__5589_5607__$1);
var G__5609 = cljs.core.chunk_rest(seq__5589_5607__$1);
var G__5610 = c__4319__auto___5608;
var G__5611 = cljs.core.count(c__4319__auto___5608);
var G__5612 = (0);
seq__5589_5596 = G__5609;
chunk__5590_5597 = G__5610;
count__5591_5598 = G__5611;
i__5592_5599 = G__5612;
continue;
} else {
var sk_5613 = cljs.core.first(seq__5589_5607__$1);
if(cljs.core.truth_(add_elem_QMARK__5595)){
quil.sketch.add_canvas(cljs.core.cst$kw$host_DASH_id.cljs$core$IFn$_invoke$arity$1(sk_5613));
} else {
}

var fexpr__5594_5614 = cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(sk_5613);
(fexpr__5594_5614.cljs$core$IFn$_invoke$arity$0 ? fexpr__5594_5614.cljs$core$IFn$_invoke$arity$0() : fexpr__5594_5614.call(null));


var G__5615 = cljs.core.next(seq__5589_5607__$1);
var G__5616 = null;
var G__5617 = (0);
var G__5618 = (0);
seq__5589_5596 = G__5615;
chunk__5590_5597 = G__5616;
count__5591_5598 = G__5617;
i__5592_5599 = G__5618;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")){
return quil.sketch.init_sketches();
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);
