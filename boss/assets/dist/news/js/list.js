var News={$newForm:null,wangEditor:null,$template:null,init:function(){this.bind()},intWangEditor:function(){var t=this;t.wangEditor=new wangEditor("Jeditor"),t.wangEditor.config.uploadImgUrl="/upload/index?action=edimage",t.wangEditor.config.uploadImgFileName="upfile",t.wangEditor.create()},bind:function(){var t=this;$(document).on("click",".Jdelete",function(){var n=$(this);Modal.confirm({id:"Jconfirm",content:"确定要删除该条新闻？",callback:function(){t.deleteNew(n.data("id"))}}),t.$template=$("#Jconfirm")})},postData:function(t){try{$.ajax({url:t.url||"",data:t.data,type:t.type||"get",dataType:"json",beforeSend:function(){App.blockUI(t.hObject)},success:function(n){null!=t.callback&&t.callback(n)},error:function(t){},complete:function(){App.unblockUI(t.hObject)}})}catch(t){console.error(t)}},deleteNew:function(t){var n=this;n.postData({url:"/cms/delete",data:{cmsId:t,json:1},hObject:n.$template.find(".Jload"),callback:function(t){"success"==t.status?Modal.alert({id:"Jalert",content:"删除成功！",type:"success",callback:function(){window.location.reload()}}):Modal.alert({id:"Jalert",type:"error",content:t.msg,callback:function(){}})}})}};$(function(){News.init()});