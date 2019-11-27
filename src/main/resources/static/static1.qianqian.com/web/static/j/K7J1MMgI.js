(function(){ting.tip={};ting.tip.play=function(){var e=$(this);require(["tip"],function(){e.tip().tip("tipup",{msg:"已开始播放",iconClass:"tip-success"})})};ting.tip.collect=function(){var e=$(this);require(["tip"],function(){e.tip().tip("tipup",{msg:"已保存到我的收藏",iconClass:"tip-success"})})};ting.tip.add=function(){var e=$(this);require(["tip"],function(){e.tip().tip("tipup",{msg:"添加成功",iconClass:"tip-success"})})};var e=function(e,i){if(!i){return}!e.moduleName&&(e.moduleName=i.parents(".js-mod").data("js-mod-name"))};var i={};i.add=function(e,i,t){$(t||document).on("click",e,i)};i.add(".js-play-song",function(i){var t=$(this);var a=t.parent().data("args");var o={page:ting.logger.getPage(),pos:"play_song",songcount:1};if(a.id){a.id.split?a.id=a.id.split(","):"";e(a,t);var l={moduleName:a.moduleName||"",id:a.id||"",mediaType:1,albumId:a.albumId||"",siPresaleFlag:a.siPresaleFlag||"",resourceTypeExt:a.pay_type||"",songPic:a.songPic||"",songTitle:a.songTitle||"",songPublishTime:a.songPublishTime||""};if(l.resourceTypeExt&&(l.resourceTypeExt==3||l.resourceTypeExt==4)){ting.checkSellResourse(l.id,l.albumId,function(e){l.isPay=e;ting.media.playSong(l.id,l);if(l.isPay!=1||l.siPresaleFlag==1||l._aiPresaleFlag==1){}else{ting.tip.play.call(t)}});o.song_title=l.songTitle;o.song_id=l.id;o.isPay=2}else{ting.media.playSong(l.id,l.moduleName);ting.tip.play.call(t)}ting.logger.plogClick("play_"+a.type);ting.logger.log("play_song",o)}});i.add("#js-random-focus li",function(){var e=$(this).data("title");ting.logger.log("click",{page:"home",pos:"jdt",sub:e})});i.add(".js-play-song-yyr",function(){var i=$(this);var t=i.parent().data("args");if(t.id){var a=t.id.split?t.id.split(","):t.id;for(var o=0,l=a.length;o<l;o++){a[o]=73819e3+(a[o]-0)}e(t,i);ting.media.playSong(a,t.moduleName);ting.tip.play.call(i);ting.logger.plogClick("play_song_yyr")}});i.add(".js-play-menu",function(i){var t=$(this);var a=t.parent().data("args");if(a.id){e(a,t);ting.media.playSongMenu(a.id,a.moduleName);ting.tip.play.call(t);ting.logger.plogClick("play_"+a.type||"menu")}});i.add(".js-play-album",function(i){var t=$(this);var a=t.parent().data("args");if(!a.moduleName){e(a,t)}if(a.id){$.when($.ajax({type:"POST",async:false,dataType:"json",url:"/data/album/info?id="+a.id,data:""})).done(function(e){var i=e.data[a.id],o={moduleName:i.moduleName||a.moduleName||"",searchValue:i.searchValue||"",mediaType:2,albumId:i.album_id||"",_aiPresaleFlag:i.ai_presale_flag||"",resourceTypeExt:i.resource_type_ext||"",albumPic:i.pic_s180||"",albumTitle:i.title||"",albumPublishTime:i.publishtime||""};if(o.resourceTypeExt&&(o.resourceTypeExt==3||o.resourceTypeExt==4)){ting.checkSellResourse("",o.albumId,function(e,i){o.isPay=i;ting.media.playAlbum(a.id||o.albumId,o);if(o.isPay!=1||o.siPresaleFlag==1||o._aiPresaleFlag==1){}else{ting.tip.play.call(t)}})}else{ting.media.playAlbum(a.id||o.albumId,o);ting.tip.play.call(t)}});ting.logger.plogClick("play_"+a.type||"album")}});i.add(".js-play-list",function(e){});i.add(".js-add",function(i){var t=$(this);var a=t.parent().data("args");var o={page:ting.logger.getPage(),pos:"add_song",songcount:1};if(a.id){e(a,t);var l={moduleName:a.moduleName||"",id:a.id||"",mediaType:1,albumId:a.albumId||"",siPresaleFlag:a.siPresaleFlag||"",resourceTypeExt:a.pay_type||"",songPic:a.songPic||"",songTitle:a.songTitle||"",songPublishTime:a.songPublishTime||""};if(l.resourceTypeExt&&(l.resourceTypeExt==3||l.resourceTypeExt==4)){ting.checkSellResourse(l.id,l.albumId,function(e){l.isPay=e;ting.media.addSong(l.id,l);if(l.isPay!=1||l.siPresaleFlag==1||l._aiPresaleFlag==1){}else{ting.tip.add.call(t)}});o.song_title=l.songTitle;o.song_id=l.id;o.isPay=2}else{ting.media.addSong(a.id,a.moduleName);ting.tip.add.call(t)}ting.logger.plogClick("add_"+a.type);ting.logger.log("add_song",o)}});i.add(".js-collect",function(e){var i=$(this),t=i.parent().data("args"),a={page:ting.logger.getPage(),pos:"collect_song",songcount:1};ting.connect.collect(null,{ids:t.id,type:t.type},function(e){ting.tip.collect.call(i);if(ting&&ting.logger){a.state=1;ting.logger.log("collect",a)}ting.media.collectSong(t.id)},function(e){var t="tip-error";switch(e.errorCode){case 22322:t="tip-warning";e.errTip="歌曲已被保存";break;case 22331:e.errTip="云空间已满，去<a href ='http://yinyueyun.baidu.taihe/' target = '_blank'>整理云空间</a>吧！";break;case 22232:e.errTip="对不起，千千音乐只能在中国内地提供服务";break;default:e.errTip="操作失败，请稍候再试";break}var o={msg:e.errTip?e.errTip:"操作失败",iconClass:t};if(e.errorCode=22331){o.showTime=5e3}a.state=e.errorCode;ting.logger.log("collect",a);require(["tip"],function(){i.tip().tip("tipup",o)})})})})();$(".js-change-version").on("click",function(){if(!$.cookie("oldV")){$.cookie("oldV","true",{path:"/",expires:30})}else{$.cookie("oldV",null,{path:"/"})}var e={page:"newhome",pos:"change"};ting.logger.log("click",e);location.reload();$(this).off()});$("#fixed-panel .panel-item").on("mouseenter",function(e){$(this).find(".item-line").hide();$(this).prev().find(".item-line").hide()}).on("mouseleave",function(e){$(this).find(".item-line").show();if($(this).hasClass("idea-box")){if($(".js-go-top").is(":visible")){$(this).find(".item-line").show()}else{$(this).find(".item-line").hide()}}$(this).prev().find(".item-line").show()});var checkTopDisToShow=function(){var e=document.body.scrollTop||document.documentElement.scrollTop;if(e>760){$(".js-go-top").show();$(".js-go-top").prev().find(".item-line").show()}else{$(".js-go-top").hide();$(".js-go-top").prev().find(".item-line").hide()}};checkTopDisToShow();$(window).bind("scroll",checkTopDisToShow);$(".js-go-top").click(function(e){var i=window.opera?document.compatMode=="CSS1Compat"?$("html"):$("body"):$("html,body");i.stop().animate({scrollTop:0},200);$(this).blur();e.preventDefault();e.stopPropagation()});function s(e){if(document.f1.key.value.length>0){var i={news:{url:"http://news.baidu.com/",word:"ns?tn=news&cl=2&rn=20&ct=1&ie=utf-8&word="},www:{url:"https://www.baidu.com/",word:"s?cl=3&wd="},tieba:{url:"http://tieba.baidu.com/",word:"f?ie=utf-8&kw="},zhidao:{url:"http://zhidao.baidu.com/",word:"search?pn=0&rn=10&lm=0&word="},image:{url:"http://image.baidu.com/",word:"search/index?ct=201326592&cl=2&nc=1&lm=-1&st=-1&tn=baiduimage&istype=2&fm=&pv=&z=0&ie=utf-8&word="},v:{url:"https://www.baidu.com/",word:"/sf/vsearch?pd=video&tn=vsearch&ie=utf-8&wd="},map:{url:"http://map.baidu.com/",word:"?newmap=1&ie=utf-8&s=s%26wd%3D"},baike:{url:"http://baike.baidu.com/",word:"search/word?enc=utf8&word="},wenku:{url:"http://wenku.baidu.com/",word:"search?ie=utf-8&word="}};var t=e.href,a=/^(http|https):\/\/([^.]+)\./,o=t.match(a)[2],l=e.href.split("?"),n=document.getElementById("ww");var s=encodeURIComponent(n.value);if(n.value==n.getAttribute("data-default")){e.href=i[o].url}else{e.href=i[o].url+i[o].word+s}}}require(["sug/init"]);var ting=window.ting||{};window.BDUS={vipState:null};$(".hao123-header-box .grid").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")});ting.updateUserbar=function(){require(["ting/userbar/init_taihe"],function(){$.ajax({url:"/data/user/info",dataType:"jsonp",jsonpCallback:"enterState_taihe"})})};ting.updateUserbar();(function(){window.BDUS={vipState:null};var e=document.createElement("script");e.type="text/javascript";e.src="../../../../static0.qianqian.com/pc-tpass/prd/scripts/jsdk/tpass-3.0.0.js"/*tpa=http://static0.qianqian.com/pc-tpass/prd/scripts/jsdk/tpass-3.0.0.js*/;$("body").append(e);ting.showTip=function(e){var i={$tar:null,type:null,msg:null,iconClass:null,showTime:2e3,cancelEvent:null,reason:""};var t=$.extend(i,e);var a=['<div class="tipLayer multi-tip" style="position: absolute;display: block;">','<div class="m_m">','<div class="content">','<div class="tip-head">',"</div>","</div>","</div>",'<div class="tip-arrow" style="left: 114px;"></div>',"</div>"].join("");if(!$(".tipLayer").length){$(a).appendTo($("body"));$tip=$(".tipLayer");switch(t.type){case"needgoldvip":t.msg=['<div class="tip-needgoldvip"><span class="text">应唱片公司要求，该资源需付费使用， </span>','<span class="text">开通会员即可自由畅享哦。</span>','<a class="btn" target="_blank" href="http://static1.qianqian.com/vip/payment?level=gold&goldonly=1"></a></div>'].join("");t.iconClass="icon-tip-needgoldvip";t.cancelEvent="blur";break}$tipHead=$tip.find(".tip-head");$tipHead.append('<span class="tip-icon '+t.iconClass+'"></span>');$tipHead.append(t.msg)}var o=t.$tar.offset();var l=$tip.offset();var n={top:o.top-$tip.height()-15,left:o.left-($tip.width()-t.$tar.width())/2};var s=$tip.find(".tip-arrow");var r={left:$tip.width()/2};if(n.top<0){n.top=o.top+t.$tar.height()+10;r.top=-s.height();r.bottom="auto";$tip.removeClass("up").addClass("down")}else{$tip.removeClass("down").addClass("up")}$tip.css(n);s.css(r);var d=$tip.find(".btn");d.off("click");d.on("click",function(){ting.logger.log("click",{pid:"304",page:t.reason,pos:"block_pop",sub:"openvip"})});ting.logger.log("click",{pid:"304",page:t.reason,pos:"block_pop",sub:""});if(t.cancelEvent){}else{setTimeout(function(){$tip.remove()},t.showTime)}$("body").off("click");$("body").on("click",function(e){var i=$(e.target);if(i!=$tip&&!i.parents(".tipLayer").length&&i!=t.$tar&&i.parents().index(t.$tar)<0){$tip.remove()}})}})();$("#weixin_follow").hoverShow($("#weixin_detail"),{delay:0});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/