/*!
 * Third Party Scripts v0.1.0 (https://github.com/unclay/third-party-scripts)
 * Clone at 2017-10-26 11:22:23
 * Clone from http://tcss.qq.com/ping.js
 */
/*!
 * qq不支持https，因此移除初始化事件代码
 * remove code `this.loadHotClick(this)`
 * remove code `this.sendInfo(this.url.join(""));`
 */
(function(){function m(a){this.url=[];this.init(a)}var g,k,e,d,s,t,p,u,v,n,w=0,q=0,r=0;m.prototype={init:function(a){a?d=a:d={};g=document;if(!d.statIframe&&window!=top)try{g=top.document}catch(b){}k=g.location;e=g.body},run:function(){"-"==l.get("pgv_pvi=",!0)&&(w=1);l.init();this.url.push(this.getDomainInfo());this.url.unshift("//pingtcss.qq.com/pingd?");this.url.push(this.getRefInfo(d));try{navigator.cookieEnabled?this.url.push("&pvi="+l.setCookie("pgv_pvi",!0)):this.url.push("&pvi=NoCookie")}catch(a){this.url.push("&pvi=NoCookie")}this.url.push("&si="+
l.setCookie("ssi"));this.url.push(this.getInterfaceInfo());this.url.push(this.getMainEnvInfo());this.url.push(this.getExtendEnvInfo());d.extraParams?this.url.push("&ext="+d.extraParams+";bc="+q+x.getFinalStr()):this.url.push("&ext=bc="+q+x.getFinalStr());l.save();"undefined"==typeof _speedMark?this.url.push("&r3=0"):this.url.push("&r3="+(new Date-_speedMark));},loadHotClick:function(a){var b="//tcss.qq.com/heatmap/"+r%100+"/"+A.base64encode(r)+
".js?rand="+Math.round(2147483647*Math.abs(Math.random()-1))*(new Date).getUTCMilliseconds()%1E10;y.getScript({url:b,callback:function(){if("undefined"!=typeof _Cnf&&_Cnf.isValid&&"undefined"!=typeof _Cnf.url){var b=[];-1!=_Cnf.url.indexOf("|")?b=_Cnf.url.split("|"):b.push(_Cnf.url);a.inArray(b,t)&&y.getScript({url:"//tcss.qq.com/ping_hotclick.js",callback:function(){(new hotclick(a)).watchClick()}})}}})},inArray:function(a,b){for(i=0;i<a.length&&a[i]!=b;i++);return i!=a.length},getInterfaceInfo:function(){var a=
"";d.discuzParams&&(a=d.discuzParams.ui?a+("&ui="+d.discuzParams.ui):a+"&ui=0",a=d.discuzParams.ty?a+("&ty="+d.discuzParams.ty):a+("&ty="+w),d.discuzParams.fi&&(a+="&fi="+d.discuzParams.fi),d.discuzParams.gi&&(a+="&gi="+d.discuzParams.gi),d.discuzParams.ti&&(a+="&ti="+d.discuzParams.ti),d.discuzParams.pi&&(a+="&pi="+d.discuzParams.pi),d.discuzParams.rt&&(a+="&rt="+d.discuzParams.rt),d.discuzParams.md&&(a+="&md="+d.discuzParams.md),d.discuzParams.nt&&(a+="&nt="+d.discuzParams.nt),d.discuzParams.pn&&
(a+="&pn="+d.discuzParams.pn),d.discuzParams.qq&&(a+="&qq="+d.discuzParams.qq),d.discuzParams.on&&(a+="&on="+d.discuzParams.on),d.discuzParams.r2&&(a+="&r2="+d.discuzParams.r2,r=d.discuzParams.r2),d.discuzParams.logo&&this.ctrlLogo(d.discuzParams.logo));return a},ctrlLogo:function(a){var b,c;a=a?a:1;switch(a){case 0:break;case 9:b="\u817e\u8baf\u5206\u6790";c="word";break;case 10:b="\u7f51\u7ad9\u7edf\u8ba1";c="word";break;default:b="//tcss.qq.com/icon/toss_"+a+".gif",c="pic"}this.creatLogo(c,
b)},creatLogo:function(a,b){var c,h,d=document.getElementById("tcss").parentNode;c=document.createElement("a");c.href="//stats.discuz.qq.com?ADTAG=FROUM.FOOTER.CLICK.ICON";c.title="\u817e\u8baf\u5206\u6790";c.target="_blank";switch(a){case "word":h=document.createTextNode(b);c.appendChild(h);break;case "pic":h=document.createElement("img"),h.title="\u817e\u8baf\u5206\u6790",h.src=b,h.border=0,c.appendChild(h)}d.replaceChild(c,document.getElementById("tcss"))},getDomainInfo:function(a){var b;
s=k.host;a=s.toLowerCase();p||(p=this.getCookieSetDomain());b=this.getCurrentUrl();return"dm="+a+"&url="+b},getCurrentUrl:function(){var a="",b="-";if(d.virtualURL)a=d.virtualURL;else if(a=t=escape(k.pathname),""!=k.search&&(b=escape(k.search.substr(1))),d.senseParam){var c=this.getParameter(d.senseParam,g.URL);c&&(a+="_"+c)}return a+"&arg="+b},getRefInfo:function(a){var b="-",c="-",h="-",b=g.referrer,d="-";(a=this.getParameter(a.tagParamName||"ADTAG",g.URL))&&(d=a);a=b.match(/\w+:\/\/((?:[\w-]+\.)+\w+)(?:\:\d+)?(\/[^\?\\\"\'\|\:<>]*)?(?:\?([^\'\"\\<>#]*))?(?:#(\w+))?/i)||
[];b=a[1]||"-";c=a[2]||"-";h=a[3]||"-";u=b;v=escape(c);return"&rdm="+u+"&rurl="+v+"&adt="+d+"&rarg="+escape(h)},getMainEnvInfo:function(){var a="";try{var b="-",c="-",d="-",f="-",z="-",g=0,e=navigator;self.screen&&(b=screen.width+"x"+screen.height,c=screen.colorDepth+"-bit");e.language?d=e.language.toLowerCase():e.browserLanguage&&(d=e.browserLanguage.toLowerCase());g=e.javaEnabled()?1:0;f=e.platform;z=(new Date).getTimezoneOffset()/60;if(window.external&&window.external.twGetRunPath){var k=external.twGetRunPath();
k&&-1<k.toLowerCase().indexOf("360se")&&(q=1)}a="&scr="+b+"&scl="+c+"&lg="+d+"&jv="+g+"&pf="+f+"&tz="+z}catch(l){}finally{return a}},getExtendEnvInfo:function(){var a="";try{var b=k.href,c="-",a=a+("&fl="+this.getFlashInfo());e.addBehavior&&(e.addBehavior("#default#homePage"),e.isHomePage(b)&&(a+="&hp=Y"));e.addBehavior&&(e.addBehavior("#default#clientCaps"),c=e.connectionType);a+="&ct="+c}catch(d){}finally{return a}},getFlashInfo:function(){var a="-",b=navigator;try{if(b.plugins&&b.plugins.length)for(var c=
0;c<b.plugins.length;c++){if(-1<b.plugins[c].name.indexOf("Shockwave Flash")){a=b.plugins[c].description.split("Shockwave Flash ")[1];break}}else if(window.ActiveXObject)for(c=12;5<=c;c--)try{if(eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+c+"');")){a=c+".0";break}}catch(d){}}catch(f){}return a},getParameter:function(a,b){if(a&&b){var c=b.match(RegExp("(\\?|#|&)"+a+"=([^&^#]*)(#|&|$)"));return c?c[2]:""}return""},getCookieSetDomain:function(){var a=window.location.host,b={"com.cn":1,"net.cn":1,
"gov.cn":1,"com.hk":1},c=a.split(".");2<c.length&&(a=(b[c.slice(-2).join(".")]?c.slice(-3):c.slice(-2)).join("."));return a},sendClick:function(a){var b,c;c=[];b="undefined"==typeof n?"":n.src;if(""!=b){c=this.getParameter("r2",b);b=b.replace("r2="+c,"r2=a"+c.replace(/a|h/g,""));vext=this.getParameter("ext",b);c=vext.split(";");for(var d=0;d<c.length;d++)-1!=c[d].indexOf("adid=")&&(c[d]="adid="+a);b=b.replace("ext="+vext,"ext="+c.join(";"));this.sendInfo(b)}},sendInfo:function(a){n=new Image(1,1);
n.src=a}};var y={config:{url:"",charset:"utf-8",callback:function(){}},merge:function(a,b){for(var c in b)a[c]=b[c];return a},getScript:function(a){var b;this.config=this.merge(this.config,a);a=document.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("charset",this.config.charset);a.setAttribute("src",this.config.url);var c=document.getElementsByTagName("script")[0];c.parentNode.insertBefore(a,c);b=this.config.callback;a.onload=a.onreadystatechange=function(a){"undefined"!=
typeof this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||b()}}},A={base64EncodeChars:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",base64encode:function(a){var b,c,d,f,e,g;d=a.length;c=0;for(b="";c<d;){f=a.charCodeAt(c++)&255;if(c==d){b+=this.base64EncodeChars.charAt(f>>2);b+=this.base64EncodeChars.charAt((f&3)<<4);b+="==";break}e=a.charCodeAt(c++);if(c==d){b+=this.base64EncodeChars.charAt(f>>2);b+=this.base64EncodeChars.charAt((f&3)<<4|(e&240)>>4);b+=this.base64EncodeChars.charAt((e&
15)<<2);b+="=";break}g=a.charCodeAt(c++);b+=this.base64EncodeChars.charAt(f>>2);b+=this.base64EncodeChars.charAt((f&3)<<4|(e&240)>>4);b+=this.base64EncodeChars.charAt((e&15)<<2|(g&192)>>6);b+=this.base64EncodeChars.charAt(g&63)}return b}},x={ids:[],times:{},isExsited:function(a){for(var b=0;b<this.ids.length;b++)if(a==this.ids[b])return!0;return!1},getAdidCollection:function(){if("undefined"!=typeof _taadHolders&&0<_taadHolders.length)for(var a=0;a<_taadHolders.length;a++)this.isExsited(_taadHolders[a])?
this.times[_taadHolders[a]]+=1:(this.ids.push(_taadHolders[a]),this.times[_taadHolders[a]]=1);else return""},getFinalStr:function(){this.getAdidCollection();for(var a=0;a<this.ids.length;a++)this.ids[a]=this.ids[a]+"*"+this.times[this.ids[a]];return";adid="+this.ids.join(":")}},l={sck:[],sco:{},init:function(){var a=this.get("pgv_info=",!0);if("-"!=a)for(var a=a.split("&"),b=0;b<a.length;b++){var c=a[b].split("=");this.set(c[0],unescape(c[1]))}},get:function(a,b){var c=b?g.cookie:this.get("pgv_info=",
!0),d="-",f;f=c.indexOf(a);if(-1<f){f+=a.length;d=c.indexOf(";",f);-1==d&&(d=c.length);if(!b){var e=c.indexOf("&",f);-1<e&&(d=Math.min(d,e))}d=unescape(c.substring(f,d))}return d},set:function(a,b){this.sco[a]=b;for(var c=!1,d=this.sck.length,e=0;e<d;e++)if(a==this.sck[e]){c=!0;break}c||this.sck.push(a)},setCookie:function(a,b){var c=l.get(a+"=",b);if("-"==c){b?c="":c="s";var d=(new Date).getUTCMilliseconds(),c=c+Math.round(2147483647*Math.abs(Math.random()+1))*(d+1)%1E10}b?this.saveCookie(a+"="+
c,"expires=Sun, 18 Jan 2038 00:00:00 GMT;"):this.set(a,c);return c},save:function(){if(d.sessionSpan){var a=new Date;a.setTime(a.getTime()+6E4*d.sessionSpan)}for(var b="",c=this.sck.length,e=0;e<c;e++)b+=this.sck[e]+"="+this.sco[this.sck[e]]+"&";b="pgv_info="+b.substr(0,b.length-1);c="";a&&(c="expires="+a.toGMTString());this.saveCookie(b,c)},saveCookie:function(a,b){g.cookie=a+";path=/;domain="+p+";"+b}};window.pgvMain=function(a){try{(new m(a)).run()}catch(b){}};window.pgvSendClick=function(a){(new m).sendClick(a)};
window.pgvWatchClick=function(a){(new m(a)).watchClick(a)}})();