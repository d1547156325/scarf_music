$(function(){var $body=window.opera?document.compatMode=="CSS1Compat"?$("html"):$("body"):$("html,body"),$sum=$(".sum"),$zhaohang=$(".zhaohang-card"),$upgradeMoney=$("#upgrade_money"),$paymentBtn=$(".payment-btn").button(),$selectOtherMonth=$("#otherMonths"),$selectTwoYears=$("#twoyears"),$selectAutoPay=$("#autopay"),$autoPayHelp=$(".auto-pay-help"),$autoPayDesc=$(".auto-pay-desc"),$agreement=$(".terms-service input"),$agreeOneclik=$(".oneclick-service input"),$lastTab=$("#payment_type .tab-pay-3"),$tabListLi=$("#payment_type .tab-list li"),$from=$(".payment-from"),$paymentSuccess=$(".payment-success"),$paymentFail=$(".payment-fail"),$paymentConfirmDialog=$(".payment-dialog-confirm"),$paymentBanklistDialog=$(".payment-dialog-banklist"),$paymentOneclickDialog=$(".payment-dialog-oneclick"),$paymentAlipaySuccessDialog=$(".payment-dialog-alipay-success"),$paymentAlipayErrorDialog=$(".payment-dialog-alipay-error"),$endtime=$("#endtime"),$daysRemain=$(".paytime-total-day"),$easyMoreBank=$("#easybank-more"),$bindBankReselect=$("#bindbank-reselect"),$paymentCategoryTabs=$(".payment-from .payment-category-tab li"),$paymentTypeTabs=$("#payment_type"),$pageBanks=$(".payment-from .bank-list .bank"),$dialogBanks=$(".payment-dialog-banklist-inner .bank-list .bank"),$vipAutoPayService=$("#vipautopayservice"),months=27,isautopay=1,serviceName="",money=0,isZhaohangCardBind=false,isGoldVip=false,bankEasyType={CREDIT:"credit",DEPOSIT:"deposit"},dataType=window.dataType,endTime=parseInt(window.endTime,10),pagelog="vip_payment",bankSelectStatus=false,bankType,bankNo,dialogBankType,dialogBankNo,fullAccount=true,inEasyPay=false,inOneClick=false,needCreateEasyPay=false,easyBankNoCache=0,checkSumInterval,fr=window.pst||(ting.traceSource.getFrom()==-1?"web":ting.traceSource.getFrom()),bankTpl='<li class="bank #{active}" data-banktype="#{bankType}" data-banknum="#{bankNo}"><a href="javascript:;"><span class="bank-logo bank-#{bank}"></span><span class="status"></span></a></li>',bankBindTpl='<li class="bank bank-with-account #{active}" data-banktype="#{bankType}" data-banknum="#{bankNo}"><a href="javascript:;"><span class="bank-logo bank-#{bank}"></span><span class="bank-split">|</span><span class="bank-card-number">尾号: #{cardNo}</span><span class="status"></span></a></li>',bankList=[{bankNo:"101",bankEasyCredit:"3001",bankEasyDeposit:"4002",bankName:"工商银行",bank:"gongshang"},{bankNo:"201",bankEasyCredit:"3011",bankEasyDeposit:"4004",bankName:"招商银行",isIe:true,bank:"zhaoshang"},{bankNo:"301",bankEasyCredit:"3002",bankEasyDeposit:"4003",bankName:"中国建设银行",isIe:true,bank:"jianshe"},{bankNo:"401",bankEasyCredit:"3003",bankEasyDeposit:"4001",bankName:"中国农业银行",bank:"nongye"},{bankNo:"701",bankEasyCredit:"3008",bankName:"中国光大银行",bank:"guangda"},{bankNo:"601",bankEasyCredit:"3017",bankName:"浦发银行",isIe:true,bank:"pufa"},{bankNo:"1101",bankName:"交通银行",isIe:true,bank:"jiaotong"},{bankNo:"1201",bankEasyCredit:"3004",bankEasyDeposit:"4009",bankName:"中国银行",bank:"zhongguo"},{bankNo:"501",bankEasyCredit:"3007",bankName:"中信银行",bank:"zhongxin"},{bankNo:"1902",bankEasyCredit:"3005",bankName:"中国邮政储蓄银行",bank:"youzheng"},{bankNo:"1903",bankEasyCredit:"3010",bankName:"民生银行",isIe:true,bank:"mingsheng"},{bankNo:"801",bankEasyCredit:"3019",bankName:"平安银行",isIe:true,bank:"pingan"},{bankNo:"1909",bankEasyCredit:"3013",bankName:"北京银行",isIe:true,bank:"beijing"},{bankNo:"1910",bankName:"北京农商银行",bank:"beijingnongshang"},{bankNo:"1904",bankEasyCredit:"3009",bankName:"华夏银行",bank:"huaxia"},{bankNo:"1905",bankEasyCredit:"3015",bankEasyDeposit:"4007",bankName:"兴业银行",isIe:true,bank:"xingye"},{bankNo:"1906",bankName:"上海银行",bankEasyCredit:"3012",isIe:true,bank:"shanghai"},{bankNo:"1907",bankEasyCredit:"3049",bankName:"上海农商银行",bank:"shanghainongshang"},{bankNo:"1901",bankEasyCredit:"3018",bankName:"广发银行",isIe:true,bank:"guangfa"},{bankEasyCredit:"3014",bankName:"东亚银行",isIe:true,bank:"bea"},{bankEasyCredit:"3016",bankName:"宁波银行",isIe:true,bank:"ningbo"},{bankEasyCredit:"3020",bankName:"包商银行",isIe:true,bank:"baoshang"},{bankEasyCredit:"3021",bankName:"长沙银行",isIe:true,bank:"changsha"},{bankEasyCredit:"3022",bankName:"承德银行",isIe:true,bank:"chengde"},{bankEasyCredit:"3023",bankName:"成都农商银行",isIe:true,bank:"chengdunongshang"},{bankEasyCredit:"3024",bankName:"重庆农村商业银行",isIe:true,bank:"chongqingnongchun"}],getParameterByName=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var a=new RegExp("[\\?&]"+e+"=([^&#]*)"),n=a.exec(location.search);return n==null?"":decodeURIComponent(n[1].replace(/\+/g," "))};var inviteid=!!getParameterByName("uid")?getParameterByName("uid"):0;getBankClassName=function(e,a){var n={credit:"bankEasyCredit",deposit:"bankEasyDeposit"};return _.find(bankList,function(t,i){return t[n[a]]+""==e+""})},checkPayment=function(){switch(serviceLevel="gold"){case"gold":if(currentServiceLevel=="comm"){dataType="upgrade"}else if(currentServiceLevel=="gold"){dataType="up"}else{dataType="add"}break}$(".paytime .paytime-item").hide();$(".paytime ."+dataType).show();checkSum()},showSum=function(e){money=e.data.sum;serviceName=serviceType=="down"?e.data.goodinfo.down.name:e.data.goodinfo.cloud.name;$sum.html(money);if($upgradeMoney.length){$upgradeMoney.html(money)}updateEndTime(e.data.time,e.data.days_left)},showZhaohangCardTips=function(e){isZhaohangCardBind=e.data.zhaohang_card_bind===1;isGoldVip=e.data.goodinfo.cloud.service_level==="gold";if(isGoldVip&&isZhaohangCardBind&&getMonth()===12&&dataType!=="upgrade"){$zhaohang.show()}else{$zhaohang.hide()}},getMonth=function(){var e=$(".select-month:checked");months=e.data("months");return months},updateEndTime=function(e,a){$endtime.text(e);$(".paytime-total-day").text(a);$(".months").text(e)},requestDataWithLogin=function(e,a,n,t,i,s,o,c,r){ting.passport.checkLogin(function(){requestData(e,a,n,t,i,s,o,c,r)},function(){},function(){var e={};e.query=a;s&&s(e)},function(){},{ref:"pop_web",operation:!!o,needBdName:!!c})},checkSum=function(e){var a={serveTime:getMonth(),serveType:serviceType,dataType:dataType,serveLevel:serviceLevel,uid:inviteid,alertpay:bankType,is_bind:bankBindedList?1:0,autopay:isautopay?1:0},n="/data/service/sum",t=function(a){if(+a.error==22232){showAbroadTips();return}if(isautopay){$vipAutoPayService.show();$tabListLi.addClass("ui-tab-disable");$lastTab.removeClass("ui-tab-disable")}showSum(a);showZhaohangCardTips(a);if(!e){if(months==12){$(".buy-tips").show()}else{$(".buy-tips").hide()}}if(a.errorCode==22706){fullAccount=false;setTimeout(function(){checkSum(true)},3e4);if(!e){ting.passport.popup("realizeUser")}return}},i=function(){},s=function(){},o=false,c=false,r=null,l=a;if(e&&!islogin){return}$.ajax({url:"/data/service/sum",cache:false,type:"post",dataType:"json",data:a,success:function(e){t(e);var a=e.errorCode;if(a==22452||a==22453){if(a==22452){ting.userInfo=null}else if(a==22453){if(ting.userInfo){ting.userInfo.active=false}}}else{if(a==22e3||a==22706){t(e)}else{e.errorMessage=ting.errorMap[a];i(e)}}}});if(tabIndex==1&&inEasyPay){createEasyPayPlugin()}else{needCreateEasyPay=true}},bankSelected=function(e,a,n){var t=n.data("banktype"),i=n.data("banknum");if(t=="bfb"){$(".promo-baidubao").show()}else{$(".promo-baidubao").hide()}a().removeClass("active");n.addClass("active");e(t,i);updatePaymentBtnStatus()},pageBankSelected=_.partial(bankSelected,function(e,a){bankType=e;bankNo=a;if(bankType=="easy_bank"){easyBankNoCache=bankNo}},function(){return $(".payment-from .bank-list .bank")}),paymentEvent=function(e){if(islogin&&needBindRealInfo){ting.passport.popup("bindRealInfo");needBindRealInfo=false;return}if(!isOneclick&&inOneClick){if(bankNo==="zfb"){bankType="oneclick"}}var a={dataType:dataType,serveLevel:serviceLevel,serveType:serviceType,serveTime:months,fr:fr};if(islogin){if(!fullAccount){ting.passport.popup("realizeUser")}else{if(isOneclick&&bankNo==="zfb"){paymentByAlipayOneclick(a);return}var n="/data/service/buy?dataType="+dataType+"&serveLevel="+serviceLevel+"&serveType="+serviceType+"&serveTime="+months+"&alertpay="+bankType+"&bank_no="+bankNo+"&uid="+inviteid+"&is_bind="+(bankBindedList?1:0)+"&fr="+fr;if(isautopay==1&&$selectAutoPay.data("ispaysign")!=1){$.ajax({type:"POST",dataType:"json",async:false,url:n+"&autopay=1",success:function(e){$vipAutoPayPop.hide();if(e&&e.error==22e3&&e.redirect){if(e.hasPaySign==1){window.open(n);$paymentConfirmDialog.dialog("show")}else{$popQrcode.show();$popTipTitle.html("打开手机支付宝扫一扫即可签约");$popQrcodeImg.attr("src",e.redirect).removeClass("loading");if(payTimer){clearInterval(payTimer);checkAutoPayIsSuccess()}else{checkAutoPayIsSuccess()}}}else{$popSuccess.show();if(e&&e.error_msg){$popTipTitle.html(e.error_msg)}else{$popTipTitle.html("开通失败，请稍后重试！")}}}})}else{window.open(n);$paymentConfirmDialog.dialog("show")}}}else{ting.passport.checkLogin(function(){$.ajax({url:"//musicapi.qianqian.com/v1/restserver/ting?method=baidu.ting.user.getUserBaseInfo&from=mixapp",dataType:"jsonp",success:function(e){if(e.bdName){if(e.level>0){window.location.reload()}else{if(isOneclick&&bankNo==="zfb"){paymentByAlipayOneclick(a);return}$paymentConfirmDialog.dialog("show");window.open("/data/service/buy?dataType="+dataType+"&serveLevel="+serviceLevel+"&serveType="+serviceType+"&serveTime="+months+"&alertpay="+bankType+"&bank_no="+bankNo+"&uid="+inviteid+"&is_bind="+(bankBindedList?1:0)+"&fr="+fr)}}else{ting.passport.popup("realizeUser")}}})},function(){},function(){},function(){})}var t={page:pagelog,pos:!!e?e:"pay"};if(bankNo=="jd"){t.sub="jd"}ting.logger.log("click",t);return false},showAbroadTips=function(){$("#otherMonths").hide();$(".foreign-tip-wrapper").show();$(".tip-mask").height($(document).height())},showResult=function(e){var a=$(".months"),n=$(".money"),t=$(".service-name");$(".payment-inner").css("visibility","hidden");$(".payment-result-wrapper").show();n.html(money);t.html(serviceName);$(".payment-result").hide();if(e){var i=new Date;$(".promo-60").hide();if(bankType=="bfb"||bankType=="easy_bank"){if(i.getMonth()==0&&i.getDate()>=23){$(".promo-60").show()}if(i.getMonth()==1&&i.getDate()<=6){$(".promo-60").show()}}$paymentSuccess.show()}else{$paymentFail.show()}topScrollTo=$(".music-main").offset().top;setTimeout(function(){$body.stop().animate({scrollTop:topScrollTo},200)},1e3)},hideResult=function(){$(".payment-result-wrapper").hide();$(".payment-inner").show();$(".payment-inner").css("visibility","visible")},checkPaymentStatus=function(){var e=$(".result-loading");e.css("height",$paymentSuccess.outerHeight()).show();ting.connect.paymentCheckStatus(null,null,function(a){e.hide();showResult(a.pay_result)},function(a){e.hide();showResult(a.pay_result)})},updatePaymentBtnStatus=function(){var e=$agreement.attr("checked")?true:false,a=[["bank"],["easy_bank"],["bfb"],["zfb"],["jd"]];bankSelectStatus=$.inArray(bankType,a[tabIndex])!=-1;if(bankSelectStatus&&e){$paymentBtn.addClass("btn-f").removeClass("btn-c-disabled").button("active")}else{$paymentBtn.removeClass("btn-f").addClass("btn-c-disabled").button("disable")}},showEasyBankList=function(){$("#easy-bank-list").show();$("#bind-bank-list").hide()},showBindBankList=function(){$("#easy-bank-list").hide();$("#bind-bank-list").show()},renderBankList=function(e,a,n,t){var i=[],s=function(e){var a="",s;_.each(e,function(e,a){s=t(e);if(!s){return""}i.push($.format(n,s))});a=i.join("");return a};e.html(s(a)).removeClass("loading");selectDefaultBank()},createTraditionalBankList=function(){var e=$("#tradBankList"),a=[],n=[];ieBankHtml=[],tmpBankList=_.filter(bankList,function(e){return e.bankNo}),eachBank=function(){var e="",t=tmpBankList.length,i=$.browser.msie,s,o=false;if(i){_.each(tmpBankList,function(e,n){s={bank:e.bank,bankNo:e.bankNo,bankType:"bank"};a.push($.format(bankTpl,s))})}else{var c=_.filter(tmpBankList,function(e){return e.isIe}),r=_.filter(tmpBankList,function(e){return!e.isIe});_.each(c,function(e,a){s={bank:e.bank,bankNo:e.bankNo,bankType:"bank"};n.push($.format(bankTpl,s))});_.each(r,function(e,a){s={bank:e.bank,bankNo:e.bankNo,bankType:"bank",active:""};ieBankHtml.push($.format(bankTpl,s))})}if(i){e=a.join("")}else{e+=n.join("");e+='<li class="browser-tips">'+'<div class="module-line-bottom module-dotted"></div>'+'<p class="tips red">经检测，以下网上支付方式暂不支持您当前浏览器，建议您使用IE内核浏览器完成付款</p>'+"</li>";e+=ieBankHtml.join("")}return e},createBankHtml=function(){e.append(eachBank())};createBankHtml()},createEasyBankList=function(e){var a=[],n="";if(e==bankEasyType.DEPOSIT){a=_.filter(bankList,function(e){return e.bankEasyDeposit});n="bankEasyDeposit"}else{a=_.filter(bankList,function(e){return e.bankEasyCredit});n="bankEasyCredit"}renderBankList($("#easyBankList"),a.slice(0,12),bankTpl,function(e){return{bank:e.bank,bankNo:e[n],bankType:"easy_bank"}});renderBankList($("#payment-dialog-banklist"),_.filter(bankList,function(e){return e.bankEasyCredit}),bankTpl,function(e){return{bank:e.bank,bankNo:e["bankEasyCredit"],bankType:"easy_bank"}})},createSelectedBankList=function(e){renderBankList($("#bindBankList"),e,bankBindTpl,function(e){var a=getBankClassName(e.bank_code,e.card_type==1?"credit":"deposit");if(a){return{bank:getBankClassName(e.bank_code,e.card_type==1?"credit":"deposit").bank,bankNo:e.bank_code,bankType:"easy_bank",cardNo:e.account_no?e.account_no.substring(e.account_no.length-4):""}}else{bankBindedList=null;return null}});$("#bindBankList").append('<li id="bindbank-reselect" class="more"><a href="javascript:;">更换银行</a></li>');selectDefaultBank()},createBindBankList=_.partial(createSelectedBankList,bankBindedList),createSelectedEasyBankList=function(){if(!dialogBankNo){return}showBindBankList();renderBankList($("#bindBankList"),_.filter(bankList,function(e){return e.bankEasyCredit==dialogBankNo}),bankTpl,function(e){return{bank:e.bank,bankNo:e["bankEasyCredit"],bankType:"easy_bank"}});bankType=dialogBankType;$("#bindBankList").append('<li id="bindbank-reselect" class="more"><a href="javascript:;">更换银行</a></li>')},createEasyPayPlugin=function(){var e={dataType:dataType,serveLevel:serviceLevel,serveType:serviceType,serveTime:months,alertpay:bankType,bank_no:easyBankNoCache,is_bind:bankBindedList?1:0,uid:inviteid,fr:fr},a=function(e){$("#payment-time").hide();e.bankno=easyBankNoCache+"";e.cardtype=(bankNo+"").substring(0,1)=="4"?"2":"1";inEasyPay=true;needCreateEasyPay=false;if(tabIndex==1&&inEasyPay){$("#easyContent .bank-list-wrapper").hide();$("#payment-btns").hide();$("#easy-plugin-wrapper").show()}baifubaoEasyPay("payment-easypay",e,{initFail:function(e){},success:function(){showResult(true)}})};ting.connect.paymentEasy(e,null,function(e){a(e)},function(e){})},destroyEasyPayPlugin=function(){inEasyPay=false;$("#payment-time").show();resetEasyBankSection();$("#payment-btns").show();$("#easy-plugin-wrapper").hide()},resetEasyBankSection=function(){if(bankBindedList){$("#easy-bank-list").hide();$("#bind-bank-list").show()}else{$("#easy-bank-list").show();$("#bind-bank-list").hide()}selectDefaultBank()},baifubaoEasyPay=function(tarId,obj,events){var target=document.getElementById(tarId);target.src=obj.payurl;events.resize=function(e){target.height=e.height+"px";target.style.height=e.height+"px"};events.success=events.success||function(e){if(obj.return_url){location.href=obj.return_url}};function handleReady(){typeof events["load"]=="function"&&events["load"]()}if(target.attachEvent){var IS_IE=true;target.attachEvent("onload",handleReady)}else{target.onload=handleReady}if(window.postMessage){window.onmessage=function(e){e=e||window.event;if(e.origin!="https://www.baifubao.com"){return}var data=eval("("+e.data+")");if(typeof events[data.type]=="function"){events[data.type](data.data)}}}else if(IS_IE){window.navigator.sendNotice=function(e,a){if(typeof events[e]=="function"){events[e](a)}}}else{alert("not support")}};var $yearPrice=$(".time-label .year-price"),$twoyearPrice=$(".time-label .two-year-price"),$goldVip=$("li.payment-category-premium"),$commVip=$("li.payment-category-comm");function discountPrice(){if($goldVip.hasClass("active")){if(inviteInfo&&inviteInfo==1){$yearPrice.text("(立省34)")}else{$yearPrice.text("(立省24)");$twoyearPrice.text("（立省60）")}}else{$yearPrice.text("(立省12)");$twoyearPrice.text("（立省30）")}}discountPrice();$("li.payment-category-premium,li.payment-category-comm").click(function(e){if($("#annual-pack").hasClass("time-label-active")){discountPrice()}});greyPrice=function(){greyPriceArr=[];if($paymentCategoryTabs.first().hasClass("active")){greyPriceArr=[300,120,10,30];changePrice()}else{greyPriceArr=[150,60];changePrice()}discountPrice()},changePrice=function(){if($(".time-label").eq(2).hasClass("time-label-active")){$(".grey-price").removeClass("onable").addClass("onable").show();$(".grey-price-detail").html(greyPriceArr[1]+"元")}else if($(".time-label").eq(3).hasClass("time-label-active")){$(".grey-price").removeClass("onable").addClass("onable").hide();$(".grey-price-detail").html(greyPriceArr[3]+"元")}else if($(".time-label").eq(4).hasClass("time-label-active")){$(".grey-price").removeClass("onable").addClass("onable").hide();$(".grey-price-detail").html(greyPriceArr[2]+"元")}else if($(".time-label").eq(0).hasClass("time-label-active")){$(".grey-price").removeClass("onable").addClass("onable").show();$(".grey-price-detail").html(greyPriceArr[2]+"元")}else if($(".time-label").eq(1).hasClass("time-label-active")){$(".grey-price").removeClass("onable").addClass("onable").show();$(".grey-price-detail").html(greyPriceArr[0]+"元")}else if($("#otherMonths").hasClass("active")){$(".grey-price").removeClass("onable").show();$(".grey-price-detail").html(greyPriceArr[0]+"元")}};selectDefaultBank=function(){pageBankSelected($(".bank-content").eq(tabIndex).find(".bank-list .bank:visible").eq(0))};window.checkSum=checkSum;var _vk=Request.QueryString("_vk");if(_vk!==null){fr=_vk}$("#autopay").attr("checked","checked");$(".select-month").on("click",function(e){var a=$(this);if(a[0].id=="other"){$selectOtherMonth.attr("disabled",false);$selectOtherMonth.addClass("active")}else{$selectOtherMonth.attr("disabled",true);$selectOtherMonth.removeClass("active")}if(a[0].id=="autopay"){isautopay=1;$vipAutoPayService.show();$tabListLi.addClass("ui-tab-disable");$lastTab.removeClass("ui-tab-disable").trigger("click")}else{$vipAutoPayService.hide();$tabListLi.removeClass("ui-tab-disable");isautopay=0}months=getMonth();checkSum();greyPrice()});$autoPayHelp.hover(function(){$autoPayDesc.show()},function(){$autoPayDesc.hide()});$selectOtherMonth.bind("change",function(){months=$(this).val();$("#other").data("months",months);checkSum()});$paymentConfirmDialog.dialog({confirm:{btn:".payment-success-btn",callback:function(){checkPaymentStatus();var e={page:"floatlayer",sub:pagelog,pos:"paid_succ"};ting.logger.log("click",e)}},cancel:{btn:".payment-fail-btn",callback:function(){checkPaymentStatus();var e={page:"floatlayer",sub:pagelog,pos:"paid_fail"};ting.logger.log("click",e)}},bgiframe:true,close:{callback:function(){checkPaymentStatus()}},width:385});$paymentBanklistDialog.dialog({confirm:{btn:".payment-dialog-banklist-confirm",callback:function(){createSelectedEasyBankList();$paymentBanklistDialog.dialog("hide")}},bgiframe:true,close:{callback:function(){}},width:745});$paymentOneclickDialog.dialog({confirm:{btn:".oneclick-on-btn",callback:function(){$agreeOneclik.attr("checked","checked");inOneClick=true;var e={page:"floatlayer",sub:pagelog,pos:"oneclick_on"};ting.logger.log("click",e)}},cancel:{btn:".oneclick-off-btn",callback:function(){$agreeOneclik.removeAttr("checked");inOneClick=false;var e={page:"floatlayer",sub:pagelog,pos:"oneclick_off"};ting.logger.log("click",e)}},bgiframe:true,close:{callback:function(){$agreeOneclik.removeAttr("checked");inOneClick=false}},width:385});$paymentAlipaySuccessDialog.dialog({confirm:{btn:".alipay-success-btn",callback:function(){checkPaymentStatus();var e={page:"floatlayer",sub:pagelog,pos:"oneclick_on"};ting.logger.log("click",e)}},cancel:{btn:".alipay-fail-btn",callback:function(){checkPaymentStatus();var e={page:"floatlayer",sub:pagelog,pos:"oneclick_off"};ting.logger.log("click",e)}},bgiframe:true,close:{callback:function(){checkPaymentStatus()}},width:385});$paymentAlipayErrorDialog.dialog({confirm:{btn:".payment-alipay-confirm",callback:function(){$paymentAlipayErrorDialog.dialog("hide");var e={page:"floatlayer",sub:pagelog,pos:"oneclick_on"};ting.logger.log("click",e)}},bgiframe:true,close:{callback:function(){$paymentAlipayErrorDialog.dialog("hide")}},width:385});$("input:radio[name=buytime]").change(function(){$(".time-label").removeClass("time-label-active");switch($(this).val()){case"autopay":$(".time-label").eq(0).addClass("time-label-active");break;case"twoyears":$(".time-label").eq(1).addClass("time-label-active");break;case"annual":$(".time-label").eq(2).addClass("time-label-active");break;case"months3":$(".time-label").eq(3).addClass("time-label-active");break;case"months1":$(".time-label").eq(4).addClass("time-label-active");break}greyPrice()});$("input:radio[name=card-type]").change(function(){switch($(this).val()){case"deposit":createEasyBankList(bankEasyType.DEPOSIT);$("#easybank-more").hide();break;default:createEasyBankList(bankEasyType.CREDIT);$("#easybank-more").show();break}});$agreement.bind("click",function(){updatePaymentBtnStatus()});$easyMoreBank.bind("click",function(){$paymentBanklistDialog.dialog("show");$dialogBanks.live("click",function(){_.partial(bankSelected,function(e,a){dialogBankNo=a;dialogBankType=e},function(){return $(".payment-dialog-banklist-inner .bank-list .bank")})($(this))})});$("#bindbank-reselect").live("click",function(){showEasyBankList();selectDefaultBank()});var $autoPay=$("#auto-pay"),$baseEl=$(".vip-privilege-block"),$cancelAutoPay=$("#cancel-auto-pay"),$vipAutoPayPop=$(".vip-auto-pay-pop"),$popClose=$(".vip-auto-pay-pop-btn-close"),$popQrcode=$(".vip-auto-pay-pop-qrcode"),$popSuccess=$(".vip-auto-pay-pop-success"),$popCancel=$(".vip-auto-pay-pop-cancel"),$popTipTitle=$(".vip-auto-pay-pop-qrcode-title"),$popPayIssuccess=$(".vip-auto-pay-pop-qrcode-issuccess"),$popBtnSure=$(".vip-auto-pay-pop-btn-sure"),$popQrcodeImg=$(".vip-auto-pay-pop-qrcode-img"),payTimer="";$paymentBtn.bind("button.click",function(){var e="pay_bank";if(bankType=="easy_bank"){createEasyPayPlugin();return}if(bankType=="zfb"){e="pay_zfb"}else if(bankType=="bfb"){e="pay_bfb"}paymentEvent(e)});function checkAutoPayIsSuccess(e){var e=e||{};var a=0;$popPayIssuccess.hide();payTimer=setInterval(function(){a++;if(a>=20){clearInterval(payTimer);$popPayIssuccess.show()}$.ajax({type:"POST",dataType:"json",async:false,url:"/vip/pay/daikou/sign_status",success:function(a){if(a&&a.error==22e3&&a.paysign==1){$vipAutoPayPop.hide();$popSuccess.show();$popTipTitle.html("恭喜你，连续包月业务开通成功");$selectAutoPay.data("ispaysign",1);clearInterval(payTimer)}else{if(e.checkType=="click"){$vipAutoPayPop.hide();$popSuccess.show();if(a&&a.error_msg){$popTipTitle.html(a.error_msg)}else{$popTipTitle.html("开通失败，请稍后重试！")}clearInterval(payTimer)}}}})},3e3)}$popClose.bind("click",function(){$(".vip-auto-pay-pop").hide()});$popPayIssuccess.bind("click",function(){$(".vip-auto-pay-pop").hide();if(payTimer){clearInterval(payTimer);checkAutoPayIsSuccess({checkType:"click"})}else{checkAutoPayIsSuccess({checkType:"click"})}});$("#easy-plugin-reselect").bind("click",function(){destroyEasyPayPlugin()});$(".invite-buy").bind("click",function(){var e=new Date,a="/vip/invite",n="/topic/cooperation/bdlbcj";if(e.getMonth()==0&&e.getDate()>=23){a=n}if(e.getMonth()==1&&e.getDate()<=6){a=n}window.open(a)});$(".continue-buy").bind("click",function(){var e={page:pagelog,pos:"continue_buy"};ting.logger.log("click",e);window.location.reload()});$(".restart-payment").bind("click",function(){window.location.reload()});$paymentTypeTabs.tab({contentList:".bank-content",callBackHideEvent:function(e){_.each($(".bank-content"),function(a,n){if(e==n){$(a).show()}else{$(a).hide()}});var a=$("#payment-btns"),n=$("#payment-type-list");tabIndex=e;selectDefaultBank();if(!bankType){bankType=["bank","easy_bank","bfb","zfb","jd"][e]}updatePaymentBtnStatus();checkSum();if(e==1){$("#easybank-more").hide();$("#easybank-more").show()}if(e==1&&inEasyPay){a.hide();if(needCreateEasyPay){createEasyPayPlugin()}}else{a.show()}$("#payment-time").show();if(e==3){$(".oneclick-service").show();$(".terms-service").css({padding:"10px 0 0 0"})}else{$(".oneclick-service").hide();$(".terms-service").css({padding:"20px 0 0 0"})}}});$pageBanks.live("click",function(){pageBankSelected($(this))});$paymentCategoryTabs.bind("click",function(e){_.each($paymentCategoryTabs,function(a,n){if(a==e.currentTarget){$(a).addClass("active")}else{$(a).removeClass("active")}});serviceLevel=$(e.currentTarget).data("type");checkPayment();greyPrice()});$(".vip-title-icon, .power-icon-min, .view-vip").bind("click",function(){var e={pos:"priv_afford",page:pagelog};ting.logger.log("click",e)});$agreeOneclik.bind("click",function(){showOneclickTips()});var showOneclickTips=function(){var e=$agreeOneclik.attr("checked")?true:false;if(!e){$paymentOneclickDialog.dialog("show")}else{inOneClick=true}};var paymentByAlipayOneclick=function(e){$.ajax({url:"/data/service/oneclick",cache:false,type:"post",dataType:"json",data:e,success:function(e){var a=e;switch(a.errorCode){case 22e3:showResult(true);break;case 23333:$paymentAlipaySuccessDialog.dialog("show");break;case 22001:$(".payment-dialog-alipay-error .alipay-errmsg").text(a.errorMsg);$paymentAlipayErrorDialog.dialog("show");break}}});$("#payment-btns .oneclick-btn").css({cursor:"default"}).removeAttr("href").off();$("#payment-btns .oneclick-btn .txt").text("付款中...")};createEasyBankList();createBindBankList();resetEasyBankSection();createTraditionalBankList();selectDefaultBank();checkPayment();greyPrice()});var Request={QueryString:function(e){var a=location.search.match(new RegExp("[?&]"+e+"=([^&]*)(&?)","i"));return a?a[1]:a}};(function(){var e=$(".payment-dialog-invite-unchance"),a=$(".payment-dialog-invite-error"),n=$(".payment-dialog-invite-success");e.dialog({confirm:{btn:".invite-unchance-btn",callback:function(){$(".select-month").eq(0).click();setTimeout(function(){checkSum(true)},500)}},close:{callback:function(){}},width:450});n.dialog({confirm:{btn:".invite-success-btn",callback:function(){}},close:{callback:function(){}},width:450});a.dialog({confirm:{btn:".invite-error-btn",callback:function(){$(".select-month").eq(0).click();setTimeout(function(){checkSum(true)},500)}},close:{callback:function(){}},width:450});if(!!inviteInfo){switch(inviteInfo){case 1:n.dialog("show");break;case 2:a.dialog("show");break;case 3:e.dialog("show");break}}})();

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/