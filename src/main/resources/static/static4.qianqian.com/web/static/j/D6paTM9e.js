define(["../../template",""],function(i){return i("huodong/ticketnew/infoTopLeft",function(i,t){"use strict";var e=this,s=e.$helpers,a=e.$escape,p=s.checkImg,n=i.item,l=i.timeData,r=s.activeTimeFormat,c=s.dateFormat,d="";d+='<div class="top-left"> <div class="top-img-wrap img-wrap"> <img src="';d+=a(p(n.activity_cover_pic,"INIT_PIC"));d+='" alt="';d+=a(n.activity_name);d+='" /> ';l=r(n.registration_time,n.closing_time);d+=" ";if(l.status==0){d+=" ";if(l.today){d+=' <i class="img-tip-green">今天';d+=a(l.str);d+="开始报名</i> "}else{d+=' <i class="img-tip-green">距报名还有';d+=a(l.str);d+="天</i> "}d+=" "}else if(l.status==-1){d+=' <i class="img-tip-gray">报名已结束</i> '}else if(l.status==1){d+=' <i class="img-tip-red">报名进行中</i> '}d+=' </div> <div class="top-text-wrap"> <div class="text-title">';d+=a(n.activity_name);d+="</div> <!-- ";if(n.join_type==0){d+=' <div class="text-rule"><i></i><span>登录用户即可参与</span></div> '}else if(n.join_type==-10){d+=' <div class="text-rule"><i></i><span>会员即可参与</span></div> '}else if(n.join_type==10){d+=' <div class="text-rule"><i></i><span>购买1个月会员即可参与</span></div> '}else if(n.join_type==11){d+=' <div class="text-rule"><i></i><span>购买3个月会员即可参与</span></div> '}else if(n.join_type==12){d+=' <div class="text-rule"><i></i><span>购买6个月会员即可参与</span></div> '}else if(n.join_type==20){d+=' <div class="text-rule"><i></i><span>购买年会员即可参与</span></div> '}d+=" <p>活动时间：";d+=a(c(n.activity_start,"yyyy年MM月dd日 hh:mm"));d+=" 开始</p> <p>活动名额：";d+=a(n.activity_persion);d+="人</p> <p>活动地点：";d+=a(n.address);d+="</p> --> </div> </div>";return new String(d)})});

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/