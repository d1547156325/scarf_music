define(["core/utils","widget/toast/toast","widget/ushare/ushare","tmpl/song_download/sell_down/albumheaderTmpl","tmpl/song_download/sell_down/albumfansfooterTmpl","tmpl/song_download/sell_down/albumzhuanjilistTmpl","tmpl/song_download/sell_down/albumguizeTmpl"],function(e,a,l,i,t,n,s){var r=$(".sell-album-details-heart"),u=$(".sell-fans-del"),o=$(".sell-album-lists"),c=$(".sell-tan-content"),m=window.location.href.split("/")[5],f,d,p,v,g,b,h;function y(e){var a=document.createElement("div");a.innerHTML=e;e=a.innerText||a.textContent;a=null;return e}e.tingApi("http://static1.qianqian.com/web/static/j/baidu.ting.pay.info",{from:"web",type:2,type_id:m}).always(function(e){if(e.error_code==22e3){var a=Math.floor(e.result.market_price);var l=e.result.info;if(l){var t=l.replace(/\n/g,"<br/>");var n=l.split("</p><p>").join().split("</p ><p>").join().replace(/<!-[.\s\S]*?-->/g,"");if($(n)[0]){var u=$(n)[0].innerText}else{var u=$(n).selector}var o=u.substring(0,120);var v=o.split("").length;var g=e.result.instructions.split("\n");var y=0;var w=0;var _=0;f=e.result.buynums;p=e.result.album_500_500;h=e.result;d=e.result.my_num;b=e.result.nickname;var k=u.split("").length;for(var I=0;I<k;I++){var j=u.split("");if(j[I].charCodeAt(0)<256){y++}else{w++}}_=Math.ceil(w+y/3);var x=_>120?o:u;var T=_>120?v:_}else{l=null}r.html(i({item:e.result,albumprice:a,jiefont:x,jiefontlength:T,windowalbumid:m,wup:u,strwen:t}));$(".wenzi-decode").html(t);c.append(s({instructions:g}));if(e.result.video){require(["require/plugin/cyberplayer"],function(a){a("sell-mv-del-video").setup({flashplayer:"../../../static/flash/cyberplayer.flash.swf"/*tpa=http://static1.qianqian.com/static/flash/cyberplayer.flash.swf*/,width:834,height:406,stretching:"uniform",file:"/playmv/"+e.result.video||"",autostart:false,repeat:false,volume:100,controls:true,image:e.result.video_img,ak:"9eadea16f3424e94b7086e33ce283040"})})}else{$("#sell-mv-del-video").remove()}if(e.result.listimg){$(".sell-img-del").append('<img src=" '+e.result.listimg+' " class="videoImg" alt="">')}else{$(".sell-img-del").remove()}addSubNum();getFansAlbum()}});e.tingApi("baidu.ting.album.getAlbumInfo",{album_id:m,size:30,offset:0}).always(function(a){var l=Math.floor(a.albumInfo.price);v=a.songlist[0].si_presale_flag;g=a.albumInfo.ai_presale_flag;if(d>0){if(g==1){$(".album-cover-bg").append('<a href="javascript:void(0)" class="album-cover-noplay-ico"></a>')}else{$(".album-cover-bg").append('<a href="javascript:void(0)" class="album-cover-canplay-ico"></a>')}}e.tingApi("http://static1.qianqian.com/web/static/j/baidu.ting.pay.info",{type_id:m,type:2,from:"web"}).done(function(e){if(e.error_code==22e3){var i=e.result.buynums;var t=e.result.my_num;o.html(n({item:a,price:l,buyNums:i,myNums:t,aiPresaleFlag:a.albumInfo.ai_presale_flag}));var s=window.location.href.split(".com")[0];bdShare({bdText:a.albumInfo.author+"的《"+a.albumInfo.title+"》，快来支持吧！",bdDesc:a.albumInfo.author+"的《"+a.albumInfo.title+"》，快来支持吧！",bdUrl:s+".com/cms/webview/song_buy/index_tpay/?type=2&type_id="+m,bdPic:p});$(".sell-list-content:last").css("border","0px")}})});getFansAlbum=function(){e.tingApi("baidu.ting.user.payTop",{id:m,res_type:"album",from:"web"}).always(function(e){u.html(t({item:e.result,userbuynum:f,minenickname:b}));if(e.result[0].pay_nums){if(!e.result[0].avatar_small){e.result[0].avsatar_small="../../../../business.cdn.qianqian.com/qianqian/file/584a3f30c85b2_440.PNG"/*tpa=http://business.cdn.qianqian.com/qianqian/file/584a3f30c85b2_440.PNG*/}$(".album-right").append('<a href="/user?nickname='+e.result[0].nickname+'" class="fans-one"><div class="bg-fans-one"><img src="'+e.result[0].avatar_small+'" alt=""></div><span class="tieganfensi"></span></a>');$(".album-right").append('<div class="album-qipao"><i></i><div class="album-qipao-content"><p class="usernames"><span class="fir overdd">'+e.result[0].nickname+'</span><span class="las-vip-'+e.result[0].isvip+'"></span></p><p class="hasnum">已购'+e.result[0].pay_nums+"张</p></div></div>")}})};var w=$(".listsong").data("albumid")||"";$(".album-right").find(".share").live("click",function(){$(".bdsharebuttonbox").show()});$(".album-right").find(".share").hoverShow($(".bdsharebuttonbox"),{delay:500});var _=$(".list-1").data("sipresaleflag");if(_){$(".album-unic-yushou-flag").addClass("album-cover-noplay-ico")}else{$(".album-unic-yushou-flag").addClass("album-cover-canplay-ico")}$(".buy-album-now").live("click",function(){var e=$(this).data("sellalbumprice")||"";var a=$(".buy-msg-num-text").val();if(ting.userInfo){var l=new ting.tPay({type:"album",typeid:e,total:a});l.load()}else{ting.passport.checkLogin(function(){})}});$(".buy-album").live("click",function(){var e=$(this).data("albumid")||"";if(ting.userInfo){var a=new ting.tPay({type:"album",typeid:e});a.load()}else{ting.passport.checkLogin(function(){})}});$(".buy-song").live("click",function(){var e=$(this).data("albumid")||"";if(ting.userInfo){var a=new ting.tPay({type:"album",typeid:e});a.load()}else{ting.passport.checkLogin(function(){})}});$(".tiabng").live("click",function(){var e=$(".listsong").data("albumid")||"";var a=$(this).data("paynum")||"";var l=$(this).data("nickname")||"";var i=a-f+1;if(ting.userInfo){var t=new ting.tPay({type:"album",typeid:e,total:i});t.load()}else{ting.passport.checkLogin(function(){})}});$(".fanstibang").live("click",function(){var e=$(".listsong").data("albumid")||"";var a=$(this).data("paynum")||"";var l=a-f+1;if(ting.userInfo){var i=new ting.tPay({type:"album",typeid:e,total:l});i.load()}else{ting.passport.checkLogin(function(){})}});$(".listplays").live("click",function(){var e=$(this).data("playsongid")||"";ting.media.playSong([e])});$(".album-cover-canplay-ico").live("click",function(){var e=$(".listsong").data("albumid")||"";ting.media.playAlbum([e])});$(".show-inl-show").live("click",function(){$(".jeishi-wenzi").hide();$(".jeishi-wenzi-show").show()});$(".show-inl-hid").live("click",function(){$(".jeishi-wenzi-show").hide();$(".jeishi-wenzi").show()});$(".sell-hid").live("click",function(){$(".sell-tan-wrap").hide()});$(".sell-del-explain").live("click",function(){$(".sell-tan-wrap").show()});addSubNum=function(){var e=$(".album-content-permoney"),a=e.data("albumpricey");e.html(a);var l=false;function i(e,a){if(l){return false}$(".sell-tip").remove();e.append('<div class="sell-tip" >'+a.msg+"</div>");$(".sell-tip").fadeIn(400);l=true;var i=setTimeout(function(){$(".sell-tip").fadeOut(150);l=false;clearTimeout(i)},2e3)}$(document).bind("logined",function(){window.location.reload()});var t=1,n=$(".buy-msg-num-text"),s=6e3,r=0,u=$(".buy-msg-num"),o=/^[0-9]\d*$/;if(a!=0){r=parseInt(s/a)}var c=true;$("#buy-msg-add").live("click",function(){t=n.val();if(!o.test(t)){i(u,{msg:"请输入正确的购买数量！"});c=false;return false}if(t>=r){i(u,{msg:"单次最多购买"+r+"个哦！"});n.val(t);return false}t++;n.val(t);c=true});$("#buy-msg-sub").live("click",function(){t=n.val();if(!o.test(t)){i(u,{msg:"请输入正确的购买数量！"});c=false;return false}if(t<=1){i(u,{msg:"最少购买1个哦！"});return false}t--;n.val(t);c=true});n.keyup(function(){t=n.val();if(!o.test(t)){i(u,{msg:"请输入正确的购买数量！"});c=false;return false}if(t>r){n.val(r);c=true;i(u,{msg:"单次最多购买"+r+"个哦！"});return false}if(t<1){n.val("1");c=true;i(u,{msg:"最少购买1个哦！"});return false}});n.blur(function(){t=n.val();if(!o.test(t)){i(u,{msg:"请输入正确的购买数量！"});c=false;return false}if(t<1){n.val("1");c=true;i(u,{msg:"最少购买1个哦！"});return false}else{c=true}});$(".buy-msg-buybtn-pay").click(function(){if(!c){i(u,{msg:"请输入正确的购买数量！"});return false}if(ting&&ting.logger&&$(this).data("from")=="music_client"){ting.logger.log("click",{page:"sell_album",pos:"sell_album_btn",from:"music_client"})}window.open(opt.sellPayLink+"&nums="+parseInt(n.val()))});$(".album-cover-noplay-ico").live("click",function(){var e=$(".album-cover-noplay-ico");i(e,{msg:"该专辑尚未发行，发行即可播放！"})});$(".huiziyuan-song").live("click",function(){var e=$(this);i(e,{msg:"该专辑已经下线，去听听其他专辑吧！"})});$(".yushoulistplays-unic").live("click",function(){var e=$(this);i(e,{msg:"该专辑尚未发行，发行即可播放！"})})}});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/