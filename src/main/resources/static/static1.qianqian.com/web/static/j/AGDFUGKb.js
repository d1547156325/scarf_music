(function(e){e.fn.extend({isSelection:function(){if(document.selection){try{var e=!!document.getSelection();return!e}catch(t){return true}}return false},iGetFieldPos:function(){var t=this.get(0);if(e(this).isSelection()){e(this).focus();var i=document.selection;var n=i.createRange();var l=n.duplicate();l.moveToElementText(t);l.setEndPoint("EndToEnd",n);t.selectionStart=l.text.length-n.text.length;t.selectionEnd=t.selectionStart+n.text.length}return t.selectionStart},iSelectField:function(t,i){var n=this.get(0);if(arguments[1]==undefined){i=t}if(e(this).isSelection()){var l=n.createTextRange();l.moveEnd("character",-e(this).val().length);l.moveEnd("character",i);l.moveStart("character",t);l.select()}else{n.setSelectionRange(t,i);e(this).focus()}},iSelectStr:function(t){var i=this.get(0);var n=e(this).val().indexOf(t);n!=-1?e(this).iSelectField(n,n+t.length):false},iAddField:function(t){var i=this.get(0);var n=e(this).val();var l=e(this).val().length;if(e(this).isSelection()){e(this).focus();document.selection.createRange().text=t}else{var s=i.selectionStart;e(this).val(e(this).val().slice(0,i.selectionStart)+t+e(this).val().slice(i.selectionStart,l));this.iSelectField(s+t.length)}},iDelField:function(t){var i=this.get(0);var n=e(this).iGetFieldPos();var l=e(this).val();e(this).val(t>0?l.slice(0,n-t)+l.slice(n):l.slice(0,n)+l.slice(n-t));e(this).iSelectField(n-(t<0?0:t))}})})(jQuery);

/** If u are interested in our code and would like to make it robust, just contact us^^ <@音乐前端> **/
/** Generated by M3D. **/