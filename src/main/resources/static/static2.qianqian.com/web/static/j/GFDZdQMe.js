window._GET_HASHMAP=function(e){var i=function(e){var i=[];if(e.indexOf("://")!==-1){return e}i=e.split("/");e=[];for(var t in i){if(i[t]=="."){continue}if(i[t]==".."){if(e.length>=2){e.pop()}}else{if(!e.length||i[t]!==""){e.push(i[t])}}}e=e.join("/");return e.indexOf("/")===0?e:"/"+e};e=i(e);if(typeof _MD5_HASHMAP!=="undefined"){var t=_MD5_HASHMAP[e];if(t){return t}}return e};var requirejs,require,define;(function(global){var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.4",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,apsp=ap.splice,isBrowser=!!(typeof window!=="undefined"&&navigator&&document),isWebWorker=!isBrowser&&typeof importScripts!=="undefined",readyRegExp=isBrowser&&navigator.platform==="PLAYSTATION 3"?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera=typeof opera!=="undefined"&&opera.toString()==="[object Opera]",contexts={},cfg={},globalDefQueue=[],useInteractive=false;function isFunction(e){return ostring.call(e)==="[object Function]"}function isArray(e){return ostring.call(e)==="[object Array]"}function each(e,i){if(e){var t;for(t=0;t<e.length;t+=1){if(e[t]&&i(e[t],t,e)){break}}}}function eachReverse(e,i){if(e){var t;for(t=e.length-1;t>-1;t-=1){if(e[t]&&i(e[t],t,e)){break}}}}function hasProp(e,i){return hasOwn.call(e,i)}function getOwn(e,i){return hasProp(e,i)&&e[i]}function eachProp(e,i){var t;for(t in e){if(hasProp(e,t)){if(i(e[t],t)){break}}}}function mixin(e,i,t,r){if(i){eachProp(i,function(i,n){if(t||!hasProp(e,n)){if(r&&typeof i!=="string"){if(!e[n]){e[n]={}}mixin(e[n],i,t,r)}else{e[n]=i}}})}return e}function bind(e,i){return function(){return i.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function getGlobal(e){if(!e){return e}var i=global;each(e.split("."),function(e){i=i[e]});return i}function makeError(e,i,t,r){var n=new Error(i+"\nhttp://requirejs.org/docs/errors.html#"+e);n.requireType=e;n.requireModules=r;if(t){n.originalError=t}return n}if(typeof define!=="undefined"){return}if(typeof requirejs!=="undefined"){if(isFunction(requirejs)){return}cfg=requirejs;requirejs=undefined}if(typeof require!=="undefined"&&!isFunction(require)){cfg=require;require=undefined}function newContext(e){var i,t,r,n,a,s={waitSeconds:7,baseUrl:"./",paths:{},pkgs:{},shim:{},map:{},config:{}},o={},f={},u=[],c={},l={},p=1,d=1;function h(e){var i,t;for(i=0;e[i];i+=1){t=e[i];if(t==="."){e.splice(i,1);i-=1}else if(t===".."){if(i===1&&(e[2]===".."||e[0]==="..")){break}else if(i>0){e.splice(i-1,2);i-=2}}}}function m(e,i,t){var r,n,a,o,f,u,c,l,p,d,m,g=i&&i.split("/"),x=g,b=s.map,v=b&&b["*"];if(e&&e.charAt(0)==="."){if(i){if(getOwn(s.pkgs,i)){x=g=[i]}else{x=g.slice(0,g.length-1)}e=x.concat(e.split("/"));h(e);n=getOwn(s.pkgs,r=e[0]);e=e.join("/");if(n&&e===r+"/"+n.main){e=r}}else if(e.indexOf("./")===0){e=e.substring(2)}}if(t&&(g||v)&&b){o=e.split("/");for(f=o.length;f>0;f-=1){c=o.slice(0,f).join("/");if(g){for(u=g.length;u>0;u-=1){a=getOwn(b,g.slice(0,u).join("/"));if(a){a=getOwn(a,c);if(a){l=a;p=f;break}}}}if(l){break}if(!d&&v&&getOwn(v,c)){d=getOwn(v,c);m=f}}if(!l&&d){l=d;p=m}if(l){o.splice(0,p,l);e=o.join("/")}}return e}function g(e){if(isBrowser){each(scripts(),function(i){if(i.getAttribute("data-requiremodule")===e&&i.getAttribute("data-requirecontext")===r.contextName){i.parentNode.removeChild(i);return true}})}}function x(e){var i=getOwn(s.paths,e);if(i&&isArray(i)&&i.length>1){g(e);i.shift();r.require.undef(e);r.require([e]);return true}}function b(e){var i,t=e?e.indexOf("!"):-1;if(t>-1){i=e.substring(0,t);e=e.substring(t+1,e.length)}return[i,e]}function v(e,i,t,n){var a,s,o,f,u=null,l=i?i.name:null,h=e,g=true,x="";if(!e){g=false;e="_@r"+(p+=1)}f=b(e);u=f[0];e=f[1];if(u){u=m(u,l,n);s=getOwn(c,u)}if(e){if(u){if(s&&s.normalize){x=s.normalize(e,function(e){return m(e,l,n)})}else{x=m(e,l,n)}}else{x=m(e,l,n);f=b(x);u=f[0];x=f[1];t=true;a=r.nameToUrl(x)}}o=u&&!s&&!t?"_unnormalized"+(d+=1):"";return{prefix:u,name:x,parentMap:i,unnormalized:!!o,url:a,originalName:h,isDefine:g,id:(u?u+"!"+x:x)+o}}function q(e){var i=e.id,t=getOwn(o,i);if(!t){t=o[i]=new r.Module(e)}return t}function E(e,i,t){var r=e.id,n=getOwn(o,r);if(hasProp(c,r)&&(!n||n.defineEmitComplete)){if(i==="defined"){t(c[r])}}else{q(e).on(i,t)}}function w(e,i){var t=e.requireModules,r=false;if(i){i(e)}else{each(t,function(i){var t=getOwn(o,i);if(t){t.error=e;if(t.events.error){r=true;t.emit("error",e)}}});if(!r){req.onError(e)}}}function y(){if(globalDefQueue.length){apsp.apply(u,[u.length-1,0].concat(globalDefQueue));globalDefQueue=[]}}n={require:function(e){if(e.require){return e.require}else{return e.require=r.makeRequire(e.map)}},exports:function(e){e.usingExports=true;if(e.map.isDefine){if(e.exports){return e.exports}else{return e.exports=c[e.map.id]={}}}},module:function(e){if(e.module){return e.module}else{return e.module={id:e.map.id,uri:e.map.url,config:function(){return s.config&&getOwn(s.config,e.map.id)||{}},exports:c[e.map.id]}}}};function k(e){delete o[e]}function M(e,i,t){var r=e.map.id;if(e.error){e.emit("error",e.error)}else{i[r]=true;each(e.depMaps,function(r,n){var a=r.id,s=getOwn(o,a);if(s&&!e.depMatched[n]&&!t[a]){if(getOwn(i,a)){e.defineDep(n,c[a]);e.check()}else{M(s,i,t)}}});t[r]=true}}function S(){var e,t,n,f,u=s.waitSeconds*1e3,c=u&&r.startTime+u<(new Date).getTime(),l=[],p=[],d=false,h=true;if(i){return}i=true;eachProp(o,function(i){e=i.map;t=e.id;if(!i.enabled){return}if(!e.isDefine){p.push(i)}if(!i.error){if(!i.inited&&c){if(x(t)){f=true;d=true}else{l.push(t);g(t)}}else if(!i.inited&&i.fetched&&e.isDefine){d=true;if(!e.prefix){return h=false}}}});if(c&&l.length){n=makeError("timeout","Load timeout for modules: "+l,null,l);n.contextName=r.contextName;return w(n)}if(h){each(p,function(e){M(e,{},{})})}if((!c||f)&&d){if((isBrowser||isWebWorker)&&!a){a=setTimeout(function(){a=0;S()},50)}}i=false}t=function(e){this.events=getOwn(f,e.id)||{};this.map=e;this.shim=getOwn(s.shim,e.id);this.depExports=[];this.depMaps=[];this.depMatched=[];this.pluginMaps={};this.depCount=0};t.prototype={init:function(e,i,t,r){r=r||{};if(this.inited){return}this.factory=i;if(t){this.on("error",t)}else if(this.events.error){t=bind(this,function(e){this.emit("error",e)})}this.depMaps=e&&e.slice(0);this.errback=t;this.inited=true;this.ignore=r.ignore;if(r.enabled||this.enabled){this.enable()}else{this.check()}},defineDep:function(e,i){if(!this.depMatched[e]){this.depMatched[e]=true;this.depCount-=1;this.depExports[e]=i}},fetch:function(){if(this.fetched){return}this.fetched=true;r.startTime=(new Date).getTime();var e=this.map;if(this.shim){r.makeRequire(this.map,{enableBuildCallback:true})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))}else{return e.prefix?this.callPlugin():this.load()}},load:function(){var e=this.map.url;if(!l[e]){l[e]=true;r.load(this.map.id,e)}},check:function(){if(!this.enabled||this.enabling){return}var e,i,t=this.map.id,n=this.depExports,exports=this.exports,a=this.factory;if(!this.inited){this.fetch()}else if(this.error){this.emit("error",this.error)}else if(!this.defining){this.defining=true;if(this.depCount<1&&!this.defined){if(isFunction(a)){if(this.events.error){try{exports=r.execCb(t,a,n,exports)}catch(s){e=s}}else{exports=r.execCb(t,a,n,exports)}if(this.map.isDefine){i=this.module;if(i&&i.exports!==undefined&&i.exports!==this.exports){exports=i.exports}else if(exports===undefined&&this.usingExports){exports=this.exports}}if(e){e.requireMap=this.map;e.requireModules=[this.map.id];e.requireType="define";return w(this.error=e)}}else{exports=a}this.exports=exports;if(this.map.isDefine&&!this.ignore){c[t]=exports;if(req.onResourceLoad){req.onResourceLoad(r,this.map,this.depMaps)}}delete o[t];this.defined=true}this.defining=false;if(this.defined&&!this.defineEmitted){this.defineEmitted=true;this.emit("defined",this.exports);this.defineEmitComplete=true}}},callPlugin:function(){var e=this.map,i=e.id,t=v(e.prefix);this.depMaps.push(t);E(t,"defined",bind(this,function(t){var n,a,f,u=this.map.name,c=this.map.parentMap?this.map.parentMap.name:null,l=r.makeRequire(e.parentMap,{enableBuildCallback:true});if(this.map.unnormalized){if(t.normalize){u=t.normalize(u,function(e){return m(e,c,true)})||""}a=v(e.prefix+"!"+u,this.map.parentMap);E(a,"defined",bind(this,function(e){this.init([],function(){return e},null,{enabled:true,ignore:true})}));f=getOwn(o,a.id);if(f){this.depMaps.push(a);if(this.events.error){f.on("error",bind(this,function(e){this.emit("error",e)}))}f.enable()}return}n=bind(this,function(e){this.init([],function(){return e},null,{enabled:true})});n.error=bind(this,function(e){this.inited=true;this.error=e;e.requireModules=[i];eachProp(o,function(e){if(e.map.id.indexOf(i+"_unnormalized")===0){k(e.map.id)}});w(e)});n.fromText=bind(this,function(t,a){var o=e.name,f=v(o),u=useInteractive;if(a){t=a}if(u){useInteractive=false}q(f);if(hasProp(s.config,i)){s.config[o]=s.config[i]}try{req.exec(t)}catch(c){return w(makeError("fromtexteval","fromText eval for "+i+" failed: "+c,c,[i]))}if(u){useInteractive=true}this.depMaps.push(f);r.completeLoad(o);l([o],n)});t.load(e.name,l,n,s)}));r.enable(t,this);this.pluginMaps[t.id]=t},enable:function(){this.enabled=true;this.enabling=true;each(this.depMaps,bind(this,function(e,i){var t,a,s;if(typeof e==="string"){e=v(e,this.map.isDefine?this.map:this.map.parentMap,false,!this.skipMap);this.depMaps[i]=e;s=getOwn(n,e.id);if(s){this.depExports[i]=s(this);return}this.depCount+=1;E(e,"defined",bind(this,function(e){this.defineDep(i,e);this.check()}));if(this.errback){E(e,"error",this.errback)}}t=e.id;a=o[t];if(!hasProp(n,t)&&a&&!a.enabled){r.enable(e,this)}}));eachProp(this.pluginMaps,bind(this,function(e){var i=getOwn(o,e.id);if(i&&!i.enabled){r.enable(e,this)}}));this.enabling=false;this.check()},on:function(e,i){var t=this.events[e];if(!t){t=this.events[e]=[]}t.push(i)},emit:function(e,i){each(this.events[e],function(e){e(i)});if(e==="error"){delete this.events[e]}}};function O(e){if(!hasProp(c,e[0])){q(v(e[0],null,true)).init(e[1],e[2])}}function A(e,i,t,r){if(e.detachEvent&&!isOpera){if(r){e.detachEvent(r,i)}}else{e.removeEventListener(t,i,false)}}function P(e){var i=e.currentTarget||e.srcElement;A(i,r.onScriptLoad,"load","onreadystatechange");A(i,r.onScriptError,"error");return{node:i,id:i&&i.getAttribute("data-requiremodule")}}function j(){var e;y();while(u.length){e=u.shift();if(e[0]===null){return w(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]))}else{O(e)}}}r={config:s,contextName:e,registry:o,defined:c,urlFetched:l,defQueue:u,Module:t,makeModuleMap:v,nextTick:req.nextTick,configure:function(e){if(e.baseUrl){if(e.baseUrl.charAt(e.baseUrl.length-1)!=="/"){e.baseUrl+="/"}}var i=s.pkgs,t=s.shim,n={paths:true,config:true,map:true};eachProp(e,function(e,i){if(n[i]){if(i==="map"){mixin(s[i],e,true,true)}else{mixin(s[i],e,true)}}else{s[i]=e}});if(e.shim){eachProp(e.shim,function(e,i){if(isArray(e)){e={deps:e}}if((e.exports||e.init)&&!e.exportsFn){e.exportsFn=r.makeShimExports(e)}t[i]=e});s.shim=t}if(e.packages){each(e.packages,function(e){var t;e=typeof e==="string"?{name:e}:e;t=e.location;i[e.name]={name:e.name,location:t||e.name,main:(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}});s.pkgs=i}eachProp(o,function(e,i){if(!e.inited&&!e.map.unnormalized){e.map=v(i)}});if(e.deps||e.callback){r.require(e.deps||[],e.callback)}},makeShimExports:function(e){function i(){var i;if(e.init){i=e.init.apply(global,arguments)}return i||e.exports&&getGlobal(e.exports)}return i},makeRequire:function(i,t){t=t||{};function a(s,f,u){var l,p,d;if(t.enableBuildCallback&&f&&isFunction(f)){f.__requireJsBuild=true}if(typeof s==="string"){if(isFunction(f)){return w(makeError("requireargs","Invalid require call"),u)}if(i&&hasProp(n,s)){return n[s](o[i.id])}if(req.get){return req.get(r,s,i)}p=v(s,i,false,true);l=p.id;if(!hasProp(c,l)){return w(makeError("notloaded",'Module name "'+l+'" has not been loaded yet for context: '+e+(i?"":". Use require([])")))}return c[l]}j();r.nextTick(function(){j();d=q(v(null,i));d.skipMap=t.skipMap;d.init(s,f,u,{enabled:true});S()});return a}mixin(a,{isBrowser:isBrowser,toUrl:function(e){var t,n,a=e.lastIndexOf("."),s=e.split("/")[0],o=s==="."||s==="..";if(a!==-1&&(!o||a>1)){t=e.substring(a,e.length);e=e.substring(0,a)}n=r.nameToUrl(m(e,i&&i.id,true),t||".fake");return t?n:n.substring(0,n.length-5)},defined:function(e){return hasProp(c,v(e,i,false,true).id)},specified:function(e){e=v(e,i,false,true).id;return hasProp(c,e)||hasProp(o,e)}});if(!i){a.undef=function(e){y();var t=v(e,i,true),r=getOwn(o,e);delete c[e];delete l[t.url];delete f[e];if(r){if(r.events.defined){f[e]=r.events}k(e)}}}return a},enable:function(e){var i=getOwn(o,e.id);if(i){q(e).enable()}},completeLoad:function(e){var i,t,r,n=getOwn(s.shim,e)||{},a=n.exports;y();while(u.length){t=u.shift();if(t[0]===null){t[0]=e;if(i){break}i=true}else if(t[0]===e){i=true}O(t)}r=getOwn(o,e);if(!i&&!hasProp(c,e)&&r&&!r.inited){if(s.enforceDefine&&(!a||!getGlobal(a))){if(x(e)){return}else{return w(makeError("nodefine","No define call for "+e,null,[e]))}}else{O([e,n.deps||[],n.exportsFn])}}S()},nameToUrl:function(e,i){var t,r,n,a,o,f,u,c,l;if(req.jsExtRegExp.test(e)){c=e+(i||"")}else{t=s.paths;r=s.pkgs;o=e.split("/");for(f=o.length;f>0;f-=1){u=o.slice(0,f).join("/");n=getOwn(r,u);l=getOwn(t,u);if(l){if(isArray(l)){l=l[0]}o.splice(0,f,l);break}else if(n){if(e===n.name){a=n.location+"/"+n.main}else{a=n.location}o.splice(0,f,a);break}}c=o.join("/");c+=i||(/\?/.test(c)?"":".js");c=(c.charAt(0)==="/"||c.match(/^[\w\+\.\-]+:/)?"":s.baseUrl)+c}return s.urlArgs?c+((c.indexOf("?")===-1?"?":"&")+s.urlArgs):c},load:function(e,i){req.load(r,e,i)},execCb:function(e,i,t,exports){return i.apply(exports,t)},onScriptLoad:function(e){if(e.type==="load"||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var i=P(e);r.completeLoad(i.id)}},onScriptError:function(e){var i=P(e);if(!x(i.id)){return w(makeError("scripterror","Script error",e,[i.id]))}}};r.require=r.makeRequire();return r}req=requirejs=function(e,i,t,r){var n,a,s=defContextName;if(!isArray(e)&&typeof e!=="string"){a=e;if(isArray(i)){e=i;i=t;t=r}else{e=[]}}if(a&&a.context){s=a.context}n=getOwn(contexts,s);if(!n){n=contexts[s]=req.s.newContext(s)}if(a){n.configure(a)}return n.require(e,i,t)};req.config=function(e){return req(e)};req.nextTick=typeof setTimeout!=="undefined"?function(e){setTimeout(e,4)}:function(e){e()};if(!require){require=req}req.version=version;req.jsExtRegExp=/^\/|:|\?|\.js$/;req.isBrowser=isBrowser;s=req.s={contexts:contexts,newContext:newContext};req({});each(["toUrl","undef","defined","specified"],function(e){req[e]=function(){var i=contexts[defContextName];return i.require[e].apply(i,arguments)}});if(isBrowser){head=s.head=document.getElementsByTagName("head")[0];baseElement=document.getElementsByTagName("base")[0];if(baseElement){head=s.head=baseElement.parentNode}}req.onError=function(e){throw e};req.load=function(e,i,t){var r=e&&e.config||{},n;if(isBrowser){n=r.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");n.type=r.scriptType||"text/javascript";n.charset="utf-8";n.async=true;n.setAttribute("data-requirecontext",e.contextName);n.setAttribute("data-requiremodule",i);if(n.attachEvent&&!(n.attachEvent.toString&&n.attachEvent.toString().indexOf("[native code")<0)&&!isOpera){useInteractive=true;n.attachEvent("onreadystatechange",e.onScriptLoad)}else{n.addEventListener("load",e.onScriptLoad,false);n.addEventListener("error",e.onScriptError,false)}n.src=_GET_HASHMAP(t);currentlyAddingScript=n;if(baseElement){head.insertBefore(n,baseElement)}else{head.appendChild(n)}currentlyAddingScript=null;return n}else if(isWebWorker){importScripts(t);e.completeLoad(i)}};function getInteractiveScript(){if(interactiveScript&&interactiveScript.readyState==="interactive"){return interactiveScript}eachReverse(scripts(),function(e){if(e.readyState==="interactive"){return interactiveScript=e}});return interactiveScript}if(isBrowser){eachReverse(scripts(),function(e){if(!head){head=e.parentNode}dataMain=e.getAttribute("data-main");if(dataMain){if(!cfg.baseUrl){src=dataMain.split("/");mainScript=src.pop();subPath=src.length?src.join("/")+"/":"./";cfg.baseUrl=subPath;dataMain=mainScript}dataMain=dataMain.replace(jsSuffixRegExp,"");cfg.deps=cfg.deps?cfg.deps.concat(dataMain):[dataMain];return true}})}define=function(e,i,t){var r,n;if(typeof e!=="string"){t=i;i=e;e=null}if(!isArray(i)){t=i;i=[]}if(!i.length&&isFunction(t)){if(t.length){t.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(e,t){i.push(t)});i=(t.length===1?["require"]:["require","exports","module"]).concat(i)}}if(useInteractive){r=currentlyAddingScript||getInteractiveScript();if(r){if(!e){e=r.getAttribute("data-requiremodule")}n=contexts[r.getAttribute("data-requirecontext")]}}(n?n.defQueue:globalDefQueue).push([e,i,t])};define.amd={jQuery:true};req.exec=function(text){return eval(text)};req(cfg)})(this);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/