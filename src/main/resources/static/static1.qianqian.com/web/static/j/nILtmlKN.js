define(["core/utils","tmpl/rank/urank/fenSiBangDetailTmpl","widget/toast/toast","page/rank/urank/common","page/rank/urank/index"],function(e,t,i,n,o){o.initHeader();var a=$(".ubang-detail"),l=false,s=a.data("artistid")||0,r=$("#ubang_artist_fans"),f=$(".last-line"),d=$(".loading-ubang"),c=true,u=0,g,h="total",p={offset:0,limit:10,have_more:1};a.on("click",".fensidabang-btn",function(e){o.tibang(e,$(this),h)});getFansBill=function(){e.tingApi("baidu.ting.active.getFansBill",{offset:p.offset,limit:p.limit,artist_id:s}).done(function(e){if(e.error_code==22e3){for(var i=0;i<e.result.length;i++){e.result[i].key=i+p.offset}var n=t({item:e.result,fsLevel:o.fsLevel,artistId:s});if(c){r.html(n)}else{r.append(n)}if(e.have_more){p.offset=p.offset+10;f.hide()}else{f.show()}if($(".u-top3-1 .u-store").hasClass("u-store-8")){$(".u-store").addClass("u-store-8")}p.have_more=e.have_more;$(window).bind("scroll",windowScroll)}d.hide();$(".no-data-text").remove()}).fail(function(e){d.hide();f.show()})},windowScroll=function(){var e=parseFloat($(window).scrollTop());totalheight=parseFloat($(window).height())+e;if(parseFloat($(window).scrollTop())<=u){u=parseFloat($(window).scrollTop());return false}u=parseFloat($(window).scrollTop());if(l==true){return false}if($(document).height()-50<=totalheight){$(window).unbind("scroll");if(p.have_more){c=false;getFansBill()}}},ruserInfo=function(){e.tingApi("baidu.ting.active.getRedUserInfo",{artist_id:s}).done(function(e){if(e.error_code==22e3){g=e.result;bdShare({bdText:"千千音乐U榜-"+g.name,bdDesc:"快来给参加千千音乐U榜打榜中的"+g.name+"打榜助威吧!",bdUrl:"http://music.taihe.com/cms/webview/celebrity_list/v1/#/dbinfo-page/"+s,bdPic:g.pic_list[0]})}}).fail(function(e){a.html('<p class="reload-ubang">看你萌的，服务器都开小差了，3秒后重新来过吧!');setTimeout(function(){location.reload()},3e4)})},getFansBill();ruserInfo();$(".loading-gif, .loading-bg").hide();m();function m(){$(".share-list").live("click",function(){ting.logger.log("share",{page:"艺人页",sub:"",pos:"",contenttype:"artist",content:s,artistname:g.name})});$(".fensidabang-btn").live("click",function(){ting.logger.log("illclick",{page:"付费弹窗,",sub:"",pos:""})})}});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/