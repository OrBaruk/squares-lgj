// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('squares_lgj.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
squares_lgj.core.new_candy = (function squares_lgj$core$new_candy(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.rand.cljs$core$IFn$_invoke$arity$1((500)),cljs.core.cst$kw$y,cljs.core.rand.cljs$core$IFn$_invoke$arity$1((500))], null);
});
squares_lgj.core.new_enemy = (function squares_lgj$core$new_enemy(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,cljs.core.rand.cljs$core$IFn$_invoke$arity$1((500)),cljs.core.cst$kw$y,cljs.core.rand.cljs$core$IFn$_invoke$arity$1((500)),cljs.core.cst$kw$vx,((5) * cljs.core.rand.cljs$core$IFn$_invoke$arity$1((1))),cljs.core.cst$kw$vy,((5) * cljs.core.rand.cljs$core$IFn$_invoke$arity$1((1)))], null);
});
squares_lgj.core.setup = (function squares_lgj$core$setup(){
quil.core.frame_rate((30));

return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$player,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(50),cljs.core.cst$kw$y,(100),cljs.core.cst$kw$vx,(0),cljs.core.cst$kw$vy,(0)], null),cljs.core.cst$kw$enemies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$candy,squares_lgj.core.new_candy(),cljs.core.cst$kw$score,(0),cljs.core.cst$kw$lost,cljs.core.cst$kw$nothing], null);
});
squares_lgj.core.player_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(255),(0)], null);
squares_lgj.core.candy_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(255)], null);
squares_lgj.core.enemy_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(255),(0),(0)], null);
squares_lgj.core.draw_player = (function squares_lgj$core$draw_player(player){
var x = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(player);
var y = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(player);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,squares_lgj.core.player_color);

return quil.core.rect.cljs$core$IFn$_invoke$arity$4(x,y,(10),(10));
});
squares_lgj.core.draw_candy = (function squares_lgj$core$draw_candy(candy){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,squares_lgj.core.candy_color);

return quil.core.rect.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(candy),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(candy),(10),(10));
});
squares_lgj.core.collision_QMARK_ = (function squares_lgj$core$collision_QMARK_(a,b){
return (((((function (){var x__4006__auto__ = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(a);
var y__4007__auto__ = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})() - (function (){var x__4009__auto__ = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(a);
var y__4010__auto__ = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(b);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})()) < (10))) && ((((function (){var x__4006__auto__ = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(a);
var y__4007__auto__ = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})() - (function (){var x__4009__auto__ = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(a);
var y__4010__auto__ = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(b);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})()) < (10))));
});
squares_lgj.core.move_square = (function squares_lgj$core$move_square(enemy){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,cljs.core.mod((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(enemy) + cljs.core.cst$kw$vx.cljs$core$IFn$_invoke$arity$1(enemy)),(500)),cljs.core.cst$kw$y,cljs.core.mod((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(enemy) + cljs.core.cst$kw$vy.cljs$core$IFn$_invoke$arity$1(enemy)),(500)),cljs.core.cst$kw$vx,cljs.core.cst$kw$vx.cljs$core$IFn$_invoke$arity$1(enemy),cljs.core.cst$kw$vy,cljs.core.cst$kw$vy.cljs$core$IFn$_invoke$arity$1(enemy)], null);
});
squares_lgj.core.spawn_enemy = (function squares_lgj$core$spawn_enemy(status,enemies){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,cljs.core.cst$kw$enemy)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,cljs.core.cst$kw$candy)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(enemies,squares_lgj.core.new_enemy());
} else {
return enemies;

}
}
});
squares_lgj.core.update_state = (function squares_lgj$core$update_state(state){
var status = (cljs.core.truth_(squares_lgj.core.collision_QMARK_(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$candy.cljs$core$IFn$_invoke$arity$1(state)))?cljs.core.cst$kw$candy:(cljs.core.truth_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__6550_SHARP_,p2__6549_SHARP_){
var or__3922__auto__ = squares_lgj.core.collision_QMARK_(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state),p2__6549_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return p1__6550_SHARP_;
}
}),false,cljs.core.cst$kw$enemies.cljs$core$IFn$_invoke$arity$1(state)))?cljs.core.cst$kw$enemy:cljs.core.cst$kw$nothing
));
var $ = state;
var $__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$player], null),squares_lgj.core.move_square);
var $__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$enemies], null),((function ($,$__$1,status){
return (function (p1__6551_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(squares_lgj.core.move_square,p1__6551_SHARP_);
});})($,$__$1,status))
);
var $__$3 = cljs.core.assoc_in($__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$lost], null),status);
var $__$4 = cljs.core.assoc_in($__$3,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$candy], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,cljs.core.cst$kw$candy))?squares_lgj.core.new_candy():cljs.core.cst$kw$candy.cljs$core$IFn$_invoke$arity$1(state)));
var $__$5 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$score], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,cljs.core.cst$kw$candy))?cljs.core.inc:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,cljs.core.cst$kw$enemy))?((function ($,$__$1,$__$2,$__$3,$__$4,status){
return (function (a){
return (0);
});})($,$__$1,$__$2,$__$3,$__$4,status))
:cljs.core.identity
)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3($__$5,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$enemies], null),((function ($,$__$1,$__$2,$__$3,$__$4,$__$5,status){
return (function (p1__6552_SHARP_){
return squares_lgj.core.spawn_enemy(status,p1__6552_SHARP_);
});})($,$__$1,$__$2,$__$3,$__$4,$__$5,status))
);
});
squares_lgj.core.draw_enemy = (function squares_lgj$core$draw_enemy(enemy){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,squares_lgj.core.enemy_color);

return quil.core.rect.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(enemy),cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(enemy),(10),(10));
});
squares_lgj.core.draw_score = (function squares_lgj$core$draw_score(score){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(quil.core.fill,squares_lgj.core.enemy_color);

return quil.core.text_num.cljs$core$IFn$_invoke$arity$3(score,(255),(255));
});
squares_lgj.core.draw_state = (function squares_lgj$core$draw_state(state){
var pred__6553_6562 = cljs.core._EQ_;
var expr__6554_6563 = cljs.core.cst$kw$lost.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_((function (){var G__6556 = cljs.core.cst$kw$candy;
var G__6557 = expr__6554_6563;
return (pred__6553_6562.cljs$core$IFn$_invoke$arity$2 ? pred__6553_6562.cljs$core$IFn$_invoke$arity$2(G__6556,G__6557) : pred__6553_6562.call(null,G__6556,G__6557));
})())){
quil.core.background.cljs$core$IFn$_invoke$arity$3((0),(255),(255));
} else {
if(cljs.core.truth_((function (){var G__6558 = cljs.core.cst$kw$enemy;
var G__6559 = expr__6554_6563;
return (pred__6553_6562.cljs$core$IFn$_invoke$arity$2 ? pred__6553_6562.cljs$core$IFn$_invoke$arity$2(G__6558,G__6559) : pred__6553_6562.call(null,G__6558,G__6559));
})())){
quil.core.background.cljs$core$IFn$_invoke$arity$3((255),(255),(0));
} else {
if(cljs.core.truth_((function (){var G__6560 = cljs.core.cst$kw$nothing;
var G__6561 = expr__6554_6563;
return (pred__6553_6562.cljs$core$IFn$_invoke$arity$2 ? pred__6553_6562.cljs$core$IFn$_invoke$arity$2(G__6560,G__6561) : pred__6553_6562.call(null,G__6560,G__6561));
})())){
quil.core.background.cljs$core$IFn$_invoke$arity$3((245),(245),(245));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6554_6563)].join('')));
}
}
}

squares_lgj.core.draw_player(cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state));

squares_lgj.core.draw_candy(cljs.core.cst$kw$candy.cljs$core$IFn$_invoke$arity$1(state));

squares_lgj.core.draw_score(cljs.core.cst$kw$score.cljs$core$IFn$_invoke$arity$1(state));

return cljs.core.count(cljs.core.map.cljs$core$IFn$_invoke$arity$2(squares_lgj.core.draw_enemy,cljs.core.cst$kw$enemies.cljs$core$IFn$_invoke$arity$1(state)));
});
squares_lgj.core.on_key_down = (function squares_lgj$core$on_key_down(state,event){
var G__6564 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(event);
var G__6564__$1 = (((G__6564 instanceof cljs.core.Keyword))?G__6564.fqn:null);
switch (G__6564__$1) {
case "w":
case "up":
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$player,cljs.core.cst$kw$vy], null),(-5));

break;
case "s":
case "down":
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$player,cljs.core.cst$kw$vy], null),(5));

break;
case "a":
case "left":
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$player,cljs.core.cst$kw$vx], null),(-5));

break;
case "d":
case "right":
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$player,cljs.core.cst$kw$vx], null),(5));

break;
default:
return state;

}
});
squares_lgj.core.on_key_up = (function squares_lgj$core$on_key_up(state,event){
var G__6566 = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(event);
var G__6566__$1 = (((G__6566 instanceof cljs.core.Keyword))?G__6566.fqn:null);
switch (G__6566__$1) {
case "w":
case "up":
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$player,cljs.core.cst$kw$vy], null),(0));

break;
case "s":
case "down":
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$player,cljs.core.cst$kw$vy], null),(0));

break;
case "a":
case "left":
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$player,cljs.core.cst$kw$vx], null),(0));

break;
case "d":
case "right":
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$player,cljs.core.cst$kw$vx], null),(0));

break;
default:
return state;

}
});
squares_lgj.core.run_sketch = (function squares_lgj$core$run_sketch(){
squares_lgj.core.squares_lgj = (function squares_lgj$core$run_sketch_$_squares_lgj(){
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$host,"squares-lgj",cljs.core.cst$kw$update,((cljs.core.fn_QMARK_(squares_lgj.core.update_state))?(function() { 
var G__6568__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(squares_lgj.core.update_state,args);
};
var G__6568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6569__i = 0, G__6569__a = new Array(arguments.length -  0);
while (G__6569__i < G__6569__a.length) {G__6569__a[G__6569__i] = arguments[G__6569__i + 0]; ++G__6569__i;}
  args = new cljs.core.IndexedSeq(G__6569__a,0,null);
} 
return G__6568__delegate.call(this,args);};
G__6568.cljs$lang$maxFixedArity = 0;
G__6568.cljs$lang$applyTo = (function (arglist__6570){
var args = cljs.core.seq(arglist__6570);
return G__6568__delegate(args);
});
G__6568.cljs$core$IFn$_invoke$arity$variadic = G__6568__delegate;
return G__6568;
})()
:squares_lgj.core.update_state),cljs.core.cst$kw$size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),cljs.core.cst$kw$setup,((cljs.core.fn_QMARK_(squares_lgj.core.setup))?(function() { 
var G__6571__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(squares_lgj.core.setup,args);
};
var G__6571 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6572__i = 0, G__6572__a = new Array(arguments.length -  0);
while (G__6572__i < G__6572__a.length) {G__6572__a[G__6572__i] = arguments[G__6572__i + 0]; ++G__6572__i;}
  args = new cljs.core.IndexedSeq(G__6572__a,0,null);
} 
return G__6571__delegate.call(this,args);};
G__6571.cljs$lang$maxFixedArity = 0;
G__6571.cljs$lang$applyTo = (function (arglist__6573){
var args = cljs.core.seq(arglist__6573);
return G__6571__delegate(args);
});
G__6571.cljs$core$IFn$_invoke$arity$variadic = G__6571__delegate;
return G__6571;
})()
:squares_lgj.core.setup),cljs.core.cst$kw$middleware,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),cljs.core.cst$kw$key_DASH_pressed,((cljs.core.fn_QMARK_(squares_lgj.core.on_key_down))?(function() { 
var G__6574__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(squares_lgj.core.on_key_down,args);
};
var G__6574 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6575__i = 0, G__6575__a = new Array(arguments.length -  0);
while (G__6575__i < G__6575__a.length) {G__6575__a[G__6575__i] = arguments[G__6575__i + 0]; ++G__6575__i;}
  args = new cljs.core.IndexedSeq(G__6575__a,0,null);
} 
return G__6574__delegate.call(this,args);};
G__6574.cljs$lang$maxFixedArity = 0;
G__6574.cljs$lang$applyTo = (function (arglist__6576){
var args = cljs.core.seq(arglist__6576);
return G__6574__delegate(args);
});
G__6574.cljs$core$IFn$_invoke$arity$variadic = G__6574__delegate;
return G__6574;
})()
:squares_lgj.core.on_key_down),cljs.core.cst$kw$key_DASH_released,((cljs.core.fn_QMARK_(squares_lgj.core.on_key_up))?(function() { 
var G__6577__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(squares_lgj.core.on_key_up,args);
};
var G__6577 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6578__i = 0, G__6578__a = new Array(arguments.length -  0);
while (G__6578__i < G__6578__a.length) {G__6578__a[G__6578__i] = arguments[G__6578__i + 0]; ++G__6578__i;}
  args = new cljs.core.IndexedSeq(G__6578__a,0,null);
} 
return G__6577__delegate.call(this,args);};
G__6577.cljs$lang$maxFixedArity = 0;
G__6577.cljs$lang$applyTo = (function (arglist__6579){
var args = cljs.core.seq(arglist__6579);
return G__6577__delegate(args);
});
G__6577.cljs$core$IFn$_invoke$arity$variadic = G__6577__delegate;
return G__6577;
})()
:squares_lgj.core.on_key_up),cljs.core.cst$kw$draw,((cljs.core.fn_QMARK_(squares_lgj.core.draw_state))?(function() { 
var G__6580__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(squares_lgj.core.draw_state,args);
};
var G__6580 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__6581__i = 0, G__6581__a = new Array(arguments.length -  0);
while (G__6581__i < G__6581__a.length) {G__6581__a[G__6581__i] = arguments[G__6581__i + 0]; ++G__6581__i;}
  args = new cljs.core.IndexedSeq(G__6581__a,0,null);
} 
return G__6580__delegate.call(this,args);};
G__6580.cljs$lang$maxFixedArity = 0;
G__6580.cljs$lang$applyTo = (function (arglist__6582){
var args = cljs.core.seq(arglist__6582);
return G__6580__delegate(args);
});
G__6580.cljs$core$IFn$_invoke$arity$variadic = G__6580__delegate;
return G__6580;
})()
:squares_lgj.core.draw_state)], 0));
});
goog.exportSymbol('squares_lgj.core.squares_lgj', squares_lgj.core.squares_lgj);

if(cljs.core.truth_(cljs.core.some((function (p1__5536__5537__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$no_DASH_start,p1__5536__5537__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,squares_lgj.core.squares_lgj,cljs.core.cst$kw$host_DASH_id,"squares-lgj"], null));
}
});
goog.exportSymbol('squares_lgj.core.run_sketch', squares_lgj.core.run_sketch);
