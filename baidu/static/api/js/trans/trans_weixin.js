/*!
 * Third Party Scripts v0.1.0 (https://github.com/unclay/third-party-scripts)
 * Clone at 2017-10-25 16:53:56
 * Clone from http://bdimg.share.baidu.com/static/api/js/trans/trans_weixin.js
 */
window._bd_share_main.F.module("trans/trans_weixin",function(e,t){var n="bdshare_weixin_qrcode_dialog",r="",i=0,s,o,u,a={},f=e("base/tangram").T,l=e("conf/const").URLS,c=function(e){var t=Math.round(200/e.length);t=t<2?2:t,i=t*e.length;var n='<table style="direction:ltr;border: 0; width:'+i+'px; border-collapse: collapse;background-color:#fff;margin:0 auto;" align="center">',r=[n],s="";return f.each(e,function(e,n){r.push("<tr>"),f.each(n,function(e,n){s='<td style="width:'+t+"px;height:"+t+"px;padding:0;margin:0;border:none;background:#"+(n?"000":"FFF")+'"></td>',r.push(s)})}),r.push("</table>"),r.join("")},h=function(e,t){window._bd_share_main.F.use("component/qrcode",function(t){var n=t.QRCode,r=t.QRErrorCorrectLevel,o=new n(-1,r.L);o.addData(e),o.make();var a=c(o.modules),l=f(a).appendTo(u.empty());v(i),y(),s.attr("data-url",e)})},p=function(e,t){var n=l.shortUrl+"?"+f.ajax.param({url:e});f.sio(n).callByServer(function(n){if(n&&n.error==0)t(n.data.short_url);else{var r=e;h(r,!0)}})},d=function(){s.attr("data-url")!=r&&(u.html("\u6b63\u5728\u52a0\u8f7d"),r.length>200?p(r,function(e){h(e,!0)}):h(r))},v=function(e){var t=(e>220?e:220)+20,n=f(".bd_weixin_popup_foot").height()+f(".bd_weixin_popup_head").height()+e+30;s.css({width:t,height:n})},m=function(){s=f("#"+n),o=f("#"+n+"_bg");if(s.length<1){var e='<iframe id="'+n+'_bg" class="bd_weixin_popup_bg"></iframe>',t=['<div id="'+n+'" class="bd_weixin_popup">','<div class="bd_weixin_popup_head">',"<span>\u5206\u4eab\u5230\u5fae\u4fe1\u670b\u53cb\u5708</span>",'<a href="#" onclick="return false;" class="bd_weixin_popup_close">&times;</a>',"</div>",'<div id="'+n+'_qr" class="bd_weixin_popup_main"></div>','<div class="bd_weixin_popup_foot">\u6253\u5f00\u5fae\u4fe1\uff0c\u70b9\u51fb\u5e95\u90e8\u7684\u201c\u53d1\u73b0\u201d\uff0c<br>\u4f7f\u7528\u201c\u626b\u4e00\u626b\u201d\u5373\u53ef\u5c06\u7f51\u9875\u5206\u4eab\u81f3\u670b\u53cb\u5708\u3002</div>',"</div>"].join("");o=f(e).appendTo("body"),s=f(t).appendTo("body"),g()}u=s.find("#"+n+"_qr"),b()},g=function(){s.find(".bd_weixin_popup_close").click(w),f("body").on("keydown",function(e){e.keyCode==27&&w()}),f(window).resize(function(){y()})},y=function(){var e=f(window).scrollTop(),t=s.outerWidth(),n=s.outerHeight(),r=f(window).width(),i=f(window).height(),u=(i-n)/2+e,a=(r-t)/2;u=u<0?0:u,a=a<0?0:a,o.width(t).height(n).css({left:a,top:u}),s.css({left:a,top:u})},b=function(){s.show(),o.show(),y()},w=function(){s.hide(),o.hide()},E=function(e){var t="10006-weixin-1-52626-6b3bffd01fdde4900130bc5a2751b6d1";if(a.sign==="off")return e;if(a.sign==="normal"){var n=e.indexOf("#"),r=e.indexOf("?");return n==-1?e+(r==-1?"?":"&")+t:e.replace("#",(r==-1?"?":"&")+t+"#")}return e.replace(/#.*$/g,"")+"#"+t},S=function(e){e=E(e);var t=[];return f.each(e,function(e,n){/[^\x00-\xff]/.test(n)?t[e]=encodeURI(n):t[e]=n}),e=t.join(""),e},x=function(){window._bd_share_main.F.use("component/pop_dialog",function(e){e.Dialog.hide()})},T=function(e){a=e,r=S(e.url),window._bd_share_main.F.use("weixin_popup.css",function(){x(),m(),d()})};t.run=T});