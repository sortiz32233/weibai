var Login={init:function(){App.init(),$("#Jform").validate({errorElement:"label",errorClass:"help-inline",focusInvalid:!1,rules:{username:{required:!0},password:{required:!0},remember:{required:!1}},messages:{username:{required:"请输入用户名"},password:{required:"请输入密码"}},invalidHandler:function(r,e){$(".alert-error",$(".login-form")).show()},highlight:function(r){$(r).closest(".control-group").addClass("error")},success:function(r){r.closest(".control-group").removeClass("error"),r.remove()},errorPlacement:function(r,e){r.addClass("help-small no-left-padding").insertAfter(e.closest(".input-icon"))},submitHandler:function(r){window.location.href="index.html"}}),$("#Jform input").keypress(function(r){13==r.which&&$("#Jsubmit").trigger()}),$(document).on("click","#Jsubmit",function(){$("#Jform").validate().form()&&$.ajax({url:"/sign/in",type:"post",data:$("#Jform").serialize(),success:function(r){try{r=JSON.parse(r),"success"==r.status?window.location.href=r.backUrl:($(".alert-error").find("span").html(r.msg),$(".alert-error").show())}catch(r){console.error(r)}},complete:function(){}})})}};$(function(){Login.init()});