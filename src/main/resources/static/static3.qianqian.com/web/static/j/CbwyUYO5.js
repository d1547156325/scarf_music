var ting=ting||{};void function(e){function n(e,n,r,o,i,u,s,l,d){ting.passport.checkLogin(function(){t(e,n,r,o,i,u,s,l,d)},function(){},function(){var e={};e.query=n;u&&u(e)},function(){},{ref:"pop_web",operation:!!s,needBdName:!!l})}function t(t,r,o,i,u,s,l,d,g){i=i||e.noop;u=u||e.noop;s=s||e.noop;var a=[];for(var c in r){a.push(c+"="+encodeURIComponent(r[c]))}a.push(".r="+Math.random()+new Date*1);var L=t+"?"+a.join("&");e.ajax({url:L,data:o,type:o?"post":"get",async:g===false?g:true,dataType:"json",success:function(e){if(!e)return;var g=e.errorCode;if(g==22452||g==22453){if(g==22452){ting.userInfo=null}else if(g==22453){if(ting.userInfo){ting.userInfo.active=false}}n(t,r,o,i,u,s,l,d)}else{if(g==22e3||g==22706){i(e)}else{e.errorMessage=ting.errorMap[g];u(e)}}},error:function(e,n,t){var o={};o.query=r;o.errorCode=-1;o.errorMessage="请求失败";u(o)}})}var r={};var o={getUserInfo:{url:"user/info",needLogin:true},editStatus:{url:"user/editStatus",needLogin:true},collect:{url:"user/collect",needLogin:true,isOperation:true},collectPlaylist:{url:"user/playlist",needLogin:true,isOperation:true},getcollect:{url:"user/isCollect",needLogin:false},collection:{url:"user/collection",needLogin:true},collectionSongIds:{url:"user/collectionSongIds",needLogin:true},deleteCollection:{url:"user/deleteCollection",needLogin:true,isOperation:true},batchfollow:{url:"user/batchfollow",needLogin:true},follow:{url:"user/follow",needLogin:true,isOperation:true},unfollow:{url:"user/unfollow",needLogin:true,isOperation:true},deleteNotice:{url:"user/deleteNotice",needLogin:true},deleteAllNotice:{url:"user/deleteAllNotice",needLogin:true},sendMessage:{url:"user/sendMessage",needLogin:true},deleteMessage:{url:"user/deleteMessage",needLogin:true},isReadMsg:{url:"user/isReadMsg",needLogin:true},downloadSong:{url:"music/downloadLink",needLogin:true,isOperation:true},getProgram:{url:"fm/getProgram",needLogin:false},checkArtist:{url:"fm/artistExist",needLogin:false},recommend:{url:"user/recommend",needLogin:true,isOperation:true},deleteRecommend:{url:"user/deleteRecommend",needLogin:true,isOperation:true},recommendtopic:{url:"user/recommendtopic",needLogin:true},starAttention:{url:"user/starAttention",needLogin:false},artistAction:{url:"user/artistAction",needLogin:true},bannerSave:{url:"artist/bannerSave",needLogin:true},getComment:{url:"comment/get",needLogin:false},getCommentList:{url:"comment/list",needLogin:false},addComment:{url:"comment/add",needLogin:true,isOperation:true,needBdName:true},deleteComment:{url:"comment/delete",needLogin:true,isOperation:true,needBdName:true},deleteBanner:{url:"user/deleteBanner",needLogin:true},deletePhoto:{url:"user/deletephoto",needLogin:true},getSong:{url:"music/song",needLogin:false},getAlbum:{url:"music/album",needLogin:false},getDiy:{url:"music/diy",needLogin:false},getTopList:{url:"music/topList",needLogin:false},search:{url:"music/search",needLogin:false},getSonglistCollect:{url:"music/songlist/list",needLogin:false},addDiy:{url:"diy/add",needLogin:true,isOperation:true,needBdName:true},editDiy:{url:"diy/edit",needLogin:true,isOperation:true,needBdName:true},deleteDiy:{url:"diy/delete",needLogin:true,isOperation:true,needBdName:true},countDiy:{url:"diyalbum/count",needLogin:true},topicUpd:{url:"user/topicUpd",needLogin:true},getTopicUpd:{url:"topic/getTopicUpd",needLogin:false},applyForInvitation:{url:"user/applyForInvitation",needLogin:false},setProperty:{url:"property/set",needLogin:true},editUserProfile:{url:"user/editUserProfile",needLogin:true},editArtistProfile:{url:"user/editArtistProfile",needLogin:true},editUserAvatar:{url:"user/editUserAvatar",needLogin:true},plazaActiveStarAttention:{url:"user/plazaActiveStarAttention",needLogin:false},getMSNContactList:{url:"user/msnContactList",needLogin:true},getEmailContactList:{url:"user/emailContactList",needLogin:true},downloadlimit:{url:"user/downloadlimit",needLogin:true},sendMail:{url:"user/sendMail",needLogin:true},getArtistSong:{url:"user/getsongs",needLogin:false},getArtistHotSongIds:{url:"user/gethotsongids",needLogin:false},getArtistAlbum:{url:"user/getalbums",needLogin:false},getArtistMV:{url:"user/getmvlist",needLogin:false},getArtistPhotos:{url:"user/getphotos",needLogin:false},getArtistPhotosData:{url:"user/getphotosdata",needLogin:false},userPower:{url:"user/power",needLogin:false},downPower:{url:"user/downpower",needLogin:true},contribution:{url:"user/kingtotal",needLogin:true},getMv:{url:"music/getmv",needLogin:false},paymentSum:{url:"service/sum",needLogin:false},paymentCheckStatus:{url:"service/stats",needLogin:false},paymentEasy:{url:"service/kuaijie",needLogin:false},paymentExchange:{url:"duihuan",needLogin:false},receiveCheckStatus:{url:"gift/check",needLogin:true},getReceive:{url:"gift/give",needLogin:true},getCloud:{url:"/gift/give/cloud",needLogin:true},getStyleSongs:{url:"genres/getsongs",needLogin:false},getStyleAlbums:{url:"genres/getalbums",needLogin:false},vipSpread:{url:"user/tips",needLogin:false},iqiyi:{url:"iqiyi",needLogin:true},getVipSevenDays:{url:"gift/invite",needLogin:true},getNewTopList:{url:"music/newtop",needLogin:false},recorddown:{url:"module/song/recorddown",needLogin:false},getGroupSong:{url:"music/getgroupsong",needLogin:false},getClusterSong:{url:"music/getclustersong",needLogin:false},getDevice:{url:"module/song/getdevice",needLogin:true},deleteDevice:{url:"module/song/deldevice",needLogin:true},sendSongBySMS:{url:"module/song/send2tel",needLogin:true},sendSongByWireless:{url:"module/song/send2telphone",needLogin:true},getOrderId:{url:"mpc/genorder",needLogin:true}};var i="/data/";for(var u in o){var s=o[u];var l=i+s.url;var d=s.needLogin;var g=s.isOperation||false;var a=s.needBdName||false;r[u]=function(e,r,o,i){return function(u,s,l,d,g,a){if(r){n(e,u,s,l,d,g,o,i,a)}else{t(e,u,s,l,d,null,o,i,a)}}}(l,d,g,a)}r.getMusicSuggestion=function(n,t,r,o,i){var u="http://nssug.baidu.com/su?wd="+encodeURIComponent(t.wd)+"&ie=utf-8&prod=ting";var s=i||u;var l=function(t){var o={};o.query=n;o.errorCode=22e3;if(typeof t==="string"){t=e.parseJSON(t)}if(t.s){o.data=t.s}else{o.data=t}r(o)};window.baidu=window.baidu||{};window.baidu.sug=l;e.ajax({url:s,dataType:"script",error:function(){var e={};e.query=n;e.errorCode=-1;e.errorMessage="请求失败";o(e)}})};ting.connect=r}(jQuery);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/