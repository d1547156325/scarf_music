require(["core/utils"],function(e){var t=$(".playlist-add");var a=$(".collectText");var i=$(".collectNum");var l=t.data("playlist");$(".btn-collect").live("click",function(){var s=$(this);if(!l.listid){t.tip().tip("tipup",{msg:"该专辑不存在！",iconClass:"tip-error"})}ting.passport.checkLogin(function(){e.tingApi("baidu.ting.ugcdiy.addFavoriteDiy",{list_id:l.listid||"",source:1}).done(function(e){if(e.error_code==22e3){t.data("collected",true);s.tip().tip("tipup",{msg:"收藏成功",iconClass:"tip-success"});s.addClass("btn-collected").removeClass("btn-collect");a.html("已收藏");i.html(Number(i.html())+1)}}).fail(function(e){var i="tip-error";var l="";switch(Number(e.error_code)){case 22713:i="tip-warning";l="专辑已收藏过";a.html("已收藏");break;case 22001:l="操作失败，请稍候再试 ";break;case 22706:l="收藏数量已满，去个人中心管理收藏吧";break;default:l="操作失败，请稍候再试 "}t.tip().tip("tipup",{msg:l,iconClass:i})})})});$(".btn-collected").live("click",function(){var t=$(this);var s={list_id:l.listid||"",source:1};e.tingApi("baidu.ting.ugcdiy.deleteFavoriteDiy",s).done(function(e){if(e.error_code==22e3){t.data("collected",false);t.tip().tip("tipup",{msg:"取消收藏成功！",iconClass:"tip-success"});t.addClass("btn-collect").removeClass("btn-collected");a.html("收藏");var l=Number(i.html());l=l==0?0:l-1;i.html(l)}}).fail(function(e){var t="tip-error";var a="操作失败，请稍候再试 ";$collectArtist.tip().tip("tipup",{msg:a,iconClass:t})})})});$(function(){var e=$(".album-down"),e=$(".album-down");var t=function(){if(!ting.userInfo){$.getJSON("/data/user/info?callback=?",function(t){if(t.data.batchDown==1){e.show()}})}else{if(ting.userInfo.batchDown==1){e.show()}}};var a=function(e,t){ting.showTip({$tar:e,type:"needgoldvip",cancelEvent:"blur",reason:t})};var i="";var l=$(".album-cover");var e=$(".album-down");var s=l.data("albumdata");var o=e.data("downdata");var r=s.id||"";var n=s.playFeeIDs.length||"";var u=o.downFeeIDs.length||"";var d=$(".album-cover-hook");d.albumCover();var c=d.data("albumdata");var m=c.ids;var g=c.playIDs;var b=c.playFeeIDs;var p=g.length;var v=$(".album-down").data("downdata").downIDs.length;var f=b.length;ting.checkSellResourse("",r,function(e,t){i=t;if(i==1){$(".album-buy-hook .btn-text").html('<i class="btn-icon btn-buy-icon"></i>再次购买')}else{$(".album-buy-hook .btn-text").html('<i class="btn-icon btn-buy-icon"></i>购买专辑')}$(".album-buy-hook").removeClass("opt0")});$(".album-add").click(function(e){var t=$(this);var l=$(this).data("adddata");var s=l.ids;var o=l.playIDs;var r=l.playFeeIDs;var n=o.length;var u=r.length;var d={moduleName:l.moduleName,ids:l.ids||"",mediaType:2,albumId:l.albumId||"",_aiPresaleFlag:l._aiPresaleFlag||"",resourceTypeExt:l.resourceTypeExt||"",albumPic:l.albumPic||"",albumTitle:l.albumTitle||"",albumPublishTime:l.albumPublishTime||""};var c={page:ting.logger.getPage(),pos:"add_album"};t.tip();if(d.resourceTypeExt&&(d.resourceTypeExt==3||d.resourceTypeExt==4)){ting.checkSellResourse(d.id,d.albumId,function(e,a){d.isPay=a;ting.media.addSong(s,d);if(d.isPay!=1||d.siPresaleFlag==1||d._aiPresaleFlag==1){}else{t.tip("tipup",{msg:"添加成功！",iconClass:"tip-success"})}});c.album_title=d.albumTitle;c.album_id=d.albumId;c.isPay=3}else if(BDUS&&BDUS.vipState!="gold"&&i!=1){if(n){ting.media.addSong(o,d);if(u){t.tip("tipup",{msg:"已自动过滤付费歌曲",iconClass:"tip-success"})}else{t.tip("tipup",{msg:"添加成功！",iconClass:"tip-success"})}}else{if(u){a(t,"pay_listen")}else{t.tip("tipup",{msg:"添加成功！",iconClass:"tip-success"});ting.media.addSong(s,d)}}}else{t.tip("tipup",{msg:"添加成功！",iconClass:"tip-success"});ting.media.addSong(s,d)}if(ting&&ting.logger&&ting.logger.plogClick){ting.logger.plogClick("add_album");ting.logger.log("add_album",c)}return false});$(".song-list-hook").songList({type:"album",data:{albumname:albumName}});e.bind("click",function(){var e=$(this);var t=$(this).data("downdata");var l=t.ids;var s=t.downIDs;var o=t.downFeeIDs;var r=s.length;var n=o.length;var u=t.albumname;var d=t.author;var c={clientUrlPos:"web_piliang",moduleName:t.moduleName,ids:t.ids||"",mediaType:2,albumId:t.albumId||"",_aiPresaleFlag:t._aiPresaleFlag||"",resourceTypeExt:t.resourceTypeExt||"",albumPic:t.albumPic||"",albumTitle:t.albumTitle||"",albumPublishTime:t.albumPublishTime||""};if(c.ids.length==0){c.ids=t.downIDs}var m={page:ting.logger.getPage(),pos:"down_album",album_id:c.albumId};e.tip();if(c.resourceTypeExt&&(c.resourceTypeExt==3||c.resourceTypeExt==4)){ting.checkSellResourse(c.id,c.albumId,function(e,t){c.isPay=c._isPay=t;ting.media.downloadAll(c.ids,{type:"album",title:u,author:d},c);if(c.isPay!=1||c.siPresaleFlag==1||c._aiPresaleFlag==1){}else{}});m.album_title=c.albumTitle;m.album_id=c.albumId;m.isPay=3}else if(BDUS&&BDUS.vipState!="gold"&&i!=1){if(r){ting.media.downloadAll(s,{type:"album",title:u,author:d},c);if(n){e.tip("tipup",{msg:"已自动过滤付费歌曲",iconClass:"tip-success"})}}else{if(n){a(e,"down")}else{ting.media.downloadAll(l,{type:"album",title:u,author:d},c)}}}else{ting.media.downloadAll(l,{type:"album",title:u,author:d},c)}var g=$(this).data("downdata").ids.length;m.song_num=g;ting.logger.log("down_album",m);return false});$(".des-more-hook").toggle(function(){$(".album-info .description").hide();$(".album-info .description-all").show();$(".mod-song-list").addClass("info-expand");$(".album-recommend").addClass("info-expand");$(this).text("收起");return false},function(){$(".album-info .description-all ").hide();$(".album-info .description").show();$(".mod-song-list").removeClass("info-expand");$(".album-recommend").removeClass("info-expand");$(this).text("展开");return false});$(".page-navigator-hook a").refreshTrigger({target:".album-recommend-list"});ting.logger.exposureAndAnchorClickLog("m_album",[{root:$(".mod-other-list"),logName:"otheralbum",returnFalseSelector:[".play-icon"]}]);var h=0,y=false;$("#updateArtist").bind("click",function(){var e=$(".related-list"),t=$(".related-list:visible");t.hide();++h;if(h>=e.length){h=0;y=true}if(!y){$(".cover img",$(e[h])).each(function(){var e=$(this).attr("org_src"),t=$(this).attr("src");if(e!=t){$(this).attr("src",e)}})}$(e[h]).show();return false});var w=false,_=false;$(":ting-comment").on("comment.beforsubmit",function(){var e=$("a.user-voice-submit",this);var t=e.data("btndata");ting.logger.log("click",{page:"music",pos:"comment",sub:"album",singer_id:t.log_singer_id,albumid:t.log_albumid})})});$(function(){function e(e){var t=/^[\u4E00-\u9FA5]+$/;if(!t.test(e)){return false}return true}var t=$(".cover > img")[0],a="",i=[],l="",s="",o="",r="";s=t.getAttribute("alt");o=t.getAttribute("title");r=$(".cover")[0].getAttribute("title");i=s.split(" ");l=i.join("");if(!e(l)){a=o+"专辑《"+s+"》"}else{if(/电视原声带|电影原声带/.test(s)||/电视原声|电影原声|影视原声|动漫原声/.test(o)||/影视原声/.test(r)){a=i[0]+"插曲"}else{a=o+"专辑《"+i[0]+"》"}}$(".cover")[0].removeAttribute("title");$(".cover > img").attr("alt",a);$(".cover > img").attr("title",a)});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/