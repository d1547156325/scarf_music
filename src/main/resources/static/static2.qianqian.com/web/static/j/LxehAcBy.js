(function(t){t(function(){t("#ting_recommend .album-cover-hook").albumCover();t("#target_album .album-cover-hook").albumCover();t("#album_list .album-cover-hook").albumCover();t("#ting_recommend .rool-hook").roll({rollNum:5,screen:".rool-inner",rollList:".rool-inner ul",leftBtn:".rool-left-btn",rightBtn:".rool-right-btn"});t(".play-hotsong-hook").bind("click",function(){var a=t(this).data("playdata").ids,i={moduleName:t(this).data("playdata").moduleName,searchValue:t(this).data("playdata").searchValue};ting.media.playSong(a,i);return false});t(".album-add").bind("click",function(){var a=t(this).data("adddata").id,i={moduleName:t(this).data("adddata").moduleName,searchValue:t(this).data("adddata").searchValue};ting.media.playAlbum(a,i);$me.tip();$me.tip("tipup",{msg:"添加成功！",iconClass:"tip-success"})});t("#album_list .songlist-fold-hook").songlistExpand({moduleName:"albumlist",noAlbum:true});t("#artist_list .songlist-fold-hook").songlistExpand({moduleName:"artisthotsong"});require(["page/songlist/index"],function(){});require(["page/uuser/friend"],function(){});if(t(".copy-lyric").length){var a=new ZeroClipboard(null,{moviePath:"../../../static/flash/ZeroClipboard.swf"/*tpa=http://static2.qianqian.com/static/flash/ZeroClipboard.swf*/});a.on("load",function(){t(".copy-lyric-hook").show()});var i=null;a.on("complete",function(a,e){t(i).tip({msg:"复制成功",iconClass:"tip-success"});t(i).tip("tipup")});t(".copy-lyric").live("mouseenter",function(){var e=t(this)[0];a.setCurrent(e);i=e})}t("#lrc_list .down-lrc-btn").click(function(){window.location=t(this).metadata().href;return false});var e=t('input[name="key"]').val();var n=t("#query_type").val();var s=t("#tpl_type").val();var l=function(a,i,l){var o={page:"searchresult",sub:n,logtype:i,key:e},r=t("#result_container").data("tagstyle");if(r){o.tag=r}if(a){o.pos=a}if(s){o.Template=s}else{o.Template="search"}if(l){for(var c in l){o[c]=l[c]}}ting.logger.log("clicksearch",o)};l(null,"exposure_pv");var o=function(a){var i=t(a),e=a.tagName.toLowerCase(),n={};if(e==="a"||i.parents("a").length){var s=e==="a"?i:i.parents("a");n.isLink=true;n.lnk=s;if(s.hasClass("btn")){n.isLink=s.hasClass("btn-disabled")?false:true;n.lnkType="btn"}else if(s.hasClass("list-micon")){n.lnkType="ico"}else if(s.children("img").length){n.lnkType="img"}else{n.lnkType="txt"}}else{n.isLink=false}return n};var r=function(a){var i=t(a).parents("li.song-item-hook");if(i.length){var e=i.data("songitem").songItem.sid;if(e&&isNaN(e)){return true}}return false};var c=function(a,i,e){var n=0;t(a).each(function(){t(this).bind("mousedown",function(a){var s=o(a.target),c=s.isLink,g={};if(/group-/.test(i)){g.act="detailpage"}if(c){var u=s.lnk,d=s.lnkType,m=false;g.linktype=d,$item=u.parents("li.song-item-hook");g.resourcetype=0;if(d==="txt"||d==="ico"){m=r(u);if(m){g.resourcetype=1}}try{var p=u.parents(".song-item-hook").data("songitem").songItem;g.song_id=p.sid;g.original_song_id=p.oid}catch(a){}switch(d){case"ico":var f=u.data("action");g.act=f==="add"||f==="play"?"audio":f;break;case"btn":if(u.hasClass("play-selected-hook")||u.hasClass("add-selected-hook")){g.act="audio"}else if(u.hasClass("collect-selected-hook")){g.act="collect"}break;case"txt":if($item.length&&!(m&&u.parents(".song-title").length||u.children(".unreleased").length)){if(u.parents(".song-title").length){g.act="song_name"}else if(u.parents(".singer").length){g.act="artist_name"}else if(u.parents(".album-title").length){g.act="album_name"}else{g.act="detailpage"}}else if(u.hasClass("album-play")||u.hasClass("play-hot-btn")||u.hasClass("songlist-all-play")){g.act="play"}break;default:break}if(u&&u.hasClass("master-song")){if(u.hasClass("fold-down")){g.act="unfold"}else{g.act="fewer"}}if($item.length){if(t(".master-song",$item).length){g.u_tag="unfold_0"}}}if(c&&n==0){if(e===undefined){l(i,"click_pv",g);n=1}else if(e=="click_num"){var h=t(a.target);var b={};var v=h.parents(".song-item-hook").data("log-recommend");if(v){b.recommend=v}b.page_num=t(".page-navigator-current").html()||1;b.position=t(".song-item").index(h.parents(".song-item"));t.extend(g,b);l(i,"click_num",g)}}})})};if(t("#target_banner").length){c("#target_banner .target-artist","targetbanner_artist");c("#target_banner .target-album","targetbanner_album");c("#target_banner .target-tag","targetbanner_tag");c("#target_banner .target-artist","targetbanner_artist","click_num");c("#target_banner .target-album","targetbanner_album","click_num");c("#target_banner .target-tag","targetbanner_tag","click_num")}c("#result_container .song-list","resultcontent");c("#first_song_li","firstsong");c("#first_artist_li","firstartist");c("#first_album_li","firstalbum");c("#first_lrc_li","firstlrc");c("#result_container .song-list","resultcontent","click_num");c("#rec_tag","recommend_tag");c("#rec_tag","recommend_tag","click_num");c(".group-album a","group-album");c(".group-album a","group-album","click_num");c(".group-artist a","group-artist");c(".group-artist a","group-artist","click_num");c(".group-songlist a","group-songlist");c(".group-songlist a","group-songlist","click_num");c(".group-mv a","group-mv");c(".group-mv a","group-mv","click_num");c(".group-ybaidu a","group-ybaidu");c(".group-ybaidu a","group-ybaidu","click_num");c("#rec-movie-list a","rec-movie-list");c("#rec-movie-list a","rec-movie-list","click_num");ting.DM=".baidu.com";if(location.host.indexOf("http://static2.qianqian.com/web/static/j/taihe.com")!=-1){ting.DM=".taihe.com"}else if(location.host.indexOf("http://static2.qianqian.com/web/static/j/qianqian.com")!=-1){ting.DM=".qianqian.com"}var g=t(".btn-singer-fm");g.bind("click",function(){var a=encodeURIComponent(t(this).attr("artist"));if(t(this).attr("href")=="#"){t(this).attr("href","//fm"+ting.DM+"/#/channel/public_artist_"+a)}})});function a(){var a=t(".fwb").html()||"empty",i=t("input",t("#questions")).eq(0).attr("checked")?0:1,e=t("#user-suggest").val()||"";ting.logger.log("search_null",{key:a,content:e,num:i})}var i=t(".search-artist");if(i.length){var e=t("li",i);var n;e.each(function(a,i){i=t(i);i.on("mouseenter",function(){var a=t(this),i=a.find(".hot-info"),e=i.data("num");if(e){if(!n){a.append('<div id="listen-indicator">'+e+"人听过</div>");n=t("#listen-indicator")}i.append(n.remove());n.html(e+"人听过");n.show()}});i.on("mouseleave",function(){n&&n.hide()})})}t(".group-album .album-cover-hook").albumCover();t(".group-songlist .songlist-all-play").click(function(){var a=t(this),i=t(this).data("song").listid,e=a.data("song"),n=e.ids,s={moduleName:e.moduleName,searchValue:e.searchValue},l=e.logAction;ting.media.playSong(n,s);a.tip().tip("tipup",{msg:"已开始播放",iconClass:"tip-success"});t.ajax({url:"/data/music/songlist/listen?playlistId="+i+"&t="+new Date*1});if(ting&&ting.logger&&ting.logger.plogClick){ting.logger.plogClick(l)}if(ting.browser.isSpecial()){ting.browser.add2box("play")}return false});if(similarMboxBtn=t("#similarMbox")){mboxPage=similarMboxBtn.attr("mboxpage");ting.logger.log("exposure",{page:mboxPage,expoitem:"enter_radio"});similarMboxBtn.click(function(){ting.logger.log("click",{page:mboxPage,pos:"enter_radio",sub:""})})}t(".group-artist .play-hot-btn").bind("click",function(){var a={},i=t(this),e=i.data("playdata");if(e.ids){ting.media.playSong(e.ids,{moduleName:e.moduleName,searchValue:e.searchValue||""});i.tip().tip("tipup",{msg:"已开始播放",iconClass:"tip-success"})}return false});t("#film-change").on("click",function(){require(["slider/slider"],function(a){new a(t("#rec-movie-list"),t("#film-change"),250,"changeRight")});t(this).off("click")});t(".music-icon-hook").musicIcon();t(".rec-film-all-play").click(function(){var a=t(this),i=a.data("song"),e=i.ids,n={moduleName:i.moduleName,searchValue:i.searchValue||""},s=i.logAction;ting.media.playSong(e,n);a.tip().tip("tipup",{msg:"已开始播放",iconClass:"tip-success"});if(ting&&ting.logger&&ting.logger.plogClick){ting.logger.plogClick(s)}if(ting.browser.isSpecial()){ting.browser.add2box("play")}return false})})(jQuery);(function(){var t=t||{};t.tipLogger=function(t,a,i){ting.logger.log("click",{page:t,pos:a,sub:i})};t.clickLogger=function(a,i,e,n){$(a).click(function(){t.tipLogger(i,e,n)})};t.clickLogger(".ticket-link","m_search_artist","normal","tips")})();(function(){var t=$(".search-song-list ul li");var a=[];var i=[];var e=[];var n=$(".col-play");var s=$(".col-add");var l=$(".col-collect");var o=$(".col-down a");var r=$(".search-song-list").data("listdata");t.each(function(){if(!$(this).data("songitem").songItem.isJump){a.push($(this).data("songitem").songItem.sid)}});i=a.join("_");e=a.join(",");n.bind("click",function(){if(i){ting.media.playSong(i,r);$(this).tip().tip("tipup",{msg:"已开始播放！",iconClass:"tip-success"})}return false});s.bind("click",function(){if(i){ting.media.addSong(i,r);$(this).tip().tip("tipup",{msg:"添加成功！",iconClass:"tip-success"})}return false});l.bind("click",function(){if($(".song-item.yyr-song").length){var t=$('<div style="text-align: left;">您需要访问 <a target="_blank" href="http://y.baidu.com/">太合音乐人</a>平台，获取音乐下载。</div>');var a=$("a.cover").attr("href");t.dialog({className:"dialog-message",showBtn:true,confirm:{btn:"",close:true,callback:function(){window.open(a)},text:"立即去下载"},cancel:false,destroy:true,title:"&nbsp;",width:360,showBg:true}).dialog("show");return false}var i=e;if($(this).hasClass("dis-col-collect")){return false}ting.connect.collect(null,{ids:i,type:"song"},function(t){l.tip().tip("tipup",{msg:"已保存到收藏列表！",iconClass:"tip-success"})},function(t){l.tip().tip("tipup",{msg:"歌曲已被保存",iconClass:"tip-warning"})});return false});o.bind("click",function(){if($(".song-item.yyr-song").length){var t=$('<div style="text-align: left;">您需要访问 <a target="_blank" href="http://y.baidu.com/">太合音乐人</a>平台，获取音乐下载。</div>');var i=$("a.cover").attr("href");t.dialog({className:"dialog-message",showBtn:true,confirm:{btn:"",close:true,callback:function(){window.open(i)},text:"立即去下载"},cancel:false,destroy:true,title:"&nbsp;",width:360,showBg:true}).dialog("show");return false}if($(this).parent().hasClass("dis-col-down")){return false}ting.media.downloadAll(a);return false});var c=location.search.substring(1).split("&"),g={};$.each(c,function(t,a){a=a.split("=");g[a[0]]=a[1]});if(g.m==="tagcloud"){ting.logger.log("clicksearch",{key:g.key,page:"searchresult",pos:"tagcloud",sub:"song"})}})();(function(){function t(t,a){$(t).find(".changenother").bind("click",function(){var i=$(a).index();var e=$(t).find(".group-list").length-1;if(i<e){i++;$(t).find(".group-list").removeClass("now-tab");$(t).find(".group-list").eq(i).addClass("now-tab")}else{i=0;$(t).find(".group-list").removeClass("now-tab");$(t).find(".group-list").eq(i).addClass("now-tab")}return false})}t(".group-songlist",".group-songlist .now-tab");t(".group-album",".group-album .now-tab");t(".group-artist",".group-artist .now-tab");t(".group-mv",".group-mv .now-tab");var a=0,i=false;$("#updateArtist").bind("click",function(){var t=$(".related-list"),e=$(".related-list:visible");e.hide();++a;if(a>=t.length){a=0;i=true}if(!i){$(".cover img",$(t[a])).each(function(){var t=$(this).attr("org_src"),a=$(this).attr("src");if(t!=a){$(this).attr("src",t)}})}$(t[a]).show();return false})})();(function(t){var a=t(".mod-artist-list ul");var i=a.length;var e=1;t(".mod-artist-list a.more").click(function(){e=e==i?1:e+1;a.fadeOut(200).promise().done(function(){a.eq(e-1).fadeIn(200)});return false})})(jQuery);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/