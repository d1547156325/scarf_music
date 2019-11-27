(function(){ting.tip={};ting.tip.play=function(){var e=$(this);require(["tip"],function(){e.tip().tip("tipup",{msg:"已开始播放",iconClass:"tip-success"})})};ting.tip.collect=function(){var e=$(this);require(["tip"],function(){e.tip().tip("tipup",{msg:"已保存到我的收藏",iconClass:"tip-success"})})};ting.tip.add=function(){var e=$(this);require(["tip"],function(){e.tip().tip("tipup",{msg:"添加成功",iconClass:"tip-success"})})};var e=function(e,i){if(!i){return}!e.moduleName&&(e.moduleName=i.parents(".js-mod").data("js-mod-name"))};var i={};i.add=function(e,i,a){$(a||document).on("click",e,i)};i.add(".js-play-song",function(i){var a=$(this);var t=a.parent().data("args");var l={page:ting.logger.getPage(),pos:"play_song",songcount:1};if(t.id){t.id.split?t.id=t.id.split(","):"";e(t,a);var n={moduleName:t.moduleName||"",id:t.id||"",mediaType:1,albumId:t.albumId||"",siPresaleFlag:t.siPresaleFlag||"",resourceTypeExt:t.pay_type||"",songPic:t.songPic||"",songTitle:t.songTitle||"",songPublishTime:t.songPublishTime||""};if(n.resourceTypeExt&&(n.resourceTypeExt==3||n.resourceTypeExt==4)){ting.checkSellResourse(n.id,n.albumId,function(e){n.isPay=e;ting.media.playSong(n.id,n);if(n.isPay!=1||n.siPresaleFlag==1||n._aiPresaleFlag==1){}else{ting.tip.play.call(a)}});l.song_title=n.songTitle;l.song_id=n.id;l.isPay=2}else{ting.media.playSong(n.id,n.moduleName);ting.tip.play.call(a)}ting.logger.plogClick("play_"+t.type);ting.logger.log("play_song",l)}});i.add("#js-random-focus li",function(){var e=$(this).data("title");ting.logger.log("click",{page:"home",pos:"jdt",sub:e})});i.add(".js-play-song-yyr",function(){var i=$(this);var a=i.parent().data("args");if(a.id){var t=a.id.split?a.id.split(","):a.id;for(var l=0,n=t.length;l<n;l++){t[l]=73819e3+(t[l]-0)}e(a,i);ting.media.playSong(t,a.moduleName);ting.tip.play.call(i);ting.logger.plogClick("play_song_yyr")}});i.add(".js-play-menu",function(i){var a=$(this);var t=a.parent().data("args");if(t.id){e(t,a);ting.media.playSongMenu(t.id,t.moduleName);ting.tip.play.call(a);ting.logger.plogClick("play_"+t.type||"menu")}});i.add(".js-play-album",function(i){var a=$(this);var t=a.parent().data("args");if(!t.moduleName){e(t,a)}if(t.id){$.when($.ajax({type:"POST",async:false,dataType:"json",url:"/data/album/info?id="+t.id,data:""})).done(function(e){var i=e.data[t.id],l={moduleName:i.moduleName||t.moduleName||"",searchValue:i.searchValue||"",mediaType:2,albumId:i.album_id||"",_aiPresaleFlag:i.ai_presale_flag||"",resourceTypeExt:i.resource_type_ext||"",albumPic:i.pic_s180||"",albumTitle:i.title||"",albumPublishTime:i.publishtime||""};if(l.resourceTypeExt&&(l.resourceTypeExt==3||l.resourceTypeExt==4)){ting.checkSellResourse("",l.albumId,function(e,i){l.isPay=i;ting.media.playAlbum(t.id||l.albumId,l);if(l.isPay!=1||l.siPresaleFlag==1||l._aiPresaleFlag==1){}else{ting.tip.play.call(a)}})}else{ting.media.playAlbum(t.id||l.albumId,l);ting.tip.play.call(a)}});ting.logger.plogClick("play_"+t.type||"album")}});i.add(".js-play-list",function(e){});i.add(".js-add",function(i){var a=$(this);var t=a.parent().data("args");var l={page:ting.logger.getPage(),pos:"add_song",songcount:1};if(t.id){e(t,a);var n={moduleName:t.moduleName||"",id:t.id||"",mediaType:1,albumId:t.albumId||"",siPresaleFlag:t.siPresaleFlag||"",resourceTypeExt:t.pay_type||"",songPic:t.songPic||"",songTitle:t.songTitle||"",songPublishTime:t.songPublishTime||""};if(n.resourceTypeExt&&(n.resourceTypeExt==3||n.resourceTypeExt==4)){ting.checkSellResourse(n.id,n.albumId,function(e){n.isPay=e;ting.media.addSong(n.id,n);if(n.isPay!=1||n.siPresaleFlag==1||n._aiPresaleFlag==1){}else{ting.tip.add.call(a)}});l.song_title=n.songTitle;l.song_id=n.id;l.isPay=2}else{ting.media.addSong(t.id,t.moduleName);ting.tip.add.call(a)}ting.logger.plogClick("add_"+t.type);ting.logger.log("add_song",l)}});i.add(".js-collect",function(e){var i=$(this),a=i.parent().data("args"),t={page:ting.logger.getPage(),pos:"collect_song",songcount:1};ting.connect.collect(null,{ids:a.id,type:a.type},function(e){ting.tip.collect.call(i);if(ting&&ting.logger){t.state=1;ting.logger.log("collect",t)}ting.media.collectSong(a.id)},function(e){var a="tip-error";switch(e.errorCode){case 22322:a="tip-warning";e.errTip="歌曲已被保存";break;case 22331:e.errTip="云空间已满，去<a href ='http://yinyueyun.baidu.taihe/' target = '_blank'>整理云空间</a>吧！";break;case 22232:e.errTip="对不起，千千音乐只能在中国内地提供服务";break;default:e.errTip="操作失败，请稍候再试";break}var l={msg:e.errTip?e.errTip:"操作失败",iconClass:a};if(e.errorCode=22331){l.showTime=5e3}t.state=e.errorCode;ting.logger.log("collect",t);require(["tip"],function(){i.tip().tip("tipup",l)})})})})();

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/