require(["core/utils","widget/toast/toast","widget/ushare/ushare","plugin/drag","widget/pop_window/pop_window","widget/page_navigator/page_navigator"],function(t,n,o){var a={};var i={},s={},e=window.location.href.split("/");shareresult={},$el=$(".main-body"),$addTo=$(".add-tos");var r=function(){d()};var l=function(){var t=setTimeout(function(){if(ting&&typeof ting.downPcClient==="function"){ting.downPcClient({$el:".down-pcClient",clientUrlPos:"web_danqu"})}else{l()}clearTimeout(t)},500)};var d=function(){$el.on("click",".song-list-wrap .icon-down",function(){var t=$(this).data("songid");if($(this).hasClass("gray")){return false}downsong(t)}).on("click",".song-list-wrap .icon-play",function(){var t=$(this);var n=$(this).data("songid");if(!t.hasClass("gray")){ting.media.playSong([n])}}).on("click",".song-list-wrap .icon-share",function(){shareresult.songid=$(this).data("songid");shareresult.title=$(this).data("title");shareresult.albumtitle=$(this).data("albumtitle");shareresult.author=$(this).data("author");shareresult.picbig=$(this).data("pic_big");shareSong(shareresult)}).on("mouseover",".song-list-wrap .icon-add-wrap",function(){var t=$(this);if(t.hasClass("gray")){return}if(t.hasClass("add-song-btn-vip")&&BDUS&&BDUS.vipState!="gold"){return}$(".add-tos").show();if(/mac/i.test(navigator.userAgent)){$(".add-to-pc").attr("href","//download.qianqian.com/channel/2/"+type)}var n=setInterval(function(){if($(".add-tos").css("display")=="none"){$(".songlist-collect-to").remove();clearInterval(n)}},200)}).on("mouseout",".song-list-wrap .icon-add-wrap",function(){var t=$(this);if(t.hasClass("add-song-btn-vip")&&BDUS&&BDUS.vipState!="gold"){return}$(".add-tos").hide()}).on("click",".song-list-wrap .add-to-pc",function(t){var t=t||window.envet;t.preventDefault();if(t.stopPropagation){t.stopPropagation()}else{t.cancelBubble=true}var n=$(this).data("songid");downsong(n)}).on("mouseover",".song-list-wrap .add-to-songlist",function(){addToSonglist($(this))}).on("click",".song-list-wrap .add-to-songlist",function(t){var t=t||window.envet;t.preventDefault();if(t.stopPropagation){t.stopPropagation()}else{t.cancelBubble=true}if(ting&&ting.passport){ting.passport.checkLogin(function(){})}}).on("mouseover",".song-list-wrap .icon-add",function(){if($(this).hasClass("gray")){return}$(".song-list-wrap .add-to").show()}).on("click",".song-list-wrap .icon-add, .song-list-wrap .add-to-playlists",function(){if($(this).hasClass("gray")){return}s=$(this).parents(".list-menu").data("playdata")||{};addSongToPlayList()}).on("mouseover",".song-list-wrap .add-to-pc, .song-list-wrap .add-to-playlists",function(){$(".songlist-collect-to").remove()})};$(".album-wrap").find(".icon-play").live("click",function(){var t=$(this).data("albumid");ting.media.playAlbum([t])});downsong=function(t){i.id=t||i.id;i.clientUrlPos="web_danqu";ting.media.downloadSong(i.id,"","","",i)};addToSonglist=function(t){if(ting&&ting.userInfo){var n=$("<li></li>");function o(){$(".mylist-mysinglesong-box").remove()}require(["widget/ucollect_to/ucollect_to_songdetail_new"],function(n){createSonglist=n;createSonglist.createSonglists("","",o,t)})}};addSongToPc=function(t,o){if(/mac/i.test(navigator.userAgent)){return}var a=t||{};var i="web_danqu";var e="//download.qianqian.com/channel/1/";e=e+i;$loading=$('<i class="openapp-loading t loading"></i>');a.append($loading);$loading.removeClass("loading-show");$loading.addClass("loading-show");ting.openApp.init({appUrl:e});var r={songIds:s.id};openApp.addSong(r,{success:function(){n.show({data:{cls:"succ",text:"添加任务成功！"}});$loading.remove()},error:function(){n.show({data:{cls:"fail",text:"添加任务失败！"}});$loading.remove()},complete:function(){$loading.remove()}})};addSongToPlayList=function(){if(s.resourceTypeExt&&(s.resourceTypeExt==3||s.resourceTypeExt==4)){ting.checkSellResourse(s.id,s.albumId,function(t){i.isPay=t;ting.media.addSong(s.id,s);if(t!=1||siPresaleFlag==1){}else{n.show({data:{cls:"succ",text:"添加成功"}})}})}else{ting.media.addSong(s.id,s);n.show({data:{cls:"succ",text:"添加成功"}})}};shareSong=function(t){o.init({onlyLetter:false,shareParam:{bdText:"推荐一首"+t.author+"的歌《"+t.title+"》 （分享自@千千音乐）",bdDesc:t.title+"来自专辑《"+t.albumtitle+"》",bdUrl:e[0]+"//"+e[1]+e[2]+"/song/"+t.songid,bdPic:t.picbig},apiParam:{userid:ting.userInfo&&ting.userInfo.userId,source_type:0,source_id:t.songid}});o.show()};r();return a});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/