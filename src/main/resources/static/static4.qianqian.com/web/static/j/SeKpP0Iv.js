(function(e){var r=typeof document.body.style.maxWidth==="undefined";var i={init:function(r){var n=e.extend({maxWidth:100,speed:1,curIndex:1,time:5,callback:function(){}},r),t=this;return t.each(function(r,t){n.instance=true;e(t).data("accordionSlider",n);i.fetch.call(e(t))})},fetch:function(){var n=this,t=n.data("accordionSlider"),a=n.children(),d=a.length;a.width(n.width()/d);n.on("mouseenter",">",function(){var a=e(this),d=a.index()+1;t.curIndex=d;n.data("accordionSlider",t);if(r){i.renderNormal.call(n,a)}else{clearInterval(n.timer);n.timer=setInterval(function(){i.render.call(n,a)},t.speed)}});i.renderIndex.call(n)},resize:function(r){var n=this;n.each(function(n,t){var a=e.extend({},e(t).data("accordionSlider"),r),d=e(t).children(),c=d.length;e(t).data("accordionSlider",a);if(!a.instance){return}d.width(e(t).width()/c);i.renderIndex.call(e(t))})},renderNormal:function(e){var r=this,i=r.data("accordionSlider");r.each(function(e,i){r.find(">").removeAttr("style")});i.callback(e)},renderIndex:function(){var e=this,n=e.data("accordionSlider"),t=e.children();if(r){i.renderNormal.call(e,t.eq(n.curIndex-1))}else{e.timer=setInterval(function(){i.render.call(e,t.eq(n.curIndex-1))},n.speed)}},render:function(r){var i=this,n=i.data("accordionSlider"),t=i.children(),a=t.length,d=i.width(),c=Math.floor((d-n.maxWidth)/(a-1)),o=r.width();if(o<n.maxWidth){var l=0;t.each(function(i,t){var a=e(t);if(a.index()!=r.index()){var d=0,o=a.width();if(o>c){d=Math.floor((o-c)/n.time);d=d>0?d:1;a.width(o-d);a.find("img").css("margin-left",(o-d-n.imgWidth)/2)}l+=o-d;a.removeClass("process").removeClass("on")}});r.width(d-l);r.find("img").css("margin-left",Math.floor((d-l-n.imgWidth)/2));r.addClass("process").removeClass("success")}else{clearInterval(i.timer);n.callback(r);r.addClass("success").removeClass("process")}},destroy:function(){var r=this;return r.each(function(r,i){e(i).off().removeData("accordionSlider")})}};e.fn.accordionSlider=function(r){if(i[r]&&r.charAt(0)!="_"){return i[r].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof r==="object"||!r){return i.init.apply(this,arguments)}else{e.error("Method "+r+" does not exist on jQuery.accordionSlider")}}})(jQuery);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/