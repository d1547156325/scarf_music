(function(t,i){var a=t("#ww").val(),s=t(".song-list li"),e={page:"c_tag_d",queryname:a},n=0;function l(t){var i=new RegExp("(^|&)"+t+"=([^&]*)(&|$)");var a=window.location.search.substr(1).match(i);if(a!=null){return unescape(a[2])}return null}var o=t(".tag-main").data("tagstyle");if(o){e.tag=o}ting.logger.log("exposure_pv",e);var r=l("start")?l("start")/l("size"):0;r=r+1;e.pagenum=r;function g(i){var a=t(i),s=i.tagName.toLowerCase(),e="";if(s==="a"||a.parents("a").length){var n=s==="a"?a:a.parents("a");if(n.hasClass("list-micon")){if(n.hasClass("icon-play")){e="play_song"}else if(n.hasClass("icon-add")){e="add_song"}else if(n.hasClass("icon-download")){e="down_song"}}else{if(n.parents(".song-title").length){e="song_name"}else if(n.parents(".singer").length){e="artist_name"}else if(n.parents(".album-title").length){e="album_name"}}}return e}if(t(".search-tengxun-ad")){ting.logger.log("exposure",{page:"tag_page",expoitem:"ad_top"});t(".ad-banner").bind("click",function(){ting.logger.log("click",{pos:"top_ad",page:"tagpage"})})}var c=false;s.bind("mousedown",function(i){var a=t(this).data("songitem").songItem.sid,s=g(i.target);e.songid=a;if(s){if(!c){c=true;e.logtype="click_pv"}else{e.logtype="click_num"}e.pos=s;ting.logger.log("click",e)}});t("#rec_tag .item-tag ").bind("mousedown",function(t){var i="recommend_tag";if(i){if(!c){c=true;e.logtype="click_pv"}else{e.logtype="click_num"}e.pos=i;ting.logger.log("click",e)}});var u=t.browser.msie&&t.browser.version=="6.0"?true:false;var d=t("#artistList"),p=t(".artist-list"),f=t(".wrap",p),m=t("li",f),h=parseInt(t("ul",p).width()),v=null,k=0,b=t(".artist-focus-page a"),w=b.parent(),y=u?"btn":"item",x=true,C=0,L=true,j=7e3,S=null;t(" .right-btn",d).bind("click",function(){N();T(y);return false});t(" .left-btn",d).bind("click",function(){k--;if(k<0){k=b.length-1}T(y);return false});b.bind("click",function(i){if(t(this).hasClass("page-active")){return false}i.preventDefault();k=t(this).index();T(y);return false});d.bind("mouseover",function(){clearInterval(S);S=null});d.bind("mouseout",function(){if(L){I()}});var N=function(){if(k>=0&&k<b.length-1){k++}else{k=0}if(k>b.length-1){k=b.length-1;return false}};var I=function(){S=setInterval(function(){N();T()},j)};if(I){I()}var T=function(i){var a=t(t("ul",f)[k]),s=t("img",a);s.each(function(i,a){img_src=t(a).attr("src"),img_org_src=t(a).attr("org_src");if(img_org_src!=img_src){t(a).attr("src",img_org_src)}});var i="btn";var e=k*h;v=i=="btn"?{left:-e}:{opacity:"0.3"};f.stop(true,true).animate(v,"100",function(){if(i!="btn"){f.css("left",-e);f.stop(true,true).animate({opacity:"1"},"normal");x=true}});$()};var $=function(){b.removeClass("page-active");t(b[k]).addClass("page-active")};t(".des-more-hook").toggle(function(){t(".style-desc .description").hide();t(".style-desc .description-all").show();t(this).find("span").text("收起");t(this).find("i").addClass("expand");return false},function(){t(".style-desc .description-all ").hide();t(".style-desc .description").show();t(this).find("span").text("展开");t(this).find("i").removeClass("expand");return false});t("#mod_works").tab();t("#albumList .album-cover-hook").albumCover();var q=t("#mod_works .songs-list .page-navigator-hook").pageNavigator();q.bind("pagenavigator.pagechange",function(i,a){var s={start:a.start,worksList:t("#songList")},e={start:s.start,title:t(".target-tag .title").text()};E(s);ting.connect.getStyleSongs(e,null,function(i){t(".song-list-wrap",s.worksList).html(i.data.html);U(s);t(".song-list-hook",s.worksList).songList();t(".music-icon-hook",s.worksList).musicIcon();location.hash="list-top"})});var B=t("#mod_works .albums-list .page-navigator-hook").pageNavigator();B.bind("pagenavigator.pagechange",function(i,a){var s={start:a.start,worksList:t("#albumList")},e={start:s.start,title:t(".target-tag .title").text()};E(s);ting.connect.getStyleAlbums(e,null,function(i){t(".album-list-wrap",s.worksList).html(i.data.html);U(s);t(".album-list .songlist-fold-hook",s.worksList).songlistExpand({hotBar:true,moduleName:"album"});t(".album-cover-hook",s.worksList).albumCover();location.hash="list-top"})});var E=function(i){$mask=t("<div>").attr("class","ajax-mask").css("height",i.worksList.height());$maskBox=t("<div>").attr("class","ajax-mask-box").html("加载中...");i.worksList.css({position:"relative",zoom:1}).append($mask).append($maskBox)};var U=function(i){$mask=t("<div>").attr("class","ajax-mask");$maskBox=t("<div>").attr("class","ajax-mask-box");t(".ajax-mask",i.worksList).remove();t(".ajax-mask-box",i.worksList).remove()};if(t.ting.songlistExpand){t(".album-list .songlist-fold-hook").songlistExpand({hotBar:true,moduleName:"album"})}var z=t(".join-operation");if(z.length){t(".play-album").on("click",function(){var i=t(this),a=i.data("ids");if(a){ting.media.playSong(a.split(","),{moduleName:"newTagPage"});i.tip().tip("tipup",{msg:"已开始播放",iconClass:"tip-success"})}return false});var A=z.data("ids").split(",");z.find(".play-selected-hook").on("click",function(){ting.media.playSong(A,{moduleName:"newTagPage"});t(this).tip().tip("tipup",{msg:"已开始播放",iconClass:"tip-success"});if(ting&&ting.logger&&ting.logger.plogClick){ting.logger.plogClick("play_sel")}});z.find(".add-selected-hook").on("click",function(){ting.media.addSong(A);t(this).tip("tipup",{msg:"添加成功！",iconClass:"tip-success"});if(ting&&ting.logger&&ting.logger.plogClick){ting.logger.plogClick("add_sel")}});z.find(".collect-selected-hook").on("click",function(){var i=t(this);ting.connect.collect(null,{ids:A.join(","),type:"song"},function(t){ting.media.collectSong(A.join("_"))},function(t){var a="tip-error";switch(t.errorCode){case 22322:a="tip-warning";t.errTip="歌曲已被保存";break;case 22331:t.errTip="云空间已满，去<a href ='http://yinyueyun.baidu.com/' target = '_blank'>整理云空间</a>吧！";break;case 22232:t.errTip="对不起，千千音乐只能在中国内地提供服务";break;default:t.errTip="操作失败，请稍候再试";break}var s={msg:t.errTip?t.errTip:"操作失败",iconClass:a};if(t.errorCode=22331){s.showTime=5e3}i.tip().tip("tipup",s)});return false});z.find(".down-selected-hook").on("click",function(){ting.media.downloadAll(A);ting.logger.log("down_mutli",{page:ting.logger.getPage(),song_num:50});return false})}t(".tag-main .play-selected-hook").click(function(){var i=t(".target-tag .title").text();ting.logger.log("click",{page:"tag_detl",pos:"playselct",sub:i})});var P=t(".target-tag").find(".title").text(),D=_.template('<ul class="group-list now-tab">'),R=_.template("</ul>"),J=_.template('</ul><ul class="group-list">'),O=_.template('         <li class="group-item <% if ((index+1)%5 == 0 && index != 0) { %>group-last-item <%}%>">             <div class="songlist-cover">                 <div class="col-listen">                     <span><i></i><%- listenCount %></span>                 </div>                 <a target="_blank" href="/songlist/<%- playlistId %>">                     <img width="130" height="130" org_src="<%- picUrl %>" src="<%- picUrl %>" class="lazyload"/>                 </a>                 <div class="songlist-title songlist-tagpage">                     <h2><%- title %></h2>                 </div>                 <a href="#" title="播放" data-song="<%- dataSong %>" class="songlist-all-play play">                 </a>             </div>         </li>');t.ajax({url:"/data/search/playlist",dataType:"json",data:{tag:P}}).done(function(i){if(i.errorCode==22e3){if(!i.list||i.list.length==0){return}var a=D(),s=t(".group-songlist"),e=i.list;_.each(e,function(t,i){a+=O({index:i,listenCount:F(t.listen_count),playlistId:t.playlist_id,picUrl:t.thumb||"../../../../static2.qianqian.com/web/static/images/default/songlist_default_150.png"/*tpa=http://static2.qianqian.com/web/static/images/default/songlist_default_150.png*/,title:t.title,dataSong:JSON.stringify({ids:t.song_list,moduleName:"hotsl_"+t.playlist_id+"_"+encodeURIComponent(t.title),listid:t.playlist_id,logAction:"play_song"})});if((i+1)%5==0&&i+1!=e.length){a+=J()}});a+=R();s.show().find(".body").html(a);Q(".group-songlist",".group-songlist .now-tab");s.find(".songlist-all-play").on("click",function(){var i=t(this),a=i.data("song"),s=a.listid,e=a.ids,n={moduleName:a.moduleName};t.ajax({url:"/data/music/songlist/listen?playlistId="+s+"&t="+new Date*1});ting.media.playSong(e,n);i.tip().tip("tipup",{msg:"已开始播放",iconClass:"tip-success"});return false})}});function Q(i,a){t(i).find(".changenother").on("click",function(){var s=t(a).index();var e=t(i).find(".group-list").length-1;if(s<e){s++;t(i).find(".group-list").removeClass("now-tab");t(i).find(".group-list").eq(s).addClass("now-tab")}else{s=0;t(i).find(".group-list").removeClass("now-tab");t(i).find(".group-list").eq(s).addClass("now-tab")}return false})}function F(t){t=t.toString();var i=t.length,a=3;if(i>a){var s=i%a,e=parseInt(i/a),n=[],l=t.substr(0,s);if(l!=""){n.push(l)}for(var o=0;o<e;o++){n.push(t.substr(s+o*a,a))}t=n.join(",")}return t}})(jQuery);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/