define(["core/utils"],function(i){var t=$(".col-collect .btn-collect"),l=$(".col-collect .btn-collected"),e=$(".btn-collect-mylist"),s=t.data("playlist")||e.data("playlist")||l.data("playlist")||{},c=t.find("em")||l.find("em")||e.find("em");ids=s.ids,$collectText=$(".collectText"),c=$(".collectNum"),title=s.title,listid=s.listid,$allDown=$(".col-down a"),param={list_id:listid,source:0};t.live("click",function(){var t=$(this),l=t.data("playlist"),e=e||{},s=l?l.ids.split(",").length:0;ting.passport.checkLogin(function(){if(t.parent().hasClass("kr-col-collect")){return false}t.tip();if(t.data("collected")){t.tip("tipup",{msg:"已收藏为歌单",iconClass:"tip-success"});return}i.tingApi("baidu.ting.ugcdiy.addFavoriteDiy",param).done(function(i){if(i.error_code==22e3){t.data("collected",true);t.tip("tipup",{msg:"已收藏为歌单",iconClass:"tip-success"});t.addClass("btn-collected").removeClass("btn-collect");$collectText.html("已收藏");c.html(Number(c.html())+1)}}).fail(function(){t.tip("tipup",{msg:"收藏失败",iconClass:"tip-error"})})});return false});l.live("click",function(){var t=$(this);ting.passport.checkLogin(function(){i.tingApi("baidu.ting.ugcdiy.deleteFavoriteDiy",param).done(function(i){if(i.error_code==22e3){t.data("collected",false);t.tip().tip("tipup",{msg:"取消收藏成功！",iconClass:"tip-success"});t.addClass("btn-collect").removeClass("btn-collected");$collectText.html("收藏");var l=Number(c.html());l=l==0?0:l-1;c.html(l)}}).fail(function(){t.tip().tip("tipup",{msg:"取消收藏失败！",iconClass:"tip-error"})})})});$(".other-songlist li>a").bind("click",function(){ting.logger.log("click",$(this).parent().data("log"));return});$allDown.bind("click",function(){if($(this).parent().hasClass("kr-col-down")){return false}ting.media.downloadAll(ids,{type:"songList",title:title,clientUrlPos:"web_piliang"});ting.logger.log("click",{page:"c_songlist_d",pos:"multi_down",listid:listid});return false});var n=$(".js-log-sl-share").data("log-info");function o(i){ting.logger.log("click",{page:ting.logger.getPage(),pos:"share_list",sub:i,listid:n.id,listname:n.title})}$(".bds_qzone").on("click",function(){o("qzone")});$(".bds_renren").on("click",function(){o("renren")});$(".bds_tqq").on("click",function(){o("tengxun")});$(".bds_tsina").on("click",function(){o("sina")});var a=false,d=false;$.getJSON("/data/user/info?callback=?",function(i){a=i.data.vip&&i.data.vip.cloud.service_level==="gold";d=i.data.passInfo?true:false;if(a){$(".buy-gold-vip").hide()}else if(d){$(".buy-gold-vip").show();$(".buy-gold-vip .upgrade-btn").show()}else{$(".buy-gold-vip").show();$(".buy-gold-vip .login-btn").show()}})});$(function(){var i=$(".col-collect .btn-collect"),t=$(".col-collect .btn-collected"),l=$(".btn-collect-mylist"),e=i.data("playlist")||l.data("playlist")||t.data("playlist")||{},s=i.find("em")||t.find("em")||l.find("em");ids=e.ids,$collectText=$(".collectText"),s=$(".collectNum"),title=e.title,listid=e.listid,$allDown=$(".col-down a"),param={list_id:listid,source:0};$(".col-play a").bind("click",function(){if(ids){ting.media.playSong(ids.split(","),e);$.ajax({url:"/data/music/songlist/listen?playlistId="+listid+"&t="+new Date*1});ting.logger.log("click",{pos:"play_songlist"});ting.logger.log("click",{pos:"playlist",page:"slist_detl",songlistid:listid});$(this).tip().tip("tipup",{msg:"已开始播放！",iconClass:"tip-success"})}return false});$(".col-add a").bind("click",function(){if(ids){ting.media.addSong(ids.split(","),e);$(this).tip().tip("tipup",{msg:"添加成功！",iconClass:"tip-success"})}return false})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/