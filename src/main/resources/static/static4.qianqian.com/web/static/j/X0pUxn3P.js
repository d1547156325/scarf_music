(function(t,e){t.widget("ting.userVoice",{options:{id:0,subjectType:0,emptyMsg:null,pageSize:0},_init:function(){var e=this.options.id,n=this.options.subjectType,o=this.options.emptyMsg,i=this.options.pageSize,a=t(".page-navigator-hook",this.element).pageNavigator({hash:"#album-comment"}),c=t(".comment-hook").comment({subjectId:e,subjectType:n,emptyMsg:o,canReply:false,pageSize:i});a.bind("pagenavigator.pagechange",function(t,e){c.comment("load",e.start)});c.bind("comment.loadsuccess",function(t,e){a.pageNavigator("setTotal",e.total).pageNavigator("setStart",e.start)}).bind("comment.active",function(){c.comment("setInputColor","#666")}).bind("comment.inactive",function(){c.comment("setInputColor","#999")}).bind("comment.submitsuccess",function(){c.comment("setInputColor","#999")})},recommend_init:function(){t(".new-recommend-hook").tip({msg:"请填写50个字以内的推荐语吧...",maxLength:100,button:true,contentType:"textarea"}).bind("tip.confirm",function(e,n){var o=this,i=t.metadata.get(this);i.description=n._textarea.val();ting.connect.recommend(null,i,function(e){t(o).tip({contentType:"text",showTime:1e3,button:null}).tip("tipup",{msg:"推荐成功！",iconClass:"tip-success"});var n=t(".recommend-num-hook"),a=t.trim(i.description);if(n[0]){var c=parseInt(n.metadata().num);n.text(c+1)}if(!a||a==""){return false}t(".comment-hook").comment("load",0)},function(e){t(o).tip({contentType:"text",showTime:1e3,button:null}).tip("tipup",{msg:e.errorMessage||"推荐失败",iconClass:"tip-error"})})}).bind("tip.cancel",function(t,e){if(e._textarea.val()){e._textarea.val("");e.textareaCheck();return false}else{return true}})}});t(function(){t(".user-voice-hook").userVoice()})})(jQuery);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/