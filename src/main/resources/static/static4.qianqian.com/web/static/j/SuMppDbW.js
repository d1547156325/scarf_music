define(["core/utils","ting/top_right_menu"],function(e){var i=/\/king/.test(location.pathname);var n=location.protocol;if(!$.cookie("tipToTaihe")&&location.host.indexOf("http://static4.qianqian.com/web/static/j/taihe.com")!=-1&&$("body").data("tiptaihe")){$.cookie("tipToTaihe",1,{expires:180,path:"/",domain:"http://static4.qianqian.com/web/static/j/taihe.com"});var a='<div class="tipToTaihe-box">            <div class="bg"></div>            <div class="tipToTaihe-content-box pa">            <img src="../images/tip_taihe.png"/*tpa=http://static4.qianqian.com/web/static/images/tip_taihe.png*/ class="tipToTaihe-content"/>            <span class="enter pa"></span>            </div>            </div>';$("body").append(a);$(".tipToTaihe-box .enter, .tipToTaihe-box .bg").click(function(){$(".tipToTaihe-box").remove()})}ting.DM=".baidu.com";if(location.host.indexOf("http://static4.qianqian.com/web/static/j/taihe.com")!=-1){ting.DM=".taihe.com"}else if(location.host.indexOf("http://static4.qianqian.com/web/static/j/qianqian.com")!=-1){ting.DM=".qianqian.com"}window.enterState=function(a){var t,s,l,o,c,r,d;l=encodeURIComponent(location.href);t={sTemplate:"guest",sUserName:"",sSpaceLink:"",sProfileURL:"http://passport.baidu.com/#0,1",sHomeURL:"http://passport.baidu.com/v2/?ucenteradduname",sPaylistURL:"/paylist",sMessageURL:"/user/message",sBindURL:"/user/bind",sBaiduURL:"http://www.baidu.com/",sBaiduPrivilegeURL:"http://tequan.baidu.com/?sc=music",sBaiduMusicMall:"/mall?from=pcweb_music_qrcode",sLoginURL:"javascript:;",sRegURL:"javascript:;",sLogoutURL:"javascript:;",sOpenMbox:'<a href="javascript:void(0)" onclick="return ting.media.openPlayer(),false">音乐盒</a>',sMusicVIPURL:"/home/vip?pst=home"+(i?"&_vk=pay_k_load":""),sUsercenterURL:"/home/user",sReceiveURL:"/home/gift",enable_fee:false,sUserVipURL:"/home/vip"+(i?"?_vk=pay_k_load":""),vipIcon:"<span title='未开通VIP会员' class='power-icon-min index-icon-vipidentity'></span>",activeVipIcon:"<span title='成为音乐VIP会员' class='power-icon-min index-icon-vip-active'></span>",columnHtml:'<li><a class="my-column" href="http://static4.qianqian.com/column/manage" target="_blank" rel="nofollow"><i></i><span>我的专栏</span></a></li>',vipInfo:""};var m='<div id="menu-user"  style="display:none; width:204px;" class="mn-tip mnd-tip">                             <span class="u_ddl_arrow"> <em></em> </span>                            <div class="mnd">                                 <div class="uuser-info">                                     <p class="uuser-name"><a href="#{sHomeURL}" target="_blank">#{sUserName}</a></p>                                 </div>                                 <div class="uuser-active">                                     <ul class="clearfix">                                         <li id="messageDynamic" class="left"><a href="http://static4.qianqian.com/user/dynamic" target="_blank"><i></i><span>动态</span><b>#{dynamic_num}</b></a></li>                                         <li id="messageFriend" class="center"><i></i><a href="http://static4.qianqian.com/user/friend" target="_blank"><span>关注</span><b>#{friend_num}</b></a></li>                                         <li id="messageFans" class="right"><i></i><a href="http://static4.qianqian.com/user/fans" target="_blank"><span>粉丝</span><b>#{follow_num}</b></a></li>                                     </ul>                                 </div>                                 <ul class="uuser-list">                                      #{columnHtml}                                    <li><a id="messageHint" class="my-message" href="http://static4.qianqian.com/message" target="_blank" rel="nofollow"><i></i><em></em><span>我的消息</span></a></li>                                     <li><a class="my-songlist" href="#{sHomeURL}" target="_blank" rel="nofollow"><i></i><span>我的歌单</span></a></li>                                     <li><a class="my-paylist" href="#{sPaylistURL}" target="_blank" rel="nofollow"><i></i><span>购买记录</span></a></li>                                     <li><a class="my-info" href="#{sProfileURL}" target="_blank" rel="nofollow"><i></i><span>账号设置</span></a></li>                                     <li><a class="my-bind" href="#{sBindURL}" target="_blank" rel="nofollow"><i></i><span>分享绑定</span></a></li>                                     <li><a href="#{sLogoutURL}" class="logout" id="logout" rel="nofollow"><i></i><span>退出</span></a></li>                                 </ul>                             </div>';var u=m;var p="";var f='<ul>                                 <li class="uname mn-lk-w">                                     <a id="anchor-user-name" href="#{sHomeURL}" target="_blank">                                         <i class="user-name-bd-icon"></i>                                         &nbsp;#{sSourceIcon}#{sUserName}                                     </a>'+m+"</li>                             </ul>";var g='<a rel="nofollow" href="#{sLoginURL}" id="loginbtn"><i class="user-name-bd-icon"></i>&nbsp;一键登陆</a>';var v="";try{if(isHao123Header){v=isHao123Header;u=f;p=g}}catch(h){}s={guest:p,user:u};d=function(){document.getElementById("userCenter").style.display="block";document.getElementById("userCenterLine").style.display="block"};showReceive=function(){document.getElementById("receiveActive").style.display="block"};oCallbacks={guest:function(){var e=document.getElementById("loginbtn");var i=ting.passport.login||function(){ting.passport.checkLogin(function(){window.location.reload()},function(){},function(){},function(){})};if(e){if(!window.attachEvent){e.addEventListener("click",i,false)}else{e.attachEvent("onclick",i)}}else{}var n=document.getElementById("registBtn");var a=ting.passport.regist;if(n){if(!window.attachEvent){n.addEventListener("click",a,false)}else{n.attachEvent("onclick",a)}}else{}oCallbacks.invoked=true},user:function(){var i,n,a,t,s,l;i=document.getElementById("anchor-user-name");n=document.getElementById("menu-user");a=-1;t=500;s=false;l=false;function o(){if(s){if(l){n.style.display="none";if(v){i.className="anchor-user-name-bg-none"}l=false;clearInterval(a);a=-1}}}if(!!!i){return}i.onmouseenter=function(){if(!l){n.style.display="block";if(v){i.className="anchor-user-name-bg"}l=true;s=false;if(a<0){a=setInterval(o,t)}}else{o()}return false};i.onmouseleave=function(){s=true};n.onmouseover=function(){s=false};n.onmouseout=function(){s=true};setTimeout(function(){e.tingApi("baidu.ting.ugccenter.checkFollRedPoint",{typeids:"1,2"}).done(function(e){e=e.result;if(e.msg_flag&&e.msg_flag>0){if(document.getElementById("messageHint")){var i=document.getElementById("messageHint").firstChild;i.style.display="block"}}if(e.follow_flag&&e.follow_flag>0){if(document.getElementById("messageFans")){var i=document.getElementById("messageFans").firstChild;i.style.display="block"}}})},1e3);var c=function(){var e=this.firstChild;e.style.display="none"};if(!window.attachEvent){if(document.getElementById("messageFans")){document.getElementById("messageFans").addEventListener("click",c,false)}}else{if(document.getElementById("messageFans")){document.getElementById("messageFans").attachEvent("onclick",c)}}var r=e.getWebChat({setUnreadM:function(e){if(document.getElementById("messageHint")){var i=document.getElementById("messageHint").firstChild;i.style.display="block"}},setFans:function(e){if(e.serverid==10101){if(document.getElementById("messageFans")){var i=document.getElementById("messageFans").firstChild;i.style.display="block"}}}});$(".my-bind").click(function(e){ting.logger.log("click",{page:"jumppannel",pos:"sharebind"})});var d=document.getElementById("logout");var m=ting.passport.logout||function(){ting.passport.checkLogin(function(){window.location.reload()},function(){},function(){},function(){})};if(d){if(!window.attachEvent){d.addEventListener("click",m,false)}else{d.attachEvent("onclick",m)}}else{}oCallbacks.invoked=true}};function b(e,i){e=String(e);var a=Array.prototype.slice.call(arguments,1),t=Object.prototype.toString;if(a.length){if(i.thirdType=="taihe"){i.sProfileURL=n+"//passport.taihe.com/v2/web/settings.html?tpl=baidu_music"}a=a.length==1?i!==null&&/\[object Array\]|\[object Object\]/.test(t.call(i))?i:a:a;return e.replace(/#\{(.+?)\}/g,function(e,i){var n=a[i];if("[object Function]"==t.call(n)){n=n(i)}return"undefined"==typeof n?"":n})}return e}r=function(e,i){e=e||{};for(var n in t){if(e.hasOwnProperty(n)){continue}e[n]=t[n]}o=document.getElementById(a);if(o){o.innerHTML=b(s[e["sTemplate"]],e)}if(e.enable_fee){showReceive();if(e["sTemplate"]=="user"){d()}}oCallbacks[e["sTemplate"]]();if(i){i()}if(ting.vipTip)ting.vipTip.call();ting.vipTipReady=true;return false};var y=function(e){var i=$("#user-info");if(!i.length){return}if(e||v){i.html('<div class="info">                             <span class="icon-text">播放记录</span>                             <span class="icon-arrow"></span>                             </div>');i.hoverShow($("#play-info"),{onShow:function(){require(["ting/playInfo"])},onHide:function(){},delay:50})}else{i.html("").addClass("none")}};var _=function(e){if(e&&e.data){var i=e.data;if(i.vip&&i.vip.cloud){window.BDUS.vipState=i.vip.cloud.service_level}if(i.status){window.BDUS.status=i.status}else{window.BDUS.status="0"}}};var w=function(e){var i={id:"public_tuijian_suibiantingting",name:"随便听听",img:"../../../../static2.qianqian.com/web/static/i/ZT9OrDsY.png"/*tpa=http://static2.qianqian.com/web/static/i/ZT9OrDsY.png*/};if(e&&e.errorCode==22e3){i={id:"private",name:"私人频道",img:"../../../../static3.qianqian.com/web/static/i/3KRB7uTd.png"/*tpa=http://static3.qianqian.com/web/static/i/3KRB7uTd.png*/}}var n=['<li class="entry-item first-item">','<a target="_blank" href="http://fm%27+ting.dm+/"/#/channel/"+i.id+'">','<div class="entry-item-btn">','<span class= "entry-icon" style="background:url('+i.img+');"></span>','<span class= "entry-text">'+i.name+"</span>","</div>","</a>","</li>"].join("");var a=$("#mbox-entry-list");var t=a.html();a.html(n+t)};function k(e){var i,n,a,t,s,l,o;a=parseInt(e.errorCode);t=e.data;n={};s=e.data.passInfo||{};l=e.data.showNum||{};if(a==22e3){n.thirdType=e.data.thirdType;ting.passport&&(ting.passport.isLogin=true);ting.userInfo=e.data;i=t.bdName?t.bdName:t.bdEmail?t.bdEmail:t.bdMobile?t.bdMobile:s.displayname;n.sUserName=i;n.sTemplate="user";n.sHomeURL="/user";n.enable_fee=!!t.enable_fee;if(t.vip){try{var c=t.vip.cloud.service_level}catch(d){}if(ting.vip){o=ting.vip.genInitFn(c,t.vip_expiry)}}else{if(ting.vip){o=ting.vip.genInitFn("not")}}if(!t.bdName&&!t.bdEmail&&!t.bdMobile&&s.incomplete_user==1){n.sSourceIcon='<img src="'+s.source_icon+'" width="16" height="16" style="vertical-align:top;margin-right:3px" />'}n.avatar=s.avatar_small;n.dynamic_num=l.dynamic_num||0;n.follow_num=l.follow_num||0;n.friend_num=l.friend_num||0;var m=e.data.ugcFlag||"0";if(m[0]>0){n.vipInfo="vip"+m[0]}else if(m[2]==1){n.vipInfo="renzheng"}else if(m[1]==1){n.vipInfo="daren"}if(!t.specialRight){n.columnHtml=""}y(n);var u=document.getElementById("menu-login");var p='<img id="anchor-user-name" src="'+n.avatar+'" /><em class="vip-info '+n.vipInfo+'"></em>';u.innerHTML=p}else{n.enable_fee=!!t.enable_fee;n.sTemplate="guest";if(ting.vip){o=ting.vip.genInitFn("anonymous")}y(null)}_(e);w(e);return r(n,o)}return k}("userbar")});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/