define(["core/utils"],function(e){var t={AppKey:"3267305339",AppSecret:"7d042676f916085b6cafdd7d1457e668",codeUrl:window.location.origin+"/ugc/weibo/pagereturn",webUrl:window.location.origin},i=null;var n=location.protocol;var o=$("html").eq(0);o.attr({"xmlns:wb":"http://open.weibo.com/wb"});var r=$("head").eq(0);$("<script></script>").attr({src:"//tjs.sjs.sinajs.cn/open/api/js/wb.js?appkey="+t.AppKey,type:"text/javascript",id:"weibo-api"}).appendTo(r);return{setAuth:function(){var n=$.Deferred();clearInterval(i);var o="https://api.weibo.com/oauth2/authorize?client_id="+t.AppKey+"&response_type=code&redirect_uri="+t.codeUrl;window.open(o);var r=0;a=0,ntime=2e3,atime=Math.ceil(3*60*1e3/ntime);i=setInterval(function(){r=e.getCookie("_scd");if(r&&r==2){clearInterval(i);n.resolve()}else if(r&&r==3){clearInterval(i);n.reject()}else if(a>atime){clearInterval(i);n.reject()}a++},ntime);return n.promise()},getAuth:function(){var t=$.Deferred();e.tingApi("baidu.ting.ugccenter.getUserBaseInfo",{}).done(function(e){t.resolve(e.result.weibo_info)}).fail(function(){t.reject()});return t.promise()},checkAuth:function(){var e=$.Deferred();this.getAuth().done(function(t){if(t&&t.weibo_flag){WB2.anyWhere(function(i){i.parseCMD("/oauth2/get_token_info",function(i,n){if(n){if(i.uid==t.weiboid){e.resolve(t.weibotoken)}else{e.reject()}}else{e.reject()}},{access_token:t.weibotoken})})}else{e.reject()}}).fail(function(){e.reject()});return e.promise()},revokeAuth:function(t){var i=$.Deferred();e.tingApi("baidu.ting.ugccenter.updateUserWeibo",{weiboid:"",weibonick:"",weibotoken:""}).done(function(){e.setCookie("_scd","4");WB2.anyWhere(function(e){e.parseCMD("/oauth2/revokeoauth2",function(e,t){},{access_token:t})});i.resolve()}).fail(function(){i.reject()});return i.promise()},weiboPublish:function(e,t){if(e&&t){WB2.anyWhere(function(i){i.widget.publish({id:"wb_publish_"+e,default_text:"@"+t+" 邀请你来千千音乐和我一起听好歌，还能结识更多音乐好友哦！"+n+"//music.qianqian.com/ ",callback:function(e){}})})}},sendContent:function(e,i){var n=i.msg,o=i.pic,r=[];n=n.replace(/@/g,"@ ");if(i.topic&&i.topic.id>0){n="话题："+i.topic.text+"#"+r.length+"# "+n;r.push(t.webUrl+"/discuss/detail/"+i.topic.id)}if(n.length>115){n=n.substr(0,115)+"..."}if(i.song&&i.song>0){n+=" 单曲："+"#"+r.length+"# ";r.push(t.webUrl+"/song/"+i.song)}if(i.album&&i.album>0){n+=" 专辑："+"#"+r.length+"# ";r.push(t.webUrl+"/album/"+i.album)}if(i.artist&&i.artist>0){n+=" 歌手："+"#"+r.length+"# ";r.push(t.webUrl+"/artist/"+i.artist)}if(i.songlist&&i.songlist>0){n+=" 歌单："+"#"+r.length+"# ";r.push(t.webUrl+"/songlist/"+i.songlist)}n+="（@千千音乐）";o=o.split(",")[0];var s=o==""?"http://static3.qianqian.com/statuses/update.json":"http://static3.qianqian.com/statuses/upload_url_text.json";WB2.anyWhere(function(t){for(var i=0;i<r.length;i++){n=n.replace("#"+i+"# ",r[i])}t.parseCMD(s,function(e,t){},{access_token:e,status:encodeURIComponent(n),url:o})})},destory:function(){clearInterval(i)}}});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/