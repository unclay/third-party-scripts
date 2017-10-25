/*!
 * Third Party Scripts v0.1.0 (https://github.com/unclay/third-party-scripts)
 * Clone at 2017-10-25 16:51:00
 * Clone from http://bdimg.share.baidu.com/static/api/js/share/share_api.js
 */
window._bd_share_main.F.module("share/share_api",function(e,t,n){var r=e("base/tangram").T,i=e("base/class").Class,s=e("component/comm_tools"),o=e("share/api_base");t.Api=i.create(function(e){function r(t){window._bd_share_main.F.use("trans/data",function(n){n.get({type:"share_count",url:e.bdUrl||s.getPageUrl(),callback:function(e,n){var r={count:e,display:n};t&&t(r)}})})}var t=this,n={count:0,clicked:!1};t._init=function(){var e=t.getView();e.render(),e.on("getsharecount",function(){r(function(t){n.count=t.count,e.setNumber(t.count,t.display)})}),e.init()},t._processAction=function(e){return{data:{type:"share"}}}},o.ApiBase)});