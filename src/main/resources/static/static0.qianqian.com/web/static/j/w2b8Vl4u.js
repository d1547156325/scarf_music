$(function(){var e=$(".mod-release"),i=e.find(".release");i.slider({controls:e.find(".mui-slider-controller"),hoverShowController:true,vip_show_controls:true});var o=$("#auto-pay"),a=$("#cancel-auto-pay"),c=$(".vip-privilege-block"),r=$(".vip-auto-pay-pop"),p=$(".vip-auto-pay-pop-btn-close"),s=$(".vip-auto-pay-pop-qrcode"),t=$(".vip-auto-pay-pop-success"),l=$(".vip-auto-pay-pop-qrcode-issuccess"),n=$(".vip-auto-pay-pop-cancel"),u=$(".vip-auto-pay-pop-qrcode-title"),h=$(".vip-auto-pay-pop-btn-sure"),d=$(".vip-auto-pay-pop-qrcode-img"),v=$(".btn-openvip"),y="";o.bind("click",function(){$.ajax({type:"POST",dataType:"json",async:false,url:"/vip/pay/daikou/sign",success:function(e){r.hide();if(e&&e.error==22e3&&e.redirect){s.show();u.html("打开手机支付宝扫一扫即可签约");d.attr("src",e.redirect).removeClass("loading");if(y){clearInterval(y);f()}else{f()}}else{t.show();if(e&&e.error_msg){u.html(e.error_msg)}else{u.html("通讯失败，请稍后重试！")}}}})});a.bind("click",function(){r.hide();n.show();h.unbind("click").bind("click",function(){$.ajax({type:"POST",dataType:"json",async:false,url:"/vip/pay/daikou/cancel",success:function(e){r.hide();if(e&&e.error==22e3){t.show();u.html("解除签约成功");a.hide();o.show()}else{t.show();if(e&&e.error_msg){u.html(e.error_msg)}else{u.html("解除签约失败，请稍后重试！")}}}})})});function f(e){var e=e||{};var i=0;l.hide();y=setInterval(function(){i++;if(i>=20){clearInterval(y);l.show()}$.ajax({type:"POST",dataType:"json",async:false,url:"/vip/pay/daikou/sign_status",success:function(i){if(i&&i.error==22e3&&i.paysign==1){r.hide();t.show();u.html("恭喜你，连续包月业务开通成功");a.show();o.hide();clearInterval(y)}else{if(e.checkType=="click"){r.hide();t.show();if(i&&i.error_msg){u.html(i.error_msg)}else{u.html("开通失败，请稍后重试！")}}}}})},3e3)}p.bind("click",function(){$(".vip-auto-pay-pop").hide()});l.bind("click",function(){$(".vip-auto-pay-pop").hide();if(y){clearInterval(y);f({checkType:"click"})}else{f({checkType:"click"})}})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/