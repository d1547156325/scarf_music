var singleInstance=function(e){ting.DM=".baidu.com";if(location.host.indexOf("http://static0.qianqian.com/web/static/j/taihe.com")!=-1){ting.DM=".taihe.com"}else if(location.host.indexOf("http://static0.qianqian.com/web/static/j/qianqian.com")!=-1){ting.DM=".qianqian.com"}var a="__methodName",t="__argsValue",i="",r="";var n="__m",l="__a",o="__o",s="__s",f="fr";var u="_baidu_music_naga_",c=u+"box",d=u+"bridge",m=0,h="_baidu_naga_slc_messageaccess";var p="//music"+ting.DM,b="//play"+ting.DM,g="/",v="http://static0.qianqian.com/player/bridge.html",y="http://static0.qianqian.com/player/boxproxy.html";var x=b+"/player/static/flash/SLC.swf";var _=function(e){var e=e||"";return encodeURIComponent(e.toString())};var C={"http://static0.qianqian.com/web/static/j/mbc.ps":"playSong","http://static0.qianqian.com/web/static/j/mbc.as":"addSong","http://static0.qianqian.com/web/static/j/mbc.pa":"playAlbum","http://static0.qianqian.com/web/static/j/mbc.aa":"addAlbum","http://static0.qianqian.com/web/static/j/mbc.pd":"playDiy","http://static0.qianqian.com/web/static/j/mbc.ad":"addDiy","http://static0.qianqian.com/web/static/j/mbc.pt":"playTop","http://static0.qianqian.com/web/static/j/mbc.at":"addTop","http://static0.qianqian.com/web/static/j/mbc.pb":"playBubble","http://static0.qianqian.com/web/static/j/mbc.ab":"addBubble","http://static0.qianqian.com/web/static/j/mbc.af":"addFavorList","http://static0.qianqian.com/web/static/j/mbc.uf":"updateFavor","mboxCtrl.playSong":"playSong","mboxCtrl.addSong":"addSong","mboxCtrl.playAlbum":"playAlbum","mboxCtrl.addAlbum":"addAlbum","mboxCtrl.playDiy":"playDiy","mboxCtrl.addDiy":"addDiy","mboxCtrl.playTop":"playTop","mboxCtrl.addTop":"addTop","mboxCtrl.playBubble":"playBubble","mboxCtrl.addBubble":"addBubble","mboxCtrl.playLocal":"playLocal","mboxCtrl.playLatest":"playLatest","mboxCtrl.playCollection":"playCollection","mboxCtrl.addFavorList":"addFavorList","mboxCtrl.updateFavor":"updateFavor","mboxCtrl.playArtist":"playArtist","mboxCtrl.addArtist":"addArtist"};var I=function(a){a=a?a:e.location.search;var t=a.length>0?a.substring(1):"",i={},r=t.split("&"),n=r.length;for(var l=0;l<n;l++){var o=r[l].split("="),s=o[0],f=o[1];i[s]=f}return i};var w=function(e){var a=/[<>]/gi;return!a.test(decodeURIComponent(e))};var O=function(e){var a="9.0.0";var t,i;var r=navigator.userAgent.indexOf("Windows NT 6.2")>-1&&$.browser.msie&&parseInt($.browser.version,10)>=10;if(r){return false}if(e){e=e.split(".");a=a.split(".");for(var n=0;n<3;n++){t=parseInt(e[n],10);i=parseInt(a[n],10);if(i<t){return true}else if(i>t){return false}}return true}else{return false}}($.swf.version);var F=function(){return location.search};var N=function(){return I()};var S=function(){return e.location.hash.indexOf("#loaded")<0};var A=function(){e.location.hash="loaded"};var T=function(){var e,a,t;e=[];a=function(a){if(t){a()}else{e.push(a)}};a.fire=function(){while(e.length){e.shift()()}t=true};a.extinguish=function(){t=false};a.wettish=function(){this.fire();this.extinguish()};a.clear=function(){while(e.length){e.shift()}this.extinguish()};return a};var j=function(){this.hasCommandByUrl=false;this.init()};var B=false;j.prototype={init:function(a){if(O){this.flashId="";this.flashFuze=new T;var t=document.createElement("div");t.className="slc";$(t).attr({});$.swf.create({id:this.flashId=u+"flash_"+m++,url:x+"?r="+Math.random(),width:"1",height:"1",allowScriptAccess:"always",ver:"9.0.0"},t);document.body.appendChild(t);this.flashObj=$.swf.getMovie(this.flashId);var i=this;this.flashInterval=e.setInterval(function(){if(i.flashObj&&i.flashObj.flashInit){clearInterval(i.flashInterval);B=true;i.flashFuze.fire()}},100)}},openBox:function(a,t,i){if(!$.cookie("flash_tip_pop")){var r=navigator;var c=false;var m=false;var h=r.userAgent.toLowerCase();var y=/chrome\/[\d.]+/gi;if(h.indexOf("chrome")>0){var x=h.match(y);var C=(x+"").replace(/[^0-9.]/gi,"").substring(0,2);c=Number(C)>=54?true:false}if(h.indexOf("safari")>0&&h.indexOf("chrome")<0){m=true}if((c||m)&&r.plugins&&r.mimeTypes.length){var I=r.plugins["Shockwave Flash"];if(I===undefined){}else{if(I&&I.filename!="internal-not-yet-present"){if(!B){}}else{}}}}var w=this,F=location.pathname.split("/");var N=F;for(var S=0;S<F.length;S++){if(F[S]=="song"){N=[],N[0]=F[S],N[1]=F[S+1];break}}F=N.join("/");try{var A=pageId;if(F=="/"){if(A=="ting-music-hao123-index"){F="/hao123"}else if(A=="ting-music-small-index"){F="/new_index_01"}else{F="/"}}}catch(T){}var j={moduleName:i.moduleName,fr:i.fr||"",sValue:i.searchValue||"",cancel:i.cancel||false,filterFee:i.filterFee||0};if(a=="mboxCtrl.addFavorList"){j.listTitle=i.listTitle||""}i=typeof i=="undefined"?{}:typeof i=="string"?{moduleName:i}:i;j.moduleName=i.moduleName?F+"||"+i.moduleName:"";var D=a?n+"="+a:"",L=t?"&"+l+"="+_(t):"",k=j.moduleName?o+"="+j.moduleName:"",M=j.fr?f+"="+j.fr:"",U=j.sValue?s+"="+j.sValue:"",R=j.filterFee?"ff="+j.filterFee:"",V=D||L||k||U||R?"?":"";var E=[];if(O&&B){E.push(b);E.push(g)}else{E.push(p);E.push(v)}if(V){E.push(V);E.push(D+L);E.push(D+L&&k?"&":"");E.push(k);E.push(D+L&&M?"&":"");E.push(M);E.push(D+L&&U?"&":"");E.push(U);E.push(D+L&&R?"&":"");E.push(R)}E=E.join("");if(O&&B){if(this.flashObj){if(this.flashObj.isExist&&!this.flashObj.isExist(u)&&a!="mboxCtrl.addFavorList"&&a!="mboxCtrl.updateFavor"){e.open(E,u);ting.logger.log("click",{page:"invoketingbox",pos:"fl_1",sub:"flash"});ting.logger.log("click",{page:"invokeflashtingbox",pos:"by_flash",sub:""})}else{this.flashFuze(function(){w.flashObj.sendMessage(u,[a,_(t),j])})}}}else{try{e.open(E,d);ting.logger.log("click",{page:"invoketingbox",pos:"fl_1",sub:"bridge"})}catch(T){}}ting.logger.log("click",{pos:"totingbox",page:"communicationsend",sub:""})},initBridgePage:function(){if(e.top===e.self){location.href=b+g+F()}else{e.name=d;if(F()){var a=b+y+F()+"&__r=naga_VERSION_TAG";$('<iframe src="'+a+'" style="display:none"></ifame>').appendTo("body")}}},initProxyPage:function(){var e=N();var i=e[n]||e[a],r=e[l]||e[t],s=e[o],u=e[f];if(w(i+r+s+u)){try{r=decodeURIComponent(r).replace(/(_{2,})/g,"_");var c=C[i],d={moduleName:s,fr:u};top.top.mboxCtrl[c](r,d)}catch(m){}}},initSinglePage:function(){if(O){e[h]=function(e){var a=e&&e[0];var t=a[0],i=a[1]||"",r=a[2]||"";if(w(t+i+r)){try{i=decodeURIComponent(i).replace(/(_{2,})/g,"_");mboxCtrl[C[t]](i,r)}catch(n){}}};var i=this;this.flashFuze(function(){i.flashObj.connectServers(u,h);$(e).on("beforeunload",function(){i.flashObj.closeServers()});$(e).on("unload",function(){i.flashObj.closeServers()})})}else{e.name=c;var r=p+v+"?__r=naga_VERSION_TAG";$('<iframe src="'+r+'" style="display:none"></iframe>').attr("name","bridgeName").appendTo("body")}if(S()&&F()){var s=N(),d=s[n]||s[a],m=s[l]||s[t],b=s[o],g=s[f];if(w(d+m+b+g)){if(d){this.hasCommandByUrl=true;A()}try{m=decodeURIComponent(m).replace(/(_{2,})/g,"_");mboxCtrl[C[d]](m,{moduleName:b,fr:g})}catch(y){}}}},encode:function(e){return _(e)},hasCommand:function(){return this.hasCommandByUrl}};return j}(window);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/