
namespace AbidzarFrm.Rukuntangga.WargaDialog {
    export function initializePage() {
        //information();
        //ModalPop();
    }

    export function GetIndex() {

    }

    function ModalPop(url, id, form) {
        $.get(url + id, { "_": $.now() }, function (data) {
            $(form).html(data).dialog("open");
            $(form).html(data).dialog({ draggable: false }).parent().draggable();
        });
    }

    function information() {
        $('#information').click(() => {
            Q.alert("<h4>Here is some HTML content!</h4>" +
                "<ul><li>Item 1</li><li>Item 2</li >" +
                "<li>Visit <a href='http://serenity.is/' target='_blank' style='color: #ddf'>http://serenity.is/</a>!</li></ul>", {
                    htmlEncode: false
                });
        });
    }
}