/*!
 * Third Party Scripts v0.1.0 (https://github.com/unclay/third-party-scripts)
 * Clone at 2017-10-25 16:53:56
 * Clone from http://bdimg.share.baidu.com/static/api/js/trans/data.js
 */
window._bd_share_main.F.module("trans/data",function(e,t){var n=e("base/tangram").T,r=function(){var e=[];return function(t,r,i){t in e?e[t].data?r&&r(e[t].data):e[t].fun.push(r):(e[t]={fun:[r]},n.sio(t).callByServer(function(r){r&&(r.err===0||r.errno===0)&&(n.array(e[t].fun).each(function(e,t){t&&t(r)}),e[t]={data:r})},i))}}(),i=function(e){var t="http://like.baidu.com/get?"+n.ajax.param({url:e.url});r(t,function(t){e&&e.callback&&e.callback(t.count)},{charset:"utf-8",queryField:"cb"})},s=function(e){var t="http://api.share.baidu.com/getnum?"+n.ajax.param({url:e.url});r(t,function(t){e&&e.callback&&e.callback(t.num[0],t.num[1])},{charset:"utf-8"})},o=function(e){switch(e.type){case"like_count":i(e);break;case"share_count":s(e)}};t.get=o});