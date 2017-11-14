/*!
 * Third Party Scripts v0.1.0 (https://github.com/unclay/third-party-scripts)
 * Clone at 2017-10-25 17:22:23
 * Clone from http://bdimg.share.baidu.com/static/api/js/share/slide_api.js
 */
window._bd_share_main.F.module("share/slide_api",function(e,t,n){var r=e("base/tangram").T,i=e("base/class").Class,s=e("share/api_base");t.Api=i.create(function(e){var t=this;t._init=function(){var e=t.getView();e.render(),e.init()},t._slidePop=function(t,n){t._popupBox=n.boxEle,t._getPosition=function(){return{top:0,left:e.bdPos=="left"?0:n.element.width()}},t.show(n,e)},t._processAction=function(e){return{data:{type:"share"}}},t._distory=function(){}},s.ApiBase)});