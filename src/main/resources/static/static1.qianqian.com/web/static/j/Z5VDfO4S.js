define(["tmpl/dynamic/dynamicPicListTmpl"],function(e){var i=[];initPreviews=function(e){i=e;$(".dynamic-pics-hook").off().on("click",".pic",function(){var e=$(this);msgid=e.data("msgid");msgParentId=e.data("msgparentid")||"";moudleName=e.data("moudlename");specFlag=e.closest(".dynamic-pics-hook").data("specflag");msgPicsId=msgid+"-"+msgParentId+"-"+moudleName+"-"+specFlag;i[msgPicsId].index=e.data("index");i[msgPicsId].previewWidth=$(".dynamic-pics-hook-"+msgid+"-"+moudleName+"-"+specFlag)[0].offsetWidth||600;showMasterBox(msgid);showMasterPic(msgid)}).on("click",".arrow-bottom",function(){var e=$(this);var i=e.data("msgid");hideMasterBox(i)})};createPreview=function(i){i.el=i.el||$(".dynamic-pics-hook-"+i.msg.msgid+"-"+i.msg.moudleName+"-"+i.msg.specFlag);var s=e({item:i.msg});i.el.attr("data-hasCreate","1");i.el.append(s)};nextPic=function(e){var e=e||0;if(i[msgPicsId].index==i[msgPicsId].picList.length-1||!e){hideMasterBox(e);return false}i[msgPicsId].index=i[msgPicsId].index+1;showMasterPic(e)};prevPic=function(e){var e=e||0;if(i[msgPicsId].index==0||!e){hideMasterBox(e);return false}i[msgPicsId].index=i[msgPicsId].index-1;showMasterPic(e)};showMasterPic=function(e){var s=i[msgPicsId].picList[i[msgPicsId].index];var c=new Image;c.src=s;$(".pic-preview-"+e+"-"+moudleName+"-"+specFlag).find(".loading").show();c.onload=function(){$(".pic-preview-"+e+"-"+moudleName+"-"+specFlag).find(".loading").hide();var a=c.width;var d=c.height;if(a>i[msgPicsId].previewWidth){i[msgPicsId].width=i[msgPicsId].previewWidth;i[msgPicsId].height=i[msgPicsId].previewWidth*d/a;$(".pic-preview-"+e+"-"+moudleName+"-"+specFlag).css("height",i[msgPicsId].height+"px");$(".pic-master-"+e+"-"+moudleName+"-"+specFlag).css("width",i[msgPicsId].width+"px");i[msgPicsId].left=0}else{i[msgPicsId].left=(i[msgPicsId].previewWidth-a)/2;$(".pic-preview-"+e+"-"+moudleName+"-"+specFlag).css({height:d+"px"});$(".pic-master-"+e+"-"+moudleName+"-"+specFlag).css("width",a+"px")}$(".down-pic-"+e+"-"+moudleName+"-"+specFlag).attr("href",s);$(".pic-master-"+e+"-"+moudleName+"-"+specFlag).attr("src",s).css({left:i[msgPicsId].left+"px"})}};showMasterBox=function(e){$(".pic-preview-tool-"+e+"-"+moudleName+"-"+specFlag).show();$(".gallery-"+e+"-"+moudleName+"-"+specFlag).hide();$(".pic-preview-"+e+"-"+moudleName+"-"+specFlag).show()};$(".pic-preview").live("mousemove",function(e){var s=$(this);msgid=s.data("msgid");msgParentId=s.data("msgparentid")||"";var c=i[msgPicsId].previewWidth;specFlag=s.closest(".dynamic-pics-hook").data("specflag");msgPicsId=msgid+"-"+msgParentId+"-"+moudleName+"-"+specFlag;var a=e.pageX-s.offset().left;if(a>=c/3&&a<c*2/3){s.addClass("cur-close").removeClass("cur-prev cur-next").off("click").on("click",function(){hideMasterBox(msgid)})}else if(a>0&&a<=c/3){if(i[msgPicsId].index==0){s.addClass("cur-close").removeClass("cur-prev cur-next").off("click").on("click",function(){hideMasterBox(msgid)})}else{s.addClass("cur-prev").removeClass("cur-close cur-next").off("click").on("click",function(){prevPic(msgid)})}}else if(a<c&&a>c*2/3){if(i[msgPicsId].index==i[msgPicsId].picList.length-1){s.addClass("cur-close").removeClass("cur-next cur-prev").off("click").on("click",function(){hideMasterBox(msgid)})}else{s.addClass("cur-next").removeClass("cur-close cur-prev").off("click").on("click",function(){nextPic(msgid)})}}});hideMasterBox=function(e){$(".pic-preview-tool-"+e+"-"+moudleName+"-"+specFlag).hide();$(".gallery-"+e+"-"+moudleName+"-"+specFlag).show();$(".pic-preview-"+e+"-"+moudleName+"-"+specFlag).hide()};return{initPreviews:function(e){initPreviews(e)},hideMasterBox:function(e){hideMasterBox(e)},createPreview:function(e){createPreview(e)}}});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/