var Product={init:function(){var t=this;t.initUpload(),t.bind()},bind:function(){var t=this;$(document).on("change","#JcategoryParent",function(){t.updateChildCategory()}).on("click","#delProduct",function(){var o=$(this);Modal.confirm({id:"Jconfirm",content:"确定要删除此产品？",callback:function(){t.deleteProduct(o.data("id"))}})})},postData:function(t){try{$.ajax({url:t.url||"",data:t.data,type:t.type||"get",dataType:"json",beforeSend:function(){},success:function(o){t.callback(o)},error:function(t){},complete:function(t){}})}catch(t){console.error(t)}},updateChildOption:function(t){if(null==t)return void console.log("未查询到对应的二级类目");try{var o=t.categorys;if(o){for(var a="",n=0;n<o.length;n++){var c=o[n];a+="<option value="+c.id+">"+c.name+"</option>"}$("#JcategoryChild").append(a)}}catch(t){console.error(t)}},updateChildCategory:function(){var t=this,o=$("#JcategoryParent").val();$("#JcategoryChild option:gt(0)").remove(),$("#JcategoryChild option:first").trigger("change"),0!=o&&t.postData({url:"/category/GetChildsByParentId",data:{categoryId:o},callback:t.updateChildOption})},deleteProduct:function(t){this.postData({url:"/product/delproduct",type:"post",data:{productId:t,json:1},callback:function(t){"success"==t.status?Modal.alert({id:"Jalert",content:t.msg,type:"success",callback:function(){window.location.reload()}}):Modal.alert({id:"Jalert",type:"error",content:t.msg,callback:function(){}})}})},initUpload:function(){$("#JuploadDoc").fileupload({autoUpload:!0,url:"/product/import?json=1",dataType:"json",done:function(t,o){"success"==o.result.status?Modal.alert({id:"Jalert",content:"产品导入成功！",type:"success",callback:function(){}}):Modal.alert({id:"Jalert",content:"产品导入失败！",type:"error",callback:function(){}})},fail:function(t,o){Modal.alert({id:"Jalert",content:"产品导入失败！",type:"error",callback:function(){}})}})}};$(function(){Product.init()});