(function(){var t=void 0,e=!0,n=null,r=!1;function a(t){return function(){return t}}var i=["search!"],o=3,u="BAIDU_DUP_replacement",l="http://dup.baidustatic.com/painter/",c=document,f={},d=0,s=1,p=2,v=3,h=4,g=5;function m(t){var e=O(t),n=e[0],e=e[1];this.id=t;this.name=e;this.uri=A(e);this.Ba=!e;this.status=d;n&&e&&(this.Ha=k(x(n+"!"))||{load:function(){}});this.v=[]}var y=window.BAIDU_DUP_require||function(t,e,n){w(t,function(){for(var n=[],r=0;r<t.length;r++)n[r]=k(x(t[r]));P(e)&&e.apply(window,n)},n)};function w(t,e,n){var r=t.length;if(0===r)e();else for(var a=r,i=0;i<r;i++)(function(t){function r(){if(t.status<p)i();else{for(var e=t.v,r=[],a=0;a<e.length;a++){var o=e[a];o&&x(o).status<v&&r.push(o)}0===r.length?i():w(r,i,n)}}function i(){t&&t.status<v&&(t.status=v);0===--a&&e()}var o=t.Ha;o&&(o.normalize&&(t.name=o.normalize(t.name,A)),o.name2url&&(t.uri=o.name2url(t.name)));t.status<p?o&&P(o.load)?o.load(t.name,y,function(e){U(t.id,[],function(){return e});i()}):I(t,r,n):r()})(x(t[i]))}var b={},_={},D={};function I(t,n,r){t.status=s;D[t.id]?n():_[t.id]?b[t.id].push(n):(_[t.id]=e,b[t.id]=[n],r?(n=t.uri,t=c.createElement("script"),t.charset="utf-8",t.async=e,t.src=n,n=c.getElementsByTagName("head")[0]||c.body,n.insertBefore(t,n.firstChild)):c.write('<script charset="utf-8" src="'+t.uri+'"></script>'))}var U=window.BAIDU_DUP_define||function(t,n,r){var a=x(t);a.status<p&&(a.v=n,a.factory=r,a.status=a.Ba?v:p);if(_[t]){delete _[t];D[t]=e;n=b[t];for(delete b[t];t=n.shift();)t()}};function k(e){if(!e)return n;if(e.status>=h)return e.V;if(e.status<v&&e.V===t)return n;e.status=h;for(var r=[],a=0;a<e.v.length;a++)r[a]=k(x(e.v[a]));var i=a=e.factory;P(a)&&(i=a.apply(window,r));e.status=g;return e.V=i}function A(t){return/^https?:\/\//.test(t)?t:l+t+".js"}function x(t){return f[t]||(f[t]=new m(t))}function O(t){var e,n=t?t.indexOf("!"):-1;-1<n&&(e=t.slice(0,n),t=t.slice(n+1,t.length));return[e,t]}function P(t){return"[object Function]"===Object.prototype.toString.call(t)}U("util/lang",[],function(){function r(t){for(var e={},r="Array Boolean Date Error Function Number RegExp String".split(" "),a=0,i=r.length;a<i;a++)e["[object "+r[a]+"]"]=r[a].toLowerCase();return t==n?"null":e[Object.prototype.toString.call(t)]||"object"}var a=Object.prototype.hasOwnProperty;return{A:a,a:r,getAttribute:function(e,r){for(var a=e,i=r.split(".");i.length;){if(a===t||a===n)return;a=a[i.shift()]}return a},fa:function(t){if("object"!==r(t))return"";var e=[],n;for(n in t)a.call(t,n)&&e.push(n+"="+encodeURIComponent(t[n]));return e.join("&")},j:function(t){var e=[];switch(r(t)){case"object":e=Array.prototype.slice.call(t);break;case"array":e=t;break;case"number":case"string":e.push(t)}return e},unique:function(t){for(var n=[],r={},a=t.length,i=0;i<a;i++){var o=t[i];r[o]||(n[n.length]=o,r[o]=e)}return n},removeItem:function(t,e){for(var n=[].slice.call(t),r=n.length-1;0<=r;r--)n[r]===e&&n.splice(r,1);return n},ca:function(){}}});U("util/browser",["util/lang"],function(t){var n={},a=navigator.userAgent,i=window.RegExp;/msie (\d+\.\d)/i.test(a)&&(n.o=document.documentMode||+i.$1);/opera\/(\d+\.\d)/i.test(a)&&(n.opera=+i.$1);/firefox\/(\d+\.\d)/i.test(a)&&(n.Sa=+i.$1);/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(a)&&!/chrome/i.test(a)&&(n.cb=+(i.$1||i.$2));if(/chrome\/(\d+\.\d)/i.test(a)){n.la=+i.$1;var o;try{o="scoped"in document.createElement("style")}catch(u){o=r}o&&(n.Ma=e)}try{/(\d+\.\d)/.test(t.getAttribute(window,"external.max_version"))&&(n.Ya=+i.$1)}catch(l){}t="Android iPad iPhone Linux Macintosh Windows".split(" ");i="";for(o=0;o<t.length&&!(i=t[o],a.match(RegExp(i.toLowerCase(),"i")));o++);n.platform=i;return n});U("util/dom",["util/lang"],function(a){function i(t){try{if(t&&"object"===typeof t&&t.document&&"setInterval"in t)return e}catch(n){}return r}function o(t,e){e=2===arguments.length?e:t.parent;return t!=e||!i(t)}function u(t,n){for(var n=2===arguments.length?n:t.parent,a=0;10>a++&&o(t,n);){var i;try{i=!!t.parent.location.toString()}catch(u){i=r}if(!i)return e;t=t.parent}return 10<=a}function l(t){return 9===t.nodeType?t:t.ownerDocument||t.document}return{c:function(t,e){return"string"===a.a(t)&&0<t.length?(e||window).document.getElementById(t):t.nodeName&&(1===t.nodeType||9===t.nodeType)?t:n},Da:i,p:o,B:u,ra:l,z:function(t){t=l(t);return t.parentWindow||t.defaultView||n},h:function(t){t=i(t)?t.document:l(t);return"CSS1Compat"===t.compatMode?t.documentElement:t.body},I:function(e,n){1===arguments.length&&"number"===a.a(arguments[0])&&(n=arguments[0],e=t);for(var n=n||10,r=window,i=0;i++<n&&o(r)&&!u(r)&&(!e||!e(r));)r=r.parent;return r}}});U("util/style",["util/lang","util/dom","util/browser"],function(t,e,a){function i(t,r){if(!t)return"";var a="",a=-1<r.indexOf("-")?r.replace(/[-][^-]{1}/g,function(t){return t.charAt(1).toUpperCase()}):r.replace(/[A-Z]{1}/g,function(t){return"-"+t.charAt(0).toLowerCase()}),i=e.z(t);if(i&&i.getComputedStyle){if(i=i.getComputedStyle(t,n))return i.getPropertyValue(r)||i.getPropertyValue(a)}else if(t.currentStyle)return i=t.currentStyle,i[r]||i[a];return""}function o(t){var n={top:0,left:0};if(t===e.h(t))return n;var r=e.ra(t),a=r.body,r=r.documentElement;t.getBoundingClientRect&&(t=t.getBoundingClientRect(),n.left=Math.floor(t.left)+Math.max(r.scrollLeft,a.scrollLeft),n.top=Math.floor(t.top)+Math.max(r.scrollTop,a.scrollTop),n.left-=r.clientLeft,n.top-=r.clientTop,t=i(a,"borderLeftWidth"),a=i(a,"borderTopWidth"),t=parseInt(t,10),a=parseInt(a,10),n.left-=isNaN(t)?2:t,n.top-=isNaN(a)?2:a);return n}function u(t,e){var n=i(t,"margin"+e).toString().toLowerCase().replace("px","").replace("auto","0");return parseInt(n,10)||0}function l(r){for(var i=e.z(r),o=100;r&&r.tagName;){var u=100;if(a.o){if(5<a.o)try{u=parseInt(t.getAttribute(r,"filters.alpha.opacity"),10)||100}catch(l){}o=o>u?u:o}else{try{u=100*(i.getComputedStyle(r,n).opacity||1)}catch(c){}o*=u/100}r=r.parentNode}return 0===o?0:o||100}return{Wa:i,Va:o,n:function(t){var n=e.c(t);if(!n)return r;t=o(n);n=e.z(n);if(!n)return t;for(var a=0;n!==n.parent&&10>a++&&!e.B(n)&&n.frameElement;){var i=o(n.frameElement);t.left+=i.left;t.top+=i.top;n=n.parent}return t},Ta:u,K:function(t,n){var r=e.c(t),a=r.offsetWidth;n&&(a+=u(r,"Left")+u(r,"Right"));return a},J:function(t,n){var r=e.c(t),a=r.offsetHeight;n&&(a+=u(r,"Top")+u(r,"Bottom"));return a},Ua:l,ta:function(t){for(var n=e.c(t),t=e.z(n),n=l(n),r=0;10>r++&&e.p(t)&&!e.B(t);){var a=t.frameElement?l(t.frameElement):100,n=n*(a/100);t=t.parent}return n},aa:function(t){try{var n=e.h(t||window).scrollWidth;if(n||0===n)return n}catch(r){}return-1},$:function(t){try{var n=e.h(t||window).scrollHeight;if(n||0===n)return n}catch(r){}return-1},m:function(t){try{var n=e.h(t||window).clientWidth;if(n||0===n)return n}catch(r){}return-1},l:function(t){try{var n=e.h(t||window).clientHeight;if(n||0===n)return n}catch(r){}return-1},xa:function(t){var n=e.h(t);return t.pageYOffset||n.scrollTop},wa:function(t){var n=e.h(t);return t.pageXOffset||n.scrollLeft}}});U("util/url",["util/dom"],function(t){return{Z:function(t,e,n){t=t.match(RegExp("(\\?|&|#)"+e+"=([^&#]*)(&|#)?"));e="";t&&(e=t[2]);n&&(e=decodeURIComponent(e));return e},L:function(e){var e=t.I(e),n="";t.p(e)&&(n=e.document.referrer);return n=n||e.location.href}}});U("util/event",["util/dom"],function(t){return{bind:function(e,n,a){if(e=t.Da(e)?e:t.c(e))if(e.addEventListener)e.addEventListener(n,a,r);else if(e.attachEvent)e.attachEvent("on"+n,a);else{var i=e["on"+n];e["on"+n]=function(){i&&i.apply(this,arguments);a.apply(this,arguments)}}return e}}});U("util/cookie",["util/lang"],function(t){return{get:function(t,e){var n=RegExp("(^| )"+t+"=([^;]*)(;|$)").exec(document.cookie);return n?e?decodeURIComponent(n[2]):n[2]:""},set:function(e,n,r,a){var i=r.expires;"number"===t.a(i)&&(i=new Date,i.setTime(+i+r.expires));document.cookie=e+"="+(a?encodeURIComponent(n):n)+(r.path?"; path="+r.path:"")+(i?"; expires="+i.toGMTString():"")+(r.domain?"; domain="+r.domain:"")}}});U("util/data",["util/lang","util/dom"],function(n,a){function i(e,r,a){var a=a?f:l,i;if("string"===n.a(e)){for(e=e.split(".");e.length;)i=e.shift(),a[i]=e.length?a[i]!==t?a[i]:{}:r,a=a[i];i=r}return i}function o(t,e){var r=e?f:l,a;"string"===n.a(t)&&(a=n.getAttribute(r,t));return a}function u(t,e,n){if(!t||!e)return r;var a=o(t)||{};switch(n){case"+1":n=a[e]||0;a[e]=++n;break;default:a[e]=parseInt(n,10)}i(t,a);return a[e]}var l={},c=a.I(),f=c.BAIDU_DUP_info||(c.BAIDU_DUP_info={});return{k:function(t,e){var n=window;return n[t]?n[t]:n[t]=e},Y:function(e){var n=window,r=n[e];n[e]=t;return r},q:i,d:o,ea:function(a,i){var o=i?f:l;switch(n.a(a)){case"string":for(var u=a.split(".");u.length;){var c=u.shift();if(u.length&&o[c]!==t)o=o[c];else return delete o[c],e}}return r},R:function(t,e){return u(t,e,"+1")},$a:function(t,e,n){return u(t,e,n)},count:u,qa:function(t,e){return!t||!e?r:(o(t)||{})[e]||0},La:function(t,n){if(!t||!n)return r;var a=o("pageConfig")||{};a[t]=n;i("pageConfig",a);return e},pa:function(t){return!t?r:(o("pageConfig")||{})[t]}}});U("util/storage",[],function(){function t(t,e,n){if(i)try{i.setItem(t,n?encodeURIComponent(e):e)}catch(r){}}function a(t,e){if(i){var r=i.getItem(t);return e&&r?decodeURIComponent(r):r}return n}var i=window.localStorage;return{ka:function(){var n=r;try{i.removeItem("BAIDU_DUP_storage_available"),t("BAIDU_DUP_storage_available","1"),a("BAIDU_DUP_storage_available")&&(n=e),i.removeItem("BAIDU_DUP_storage_available")}catch(o){}return n},setItem:t,getItem:a,ia:function(e,n,r){if(i){n=r?encodeURIComponent(n):n;r=a(e)||"";try{t(e,r+((r&&"|")+n))}catch(o){}}},ha:function(e,n,r){if(i)if(n=r?encodeURIComponent(n):n,r=a(e)||"",r=r.replace(RegExp(n+"\\|?","g"),"").replace(/\|$/,""))try{t(e,r)}catch(o){}else i.removeItem(e)}}});U("util/log",["util/lang","util/event","util/storage"],function(t,r,a){function i(t,r){var a=new Image,i="BAIDU_DUP_log_"+Math.floor(2147483648*Math.random()).toString(36);window[i]=a;a.onload=a.onerror=a.onabort=function(){a.onload=a.onerror=a.onabort=n;a=window[i]=n;r&&r(o,t,e)};a.src=t}var o="BAIDU_DUP_log_storage";return{Xa:i,ab:function(){var t=a.getItem(o);if(t)for(var t=t.split("|"),e=0,n=t.length;e<n;e++)i(decodeURIComponent(t[e]),a.ha)},F:function(n){var n="object"===t.a(n)?n:{},u=n.url||"http://cbjslog.baidu.com/log",l=n.option||"now",n=t.fa(n.data||{}),u=u+((0<=u.indexOf("?")?"&":"?")+n+(n?"&":"")+"rdm="+ +new Date);switch(l){case"now":i(u);break;case"block":break;default:a.ia(o,u,e),r.bind(window,"unload",function(){i(u,a.ha)})}}}});U("util","util/lang,util/dom,util/style,util/url,util/event,util/cookie,util/data,util/storage,util/log,util/browser".split(","),function(t,e,n,r,a,i,o,u,l,c){return{lang:t,b:e,style:n,url:r,event:a,cookie:i,data:o,fb:u,log:l,U:c}});U("biz",["util"],function(n){function a(t,e){var r=/^[0-9a-zA-Z]+$/;return!t||!r.test(t)||!e?[]:e="array"===n.lang.a(e)?e:Array.prototype.slice.call(arguments,1)}function i(t,a,i){if(!a||!a.length)return r;var i=i||{Q:r,ba:r,da:r},l=i.ba?n.data.d(o):{},c=i.Q?u:o,l=i.da?{}:n.data.d(c)||l,i={},f;for(f in l)n.lang.A.call(l,f)&&(i[f]="array"===n.lang.a(l[f])?l[f].slice():l[f]);var l=i[t]||[],d=a.length;for(f=0;f<d;f++){var s=a[f];"string"===typeof s&&(s=encodeURIComponent(s),100>=s.length&&(l[l.length]=s))}if(!l.length)return r;i[t]=n.lang.unique(l);n.data.q(c,i);return e}var o="bizOrientations",u="bizUrgentOrientations";return{T:function(t,e){var n=a.apply(this,arguments);return i(t,n)},ja:function(t,n){var r=a.apply(this,arguments);return i(t,r,{Q:e,ba:e})},Oa:function(t,n){var r=a.apply(this,arguments);return i(t,r,{Q:e,da:e})},ua:function(e){var e=Math.max(0,Math.min(e||500,500)),r=[],a=n.data.d(u)||n.data.d(o)||{};if("object"===n.lang.a(a))for(var i in a)n.lang.A.call(a,i)&&(r[r.length]=i+"="+a[i].join(","));n.data.q(u,t);r.sort(function(t,e){return t.length-e.length});a="";i=r.length;for(var l=0;l<i&&!(a.length+r[l].length>=e);l++)a+=(l?"&":"")+r[l];return a}}});U("preview",["biz","util"],function(t,a){function i(){function t(t){var n=a.url.Z;return n(e,"baidu_clb_preview_"+t)||n(e,"baidu_dup_preview_"+t)}var e=a.url.L(),r=t("sid"),o=t("mid"),u=t("vc"),l=+t("ts"),c=n;3e4>=+new Date-l&&(c={ga:r,Fa:o,Pa:u});i=function(){return c};return c}return{ya:function(t){var e=[],n=i();n&&t==n.ga&&(e.push("mid="+n.Fa),e.push("sid="+n.Pa));return e.join("&")},d:function(){return i()},Ca:function(t){var n=r;t?/cpro_template=/gi.test(t)&&(a.data.q("#unionPreviewSwitch",e),n=e):n=!!a.data.d("#unionPreviewSwitch");return n},za:function(){var t=a.data.d("#unionPreviewData");return t?"prev="+encodeURIComponent(t)+"&pt=union":""},eb:function(t){a.data.q("#unionPreviewData",t)},Ra:function(){a.data.ea("#unionPreviewSwitch");a.data.ea("#unionPreviewData")}}});U("slot",["util"],function(n){function a(){for(var t={response:{},holder:"",stack:[],errors:[],status:{}},e=d.length-1;0<=e;e--)t.status[d[e]]=0;return t}function i(t,n){var a=r;"fillAsync"===n&&(a=e);v[t]&&-1!==v[t].stack.join(" ").toLowerCase().indexOf("async")&&(a=e);return a}function o(t,e){if(!t)return"";var n=h+t;e&&(n+="_"+e);return n}function u(n,a,i){if(!n||!a)return r;i===t&&(i=+new Date);return v[n]?(v[n].status[a]=i,e):r}function l(t,e){c(t,"errors",e)}function c(t,e,r){t&&e&&r&&(t=v[t])&&"array"===n.lang.a(t[e])&&t[e].push(r)}function f(t){return!t?v:v[t]||r}var d="add,create,request,response,render,finish".split(","),s=[],p={},v={},h="BAIDU_DUP_wrapper_";return{add:function(){var t={ids:[],preloadIds:[]},e=n.lang.j(arguments);if(!e.length)return t;for(var e=e.join(",").split(","),r=[],i=[],o=e.length,l=0;l<o;l++){var c=e[l];if(p.hasOwnProperty(c)){var d=c+"_"+p[c],h=f(d).stack||[];if("preload"===h[h.length-1]){t.preloadIds.push(d);continue}p[c]+=1}else p[c]=0;c=c+"_"+p[c];v[c]=new a;u(c,"add");i.push(c);r.push(c)}s=s.concat(i);t.ids=r;return t},create:function(t,a,c){if(!t||!a)return r;var f=o(t),d=e;if(n.b.c(f))return v[t].holder=f,d;if(i(t,a)){c=c||"";v[t].holder=c;c=n.b.c(c);try{c&&(c.innerHTML='<div id="'+f+'"></div>',v[t].holder=f)}catch(s){l(t,"Failed to insert wrapper"),d=r}}else if(document.write('<div id="'+f+'"></div>'),!n.b.c(f))try{var p=document.getElementsByTagName("script"),h=p[p.length-1];if(h){var g=h.parentNode;if(g){var m=document.createElement("div");m.id=o(t,"b");g.insertBefore(m,h)}}}catch(y){l(t,"Failed to create backup wrapper")}u(t,"create");return d},na:i,sa:function(t){return i(t)?"async":"sync"},X:function(t){return!t?"":(t=n.b.c(v[t].holder)||n.b.c(o(t))||n.b.c(o(t,"b")))&&t.id||""},w:f,P:function(t,n){if(!t||!n)return r;return v[t]?(v[t].response=n,u(t,"response"),e):r},r:u,i:l,G:function(t,e){c(t,"stack",e)},H:function(e){e=n.lang.j(e);if(!e.length)return r;var a=[],i={},o;for(o=0;o<s.length;o++)i[s[o]]=o+1;for(o=0;o<e.length;o++){var u=i[""+e[o]];u===t&&(u=0);a.push(u)}return a},n:function(t){t=n.lang.j(t);if(!t.length)return["-1x-1"];for(var e=[],r=0;r<t.length;r++){var a=t[r],i;try{var u=n.b.c(o(a))||n.b.c(o(a,"b"));if(u){var c=n.style.n(u);c&&(i=[c.top,c.left])}}catch(f){l(a,"Unable to get ps")}i=i?i:[-1,-1];e.push(i.join("x"))}return e}}});U("api",["slot","util"],function(t,e){return{getDai:t.H,getSlots:t.w,getFillType:t.sa,getFillWrapperId:t.X,setStatus:t.r,addErrorItem:t.i,addStackItem:t.G,bind:e.event.bind,getType:e.lang.a,sendLog:e.log.F,putInfo:e.data.q,getInfo:e.data.d,defineOnce:e.data.k,addCount:e.data.R,getCount:e.data.qa,getConfig:e.data.pa}});U("param",["slot","preview","biz","util"],function(n,i,o,u){function l(t,e){for(var e=e||0,n=[],r=0,a=t.length;r<a;r++)n.push(t[r].split("_")[e]);return n.join(",")}function c(t){t=t||window.document.domain;0===t.indexOf("www.")&&(t=t.substr(4));"."===t.charAt(t.length-1)&&(t=t.substring(0,t.length-1));var e=t.match(RegExp("([a-z0-9][a-z0-9\\-]*?\\.(?:com|cn|net|org|gov|info|la|cc|co|jp|us|hk|tv|me|biz|in|be|io|tk|cm|li|ru|ws|hn|fm|tw|ma|in|vn|name|mx|gd|im)(?:\\.(?:cn|jp|tw|ru|th))?)$","i"));return e?e[0]:t}var f=window,d=f.document,s=f.screen,p=f.navigator,v=+new Date,h=[{key:"di",value:function(t){return l(t.id)}},{key:"dcb",value:a("BAIDU_DUP_define")},{key:"dtm",value:a("BAIDU_DUP2_SETJSONADSLOT")},{key:"dbv",value:function(){var t=u.U;return t.Ma?"1":t.la?"2":"0"}},{key:"dci",value:function(t){for(var e="-1",r={fill:"0",fillOnePiece:"1",fillAsync:"2",preload:"3"},a=0;a<t.id.length;a++){var i=n.w(t.id[a]);if(i){var i=i.stack,o=i.length;if(1<=o){e=r[i[o-1]];break}}}return e}},{key:"dri",value:function(t){return l(t.id,1)}},{key:"dis",value:function(){var t=0;u.b.p(f)&&(t+=1);u.b.B(f,f.top)&&(t+=2);var e=u.style.m(),n=u.style.l();if(40>e||10>n)t+=4;return t}},{key:"dai",value:function(t){return n.H(t.id).join(",")}},{key:"dds",value:function(){var t=u.data.d("dds");return u.lang.fa(t)}},{key:"drs",value:function(){var t={uninitialized:0,loading:1,loaded:2,interactive:3,complete:4};try{return t[d.readyState]}catch(e){return-1}}},{key:"dvi",value:a("7o")},{key:"ltu",s:e,value:function(){var t=u.url.L(function(t){var n=u.style.m(t),t=u.style.l(t);return 400<n&&120<t?e:r});0<t.indexOf("cpro_prev")&&(t=t.slice(0,t.indexOf("?")));return t}},{key:"liu",s:e,value:function(){return u.b.p(f)?d.URL:""}},{key:"ltr",s:e,value:function(){var t=u.b.I(),e="";try{e=t.opener?t.opener.document.location.href:""}catch(n){}return e||t.document.referrer}},{key:"lcr",s:e,value:function(){var t=d.referrer,e=t.replace(/^https?:\/\//,""),e=e.split("/")[0],e=e.split(":")[0],e=c(e),n=c(),r=u.cookie.get("BAIDU_DUP_lcr");if(r&&n===e)return r;return n!==e?(u.cookie.set("BAIDU_DUP_lcr",t,{domain:n}),t):""}},{key:"ps",value:function(t){return n.n(t.id).join(",")}},{key:"psr",value:function(){return[s.width,s.height].join("x")}},{key:"par",value:function(){return[s.availWidth,s.availHeight].join("x")}},{key:"pcs",value:function(){return[u.style.m(),u.style.l()].join("x")}},{key:"pss",value:function(){return[u.style.aa(),u.style.$()].join("x")}},{key:"pis",value:function(){return(u.b.p(f)?[u.style.m(),u.style.l()]:[-1,-1]).join("x")}},{key:"cfv",value:function(){var t=0;if(p.plugins&&p.mimeTypes.length){var e=p.plugins["Shockwave Flash"];e&&e.description&&(t=e.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s)+r/,".")+".0")}else if(f.ActiveXObject&&!f.opera)for(e=10;2<=e;e--)try{var n=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+e);n&&(t=n.GetVariable("$version").replace(/WIN/g,"").replace(/,/g,"."))}catch(r){}return parseInt(t,10)}},{key:"ccd",value:function(){return s.colorDepth||0}},{key:"chi",value:function(){return f.history.length||0}},{key:"cja",value:function(){return p.javaEnabled().toString()}},{key:"cpl",value:function(){return p.plugins.length||0}},{key:"cmi",value:function(){return p.mimeTypes.length||0}},{key:"cce",value:function(){return p.cookieEnabled||0}},{key:"col",value:function(){return(p.language||p.browserLanguage||p.systemLanguage).replace(/[^a-zA-Z0-9\-]/g,"")}},{key:"cec",value:function(){return(d.characterSet?d.characterSet:d.charset)||""}},{key:"cdo",value:function(){var e=window.orientation;e===t&&(e=-1);return e}},{key:"tsr",value:function(){var t=0,e=+new Date;v&&(t=e-v);return t}},{key:"tlm",value:function(){return Date.parse(d.lastModified)/1e3}},{key:"tcn",value:function(){return Math.round(+new Date/1e3)}},{key:"tpr",value:function(t){var t=t&&t.max_age?t.max_age:24e4,e=(new Date).getTime(),n,a;try{n=!!window.top.location.toString()}catch(i){n=r}a=n?window.top:window;(n=a.BAIDU_DUP2_pageFirstRequestTime)?e-n>=t&&(n=a.BAIDU_DUP2_pageFirstRequestTime=e):n=a.BAIDU_DUP2_pageFirstRequestTime=e;return n||""}},{key:"_preview",value:function(t){return i.ya(l(t.id))}},{key:"dpt",value:function(){var t="none";i.Ca()&&(t="union");return t}},{key:"coa",s:e,value:function(t){var n=t.id,n=n[0].split("_")[0],t={},a=r,i=u.data.d("#novaOpenApi");if(i&&n&&i[n]){var a=e,n=i[n],o;for(o in n)o&&n.hasOwnProperty(o)&&"undefined"!==typeof n[o]&&(t[o]=encodeURIComponent(n[o]).toString())}a&&(t.c01=1);o="";for(var l in t)l&&t.hasOwnProperty(l)&&"undefined"!==typeof t[l]&&(o+="&"+l+"="+t[l]);return o=o.slice(1)}},{key:"_unionpreview",value:function(){return i.za()}},{key:"baidu_id",value:a("")},{key:"_orientation",value:function(){return o.ua()}}];return{get:function(t,e){for(var n=[],r=0,a=h.length;r<a;r++){var i;try{var o=h[r],u=o.key,l=o.s,c=o.value,c="function"===typeof c?c(t):c,c=l?encodeURIComponent(c):c;if(e&&e===u)return c;i=u&&0!==u.indexOf("_")?u+"="+c:c}catch(f){i=encodeURIComponent(f.toString()),i=i.slice(0,100)}i&&n.push(i)}n=n.join("&");return n.slice(0,2048)}}});U("request",["param","slot","util"],function(n,a,i){U("request!",[],{name2url:function(t){return"//cb.baidu.com/ecom?"+n.get({id:t.split(",")})}});U("batch!",[],{name2url:function(t){return"//cb.baidu.com/ecom?"+n.get({id:t.split(",")})}});return{send:function(n,o,u){if(!n||!o||u===t)return r;var l=[];if("array"!==i.lang.a(n))a.r(n,"request"),l=["request!"+n];else{for(l=0;l<n.length;l++)a.r(n[l],"request");l=1===n.length?["request!"+n[0]]:["batch!"+n.join(",")]}y(l,o,u);return e}}});U("control",["slot","request","preview","util"],function(n,a,i,o){function u(t,r,a){var i=r.deps,u=r.data,l=n.X(t);a&&!l?n.i(t,"HolderNotFound"):i&&(0>i[0].indexOf("clb/")&&n.r(t,"finish"),y(i,function(r){if("object"===o.lang.a(u)){u.id=t;if(r.hasOwnProperty("validate"))try{var a=r.validate(u);a!==e&&o.log.F({data:{type:a||"ResponseError",errorPainter:i[0],id:t,slotType:u._stype,materialType:u._isMlt,html:!!u._html}})}catch(c){n.i(t,"validateException")}if(r.hasOwnProperty("render"))try{n.r(t,"render"),r.render(u,l)}catch(f){n.i(t,"RenderException")}else n.i(t,"RenderNotFound")}else n.i(t,"ResponseFormatError")},a))}function l(t,i,o){if(!t)return r;var o=o||"",l=n.add(t),t=l.ids[0]||l.preloadIds[0];if(!t)return r;var c=n.na(t,i);n.G(t,i);n.create(t,i,o);l.ids.length?a.send(t,function(e){n.P(t,e);u(t,e,c)},c):l.preloadIds.length&&(i=n.w(t).response,u(t,i,c));return e}function c(e){for(var a=0,i=e+"_"+a;0!==n.H([i])[0];){var o=n.w(i);if((o=o&&o.response)&&0===o.deps[0].indexOf("clb/")){var u=o.data,o=u._isMlt;(0===o&&""!==u._html||o===r&&u._fxp)&&n.r(i,"finish",0)}i=e+"_"+ ++a}if(e!==t&&(e=(a=window.BAIDU_CLB_SLOTS_MAP)&&a[e],e!==t&&(o=e._isMlt,0===o&&""!==e._html||o===r&&e._fxp)))e._done=r}window.BAIDU_CLB_prepareMoveSlot=c;return{fill:function(t){return l(t,"fill")},oa:function(t,e){return l(t,"fillAsync",e)},Ia:function(){function t(t){a.send(t,function(e){if("array"===o.lang.a(e)){if(e&&e.length===t.length)for(var r=0;r<t.length;r++)n.P(t[r],e[r])}else"object"===o.lang.a(e)&&e&&1===t.length&&n.P(t[0],e)},r)}var e=o.lang.j(arguments),e=o.lang.unique(e),u=i.d();if(u)for(var l=0,c=e.length;l<c;l++)e[l]==u.ga&&(e.splice(l,1),l--);for(e=n.add(e).ids;e.length;){u=e.splice(0,16);for(l=0;l<u.length;l++)n.G(u[l],"preload");t(u)}},Ja:c}});U("global",["control","biz","util","preview"],function(a,u,l){function c(t){t=t.split(".");return v[t[0]]+t[1]}function f(){var e=p.BAIDU_DUP;if(!("object"===l.lang.a(e)&&e.push)){if("array"===l.lang.a(e)&&e.length)for(var n=0;n<e.length;n++)d(e[n]);p.BAIDU_DUP=t;l.data.k("BAIDU_DUP",{push:d});l.data.k("BAIDU_DUP_proxy",function(t){if(t)return function(){try{return d([t].concat(l.lang.j(arguments)))}catch(e){0<o--&&l.log.F({data:{type:"ExecuteException",errorName:t,args:l.lang.j(arguments).join("|"),isQuirksMode:"CSS1Compat"!==document.compatMode,documentMode:document.documentMode||"",readyState:document.readyState||"",message:e.message}})}}});for(n in g)n&&l.lang.A.call(g,n)&&l.data.k(n,p.BAIDU_DUP_proxy(n));s()}}function d(t){if("array"!==l.lang.a(t))return r;var e=t.shift();l.data.R("apiCount",e);return(e=g[e]||m[e]||r)&&e.apply(n,t)}function s(){function t(t){for(var n=0,a=i.length;n<a;n++)if(0===t.indexOf(i[n]))return e;return r}l.data.k("BAIDU_DUP_require",function(e){for(var r=0,a=e.length;r<a;r++)if(t(e[r]))return;y.apply(n,arguments)});l.data.k("BAIDU_DUP_define",function(e,r){for(var a=0,i=r.length;a<i;a++)if(t(r[a]))return;U.apply(n,arguments)})}var p=window,v={clb:"BAIDU_CLB_",dan:"BAIDU_DAN_",nova:"cpro"},h=[{f:["clb.fillSlot","clb.singleFillSlot","clb.fillSlotWithSize"],g:["fill"],e:a.fill},{f:["clb.fillSlotAsync"],g:["fillAsync"],e:a.oa},{f:["clb.preloadSlots"],g:["preload"],e:a.Ia},{f:["clb.prepareMoveSlot"],g:["prepareMove"],e:a.Ja},{f:["clb.addOrientation"],g:["addOrientation"],e:u.T},{f:["clb.addOrientationOnce"],g:["addOrientationOnce"],e:u.ja},{f:["clb.setOrientationOnce"],g:["setOrientationOnce"],e:u.Oa},{f:["clb.setConfig"],g:["putConfig"],e:l.data.La},{f:["clb.addSlot","clb.enableAllSlots","clb.SETHTMLSLOT"],g:[],e:l.lang.ca}],h=function(t){for(var e={},n={},r=0;r<t.length;r++){for(var a=t[r],i=a.f,o=a.g,a=a.e;i.length;)e[c(i.shift())]=a;for(;o.length;)n[o.shift()]=a}return{Ga:e,Ka:n}}(h),g=h.Ga,m=h.Ka;return{Aa:function(){var t=l.data.Y(c("clb.ORIENTATIONS"));if(t)for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&u.T(e,t[e]);a.fill(l.data.Y(c("clb.SLOT_ID")));f()}}});U("logService",["util/lang","util/event"],function(t,n){n.bind(window,"load",function(){y(["detect"],t.ca,e)})});U("fingerprint",["util/storage","util/event","util/browser","util/data","param"],function(t,n,a,i,o){var u=window,l=r;a.o?6<=a.o&&(l=e):t.ka()&&(l=e);l&&(i.d("isFPLoaded",e)===e?l=r:i.q("isFPLoaded",e,e));l&&n.bind(u,"load",function(){var t=u.document,e=t.body,n="//pos.baidu.com/wh/o.htm?ltr="+o.get({},"ltr"),r=t.createElement("div");r.id="BAIDU_DUP_fp_wrapper";r.style.position="absolute";r.style.left="-1px";r.style.bottom="-1px";r.style.zIndex=0;r.style.width=0;r.style.height=0;r.style.overflow="hidden";r.style.visibility="hidden";r.style.display="none";t=t.createElement("iframe");t.id="BAIDU_DUP_fp_iframe";t.src=n;t.style.width=0;t.style.height=0;t.style.visibility="hidden";t.style.display="none";try{r.insertBefore(t,r.firstChild),e&&e.insertBefore(r,e.firstChild)}catch(a){}})});U("replacement",["util"],function(t){function n(){var r=t.url.L(),a=t.url.Z(r,u,e);n=function(){return a};return a}return{va:function(){return n()}}});y(["replacement"],function(t){(t=t.va())?y([t]):(y(["global"],function(t){t.Aa()}),y(["logService"]),y(["fingerprint"]))});window.BAIDU_DUP_define&&window.BAIDU_DUP_define("detect",["api"],function(t){function n(e){e.url="";e.host=window.location.hostname;e.from="DUP";t.sendLog({data:e,Za:"now"})}try{setTimeout(function(){var a=t.getSlots(),i;for(i in a){var o=a[i],u=o.response,l=r;if("object"!==t.getType(u))l=e;else{var l=e,c;for(c in u)if(Object.prototype.hasOwnProperty.call(u,c)){l=r;break}}var f=o.status,o=o.stack;l?n({type:"preload"===o[0]?"preloadFail":"loadFail",id:i}):!f.render&&!f.finish&&n({type:"renderFail",id:i,error:"preload"===o[0]?"PreloadNotFilled":"NotFilled",empty:!(!u.data||!u.data._html)})}},0)}catch(a){}});window.BAIDU_DUP_define&&window.BAIDU_DUP_define("viewWatch",["util","param"],function(n,a){function i(){var e=+new Date,a=500;w===d&&_&&(a=e-_);_=e;for(var i in g)if(h.call(g,i)){w===c&&(w=f);var u=g[i];u.u&&(u.N+=a);u.D&&(u.M+=a);u.O=e-u.timestamp;if(w===d)b&&(u.t+=e-u.C);else if(72e5<=u.O)o(r);else{var l=u=t,s=t;for(s in g)if(h.call(g,s)){var p=g[s];if(b){var m=n.b.c(p.Qa);if(!m)break;try{var y=v.m(I),D=v.l(I),U=v.n(m),k=v.xa(I),A=v.wa(I),x=v.K(m),O=v.J(m),P=U.top-k+.35*O,S=U.left-A+.35*x;p.u=0<P&&P<D&&0<S&&S<y;var B=x*O,j=v.n(m),C=j.top-k,M=j.left-A,E=v.K(m),T=v.J(m),R=m=0,m=0>C?Math.max(C+T,0):Math.min(T,Math.max(D-C,0)),R=0>M?Math.max(M+E,0):Math.min(E,Math.max(y-M,0));u=R;l=m;p.D=l*u>.5*B}catch(L){p.u=r,p.D=r}}else p.u=r,p.D=r}}}}function o(t){clearInterval(y);var a=document.domain.toLowerCase();if(!(-1<a.indexOf("http://static3.qianqian.com/web/static/j/autohome.com.cn")||-1<a.indexOf("http://static3.qianqian.com/web/static/j/sina.com.cn")||-1<a.indexOf("http://static3.qianqian.com/web/static/j/pconline.com.cn")||-1<a.indexOf("http://static3.qianqian.com/web/static/j/pcauto.com.cn")||-1<a.indexOf("http://static3.qianqian.com/web/static/j/pclady.com.cn")||-1<a.indexOf("http://static3.qianqian.com/web/static/j/pcgames.com.cn")||-1<a.indexOf("http://static3.qianqian.com/web/static/j/pcbaby.com.cn")||-1<a.indexOf("http://static3.qianqian.com/web/static/j/pchouse.com.cn")||-1<a.indexOf("http://static3.qianqian.com/web/static/j/xcar.com.cn")))if(w!==f)w=d;else{w=d;i();var a=r,o;for(o in g)if(o&&g.hasOwnProperty(o)&&g[o]){var l=g[o];"block"===l.Ea&&(a=e);l.total=m;n.log.F({url:u(l)})}if(t&&a)if(t=+new Date,s.o)for(a=t+200;a>+new Date;);else{o=1e5;for(a=0;a<o;a++);a=+new Date;o=Math.min(200*o/(a-t),1e7);for(a=0;a<o;a++);}}}function u(e){var n="tu="+e.id,r="word="+a.get(t,"ltu"),i="if="+a.get(t,"dis"),o="aw="+e.width,u="ah="+e.height,c="dt="+Math.round(l/1e3),f="pt="+e.O,d=new Date(e.timestamp),s="yyyyMMddhhmmssS",p={"M+":d.getMonth()+1,"d+":d.getDate(),"h+":0===d.getHours()%12?12:d.getHours()%12,"H+":d.getHours(),"m+":d.getMinutes(),"s+":d.getSeconds(),"q+":Math.floor((d.getMonth()+3)/3),S:d.getMilliseconds()},v={0:"日",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六"},h=/(y+)/,g=s.match(h);g&&(s=s.replace(h,(d.getFullYear()+"").substr(4-g[0].length)));h=/(E+)/;if(g=s.match(h))g=g[0].length,s=s.replace(h,(1<g?2<g?"星期":"周":"")+v[d.getDay()+""]);for(var m in p)p.hasOwnProperty(m)&&(d=RegExp("("+m+")"),(v=s.match(d))&&(s=s.replace(d,1===v[0].length?p[m]:("00"+p[m]).substr((""+p[m]).length))));n=[n,r,i,o,u,c,f,"ps="+s,"it="+e.N,"vs="+(e.u?1:0),"vt="+e.M,"ft="+e.t,"op="+e.opacity,"csp="+D,"bcl="+e.ma,"pof="+e.Na,"top="+e.top,"left="+e.left,"fs=1","total="+e.total];for(r=0;2>r&&U.length;)i=U.pop(),n.push("lvu"+r+"="+i.url),n.push("lvt"+r+"="+i.time),r++;return e.url+(e.W?e.W+"&":"")+n.join("&")}var l=+new Date,c=1,f=2,d=3,s=n.U,p=n.event.bind,v=n.style,h=n.lang.A,g=[],m=0,y=0,w=c,b=e,_=0,D=[1e4<screen.availWidth?0:screen.availWidth,1e4<screen.availHeight?0:screen.availHeight].join(),I=window;n.b.p(window)&&!n.b.B(window)&&(I=window.top);y=setInterval(i,500);(function(){function t(){var t=+new Date,e;for(e in g)if(h.call(g,e)){var n=g[e];n.t+=t-n.C;n.C=t}b=r}function n(){var t=+new Date,n;for(n in g)h.call(g,n)&&(g[n].C=t);b=e}s.o?(p(document,"focusin",n),p(document,"focusout",t)):(p(window,"focus",n),p(window,"blur",t))})();(function(){function t(t){if(t=(t.target||t.srcElement).href)U.push({url:encodeURIComponent(t),time:+new Date}),10<U.length&&U.shift()}p(document,"click",t);I!=window&&p(I.document,"click",t)})();p(window,"beforeunload",o);var U=[];return{register:function(t){var e=+new Date,a=t.id,i=t.wrapperId,o=t.url||"http://eclick.baidu.com/a.js?",u=t.logType||"storage",t=t.extra||"";if(i&&!g[i]){var l=n.b.c(i);if(l){var c=v.n(l);g[i]={id:a,Qa:i,url:o,Ea:u,W:t,timestamp:e,N:0,u:r,M:0,D:r,O:0,t:0,C:e,top:c.top,left:c.left,bb:D,opacity:v.ta(l),ma:[v.m(),v.l()].join(),Na:[v.aa(),v.$()].join(),width:v.K(l),height:v.J(l)};m++}}},getWatchCount:function(){return m}}})})();

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/