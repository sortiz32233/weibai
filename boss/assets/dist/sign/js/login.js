var Login={init:function(){App.init(),$(".login-form").validate({errorElement:"label",errorClass:"help-inline",focusInvalid:!1,rules:{username:{required:!0},password:{required:!0},remember:{required:!1}},messages:{username:{required:"请输入用户名"},password:{required:"请输入密码"}},invalidHandler:function(e,r){$(".alert-error",$(".login-form")).show()},highlight:function(e){$(e).closest(".control-group").addClass("error")},success:function(e){e.closest(".control-group").removeClass("error"),e.remove()},errorPlacement:function(e,r){e.addClass("help-small no-left-padding").insertAfter(r.closest(".input-icon"))},submitHandler:function(e){window.location.href="index.html"}}),$(".login-form input").keypress(function(e){if(13==e.which)return $(".login-form").validate().form()&&(window.location.href="index.html"),!1}),$(".forget-form").validate({errorElement:"label",errorClass:"help-inline",focusInvalid:!1,ignore:"",rules:{email:{required:!0,email:!0}},messages:{email:{required:"Email is required."}},invalidHandler:function(e,r){},highlight:function(e){$(e).closest(".control-group").addClass("error")},success:function(e){e.closest(".control-group").removeClass("error"),e.remove()},errorPlacement:function(e,r){e.addClass("help-small no-left-padding").insertAfter(r.closest(".input-icon"))},submitHandler:function(e){window.location.href="index.html"}}),$(".forget-form input").keypress(function(e){if(13==e.which)return $(".forget-form").validate().form()&&(window.location.href="index.html"),!1}),jQuery("#forget-password").click(function(){jQuery(".login-form").hide(),jQuery(".forget-form").show()}),jQuery("#back-btn").click(function(){jQuery(".login-form").show(),jQuery(".forget-form").hide()}),$(".register-form").validate({errorElement:"label",errorClass:"help-inline",focusInvalid:!1,ignore:"",rules:{username:{required:!0},password:{required:!0},rpassword:{equalTo:"#register_password"},email:{required:!0,email:!0},tnc:{required:!0}},messages:{tnc:{required:"Please accept TNC first."}},invalidHandler:function(e,r){},highlight:function(e){$(e).closest(".control-group").addClass("error")},success:function(e){e.closest(".control-group").removeClass("error"),e.remove()},errorPlacement:function(e,r){"tnc"==r.attr("name")?e.addClass("help-small no-left-padding").insertAfter($("#register_tnc_error")):e.addClass("help-small no-left-padding").insertAfter(r.closest(".input-icon"))},submitHandler:function(e){window.location.href="index.html"}}),jQuery("#register-btn").click(function(){jQuery(".login-form").hide(),jQuery(".register-form").show()}),jQuery("#register-back-btn").click(function(){jQuery(".login-form").show(),jQuery(".register-form").hide()}),$(document).on("click","#Jsumbit",function(){$.ajax({url:"/sign/in",type:"post",data:$("#Jform").serialize(),success:function(e){try{"success"===e.status&&(window.location.href=e.backUrl)}catch(e){console.error(e)}},complete:function(){}})})}};$(function(){Login.init()});