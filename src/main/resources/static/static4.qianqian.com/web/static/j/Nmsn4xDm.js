define(["core/utils","tmpl/rank/urank/redUserInfoTmpl","tmpl/rank/urank/upHistoryTmpl","tmpl/rank/urank/daBangTaiTmpl","tmpl/rank/urank/shouHuTuanTmpl","tmpl/rank/urank/fenSiBangTmpl","tmpl/rank/urank/mvUserTmpl","tmpl/rank/urank/targetTaskTmpl","tmpl/rank/urank/commentMoveTmpl","tmpl/rank/urank/upHistoryFailTmpl","widget/toast/toast","page/rank/urank/common","page/rank/urank/index","widget/ucomment/ucomment"],function(t,i,e,n,a,s,o,l,r,u,c,d,f,h){f.initHeader();var m=$(".ubang-detail"),p=false,v=m.data("artistid")||0,g=m.data("tab")||"",b=m.data("isbuy")||"",_=["task","detail","comment"],k=$(".ubang-detail-info"),y=$(".ubang-list-box"),w=$(".last-line"),T=$(".loading-ubang"),x=$(".xingyunchi-value"),C=$(".xingyunchi-zan"),L=$(".top-list-nav"),A=$(".ubang-dabang"),B=$(".u-dabangtai-t"),U=$("#mv_list"),H=$("#fans_list"),S=$("#shouhu_list"),F=$("#comment_list"),I="",P=_[1],R=true,q,z=$(".video-container"),N,j,E,Z,D=7,M="total",G={offset:0,limit:10,have_more:1},J=function(){y.find("#whb-video").hide();K();w.hide();tashList();bindEvent();getCommentList();$(".control-right").show();$(".loading-gif, .loading-bg").hide()},K=function(){t.tingApi("baidu.ting.active.getRedUserInfo",{artist_id:v}).done(function(t){if(t.error_code==22e3){D=t.result.is_shouhu;I=t.result;var e=i({item:t.result});if(t.result.is_shouhu==1){N='<div class="shouhutuan_bg"><span>守护团</span></div><div class="top-num pr "><a href="javascript:void(0)" class="add-top-num">继续守护</a></div>'}else{j='<div class="shouhutuan_bg"><span>守护团</span></div><div class="wenan"><span>还没有人守护ta，快来成为ta的第一个守护者吧！</span></div><div class="top-num pr "><a href="javascript:void(0)" class="add-top-num">立即守护</a></div>'}q=t.result.name;k.html(e);$(".loading-gif, .loading-bg").hide();var n=$(".mui-slider");if(n){n.slider({autoPlay:true,hoverShowController:false,speed:250,delay:5e3})}getRedBillList();if(t.result.video_link){require(["require/plugin/cyberplayer"],function(i){i("whb-video").setup({flashplayer:"../../../static/flash/cyberplayer.flash.swf"/*tpa=http://static4.qianqian.com/static/flash/cyberplayer.flash.swf*/,width:1e3,height:565,stretching:"uniform",file:t.result.video_link||"",autostart:false,repeat:false,volume:100,controls:true,image:t.result.video_pic,ak:"9eadea16f3424e94b7086e33ce283040"})})}else{$("#whb-video").remove()}bdShare({bdText:"千千音乐U榜-"+t.result.name,bdDesc:"快来给参加千千音乐U榜打榜中的"+t.result.name+"打榜助威吧!",bdUrl:"http://music.taihe.com/cms/webview/celebrity_list/v1/#/dbinfo-page/"+v,bdPic:t.result.pic_list[0]})}}).fail(function(t){m.html('<p class="reload-ubang">看你萌的，服务器都开小差了，3秒后重新来过吧!');var i=setTimeout(function(){location.reload();clearTimeout(i)},3e4)})},O=function(){var t=48;var i=setInterval(function(){$(".gwrap li").eq(0).animate({height:0},250,function(){$(".gwrap li").eq(0).appendTo(Z).css("height",t+"px")})},5e3)};getCommentList=function(){t.tingApi("baidu.ting.ugcmsg.getCommentListByType",{type:7,size:100,offset:0,type_id:v}).done(function(t){if(t.error_code==22e3){if(t.result.commentlist_last_nums>9999){t.result.commentlist_last_nums=(t.result.commentlist_last_nums/1e4).toFixed(1)+"万"}$(".fensibangs").html("评论"+t.result.commentlist_last_nums)}}).fail(function(t){})},getRedBillList=function(){t.tingApi("baidu.ting.active.getRedBillList",{offset:G.offset,limit:10,artist_id:v}).done(function(t){if(t.error_code==22e3){var i=n({item:t.result,artist_id:v});q=t.result.name;B.append(i);var e=r({list:t.roll_list,artist_id:v});$(".ubang-detail-info").append(e);Z=$(".gwrap");O()}}).fail(function(t){B.html('<div class="wenan"><span>Ta还没有打榜的专辑哦！</span></div>')})},getArtistTask=function(){before();t.tingApi("baidu.ting.active.getArtistTaskList",{offset:0,limit:5,artist_id:v,album_id:0}).done(function(t){if(t.error_code==22e3){var i=0;for(var e=0;e<t.result.length;e++){i=i+t.result[e].task_lock_status}var n=l({item:t.result,allcount:i});if(R){A.html(n)}else{A.append(n)}}after()}).fail(function(t){after()})},getFansBill=function(){t.tingApi("baidu.ting.active.getFansBill",{offset:0,limit:10,artist_id:v}).done(function(t){if(t.error_code==22e3){for(var i=0;i<t.result.length;i++){t.result[i].key=i+G.offset}var e=s({item:t.result,fsLevel:f.fsLevel,artistId:v});if(R){H.html(e)}else{H.append(e)}if($(".u-top3-1 .u-store").hasClass("u-store-8")){$(".u-store").addClass("u-store-8")}}after()}).fail(function(t){after();H.html('<div class="shouhutuan_bg fans-content"<span>粉丝榜</span></div><div class="wenan"><span>Ta还没有粉丝哦！快来成为Ta的第一个粉丝吧！</span></div>')})},getProBill=function(){t.tingApi("baidu.ting.active.getProBill",{offset:0,limit:10,artist_id:v}).done(function(i){t.tingApi("baidu.ting.active.getRedUserInfo",{artist_id:v}).done(function(t){if(t.error_code==22e3){D=t.result.is_shouhu;if(i.error_code==22e3){var e=a({item:i.result,fsLevel:f.fsLevel,artistId:v,backIsShouhuTrue:D});if(R){S.html(e)}else{S.append(e)}}}});after()}).fail(function(i){t.tingApi("baidu.ting.active.getRedUserInfo",{artist_id:v}).done(function(t){if(t.error_code==22e3){if(t.result.is_shouhu==1){N='<div class="shouhutuan_bg"><span>守护团</span></div><div class="top-num pr "><a href="javascript:void(0)" class="add-top-num">继续守护</a></div>'}else{j='<div class="shouhutuan_bg"><span>守护团</span></div><div class="wenan"><span>还没有人守护ta，快来成为ta的第一个守护者吧！</span></div><div class="top-num pr "><a href="javascript:void(0)" class="add-top-num">立即守护</a></div>'}if(N){$("#shouhu_list").html(N)}if(j){$("#shouhu_list").html(j)}}});$("#shouhu_list").addClass("shouhu_list_unic");after()})},after=function(){T.hide();w.hide()},before=function(){w.hide();T.show();if(R){y.find("ul").html("");y.find("#whb-video").hide();G={offset:0,limit:10,have_more:0}}},tashList=function(){before();y.find("#whb-video").show();getFansBill();getProBill()},artistComment=function(t){before();$(".comment-whb").show();$(".comment-title").addClass("none");h.init({apiParam:{type:7,type_id:v},callback:function(){}});after()};controlFriend=function(){var i=$(".friend-btn-hook").data("fid")||0;t.tingApi("baidu.ting.ugcfriend.doFriend",{fid:i,type:1}).done(function(t){if(v){d.addUpNums({artist_id:v,add_type:"follow"})}if(t.isFriend==1){var i="已关注"}else if(t.isFriend==2){var i="互相关注"}$(".follow-hook").removeClass("follow").html(i);c.show({data:{cls:"succ",text:"关注成功"}})}).fail(function(t){if(t.error_code==22452){ting.passport.checkLogin(function(){window.location.reload()})}else{c.show({data:{cls:"fail",text:"关注失败"}})}})},bindEvent=function(){m.on("click",".add-top-num",function(){buyShouHu()}).on("click",".fensidabang-btn",function(t){f.tibang(t,$(this),M)}).on("click",".xingyunchi",function(){showUpHistory()}).on("click",".task-btn",function(){showTask()}).on("click",".task-close",function(){hideTask()}).on("click",".close-buy-shou",function(){closeBuyShouHu()}).on("click",".dabangtai",function(){L.find("a").removeClass("active");$(this).addClass("active");R=true;P=_[0];getArtistTask();$(".comment-whb").hide();$(".comment-mask ").remove();$("#fans_list").addClass("fans_list_unic")}).on("click",".detailTap",function(){L.find("a").removeClass("active");$(this).addClass("active");P=_[1];R=true;tashList();$(".comment-whb").hide();$(".comment-mask ").remove();$("#fans_list").addClass("fans_list_unic")}).on("click",".fensibangs",function(){L.find("a").removeClass("active");$(this).addClass("active");P=_[2];R=true;artistComment();$("#comment-whb ").append('<div class="comment-mask"></div>');$("#fans_list").removeClass("fans_list_unic")}).on("click",".xingyunchi-zan",function(){addZan()}).on("click",".follow",function(){controlFriend()}).on("click",".close-up-history",function(){closeUpHistory()}).on("click",".buy-shouhu-btn",function(){toBuyShouHu()})},closeBuyShouHu=function(){var t=$(".buy-shouhu");var i=$(".buy-shouhu-bg");t.hide();i.hide()},buyShouHu=function(){var t=$(".buy-shouhu");var i=$(".buy-shouhu-bg");t.show();i.show()},showUpHistory=function(){if(v){t.tingApi("baidu.ting.active.getUpHistory",{artist_id:v}).done(function(t){$(".up-history-box").remove();$(".reduser-toper").append(e({item:t.result}));$(".up-history-box").addClass("pop-show")}).fail(function(t){$(".up-history-box").remove();$(".reduser-toper").append(u({}));$(".up-history-box").addClass("pop-show")})}},closeUpHistory=function(){$(".up-history-box").remove()},addZan=function(){var i=$(".xingyunchi-zan-value");ting.passport.checkLogin(function(){if(Number(i.html())>0){t.tingApi("baidu.ting.active.addPoolScore",{artist_id:v}).done(function(t){if(t.error_code==22e3){var e=$(".xingyunchi-value");e.html(Number(e.html())+1);i.html(Number(i.html())-1);if(Number(e.html())>=2e3){e.html(0)}c.show({data:{cls:"succ",text:"恭喜您拼攒成功"}})}}).fail(function(t){c.show({data:{cls:"fail",text:"一小时只能拼攒一次哦"}})})}})},toBuyShouHu=function(){ting.passport.checkLogin(function(){var i={type_id:"shouhu",type:5,action:"cloud",pay_type:"zfb",pay_client_type:2,artist_id:v,callback_url:"http://music.taihe.com/redrank/artist/"+v+"?isbuy=1"};t.tingApi("baidu.ting.pay.sorder",i).done(function(t){window.open(t.result.desk_url)}).fail(function(t){if(t.error_code==22452){ting.passport.checkLogin(function(){window.location.reload()})}else{c.show({data:{cls:"fail",text:"操作失败，请稍后重试！"}})}})})},_apiRequest=function(i){var i=i||{};if(!i){return false}t.tingApi(i.dataUrl,i._param).done(function(t){if(t.error_code==22e3){return t}}).fail(function(t){return false})},showList=function(i){var i=i||{};if(G.have_more==0){}if(!i){return false}T.show();if(R){y.find("ul").html("");G={offset:0,limit:10,have_more:0}}p=true;t.tingApi(i.dataUrl,i._param).done(function(t){p=false;if(t.error_code==22e3){var i="";for(var e=0;e<t.result.length;e++){t.result[e].key=e+G.offset}if(P==="detail"){var n=o({item:I});var r=a({item:t.result});var u=s({item:t.result,fsLevel:f.fsLevel});if(R){U.html(n);H.html(u);S.html(r)}else{U.append(n);H.append(u);S.append(r)}}else if(P==="task"){var c=l({item:t.result});if(R){A.html(c)}else{A.append(c)}}else if(P==="comment"){i=commentTmpl({item:t.result});if(R){F.html(i)}else{F.append(i)}}if(t.have_more){G.offset=G.offset+10;w.hide()}else{w.show()}G.have_more=t.have_more}T.hide();$(".no-data-text").remove()}).fail(function(t){p=false;T.hide();w.hide()})},$(".face-tmpl").css("top","1336px");showTask=function(t){$(".task-box").show()};hideTask=function(t){$(".task-box").hide()};J();Q();function Q(){$(".share-list").live("click",function(){ting.logger.log("share",{page:"艺人页",sub:"",pos:"",contenttype:"artist",content:v,artistname:q})});$(".add-top-num").live("click",function(){ting.logger.log("illclick",{page:"付费弹窗",sub:"",pos:""})});$(".fensidabang-btn").live("click",function(){ting.logger.log("illclick",{page:"付费弹窗",sub:"",pos:""})})}$(".isShouhuTrue")});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/