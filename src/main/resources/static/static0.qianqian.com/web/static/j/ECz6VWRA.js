require(["core/utils","tmpl/rank/redrank/loadmoreList","tmpl/rank/redrank/dayweektotal","tmpl/rank/redrank/list","widget/toast/toast","widget/ushare/ushare","page/rank/redrank/common","domain_config"],function(i,s,a,n,t,e,l){var o=$("#listTmpl"),r=["today","week","month"],g=["today"],d=["ubang","zhuanjibang","fuhaobang"],h={type:r[0],page:0,size:20,have_more:0,albumid:_,plugin:{week_id:0}};var u,v,b,f,c,m,p,C,w,q,k,_,y,U,z,A;if($(".ubang").hasClass("bang-visit")){nowbang=d[0]}if($(".zhuanjibang").hasClass("bang-visit")){nowbang=d[1]}if($(".fuhaobang").hasClass("bang-visit")){nowbang=d[2]}var S=$("#bang-wrapper");S.on("click",".icon-date",function(i){$(".qishu-content").removeClass("qishu-visit");A=S.find(".date-content").data("id");$(".qishu-content:eq("+(A-1)+")").addClass("qishu-visit");S.find(".qishu").show()}).on("click",".qishu-btn",function(i){A=S.find(".date-content").data("id");$(".qishu-content:eq("+(A-1)+")").addClass("qishu-visit");S.find(".qishu").hide()});S.on("click",".qishu",function(i){$(".qishu-content").removeClass("qishu-visit");$(i.target).addClass("qishu-visit");$(".qishu-btn").removeClass("qishu-visit")});var S=$("#bang-wrapper");var x=$(".zhuanjibang");var T=$(".fuhaobang");var B=$(".ubang");if(x.hasClass("bang-visit")){r[2]="month"}if(B.hasClass("bang-visit")){r[2]="month"}S.html(a({bill:h.type,bang:nowbang}));S.on("click",".d-bang",function(i){var s=0;$(".bang").removeClass("visit");$(this).addClass("visit");S.find(".date").show();g=r[0];L(s,b);if(B.hasClass("bang-visit")){ting.logger.log("illclick",{page:"U榜",sub:"日排行榜",pos:""})}}).on("click",".wk-bang",function(i){var s=0;$(".bang").removeClass("visit");$(this).addClass("visit");S.find(".date").show();g=r[1];I(s,u);if(B.hasClass("bang-visit")){ting.logger.log("illclick",{page:"U榜",sub:"周排行榜",pos:""})}}).on("click",".m-bang",function(i){var s=0;$(".bang").removeClass("visit");$(this).addClass("visit");g=r[2];E(s,c);if(B.hasClass("bang-visit")){ting.logger.log("illclick",{page:"U榜",sub:"月排行榜",pos:""})}});S.on("click",".icon-left",function(i){if($(".d-bang").hasClass("visit")){if(b>1){b=b-1;if(g==r[0]){w=b;L(p,b)}}}if($(".wk-bang").hasClass("visit")){if(u>1){u=u-1;if(g==r[1]){q=u;I(p,u)}}}if($(".m-bang").hasClass("visit")){if(c>1){c=c-1;if(g==r[2]){k=c;E(p,c)}}}});S.on("click",".icon-right",function(i){if($(".d-bang").hasClass("visit")){if(b<f){b=b+1;if(g==r[0]){C=b;w=b;L(p,b)}}}if($(".wk-bang").hasClass("visit")){if(u<v){u=u+1;if(g==r[1]){C=u;q=u;I(p,u)}}}if($(".m-bang").hasClass("visit")){if(c<m){c=c+1;if(g==r[2]){k=c;E(p,c)}}}});var S=$("#bang-wrapper");S.on("click",".icon-date",function(i){S.find(".qishu").show()}).on("click",".qishu-btn",function(i){S.find(".qishu").hide();if(S.find(".d-bang").hasClass("visit")){w=A}if(S.find(".wk-bang").hasClass("visit")){q=A}if(S.find(".m-bang").hasClass("visit")){k=A}});S.on("click",".qishu",function(i){if($(i.target).hasClass("qishu-wrapper")||$(i.target).hasClass("qishu")||$(i.target).hasClass("qishu-btn")){var s=S.find(".date-content").data("id");$(".qishu-content:eq("+(s-1)+")").addClass("qishu-visit");$(".qishu-wrapper").removeClass("qishu-visit");$(".qishu-btn").removeClass("qishu-visit")}else{$(".qishu-content").removeClass("qishu-visit");$(i.target).addClass("qishu-visit");$(".qishu-btn").removeClass("qishu-visit");$(".qishu-wrapper").removeClass("qishu-visit");var s=$(".qishu-wrapper").find(".qishu-visit").data("id");if(S.find(".d-bang").hasClass("visit")){w=s;b=s;L(p,s)}if(S.find(".wk-bang").hasClass("visit")){q=s;u=s;I(p,s)}if(S.find(".m-bang").hasClass("visit")){k=s;c=s;E(p,s)}S.find(".qishu").hide()}});var F=function(s,a){i.tingApi("baidu.ting.active.getPeriod",a).done(function(i){w=i.result.today_nums||0;q=i.result.week_nums||0;k=i.result.total_month||0;y=i.result.today_nums||0;U=i.result.week_nums||0;z=i.result.total_month||0})};F();var j=function(s,a){i.tingApi("baidu.ting.active.getPeriod",a).done(function(i){y=i.result.today_nums||0;U=i.result.week_nums||0;z=i.result.total_month||0})};var P;var D=function(s,t){j();if(B.hasClass("bang-visit")){ting.logger.log("illclick",{page:"U榜",sub:"日排行榜",pos:""})}p=s||0;C=t||0;var t={bill_type:r[0],offset:p,limit:h.size,period:C};i.tingApi("baidu.ting.active.getUBill",t).always(function(i){h=$.extend(h,{type:r[0],page:p>0?++h.page:1,have_more:i.have_more||0});o.html(n({ulist:i.result||[],type:r,loadmore:h.have_more,r:i}));S.html(a({bill:r,nums:w||0,allnums:y,bang:nowbang}));$(window).bind("scroll",windowScroll);$(".bang").removeClass("visit");$(".d-bang").addClass("visit");$(".qishu-content:last").addClass("qishu-visit");u=q;v=U;b=w;f=y;c=k;m=z;P=i.result||[]}).fail(function(i){if(i.error_code==22001){j();o.html(n({r:i}));S.html(a({bill:r[0],nums:w,allnums:y,bang:nowbang}));$(".qishu-content").removeClass("qishu-visit");$(".qishu-content:eq("+(A-1)+")").addClass("qishu-visit")}})};D();var I=function(s,t){j();p=s||0;C=t||0;var t={bill_type:r[1],offset:p,limit:h.size,period:C};i.tingApi("baidu.ting.active.getUBill",t).done(function(i){h=$.extend(h,{type:r,page:p>0?++h.page:1,have_more:i.have_more||0});o.html(n({ulist:i.result||[],type:r,loadmore:h.have_more,r:i}));S.html(a({bill:h.type,nums:q||0,allnums:U,bang:nowbang}));$(window).bind("scroll",windowScroll);$(".qishu-content:eq("+(q-1)+")").addClass("qishu-visit");if(g==r[0]){$(".bang").removeClass("visit");$(".d-bang").addClass("visit")}if(g==r[1]){$(".bang").removeClass("visit");$(".wk-bang").addClass("visit")}if(g==r[2]){$(".bang").removeClass("visit");$(".m-bang").addClass("visit")}if(g==r[2]){$(".bang").removeClass("visit");$(".all-bang").addClass("visit")}u=q;v=U;b=w;f=y;c=k;m=z}).fail(function(i){j();if(i.error_code==22001){o.html(n({r:i}));S.html(a({bill:r[1],nums:q,allnums:U,bang:nowbang}));$(".qishu-content").removeClass("qishu-visit");$(".qishu-content:eq("+(A-1)+")").addClass("qishu-visit");$(".bang").removeClass("visit");$(".wk-bang").addClass("visit")}})};var L=function(s,t){j();p=s||0;C=t||0;var t={bill_type:r[0],offset:p,limit:h.size,period:C};i.tingApi("baidu.ting.active.getUBill",t).done(function(i){h=$.extend(h,{type:r,page:p>0?++h.page:1,have_more:i.have_more||0});o.html(n({ulist:i.result||[],type:r,loadmore:h.have_more,r:i}));S.html(a({bill:h.type,nums:w||0,allnums:y,bang:nowbang}));$(window).bind("scroll",windowScroll);$(".qishu-content:eq("+(w-1)+")").addClass("qishu-visit");if(g==r[0]){$(".bang").removeClass("visit");$(".d-bang").addClass("visit")}if(g==r[1]){$(".bang").removeClass("visit");$(".wk-bang").addClass("visit")}if(g==r[2]){$(".bang").removeClass("visit");$(".m-bang").addClass("visit")}if(g==r[2]){$(".bang").removeClass("visit");$(".all-bang").addClass("visit")}}).fail(function(i){j();if(i.error_code==22001){o.html(n({r:i}));S.html(a({bill:r[0],nums:w,allnums:y,bang:nowbang}));$(".qishu-content").removeClass("qishu-visit");$(".qishu-content:eq("+(A-1)+")").addClass("qishu-visit")}})};var E=function(s,t){j();p=s||0;C=t||0;var t={bill_type:r[2],offset:p,limit:h.size,period:C};i.tingApi("baidu.ting.active.getUBill",t).done(function(i){h=$.extend(h,{type:r,page:p>0?++h.page:1,have_more:i.have_more||0});o.html(n({ulist:i.result||[],type:r,loadmore:h.have_more,r:i}));S.html(a({bill:h.type,nums:k||0,allnums:z,bang:nowbang}));$(window).bind("scroll",windowScroll);$(".qishu-content:eq("+(k-1)+")").addClass("qishu-visit");$(".bang").removeClass("visit");$(".m-bang").addClass("visit")}).fail(function(i){j();if(i.error_code==22001){o.html(n({r:i}));S.html(a({bill:r[0],nums:w,allnums:z,bang:nowbang}));$(".qishu-content").removeClass("qishu-visit");$(".qishu-content:eq("+(A-1)+")").addClass("qishu-visit")}})};var G=0;windowScroll=function(){var i=parseFloat($(window).scrollTop());var s=parseFloat($(window).height())+i;if(parseFloat($(window).scrollTop())<=G){G=parseFloat($(window).scrollTop());return false}G=parseFloat($(window).scrollTop());if($(document).height()-150<=s){$(window).unbind("scroll");if(h.have_more){tabDataInit=false;p=p+20;H()}else{}}};$(window).bind("scroll",windowScroll);var H=function(){var a,n;if(S.find(".d-bang").hasClass("visit")){a=r[0];i:b}else if(S.find(".wk-bang").hasClass("visit")){a=r[1];i:u}else{a=r[2];i:c}var t=$(".date");var e=t.find(".date-content").data("id");var l={bill_type:a,offset:p,limit:h.size,period:e};i.tingApi("baidu.ting.active.getUBill",l).done(function(i){h=$.extend(h,{page:p>0?++h.page:1,have_more:i.have_more||0});var a=$(".u-bang");a.append(s({ulist:i.result||[],type:r,offset:p,loadmore:h.have_more}))})};bdShare({bdText:"千千音乐U榜，遇见更好的你，快来给你心中的ta打榜吧！",bdDesc:"千千音乐U榜，遇见更好的你，快来给你心中的ta打榜吧！",bdUrl:l.host+"/cms/webview/celebrity_list/v1/#/",bdPic:l.host+"//static4.qianqian.com/web/static/images/page/rank/redrank/wh_share.jpg"});$(".share-list").on("click",function(){if(B.hasClass("bang-visit")){if($(".d-bang").hasClass("visit")){ting.logger.log("share",{page:"U榜",sub:"日排行榜",pos:""})}if($(".wk-bang").hasClass("visit")){ting.logger.log("share",{page:"U榜",sub:"周排行榜",pos:""})}if($(".m-bang").hasClass("visit")){ting.logger.log("share",{page:"U榜",sub:"月排行榜",pos:""})}}if(x.hasClass("bang-visit")){if($(".d-bang").hasClass("visit")){ting.logger.log("share",{page:"专辑榜",sub:"日排行榜",pos:""})}if($(".wk-bang").hasClass("visit")){ting.logger.log("share",{page:"专辑榜",sub:"周排行榜",pos:""})}if($(".m-bang").hasClass("visit")){ting.logger.log("share",{page:"专辑榜",sub:"月排行榜",pos:""})}}if(T.hasClass("bang-visit")){if($(".d-bang").hasClass("visit")){ting.logger.log("share",{page:"富豪榜",sub:"日排行榜",pos:""})}if($(".wk-bang").hasClass("visit")){ting.logger.log("share",{page:"富豪榜",sub:"周排行榜",pos:""})}if($(".m-bang").hasClass("visit")){ting.logger.log("share",{page:"富豪榜",sub:"月排行榜",pos:""})}}})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/