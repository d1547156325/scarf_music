require(["core/utils","widget/toast/toast","plugin/drag","widget/pop_window/pop_window"],function(t,i){var o=$(".music-body"),e=$(".play-hot-song");collectCount=function(){var i=0;var o=setInterval(function(){if(ting.userInfo){t.tingApi("baidu.ting.ugcdiy.userList",{source:2,type:0,size:100,offset:0}).always(function(t){if(t&&t.result&&t.result.listinfo){var i=$(".artist-detail-box").find(".title").data("artistid");var o=t.result.listinfo;for(var e=0;e<o.length;e++){if(o[e].artist_id==i){$(".collect-top-right").html("已收藏");$(".collect-top-right").removeClass("collect");$(".collect-top-right").addClass("collected");return}else{$(".collect-top-right").html("收藏TA");$(".collect-top-right").removeClass("collected");$(".collect-top-right").addClass("collect")}}}});clearInterval(o)}i++;if(i>6){clearInterval(o)}},500)};asyncArtistNums=function(){var i=$(".artist-title-unic").data("artistid");t.tingApi("baidu.ting.artist.getInfo",{artistid:i}).always(function(t){if(t&&t.artist_id){var i=0;if(t.hot>9999){i=(t.hot/1e4).toFixed(2)+"万"}else{i=t.hot}$(".hot-nums-detail").html(i);var o=0;if(t.share_num>9999){o=(t.share_num/1e4).toFixed(2)+"万"}else{o=t.share_num}$(".shares-num-artist-unic").html(o).attr("data-total",t.share_num)}})};init=function(){bindEvent();collectCount();asyncArtistNums()};bindEvent=function(){o.on("click",".play-hot-song",function(){var t=(e.data("tophost50")+"").split(",");ting.media.playSong(t)}).on("click",".introduce .more",function(){$(".pop-introduce-box").show()}).on("click",".pop-introduce-box .close",function(){$(".pop-introduce-box").hide()}).on("click",".artist-info-box .collect,.like-name .foot-collect, .artist-mod-info .collect",function(){if(ting.userInfo){var o=$(this).parent().data("artistid");var e=$(this);ting.logger.log("click",{starid_click:window.location.href.split("/")[4],page:"m_artist",pos:"top",sub:"favor"});t.tingApi("baidu.ting.ugcdiy.addFavoriteDiy",{list_id:o,source:2}).done(function(){if(e[0].classList[0]=="foot-collect"){e.hide();e.parent().find($(".foot-collected")).show()}if(e[0].classList[0]=="collect-top-right"||e[0].classList[0]=="collect"){$(".collect-top-right").html("已收藏");$(".collect-top-right").removeClass("collect");$(".collect-top-right").addClass("collected")}i.show({data:{cls:"succ",text:"收藏成功"}})}).fail(function(t){switch(t.error_code){case 22713:t.tipText="已收藏过该艺人";break;case 22001:case 22005:t.tipText="收藏失败";break;case 22706:t.tipText="收藏数量过限";break;default:t.tipText="收藏失败"}i.show({data:{cls:"fail",text:t.tipText}})})}else{ting.passport.checkLogin(function(){})}}).on("click",".artist-info-box .collected,.like-name .foot-collected, .artist-mod-info .collected",function(){if(ting.userInfo){var o=$(this).parent().data("artistid");var e=$(this);ting.logger.log("click",{starid_click:window.location.href.split("/")[4],page:"m_artist",pos:"top",sub:"cancelFavor"});t.tingApi("baidu.ting.ugcdiy.deleteFavoriteDiy",{list_id:o,source:2}).done(function(){if(e[0].classList[0]=="foot-collected"){e.hide();e.parent().find($(".foot-collect")).show()}if(e[0].classList[0]=="collect-top-right"){$(".collect-top-right").html("收藏TA");$(".collect-top-right").removeClass("collected");$(".collect-top-right").addClass("collect")}i.show({data:{cls:"succ",text:"取消成功"}})}).fail(function(t){i.show({data:{cls:"fail",text:"取消失败"}})})}else{ting.passport.checkLogin(function(){})}})};init()});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/