(function(){var l=$(".lossell-wrap").data("page");$(".lossell-wrap .lossell-list li").each(function(){$(this).live("click",function(){ting.logger.log("click",{page:l,pos:"songlist_link"})})});var s=0,i=false;$("#updateLosssell").bind("click",function(){var l=$(".lossell-list"),e=$(".lossell-list:visible");e.hide();++s;if(s>=l.length){s=0;i=true}$(l[s]).show();return false})})();

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/