var Modal=function(){function i(i){i=i||{},i.id=i.id||"Jalert",i.title=i.title||"系统提示",i.content=i.content||"系统提示消息",i.type=i.type||"info",i.callback=i.callback||{};var a=$("#"+i.id),t="",l="";switch(i.type){case"info":t="icon-info-sign",l="blue";break;case"warning":t="icon-warning-sign",l="yellow";break;case"error":t="icon-remove-sign",l="red";break;case"success":t="icon-ok-sign",l="green"}a.length?("系统提示"!=i.title&&a.find("h3").html(i.title),"系统提示消息"!=i.content&&a.find("span").html(i.content),a.find(".modal-body").removeClass().addClass("modal-body alert-"+i.type),a.find(".modal-body i").removeClass().addClass(t),a.modal("show")):(d='<div id="'+i.id+'" class="modal hide fade in" tabindex="-1" role="dialog" aria-hidden="false">                <div class="modal-header">                    <h3>'+i.title+'</h3>                </div>                <div class="v-tip modal-body alert-'+i.type+'">                    <i class="'+t+'"></i><span>'+i.content+'</span>                </div>                <div class="modal-footer">                    <button id="JalertBtn" data-dismiss="modal" class="btn '+l+'"><i class="icon-ok"></i>确 定</button>                </div>            </div>',$("body").append(d),$("#"+i.id).modal("show")),$("#JalertBtn").off("click"),$("#JalertBtn").click(function(){i.callback()}),$(".modal-backdrop").off("click")}function a(i){i=i||{},i.id=i.id||"Jconfirm",i.title=i.title||"系统提示",i.content=i.content||"系统提示消息",i.callback=i.callback||{};var a=$("#"+i.id);a.length?("系统提示"!=i.title&&a.find("h3").html(i.title),"系统提示消息"!=i.content&&a.find("span").html(i.content),a.modal("show")):(d='<div id="'+i.id+'" class="modal hide fade in" tabindex="-1" role="dialog" aria-hidden="false">            <div class="Jload">                <div class="modal-header">                    <h3>'+i.title+'</h3>                </div>                <div class="v-tip modal-body alert">                    <i class="icon-warning-sign"></i><span>'+i.content+'</span>                </div>                <div class="modal-footer">                    <button class="btn" data-dismiss="modal" aria-hidden="true"><i class="icon-remove"></i>取 消</button>                    <button id="JconfirmBtn" data-dismiss="modal" class="btn yellow"><i class="icon-ok"></i>确 定</button>                </div>                </div>            </div>',$("body").append(d),$("#"+i.id).modal("show")),$("#JconfirmBtn").off("click"),$("#JconfirmBtn").click(function(){i.callback()}),$(".modal-backdrop").off("click")}function t(i){i=i||{},i.id=i.id||"Jtemplate",i.title=i.title||"系统提示",i.content=i.content||"系统提示消息",i.callback=i.callback||{},i.class=i.class||"";var a=$("#"+i.id);a.length?("系统提示"!=i.title&&a.find("h3").html(i.title),"系统提示消息"!=i.content&&a.find(".modal-body").html(i.content),a.modal("show")):(d='<div id="'+i.id+'" class="'+i.class+' modal hide fade in" tabindex="-1" role="dialog" aria-hidden="false">            <div class="Jload">                <div class="modal-header">                    <h3>'+i.title+'</h3>                </div>                <div class="modal-body">                    '+i.content+'                </div>                <div class="modal-footer">                    <button class="btn" data-dismiss="modal" aria-hidden="true"><i class="icon-remove"></i>取 消</button>                    <button id="JtemplateBtn" data-dismiss="modal" class="btn green"><i class="icon-ok"></i>确 定</button>                </div>                </div>            </div>',$("body").append(d),$("#"+i.id).modal("show")),$("#JtemplateBtn").off("click"),$("#JtemplateBtn").click(function(){i.callback()}),$(".modal-backdrop").off("click")}var d="";return{alert:i,confirm:a,template:t}}();