(function(){var h={},mt={},c={id:"d0ad46e4afeacf34cd12de4c9b553aa6",dm:["https://hm.baidu.com/music.baidu.com","https://hm.baidu.com/play.baidu.com","https://hm.baidu.com/musicpay.baidu.com","https://hm.baidu.com/music.hao123.com"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],cptrk:[],icon:'',ctrk:false,align:-1,nv:1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:0,vcard:0,qiao:0,lxb:0,kbtrk:0,pt:0,spa:0,aet:'',hca:'69816474E428E749',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var q=void 0,u=!0,w=null,x=!1;mt.cookie={};mt.cookie.set=function(a,b,e){var d;e.O&&(d=new Date,d.setTime(d.getTime()+e.O));document.cookie=a+"="+b+(e.domain?"; domain="+e.domain:"")+(e.path?"; path="+e.path:"")+(d?"; expires="+d.toGMTString():"")+(e.pc?"; secure":"")};mt.cookie.get=function(a){return(a=RegExp("(^| )"+a+"=([^;]*)(;|$)").exec(document.cookie))?a[2]:w};
mt.cookie.Mb=function(a,b){try{var e="Hm_ck_"+ +new Date;mt.cookie.set(e,"is-cookie-enabled",{domain:a,path:b,O:q});var d="is-cookie-enabled"===mt.cookie.get(e)?"1":"0";mt.cookie.set(e,"",{domain:a,path:b,O:-1});return d}catch(f){return"0"}};mt.lang={};mt.lang.d=function(a,b){return"[object "+b+"]"==={}.toString.call(a)};mt.lang.ua=function(a){return mt.lang.d(a,"Number")&&isFinite(a)};mt.lang.K=function(a){return mt.lang.d(a,"String")};mt.lang.isArray=function(a){return mt.lang.d(a,"Array")};
mt.lang.g=function(a){return a.replace?a.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):a};mt.lang.trim=function(a){return a.replace(/^\s+|\s+$/g,"")};mt.lang.J=function(a,b){var e=x;if(a==w||!mt.lang.d(a,"Array")||b===q)return e;if(Array.prototype.indexOf)e=-1!==a.indexOf(b);else for(var d=0;d<a.length;d++)if(a[d]===b){e=u;break}return e};mt.url={};mt.url.m=function(a,b){var e=a.match(RegExp("(^|&|\\?|#)("+b+")=([^&#]*)(&|$|#)",""));return e?e[3]:w};
mt.url.lc=function(a){return(a=a.match(/^(https?:)\/\//))?a[1]:w};mt.url.ub=function(a){return(a=a.match(/^(https?:\/\/)?([^\/\?#]*)/))?a[2].replace(/.*@/,""):w};mt.url.Q=function(a){return(a=mt.url.ub(a))?a.replace(/:\d+$/,""):a};mt.url.qa=function(a){return(a=a.match(/^(https?:\/\/)?[^\/]*(.*)/))?a[2].replace(/[\?#].*/,"").replace(/^$/,"/"):w};
(function(){var a=mt.lang,b=mt.url;mt.f={};mt.f.Ja=function(e){return document.getElementById(e)};mt.f.Ka=function(e){if(!e)return w;try{e=String(e);if(0===e.indexOf("!HMCQ!"))return e;if(0===e.indexOf("!HMCC!"))return document.querySelector(e.substring(6,e.length));for(var d=e.split(">"),a=document.body,b=d.length-1;0<=b;b--)if(-1<d[b].indexOf("#")){var g=d[b].split("#")[1];(a=document.getElementById(g))||(a=document.getElementById(decodeURIComponent(g)));d=d.splice(b+1,d.length-(b+1));break}for(e=
0;a&&e<d.length;){var l=String(d[e]).toLowerCase();if(!("html"===l||"body"===l)){var b=0,p=d[e].match(/\[(\d+)\]/i),g=[];if(p)b=p[1]-1,l=l.split("[")[0];else if(1!==a.childNodes.length){for(var v=0,s=0,r=a.childNodes.length;s<r;s++){var t=a.childNodes[s];1===t.nodeType&&t.nodeName.toLowerCase()===l&&v++;if(1<v)return w}if(1!==v)return w}for(v=0;v<a.childNodes.length;v++)1===a.childNodes[v].nodeType&&a.childNodes[v].nodeName.toLowerCase()===l&&g.push(a.childNodes[v]);if(!g[b])return w;a=g[b]}e++}return a}catch(k){return w}};
mt.f.qa=function(e,d){var a=[],b=[];if(!e)return b;for(;e.parentNode!=w;){for(var g=0,l=0,p=e.parentNode.childNodes.length,v=0;v<p;v++){var s=e.parentNode.childNodes[v];if(s.nodeName===e.nodeName&&(g++,s===e&&(l=g),0<l&&1<g))break}if((p=""!==e.id)&&d){a.unshift("#"+encodeURIComponent(e.id));break}else p&&(p="#"+encodeURIComponent(e.id),p=0<a.length?p+">"+a.join(">"):p,b.push(p)),a.unshift(encodeURIComponent(String(e.nodeName).toLowerCase())+(1<g?"["+l+"]":""));e=e.parentNode}b.push(a.join(">"));return b};
mt.f.yb=function(a){return(a=mt.f.qa(a,u))&&a.length?String(a[0]):""};mt.f.xb=function(a){return mt.f.qa(a,x)};mt.f.jc=function(a,d){for(d=d.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==d)return a;return w};mt.f.rb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.kc=function(a){var d={top:0,left:0};if(!a)return d;var b=mt.f.rb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(d=a.getBoundingClientRect());return{top:d.top+(window.pageYOffset||b.scrollTop)-
(b.clientTop||0),left:d.left+(window.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}};mt.f.getAttribute=function(a,d){var b=a.getAttribute&&a.getAttribute(d)||w;if(!b&&a.attributes&&a.attributes.length)for(var m=a.attributes,g=m.length,l=0;l<g;l++)m[l].nodeName===d&&(b=m[l].nodeValue);return b};mt.f.Y=function(a){var d="document";a.tagName!==q&&(d=a.tagName);return d.toLowerCase()};mt.f.Ab=function(b){var d="";b.textContent?d=a.trim(b.textContent):b.innerText&&(d=a.trim(b.innerText));d&&(d=d.replace(/\s+/g,
" ").substring(0,255));return d};mt.f.oa=function(e,d){var f;a.K(e)&&0===String(e).indexOf("!HMCQ!")?(f=String(e),f=b.m(document.location.href,f.substring(6,f.length))):a.K(e)||(f=mt.f.Y(e),"input"===f&&d&&("button"===e.type||"submit"===e.type)?f=a.trim(e.value)||"":"input"===f&&!d&&"password"!==e.type?f=a.trim(e.value)||"":"img"===f?(f=mt.f.getAttribute,f=f(e,"alt")||f(e,"title")||f(e,"src")):f="body"===f||"html"===f?["(hm-default-content-for-",f,")"].join(""):mt.f.Ab(e));return String(f||"").substring(0,
255)};(function(){(mt.f.Va=function(){function a(){if(!a.aa){a.aa=u;for(var d=0,b=m.length;d<b;d++)m[d]()}}function d(){try{document.documentElement.doScroll("left")}catch(b){setTimeout(d,1);return}a()}var b=x,m=[],g;document.addEventListener?g=function(){document.removeEventListener("DOMContentLoaded",g,x);a()}:document.attachEvent&&(g=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",g),a())});(function(){if(!b)if(b=u,"complete"===document.readyState)a.aa=u;
else if(document.addEventListener)document.addEventListener("DOMContentLoaded",g,x),window.addEventListener("load",a,x);else if(document.attachEvent){document.attachEvent("onreadystatechange",g);window.attachEvent("onload",a);var l=x;try{l=window.frameElement==w}catch(p){}document.documentElement.doScroll&&l&&d()}})();return function(d){a.aa?d():m.push(d)}}()).aa=x})();return mt.f})();mt.event={};
mt.event.e=function(a,b,e){a.attachEvent?a.attachEvent("on"+b,function(d){e.call(a,d)}):a.addEventListener&&a.addEventListener(b,e,x)};mt.event.preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=x};
(function(){var a=mt.event;mt.h={};mt.h.Pa=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.h.vb=function(){if(document.documentMode)return document.documentMode;var a=/msie (\d+\.\d+)/i.exec(navigator.userAgent);return a?+a[1]||0:0};mt.h.cookieEnabled=navigator.cookieEnabled;mt.h.javaEnabled=navigator.javaEnabled();mt.h.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.h.Rb=(window.screen.width||0)+"x"+(window.screen.height||0);mt.h.colorDepth=
window.screen.colorDepth||0;mt.h.Z=function(){var a;a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.h.R=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.h.orientation=0;(function(){function b(){var a=0;window.orientation!==q&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==q)&&(a=screen.orientation.angle);mt.h.orientation=
a}b();a.e(window,"orientationchange",b)})();return mt.h})();mt.o={};mt.o.parse=function(a){return(new Function("return ("+a+")"))()};
mt.o.stringify=function(){function a(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=e[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function b(a){return 10>a?"0"+a:a}var e={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return a(d);case "boolean":return String(d);
default:if(d===w)return"null";if(d instanceof Array){var f=["["],e=d.length,g,l,p;for(l=0;l<e;l++)switch(p=d[l],typeof p){case "undefined":case "function":case "unknown":break;default:g&&f.push(","),f.push(mt.o.stringify(p)),g=1}f.push("]");return f.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+b(d.getMonth()+1)+"-"+b(d.getDate())+"T"+b(d.getHours())+":"+b(d.getMinutes())+":"+b(d.getSeconds())+'"';g=["{"];l=mt.o.stringify;for(e in d)if(Object.prototype.hasOwnProperty.call(d,e))switch(p=
d[e],typeof p){case "undefined":case "unknown":case "function":break;default:f&&g.push(","),f=1,g.push(l(e)+":"+l(p))}g.push("}");return g.join("")}}}();mt.localStorage={};mt.localStorage.fa=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(a){return x}return u};
mt.localStorage.set=function(a,b,e){var d=new Date;d.setTime(d.getTime()+e||31536E6);try{window.localStorage?(b=d.getTime()+"|"+b,window.localStorage.setItem(a,b)):mt.localStorage.fa()&&(mt.localStorage.l.expires=d.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(a,b),mt.localStorage.l.save(document.location.hostname))}catch(f){}};
mt.localStorage.get=function(a){if(window.localStorage){if(a=window.localStorage.getItem(a)){var b=a.indexOf("|"),e=a.substring(0,b)-0;if(e&&e>(new Date).getTime())return a.substring(b+1)}}else if(mt.localStorage.fa())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(a)}catch(d){}return w};
mt.localStorage.remove=function(a){if(window.localStorage)window.localStorage.removeItem(a);else if(mt.localStorage.fa())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(a),mt.localStorage.l.save(document.location.hostname)}catch(b){}};mt.sessionStorage={};mt.sessionStorage.set=function(a,b){try{window.sessionStorage&&window.sessionStorage.setItem(a,b)}catch(e){}};
mt.sessionStorage.get=function(a){try{return window.sessionStorage?window.sessionStorage.getItem(a):w}catch(b){return w}};mt.sessionStorage.remove=function(a){try{window.sessionStorage&&window.sessionStorage.removeItem(a)}catch(b){}};mt.Ya={};mt.Ya.log=function(a,b){var e=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=e;e.onload=function(){e.onload=w;e=window[d]=w;b&&b(a)};e.src=a};mt.Aa={};
mt.Aa.Bb=function(){var a="";if(navigator.plugins&&navigator.mimeTypes.length){var b=navigator.plugins["Shockwave Flash"];b&&b.description&&(a=b.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(a=b.GetVariable("$version"))&&(a=a.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(e){}return a};
mt.Aa.ic=function(a,b,e,d,f){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+a+'" width="'+e+'" height="'+d+'"><param name="movie" value="'+b+'" /><param name="flashvars" value="'+(f||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+a+'" width="'+e+'" height="'+d+'" src="'+b+'" flashvars="'+(f||"")+'" allowscriptaccess="always" /></object>'};
(function(){function a(){for(var a=x,e=document.getElementsByTagName("script"),d=e.length,d=100<d?100:d,f=0;f<d;f++){var m=e[f].src;if(m&&0===m.indexOf("https://hm.baidu.com/h")){a=u;break}}return a}return h.qb=a})();var A=h.qb;
h.B={mc:"http://tongji.baidu.com/hm-web/welcome/ico",Ua:"hm.baidu.com/hm.gif"/*tpa=https://hm.baidu.com/hm.baidu.com/hm.gif*/,fb:/^(tongji|hmcdn).baidu.com$/,$a:"https://hm.baidu.com/tongji.baidu.com",Fb:"hmmd",Gb:"hmpl",bc:"utm_medium",Eb:"hmkw",ec:"utm_term",Cb:"hmci",ac:"utm_content",Hb:"hmsr",dc:"utm_source",Db:"hmcu",$b:"utm_campaign",L:0,H:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",va:A()||"https:"===document.location.protocol?"https:":"http:",nc:0,gc:6E5,Nb:6E5,oc:5E3,hc:5,ka:1024,fc:1,wa:2147483647,Za:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn p ct u tt hh".split(" "),
S:u,Ga:["a","input","button"],hb:{id:"data-hm-id",ia:"data-hm-class",Da:"data-hm-xpath",content:"data-hm-content",Ba:"data-hm-tag",link:"data-hm-link"},Fa:"data-hm-enabled",Ea:"data-hm-disabled",Ob:"https://hmcdn.baidu.com/static/tongji/plugins/",Ta:["UrlChangeTracker"]};(function(){var a={D:{},e:function(a,e){this.D[a]=this.D[a]||[];this.D[a].push(e)},I:function(a,e){this.D[a]=this.D[a]||[];for(var d=this.D[a].length,f=0;f<d;f++)this.D[a][f](e)}};return h.C=a})();
(function(){function a(a,d){var f=document.createElement("script");f.charset="utf-8";b.d(d,"Function")&&(f.readyState?f.onreadystatechange=function(){if("loaded"===f.readyState||"complete"===f.readyState)f.onreadystatechange=w,d()}:f.onload=function(){d()});f.src=a;var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(f,m)}var b=mt.lang;return h.load=a})();
(function(){var a=mt.cookie,b=mt.localStorage,e=mt.sessionStorage,d={getData:function(d){try{return a.get(d)||e.get(d)||b.get(d)}catch(m){}},setData:function(f,m,g){try{a.set(f,m,{domain:d.P(),path:d.X(),O:g}),g?b.set(f,m,g):e.set(f,m)}catch(l){}},Qb:function(f){try{a.set(f,"",{domain:d.P(),path:d.X(),O:-1}),e.remove(f),b.remove(f)}catch(m){}},T:function(a,d){a="."+a.replace(/:\d+/,"");d="."+d.replace(/:\d+/,"");var b=a.indexOf(d);return-1<b&&b+d.length===a.length},ba:function(a,d){a=a.replace(/^https?:\/\//,
"");return 0===a.indexOf(d)},P:function(){for(var a=document.location.hostname,b=0,e=c.dm.length;b<e;b++)if(d.T(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},X:function(){for(var a=0,b=c.dm.length;a<b;a++){var e=c.dm[a];if(-1<e.indexOf("/")&&d.ba(document.location.href,e))return e.replace(/^[^/]+(\/.*)/,"$1")+"/"}return"/"}};return h.la=d})();
(function(){var a=mt.lang,b=mt.o,e=h.la,d={pageview:{},session:{},autoEventTracking:{},customEvent:{},user:{}},f={user:1,session:2,pageview:3,autoEventTracking:3,customEvent:3,others:3},m=["session","user"],g="Hm_up_"+c.id,l={init:function(){l.Kb()},Kb:function(){try{var p=b.parse(decodeURIComponent(e.getData(g)));a.d(p,"Object")&&(d.user=p)}catch(f){}},w:function(a){var b={};d[a]!==q&&(b=d[a]);a=this.ra();for(var e in b)b.hasOwnProperty(e)&&(a[e]=b[e]);return a},ra:function(){for(var a={},b,e=m.length-
1;0<=e;e--){b=d[m[e]];for(var f in b)b.hasOwnProperty(f)&&(a[f]=b[f])}return a},setProperty:function(e,f,g){var r=d[e];if(a.d(r,"Object")&&a.d(f,"Object")){for(var m in f)if(f.hasOwnProperty(m)){var k=a.g(String(m));if(g||!((/^_/.test(k)||/_$/.test(k))&&"_iden"!==k)){var n=f[m];if(n==w)delete r[k];else{if(a.d(n,"Object")||a.d(n,"Array"))n=b.stringify(n);n=a.g(String(n));l.Lb(e,k,n)&&(r[k]={value:n,scope:l.Ma(e)})}}}"user"===e&&l.ya()}},r:function(b){b!==q&&("userId"===b&&a.d(d.user,"Object")?(delete d.user.uid_,
l.ya()):"user"===b&&a.d(d.user,"Object")?(b=d.user.uid_,d.user=b===q?{}:{uid_:b},l.ya()):d[b]!==q&&(d[b]={}))},ya:function(){try{e.setData(g,encodeURIComponent(b.stringify(d.user)),c.age)}catch(a){}},Lb:function(a,b,e){var f=u,g=d[a];if(256<encodeURIComponent(String(b)).length||256<encodeURIComponent(String(e)).length)f=x;else{var k=g[b];g[b]={value:e,scope:l.Ma(a)};a=l.M(l.w(a));2048<encodeURIComponent(a).length&&(k!==q?g[b]=k:delete g[b],f=x)}return f},M:function(a){var d=[],b,e;for(e in a)a.hasOwnProperty(e)&&
(b=[e,a[e].value],(1===a[e].scope||2===a[e].scope)&&b.push(a[e].scope),d.push(b.join("*")));return d.join("!")},Ma:function(a){a=f[a];return a!==q?a:f.others}};return h.N=l})();
(function(){var a=mt.f,b=mt.lang,e=mt.o,d=h.C,f=h.N,m=f.M;if(b.isArray(c.cptrk)&&0<c.cptrk.length){var g={Sa:{},da:{},init:function(){for(var a,d=0;d<c.cptrk.length;d++)try{if(a=e.parse(decodeURIComponent(String(c.cptrk[d]))),a.a!==q&&b.d(a.a,"Object")){var f=a.a,m;for(m in f)f.hasOwnProperty(m)&&(g.da[m]=String(f[m]))}}catch(r){}},Ra:function(){var d,b,e;for(e in g.da)if(g.da.hasOwnProperty(e)&&g.Sa[e]===q&&(d=g.da[e],d=a.Ka(d)))b=b===q?{}:b,b[e]=a.oa(d,x),g.Sa[e]=u;return b},sa:function(){var a=
g.Ra();a&&g.Tb(a)},Jb:function(){"MutationObserver"in window?(new MutationObserver(g.sa)).observe(document.body,{childList:u,subtree:u}):window.setInterval(g.sa,15E3)},Tb:function(a){if(b.d(a,"Object")){f.setProperty("pageview",a);a=h.c.b.p;var d=h.c.b.ep;h.c.b.et=9;h.c.b.ep="";h.c.b.p=m(f.w("pageview"));h.c.i();h.c.b.p=a;h.c.b.ep=d;f.r("pageview")}}};g.init();d.e("pv-b",function(){var a=g.Ra();a&&f.setProperty("pageview",a)});g.Jb();a.Va(g.sa)}})();
(function(){var a=mt.lang,b=mt.f,e={W:function(a,f){return function(m){var g=m.target||m.srcElement;if(g){var l=g.getAttribute(a.ea);m=m.clientX+":"+m.clientY;if(l&&l===m)g.removeAttribute(a.ea);else if(f&&0<f.length&&(g=b.xb(g))&&g.length)if(l=g.length,m=g[g.length-1],1E4>l*m.split(">").length)for(m=0;m<l;m++)e.Xa(a,g[m]);else e.Xa(a,m)}}},Xa:function(d,b){for(var e={},g=String(b).split(">").length,l=0;l<g;l++)e[b]="",b=b.substring(0,b.lastIndexOf(">"));d&&(a.d(d,"Object")&&d.Ha)&&d.Ha(e)},Pb:function(a,
b){return function(e){(e.target||e.srcElement).setAttribute(a.ea,e.clientX+":"+e.clientY);a&&a.s&&(b?a.s(b):a.s("#"+encodeURIComponent(this.id),e.type))}}};return h.na=e})();
(function(){var a=mt.f,b=mt.o,e=mt.event,d=mt.lang,f=h.na,m=h.N,g=m.M,l={ea:"HM_ce",ab:function(){if(c.cetrk&&c.cetrk.length){e.e(document,"click",f.W(l,c.cetrk));for(var d=0,g=c.cetrk.length;d<g;d++){var m;try{m=b.parse(decodeURIComponent(String(c.cetrk[d])))}catch(r){m={}}var t=m.p||"";-1===t.indexOf(">")&&(0===t.indexOf("#")&&(t=t.substring(1)),(t=a.Ja(t))&&e.e(t,"click",f.Pb(l,m)))}}},Ha:function(a){if(c.cetrk&&c.cetrk.length)for(var d=0,e=c.cetrk.length;d<e;d++){var f;try{f=b.parse(decodeURIComponent(String(c.cetrk[d])))}catch(g){f=
{}}a.hasOwnProperty(f.p)&&l.s(f)}},s:function(b){h.c.b.et=7;var e=b&&b.k||"",e=d.g(e),f={};if(b&&b.a&&d.d(b.a,"Object"))for(var l in b.a)if(b.a.hasOwnProperty(l)){var t=a.Ka(b.a[l]||""),t=t?a.oa(t,x):"";f[l]=t}f._iden=e;m.setProperty("customEvent",f);h.c.b.ep="";h.c.b.p=g(m.w("customEvent"));h.c.i();h.c.b.p="";m.r("customEvent")}};h.C.e("pv-b",l.ab);return l})();
(function(){var a=mt.lang,b=mt.f,e=mt.event,d=mt.h,f=h.B,m=h.C,g=h.N,l=g.M,p=+new Date,v=[],s={W:function(){return function(d){if(h.c&&h.c.S&&c.aet&&c.aet.length){var e=d.target||d.srcElement;if(e){var g=h.c.Ga,n=b.getAttribute(e,f.Fa)!=w?u:x;if(b.getAttribute(e,f.Ea)==w)if(n)s.ga(s.pa(e,d));else{var z=b.Y(e);if(a.J(g,"*")||a.J(g,z))s.ga(s.pa(e,d));else for(;e.parentNode!=w;){var n=e.parentNode,z=b.Y(n),y="a"===z&&a.J(g,"a")?u:x,z="button"===z&&a.J(g,"button")?u:x,B=b.getAttribute(n,f.Fa)!=w?u:x;
if(b.getAttribute(n,f.Ea)==w&&(y||z||B)){s.ga(s.pa(n,d));break}e=e.parentNode}}}}}},pa:function(e,g){var k={},n=f.hb;k.id=b.getAttribute(e,n.id)||b.getAttribute(e,"id")||"";k.ia=b.getAttribute(e,n.ia)||b.getAttribute(e,"class")||"";k.Da=b.getAttribute(e,n.Da)||b.yb(e);k.content=b.getAttribute(e,n.content)||b.oa(e,u);k.Ba=b.getAttribute(e,n.Ba)||b.Y(e);k.link=b.getAttribute(e,n.link)||b.getAttribute(e,"href")||"";k.type=g.type||"click";n=a.ua(e.offsetTop)?e.offsetTop:0;"click"===g.type?n=d.Pa?g.clientY+
Math.max(document.documentElement.scrollTop,document.body.scrollTop):g.pageY:"touchend"===g.type&&(g.xa&&a.d(g.xa.changedTouches,"Array")&&g.xa.changedTouches.length)&&(n=g.xa.changedTouches[0].pageY);k.Zb=n;return k},ga:function(d){var b=a.g;d=[+new Date-(h.c.F!==q?h.c.F:p),b(d.id),b(d.ia),b(d.Ba),b(d.Da),b(d.link),b(d.content),d.type,d.Zb].join("*");s.ha(d);a.d(this.V(),"Function")&&this.V()()},ha:function(a){a.length>f.ka||(encodeURIComponent(v.join("!")+a).length>f.ka&&(s.s(v.join("!")),v=[]),
v.push(a))},s:function(a){h.c.b.et=5;h.c.b.ep=a;h.c.b.p=l(g.w("autoEventTracking"));h.c.i();h.c.b.p=""},V:function(){return function(){v&&v.length&&(s.s(v.join("!")),v=[])}}};a.K(c.aet)&&""!==c.aet&&m.e("pv-b",function(){e.e(document,"click",s.W());"ontouchend"in document&&e.e(window,"touchend",s.W());e.e(window,"unload",s.V())});return s})();
(function(){var a=mt.event,b=mt.h,e=h.B,d=h.C,f=+new Date,m=[],g=w,l={nb:function(){return function(){h.c&&(h.c.S&&c.aet&&c.aet.length)&&(window.clearTimeout(g),g=window.setTimeout(function(){l.cb(b.Z()+b.R())},150))}},cb:function(a){l.ha([+new Date-(h.c.F!==q?h.c.F:f),a].join("*"))},ha:function(a){if(encodeURIComponent(m.join("!")+a).length>e.ka||3<m.length)l.s(m.join("!")),m=[];m.push(a)},s:function(a){h.c.b.et=6;h.c.b.vh=b.R();h.c.b.ep=a;h.c.i()},V:function(){return function(){m&&m.length&&(l.s(m.join("!")),
m=[])}}};mt.lang.K(c.aet)&&""!==c.aet&&d.e("pv-b",function(){a.e(window,"scroll",l.nb());a.e(window,"unload",l.V())});return l})();
(function(){function a(){return function(){h.c.b.nv=0;h.c.b.st=4;h.c.b.et=3;h.c.b.ep=h.ma.wb()+","+h.ma.tb();h.c.i()}}function b(){clearTimeout(y);var a;n&&(a="visible"==document[n]);z&&(a=!document[z]);l="undefined"==typeof a?u:a;if((!g||!p)&&l&&v)k=u,r=+new Date;else if(g&&p&&(!l||!v))k=x,t+=+new Date-r;g=l;p=v;y=setTimeout(b,100)}function e(a){var n=document,d="";if(a in n)d=a;else for(var b=["webkit","ms","moz","o"],e=0;e<b.length;e++){var y=b[e]+a.charAt(0).toUpperCase()+a.slice(1);if(y in n){d=
y;break}}return d}function d(a){if(!("focus"==a.type||"blur"==a.type)||!(a.target&&a.target!=window))v="focus"==a.type||"focusin"==a.type?u:x,b()}var f=mt.event,m=h.C,g=u,l=u,p=u,v=u,s=+new Date,r=s,t=0,k=u,n=e("visibilityState"),z=e("hidden"),y;b();(function(){var a=n.replace(/[vV]isibilityState/,"visibilitychange");f.e(document,a,b);f.e(window,"pageshow",b);f.e(window,"pagehide",b);"object"==typeof document.onfocusin?(f.e(document,"focusin",d),f.e(document,"focusout",d)):(f.e(window,"focus",d),
f.e(window,"blur",d))})();h.ma={wb:function(){return+new Date-s},tb:function(){return k?+new Date-r+t:t}};m.e("pv-b",function(){f.e(window,"unload",a())});m.e("duration-send",a());m.e("duration-done",function(){r=s=+new Date;t=0});return h.ma})();
(function(){var a=mt.lang,b=h.B,e=h.load,d={Ib:function(d){if((window._dxt===q||a.d(window._dxt,"Array"))&&"undefined"!==typeof h.c){var m=h.c.P();e([b.protocol,"https://datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(m)].join(""),d)}},Yb:function(d){if(a.d(d,"String")||a.d(d,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",d])}};return h.lb=d})();
(function(){function a(a,d,b,e){if(!(a===q||d===q||e===q)){if(""===a)return[d,b,e].join("*");a=String(a).split("!");for(var g,f=x,k=0;k<a.length;k++)if(g=a[k].split("*"),String(d)===g[0]){g[1]=b;g[2]=e;a[k]=g.join("*");f=u;break}f||a.push([d,b,e].join("*"));return a.join("!")}}function b(a){for(var e in a)if({}.hasOwnProperty.call(a,e)){var y=a[e];d.d(y,"Object")||d.d(y,"Array")?b(y):a[e]=String(y)}}var e=mt.url,d=mt.lang,f=mt.o,m=mt.h,g=h.B,l=h.C,p=h.lb,v=h.load,s=h.la,r=h.N,t=r.M,k={U:[],ca:0,Qa:x,
A:{Ca:"",page:""},init:function(){k.j=0;r.init();l.e("pv-b",function(){k.mb();k.ob()});l.e("pv-d",function(){k.pb();k.A.page=""});l.e("stag-b",function(){h.c.b.api=k.j||k.ca?k.j+"_"+k.ca:"";h.c.b.ct=[decodeURIComponent(s.getData("Hm_ct_"+c.id)||""),k.A.Ca,k.A.page].join("!")});l.e("stag-d",function(){h.c.b.api=0;k.j=0;k.ca=0})},mb:function(){var a=window._hmt||[];if(!a||d.d(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,b=0;b<arguments.length;b++){var n=arguments[b];
d.d(n,"Array")&&(a.cmd[a.id].push(n),"_setAccount"===n[0]&&(1<n.length&&/^[0-9a-f]{32}$/.test(n[1]))&&(n=n[1],a.id=n,a.cmd[n]=a.cmd[n]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},ob:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var d=a.cmd[c.id],b=/^_track(Event|MobConv|Order|RTEvent)$/,e=0,g=d.length;e<g;e++){var f=d[e];b.test(f[0])?k.U.push(f):k.za(f)}a.cmd[c.id]={push:k.za}},pb:function(){if(0<k.U.length)for(var a=0,d=k.U.length;a<d;a++)k.za(k.U[a]);k.U=
w},za:function(a){var b=a[0];if(k.hasOwnProperty(b)&&d.d(k[b],"Function"))k[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(k.j|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],x===a||u===a))k.j|=2,h.c.Na=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){k.j|=4;h.c.b.sn=h.c.La();h.c.b.et=0;h.c.b.ep="";h.c.b.vl=m.Z()+m.R();h.c.b.kb=0;h.c.ta?(h.c.b.nv=0,h.c.b.st=4):h.c.ta=u;var d=h.c.b.u,b=h.c.b.su;h.c.b.u=g.protocol+"//"+document.location.host+
a[1];k.Qa||(h.c.b.su=document.location.href);h.c.b.p=t(r.w("pageview"));h.c.i();h.c.b.u=d;h.c.b.su=b;h.c.b.p="";h.c.F=+new Date;r.r("pageview")}},_trackEvent:function(a){2<a.length&&(k.j|=8,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=4,h.c.b.ep=d.g(a[1])+"*"+d.g(a[2])+(a[3]?"*"+d.g(a[3]):"")+(a[4]?"*"+d.g(a[4]):""),h.c.b.p=t(r.ra()),h.c.i(),h.c.b.p="")},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){k.ca++;for(var g=(h.c.b.cv||"*").split("!"),f=g.length;f<b-1;f++)g.push("*");
g[b-1]=e+"*"+d.g(a[2])+"*"+d.g(a[3]);h.c.b.cv=g.join("!");a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,"");""!==a?s.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):s.Qb("Hm_cv_"+c.id)}}},_setUserTag:function(b){if(!(3>b.length)){var e=d.g(b[1]);b=d.g(b[2]);if(e!==q&&b!==q){var y=decodeURIComponent(s.getData("Hm_ct_"+c.id)||""),y=a(y,e,1,b);s.setData("Hm_ct_"+c.id,encodeURIComponent(y),c.age)}}},_setVisitTag:function(b){if(!(3>b.length)){var e=d.g(b[1]);b=d.g(b[2]);if(e!==
q&&b!==q){var y=k.A.Ca,y=a(y,e,2,b);k.A.Ca=y}}},_setPageTag:function(b){if(!(3>b.length)){var e=d.g(b[1]);b=d.g(b[2]);if(e!==q&&b!==q){var y=k.A.page,y=a(y,e,3,b);k.A.page=y}}},_setReferrerOverride:function(a){1<a.length&&(h.c.b.su=a[1].charAt&&"/"===a[1].charAt(0)?g.protocol+"//"+window.location.host+a[1]:a[1],k.Qa=u)},_trackOrder:function(a){a=a[1];d.d(a,"Object")&&(b(a),k.j|=16,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=94,h.c.b.ep=f.stringify(a),h.c.b.p=t(r.ra()),h.c.i(),h.c.b.p="")},_trackMobConv:function(a){if(a=
{webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])k.j|=32,h.c.b.et=93,h.c.b.ep=a,h.c.i()},_setDataxId:function(a){a=a[1];p.Ib();p.Yb(a)},_setUserId:function(a){a=a[1];if(a!==q&&(d.K(a)||d.ua(a))){var b=r.w("user").uid_;if(!(b&&b.value===d.g(String(a)))){var b=h.c.b.p,e=h.c.b.ep;h.c.b.et=8;h.c.b.ep="";h.c.b.p="uid_*"+d.g(String(a));h.c.i();var g={};g.uid_=a;r.setProperty("user",g,u);h.c.b.p=b;h.c.b.ep=e}}},_clearUserId:function(a){1<a.length&&u===a[1]&&r.r("userId")},_setUserProperty:function(a){a=
a[1];d.d(a,"Object")&&r.setProperty("user",a)},_clearUserProperty:function(a){1<a.length&&u===a[1]&&r.r("user")},_setSessionProperty:function(a){a=a[1];d.d(a,"Object")&&r.setProperty("session",a)},_clearSessionProperty:function(a){1<a.length&&u===a[1]&&r.r("session")},_setPageviewProperty:function(a){a=a[1];d.d(a,"Object")&&r.setProperty("pageview",a)},_clearPageviewProperty:function(a){1<a.length&&u===a[1]&&r.r("pageview")},_setAutoEventTrackingProperty:function(a){a=a[1];d.d(a,"Object")&&r.setProperty("autoEventTracking",
a)},_clearAutoEventTrackingProperty:function(a){1<a.length&&u===a[1]&&r.r("autoEventTracking")},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],x===a||u===a))h.c.Oa=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],x===a||u===a))h.c.S=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.i())):l.I("duration-send");l.I("duration-done")},_require:function(a){1<a.length&&(a=a[1],g.fb.test(e.Q(a))&&v(a))},_providePlugin:function(a){if(1<
a.length){var b=window._hmt,e=a[1];a=a[2];if(d.J(g.Ta,e)&&d.d(a,"Function")&&(b.plugins=b.plugins||{},b.G=b.G||{},b.plugins[e]=a,b.z=b.z||[],a=b.z.slice(),e&&a.length&&a[0][1]===e))for(var f=0,k=a.length;f<k;f++){var l=a[f][2]||{};if(b.plugins[e]&&!b.G[e])b.G[e]=new b.plugins[e](l),b.z.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1],f=a[2]||{};if(d.J(g.Ta,e))if(b.plugins=b.plugins||{},b.G=b.G||{},b.plugins[e]&&!b.G[e])b.G[e]=new b.plugins[e](f);else{b.z=b.z||
[];for(var f=0,l=b.z.length;f<l;f++)if(b.z[f][1]===e)return;b.z.push(a);k._require([w,g.Ob+e+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=a[1];a=a[2];d.d(a,"Object")&&(a._iden=b,r.setProperty("customEvent",a));h.c.b.et=7;h.c.b.ep="";h.c.b.p=t(r.w("customEvent"));h.c.i();h.c.b.p="";r.r("customEvent")}}};k.init();h.gb=k;return h.gb})();
(function(){function a(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=u,this.b={},this.Oa=this.Na=u,this.S=k.S,this.Ga=f.K(c.aet)&&0<c.aet.length?c.aet.split(","):"",this.ta=x,this.init())}var b=mt.url,e=mt.Ya,d=mt.Aa,f=mt.lang,m=mt.cookie,g=mt.h,l=mt.sessionStorage,p=mt.o,v=mt.event,s=h.la,r=h.N,t=r.M,k=h.B,n=h.load,z=h.C;a.prototype={T:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var e=a.indexOf(b);return-1<e&&e+b.length===a.length},ba:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},$:function(a){for(var e=0;e<c.dm.length;e++)if(-1<c.dm[e].indexOf("/")){if(this.ba(a,c.dm[e]))return u}else{var d=b.Q(a);if(d&&this.T(d,c.dm[e]))return u}return x},P:function(){for(var a=document.location.hostname,b=0,e=c.dm.length;b<e;b++)if(this.T(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},X:function(){for(var a=0,b=c.dm.length;a<b;a++){var e=c.dm[a];if(-1<e.indexOf("/")&&this.ba(document.location.href,e))return e.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},zb:function(){if(!document.referrer)return k.H-k.L>c.vdur?1:4;var a=x;this.$(document.referrer)&&this.$(document.location.href)?a=u:(a=b.Q(document.referrer),a=this.T(a||"",document.location.hostname));return a?k.H-k.L>c.vdur?1:4:3},Wb:function(){var a,b,e,d,f;k.L=s.getData("Hm_lpvt_"+c.id)||0;13===k.L.length&&(k.L=Math.round(k.L/1E3));b=this.zb();a=4!==b?1:0;if(e=s.getData("Hm_lvt_"+c.id)){d=e.split(",");for(f=d.length-1;0<=f;f--)13===d[f].length&&(d[f]=""+Math.round(d[f]/1E3));
for(;2592E3<k.H-d[0];)d.shift();f=4>d.length?2:3;for(1===a&&d.push(k.H);4<d.length;)d.shift();e=d.join(",");d=d[d.length-1]}else e=k.H,d="",f=1;s.setData("Hm_lvt_"+c.id,e,c.age);s.setData("Hm_lpvt_"+c.id,k.H);e=m.Mb(this.P(),this.X());if(0===c.nv&&this.$(document.location.href)&&(""===document.referrer||this.$(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=e;this.b.lt=d;this.b.lv=f},Vb:function(){for(var a=[],b=this.b.et,e=+new Date,d=0,f=k.Za.length;d<f;d++){var g=k.Za[d],l=this.b[g];
"undefined"!==typeof l&&""!==l&&("tt"!==g||"tt"===g&&0===b)&&(("ct"!==g||"ct"===g&&0===b)&&("kb"!==g||"kb"===g&&3===b))&&a.push(g+"="+encodeURIComponent(l))}switch(b){case 0:this.b.rt&&a.push("rt="+encodeURIComponent(this.b.rt));break;case 5:a.push("_lpt="+this.F);a.push("_ct="+e);break;case 6:a.push("_lpt="+this.F);a.push("_ct="+e);break;case 90:this.b.rt&&a.push("rt="+this.b.rt)}return a.join("&")},Xb:function(){this.Wb();this.b.si=c.id;this.b.sn=this.La();this.b.su=document.referrer;this.b.hh=
window.location.hash;this.b.ds=g.Rb;this.b.cl=g.colorDepth+"-bit";this.b.ln=String(g.language).toLowerCase();this.b.ja=g.javaEnabled?1:0;this.b.ck=g.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?1:0;this.b.fl=d.Bb();this.b.v="https://hm.baidu.com/1.2.63";this.b.cv=decodeURIComponent(s.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=g.Z()+g.R();var a=document.location.href;this.b.cm=b.m(a,k.Fb)||"";this.b.cp=b.m(a,k.Gb)||b.m(a,k.bc)||"";this.b.cw=b.m(a,k.Eb)||b.m(a,k.ec)||"";this.b.ci=b.m(a,
k.Cb)||b.m(a,k.ac)||"";this.b.cf=b.m(a,k.Hb)||b.m(a,k.dc)||"";this.b.cu=b.m(a,k.Db)||b.m(a,k.$b)||""},init:function(){try{this.Xb(),0===this.b.nv?this.Ub():this.Ia(),h.c=this,this.jb(),this.ib(),z.I("pv-b"),this.Sb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));e.log(k.va+"//"+k.Ua+"?"+b.join("&"))}},Sb:function(){function a(){z.I("pv-d")}this.Na?(this.ta=u,this.b.et=0,this.b.ep=
"",this.b.p=t(r.w("pageview")),this.b.vl=g.Z()+g.R(),this.i(a),this.b.p=""):a();this.F=+new Date;r.r("pageview")},i:function(a){if(this.Oa){var b=this;b.b.rnd=Math.round(Math.random()*k.wa);z.I("stag-b");var d=k.va+"//"+k.Ua+"?"+b.Vb();z.I("stag-d");b.eb(d);e.log(d,function(e){b.Wa(e);f.d(a,"Function")&&a.call(b)})}},jb:function(){var a=document.location.hash.substring(1),e=RegExp(c.id),d=b.Q(document.referrer)===k.$a?1:0,f=b.m(a,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);a&&(e.test(a)&&d&&
g)&&(this.b.rnd=Math.round(Math.random()*k.wa),a=document.createElement("script"),a.setAttribute("type","text/javascript"),a.setAttribute("charset","utf-8"),a.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.b.rnd),f=document.getElementsByTagName("script")[0],f.parentNode.insertBefore(a,f))},ib:function(){if(window.postMessage&&window.self!==window.parent){var a=this;v.e(window,"message",function(e){if(b.Q(e.origin)===k.$a){e=e.data||{};var d=e.jn||"",f=/^customevent$/.test(d);if(RegExp(c.id).test(e.sd||
"")&&f)a.b.rnd=Math.round(Math.random()*k.wa),n(k.protocol+"//"+c.js+d+".js?"+a.b.rnd)}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}},eb:function(a){var b;try{b=p.parse(l.get("Hm_unsent_"+c.id)||"[]")}catch(e){b=[]}var d=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+d);l.set("Hm_unsent_"+c.id,p.stringify(b))},Wa:function(a){var b;try{b=p.parse(l.get("Hm_unsent_"+c.id)||"[]")}catch(e){b=[]}if(b.length){a=
a.replace(/^https?:\/\//,"");for(var d=0;d<b.length;d++)if(a.replace(/&u=[^&]*/,"")===b[d].replace(/&u=[^&]*/,"")){b.splice(d,1);break}b.length?l.set("Hm_unsent_"+c.id,p.stringify(b)):this.Ia()}},Ia:function(){l.remove("Hm_unsent_"+c.id)},Ub:function(){var a=this,b;try{b=p.parse(l.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var f=function(b){e.log(k.va+"//"+b,function(b){a.Wa(b)})},g=0;g<b.length;g++)f(b[g])},La:function(){return Math.round(+new Date/1E3)%65535}};return new a})();
(function(){var a=mt.event,b=mt.lang,e=h.B;if(c.kbtrk&&"undefined"!==typeof h.c){h.c.b.kb=b.ua(h.c.b.kb)?h.c.b.kb:0;var d=function(){h.c.b.et=85;h.c.b.ep=h.c.b.kb;h.c.i()};a.e(document,"keyup",function(){h.c.b.kb++});a.e(window,"unload",function(){d()});setInterval(d,e.Nb)}})();var C=h.B,D=h.load;c.pt&&D([C.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));
(function(){var a=mt.h,b=mt.lang,e=mt.event,d=mt.o;if("undefined"!==typeof h.c&&(c.med||(!a.Pa||7<a.vb())&&c.cvcc)){var f,m,g,l,p=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},v=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===x)return x},s=function(a,e){var k={};k.n=f;k.t="clk";k.v=a;if(e){var l=e.getAttribute("href"),m=e.getAttribute("onclick")?""+e.getAttribute("onclick"):w,p=e.getAttribute("id")||"";g.test(l)?(k.sn=
"mediate",k.snv=l):b.d(m,"String")&&g.test(m)&&(k.sn="wrap",k.snv=m);k.id=p}h.c.b.et=86;h.c.b.ep=d.stringify(k);h.c.i();for(k=+new Date;400>=+new Date-k;);};if(c.med)m="/zoosnet",f="swt",g=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,l={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,f=0,k=b.length;f<k;f++)d=b[f],e=
d.getAttribute("onclick"),d=d.getAttribute("href"),(g.test(e)||g.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){m="/other-comm";f="other";g=c.cvcc.q||q;var r=c.cvcc.id||q;l={click:function(){for(var a=[],b=p(document.getElementsByTagName("a")),b=[].concat.apply(b,p(document.getElementsByTagName("area"))),b=[].concat.apply(b,p(document.getElementsByTagName("img"))),d,e,f,k=0,l=b.length;k<l;k++)d=b[k],g!==q?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),r?(d=d.getAttribute("id"),(g.test(e)||
g.test(f)||r.test(d))&&a.push(b[k])):(g.test(e)||g.test(f))&&a.push(b[k])):r!==q&&(d=d.getAttribute("id"),r.test(d)&&a.push(b[k]));return a}}}if("undefined"!==typeof l&&"undefined"!==typeof g){var t;m+=/\/$/.test(m)?"":"/";var k=function(a,d){if(t===d)return s(m+a,d),x;if(b.d(d,"Array")||b.d(d,"NodeList"))for(var e=0,f=d.length;e<f;e++)if(t===d[e])return s(m+a+"/"+(e+1),d[e]),x};e.e(document,"mousedown",function(a){a=a||window.event;t=a.target||a.srcElement;var d={};for(v(l,function(a,e){d[a]=b.d(e,
"Function")?e():document.getElementById(e)});t&&t!==document&&v(d,k)!==x;)t=t.parentNode})}}})();(function(){var a=mt.f,b=mt.lang,e=mt.event,d=mt.o;if("undefined"!==typeof h.c&&b.d(c.cvcf,"Array")&&0<c.cvcf.length){var f={bb:function(){for(var b=c.cvcf.length,d,l=0;l<b;l++)(d=a.Ja(decodeURIComponent(c.cvcf[l])))&&e.e(d,"click",f.na())},na:function(){return function(){h.c.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.c.b.ep=d.stringify(a);h.c.i()}}};a.Va(function(){f.bb()})}})();
(function(){var a=mt.event,b=mt.o;if(c.med&&"undefined"!==typeof h.c){var e={n:"anti",sb:0,kb:0,clk:0},d=function(){h.c.b.et=86;h.c.b.ep=b.stringify(e);h.c.i()};a.e(document,"click",function(){e.clk++});a.e(document,"keyup",function(){e.kb=1});a.e(window,"scroll",function(){e.sb++});a.e(window,"load",function(){setTimeout(d,5E3)})}})();c.spa!==q&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]));})();
