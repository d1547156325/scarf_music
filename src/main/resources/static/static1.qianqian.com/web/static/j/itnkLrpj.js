define(["core/utils","widget/toast/toast","widget/ushare/ushare","page/rank/jinlirank/common","page/rank/urank/getXDate"],function(a,t,e,i,l){var s=1,o=$(".music-body"),n=$("#listTmpl .loading"),r=$(".urank-focus"),p=$(".urank-play"),u=$(".urank-list"),d=$(".urank-timenav"),b="urank",f=200,h=0,g=false,c={u:"baidu.ting.active.getUBill",album:"baidu.ting.active.getAlbumBill",fuhao:"baidu.ting.active.getWealthBill"},m={u:"baidu.ting.active.getUBillList",album:"baidu.ting.active.getAlbumBillList",fuhao:"baidu.ting.active.getWealthBillList"},y={tabType:"u",billType:"today",limit:20,billJinli:"jinli"},k={},v={bronze:{key:"qt",title:"青铜"},silver:{key:"by",title:"白银"},gold:{key:"hj",title:"黄金"},platinum:{key:"bj",title:"铂金"},zijin:{key:"zj",title:"紫金"},diamonds:{key:"zs",title:"钻石"},king:{key:"wz",title:"王者"}},w=function(a){var t=i.getUrlParam("","tabType");if(t){if(t!=="u"){y.tabType=t;y.billJinli="today"}else{y.tabType=t}}k={tabType:y.tabType,url:y.billType=="today"?c[y.tabType]:m[y.tabType],pageType:y.tabType+"-"+y.billType,opation:{bill_type:y.billJinli,offset:0,limit:y.limit,period:""},hasLoadtop3:false,weekMonthTop3:y.billType=="week"||y.billType=="month"?true:false,weekMonthTop3FirstLoad:true,tabDataInit:true,have_more:1,isloading:false,tmpl:y.tabType+y.billType+"Tmpl",top3Tmpl:y.tabType+y.billType+"top3Tmpl",callback:function(a){}};if(y.billType=="day"){k.top3Tmpl=null}_();T();$(".jinlibang-top3-bg").show()},T=function(a){$(".nav-wrapper .screen-hd").addClass("pr").append($(".share-list")).append($(".ub-lk")).append($("#search_form")).append('<a href="http://static1.qianqian.com/" title="千千音乐-听见世界" ><img src="../../../../static2.qianqian.com/web/static/i/FR7ny0Te.png"/*tpa=http://static2.qianqian.com/web/static/i/FR7ny0Te.png*/ class="urank-logo pa" alt="千千音乐-听见世界" /></a>');$(".nav-wrapper .s_btn_wr").html('<span class="search-rank-btn"></span>');var t=["nav-home","nav-music-songlist","nav-singer","nav-top","nav-music-mv"];$(".sup-nav a").each(function(a){for(var e=0;e<t.length;e++){if(t[e]==$(this).data("log")){$(this).closest("li").show()}}});var e=setTimeout(function(a){$("#registBtn, #loginbtn").closest("li").css("display","block");$(".top-header-wrapper a, .userbar a").addClass("t")},2e3)},C=function(a,t){var a=a||k.tabType;var e;if(k.opation.bill_type=="jinli"||t=="jinli"){e="today";t="today"}else{e=k.opation.bill_type}var t=t||e;if(t&&a){$(".urank-tab a, .urank-timenav a").removeClass("on");if(k.pageType=="fuhao-total"){$(".tab-"+a+", "+".tab-month").addClass("on")}else{$(".tab-"+a+", "+".tab-"+t).addClass("on")}if(a=="fuhao"){$(".urank-timenav").addClass("urank-timenav-total");$(".tab-day").remove();if($(".tab-day").length<1){$(".tab-today").html('<span class="add-bottom-line">今日榜</span> <i class="timenav-line-left"></i><i class="timenav-line-right"></i>')}$(".tab-month").html('<span class="add-bottom-line">总榜</span><i class="timenav-line-left"></i><i class="timenav-line-right"></i>').data("billtype","total")}else if(a=="u"){$(".tab-today").html('<span class="add-bottom-line">锦鲤榜</span> <i class="timenav-line-left"></i><i class="timenav-line-right"></i>');if($(".tab-day").length<1){$(".tab-today").after('<a href="javascript:void(0)" data-billtype="day" class="tab-day pr tab-timenav t"><span class="add-bottom-line">日榜</span><i class="timenav-line-left"></i><i class="timenav-line-right"></i></a>')}var i=setTimeout(function(){$(".urank-timenav").removeClass("urank-timenav-total");clearTimeout(i)},100);$(".tab-month").html('<span class="add-bottom-line">月榜</span><i class="timenav-line-left"></i><i class="timenav-line-right"></i>').data("billtype","month")}else{$(".tab-today").html('<span class="add-bottom-line">实时榜</span> <i class="timenav-line-left"></i><i class="timenav-line-right"></i>');if($(".tab-day").length<1){$(".tab-today").after('<a href="javascript:void(0)" data-billtype="day" class="tab-day pr tab-timenav t"><span class="add-bottom-line">日榜</span><i class="timenav-line-left"></i><i class="timenav-line-right"></i></a>')}var i=setTimeout(function(){$(".urank-timenav").removeClass("urank-timenav-total");clearTimeout(i)},100);$(".tab-month").html('<span class="add-bottom-line">月榜</span><i class="timenav-line-left"></i><i class="timenav-line-right"></i>').data("billtype","month")}var l=$(".timenav-line-left");var s=$(".timenav-line-right");var o=$(".tab-today");var n=$(".tab-day");var r=$(".tab-week");var p=$(".tab-month");switch(k.pageType){case"u-today":case"album-today":l.hide();s.show();o.find(l).show();o.find(s).show();break;case"u-day":case"u-detail-today":case"album-day":case"album-detail-today":l.hide();s.show();n.find(l).show();n.find(s).show();o.find(s).hide();o.find(l).show();break;case"u-week":case"u-detail-week":case"album-week":case"album-detail-week":l.hide();s.show();r.find(l).show();r.find(s).show();o.find(l).show();n.find(s).hide();break;case"u-month":case"u-detail-month":case"album-month":case"album-detail-month":l.hide();s.show();p.find(l).show();p.find(s).show();r.find(s).hide();o.find(l).show();break;case"fuhao-today":l.hide();s.show();o.find(s).show();o.find(l).show();break;case"fuhao-week":case"fuhao-detail-week":l.hide();s.show();r.find(l).show();r.find(s).show();o.find(s).hide();o.find(l).show();break;case"fuhao-total":l.hide();s.show();p.find(l).show();p.find(s).show();o.find(l).show();r.find(s).hide();break}}},_=function(){h=$("body").height();k.isloading=true;n.show();if(k.weekMonthTop3){if(!k.weekMonthTop3FirstLoad){a.tingApi(k.url,k.opation).done(function(a){a._data=k;a.result=a.result||a.data||{};for(var t=0;t<a.result.length;t++){a.result[t].key=t+k.opation.offset}B(a);$(window).bind("scroll",L)}).fail(function(a){t.show({data:{cls:"fail",text:"数据走丢了，请稍后重试！"}})})}else{a.tingApi(c[k.tabType],k.opation).done(function(e){var i=[];e._data=k;U(e);for(var l=0;l<3;l++){i.push(e.result[l])}e.result.isTop3=true;e.result.top3=i;k.tabDataInit=true;k.weekMonthTop3FirstLoad=false;B(e,k.top3Tmpl,function(){k.hasLoadtop3=true;k.tabDataInit=false;a.tingApi(k.url,k.opation).done(function(a){a._data=k;a.result=a.result||a.data||{};for(var t=0;t<a.result.length;t++){a.result[t].key=t+k.opation.offset}B(a);$(window).bind("scroll",L)}).fail(function(a){t.show({data:{cls:"fail",text:"数据走丢了，请稍后重试！"}})})})}).fail(function(a){$(window).bind("scroll",L);C(k.tabType,y.billType);n.hide();$("body").css("height","auto")})}}else{if(k.pageType=="fuhao-total"){k.url=c[k.tabType]}a.tingApi(k.url,k.opation).done(function(a){a._data=k;a.result=a.result||a.data||{};U(a);for(var t=0;t<a.result.length;t++){a.result[t].key=t+k.opation.offset}if(k.top3Tmpl&&!k.hasLoadtop3){var e=[];for(var t=0;t<3;t++){e.push(a.result[t])}a.result.isTop3=true;a.result.top3=e;k.tabDataInit=true;B(a,k.top3Tmpl,function(){k.hasLoadtop3=true;k.tabDataInit=false;B(a)})}else{B(a)}$(window).bind("scroll",L)}).fail(function(a){$(window).bind("scroll",L);C(k.tabType,y.billType);$("body").css("height","auto");n.hide()})}},B=function(a,t,e){var i=t?t:k.tmpl;g=false;require(["tmpl/rank/jinlirank/"+i],function(t){if(k.tabType==="fuhao"){a.fsLevel=v}if(k.opation.bill_type==="week"){a.getXDate=getXDate}var i=a._data.opation.bill_type;if(i=="today"||i=="day"){a.billTypeText="日"}else if(i=="week"){a.billTypeText="周"}else if(i=="month"){a.billTypeText="月"}a.period=a.period||k.opation.period||"";var l=t({item:a.result,data:a});$("body").css("height",h+"px");if(k.tabDataInit){if(k.top3Tmpl){u.html(l)}else{u.html('<ul class="urank-list-append clearfix '+k.pageType+'"></ul>');$(".urank-list-append").append(l)}}else{if($(".urank-list-append").length<1){u.append('<ul class="urank-list-append clearfix '+k.pageType+'"></ul>')}$(".urank-list-append").append(l)}if(a.have_more){if(k.top3Tmpl&&!k.hasLoadtop3){}else{k.opation.offset=k.opation.offset+y.limit}}else{}$(".loading-gif, .loading-bg").hide();if($(".u-top3-1 .u-store").hasClass("u-store-8")){$(".u-store").addClass("u-store-8")}g=true;k.have_more=a.have_more;k.isloading=false;n.hide();if(typeof e==="function"){e()}if(typeof k.callback==="function"){k.callback()}var s=setTimeout(function(a){$("body").css("height","auto");clearTimeout(s)},500)})},U=function(a){if(a&&k.opation.bill_type){switch(k.opation.bill_type){case"today":k.totalPeriod=a.day_nums;break;case"week":k.totalPeriod=a.week_nums;break;case"total":case"month":k.totalPeriod=a.mon_nums;break;default:break}}},j=0,L=function(){var a=parseFloat($(window).scrollTop());totalheight=parseFloat($(window).height())+a;if(parseFloat($(window).scrollTop())<=j){j=parseFloat($(window).scrollTop());return false}j=parseFloat($(window).scrollTop());if(k.isloading==true){return false}if($(document).height()-50<=totalheight){if(k.have_more){$(window).unbind("scroll");k.tabDataInit=false;_();g=true}else{if(g){t.show({data:{cls:"fail",text:"稍后会有更多数据,敬请期待！"}})}}}};bdShare({bdText:"千千音乐U榜",bdDesc:"千千音乐U榜, 遇见更优秀的你！",bdUrl:"http://music.taihe.com/cms/webview/celebrity_list/v1/",bdPic:"../../../../music.taihe.com/static/images/page/rank/urank/share.jpg"/*tpa=http://music.taihe.com/static/images/page/rank/urank/share.jpg*/});if(b=="urank"){w()}$("body").on("click",function(){fandaunBury()});$(".tab-timenav").live("click",function(){fandaunBury()});$(".urank-tab .tab-week").live("click",function(){fandaunBury()});$(".urank-tab .tab-month").live("click",function(){fandaunBury()});$(".urank-timenav .tab-u").live("click",function(){fandaunBury()});$(".urank-timenav .tab-album").live("click",function(){fandaunBury()});$(".urank-timenav .tab-fuhao").live("click",function(){fandaunBury()});$(".fensidabang-btn").live("click",function(){ting.logger.log("illclick",{page:"付费弹窗,",sub:"",pos:""})});$(".share-list").live("click",function(){if($(".tab-u").hasClass("on")){if($(".tab-today").hasClass("on")){ting.logger.log("share",{page:"U榜",sub:"实时排行榜",pos:""})}if($(".tab-day").hasClass("on")){ting.logger.log("share",{page:"U榜",sub:"日排行榜",pos:""})}if($(".tab-week").hasClass("on")){ting.logger.log("share",{page:"U榜",sub:"周排行榜",pos:""})}if($(".tab-month").hasClass("on")){ting.logger.log("share",{page:"U榜",sub:"月排行榜",pos:""})}}if($(".tab-album").hasClass("on")){if($(".tab-today").hasClass("on")){ting.logger.log("share",{page:"销量榜",sub:"实时排行榜",pos:""})}if($(".tab-day").hasClass("on")){ting.logger.log("share",{page:"销量榜",sub:"日排行榜",pos:""})}if($(".tab-week").hasClass("on")){ting.logger.log("share",{page:"销量榜",sub:"周排行榜",pos:""})}if($(".tab-month").hasClass("on")){ting.logger.log("share",{page:"销量榜",sub:"月排行榜",pos:""})}}if($(".tab-fuhao").hasClass("on")){if($(".tab-today").hasClass("on")){ting.logger.log("share",{page:"富豪榜",sub:"实时排行榜",pos:""})}if($(".tab-day").hasClass("on")){ting.logger.log("share",{page:"富豪榜",sub:"日排行榜",pos:""})}if($(".tab-week").hasClass("on")){ting.logger.log("share",{page:"富豪榜",sub:"周排行榜",pos:""})}if($(".tab-month").hasClass("on")){ting.logger.log("share",{page:"富豪榜",sub:"月排行榜",pos:""})}}});fandaunBury=function(){if($(".tab-u").hasClass("on")){if($(".tab-today").hasClass("on")){ting.logger.log("illclick",{page:"U榜",sub:"实时排行榜",pos:""})}if($(".tab-day").hasClass("on")){ting.logger.log("illclick",{page:"U榜",sub:"日排行榜",pos:""})}if($(".tab-week").hasClass("on")){ting.logger.log("illclick",{page:"U榜",sub:"周排行榜",pos:""})}if($(".tab-month").hasClass("on")){ting.logger.log("illclick",{page:"U榜",sub:"月排行榜",pos:""})}}if($(".tab-album").hasClass("on")){if($(".tab-today").hasClass("on")){ting.logger.log("illclick",{page:"销量榜",sub:"实时排行榜",pos:""})}if($(".tab-day").hasClass("on")){ting.logger.log("illclick",{page:"销量榜",sub:"日排行榜",pos:""})}if($(".tab-week").hasClass("on")){ting.logger.log("illclick",{page:"销量榜",sub:"周排行榜",pos:""})}if($(".tab-month").hasClass("on")){ting.logger.log("illclick",{page:"销量榜",sub:"月排行榜",pos:""})}}if($(".tab-fuhao").hasClass("on")){if($(".tab-today").hasClass("on")){ting.logger.log("illclick",{page:"富豪榜",sub:"实时排行榜",pos:""})}if($(".tab-day").hasClass("on")){ting.logger.log("illclick",{page:"富豪榜",sub:"日排行榜",pos:""})}if($(".tab-week").hasClass("on")){ting.logger.log("illclick",{page:"富豪榜",sub:"周排行榜",pos:""})}if($(".tab-month").hasClass("on")){ting.logger.log("illclick",{page:"富豪榜",sub:"月排行榜",pos:""})}}};return{initHeader:function(a){T(a)},tibang:function(a,t,e){_tibang(a,t,e)},fsLevel:v}});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/