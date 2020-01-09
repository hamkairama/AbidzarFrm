var fullOrigin = location.origin + "/";


$(document).ready(function () {
    $('.modal-dialog').draggable();
})

function Modal(url, idx, form) {
    var link = UrlWithoutParam(fullOrigin) + url

    $.ajax({
        url: link,
        type: 'POST',
        dataType: 'json',
        data: { id: idx },
        dataType: "html",
        success: function (result, status, xhr) {
            $(form).html(result);
        },
        error: function (xhr, status, error) {
            $(form).html("Result: " + status + " " + error + " " + xhr.status + " " + xhr.statusText)
        }
    });
}

function UrlWithoutParam(route) {
    var fields = route.split('?');
    return fields[0];
}

function ModalRouterWithParam(url, id, form) {
    $.get(UrlWithoutParam(fullOrigin) + url + id, { "_": $.now() }, function (data) {
        $(form).html(data).dialog("open");
        $(form).html(data).dialog({ draggable: false }).parent().draggable();
    });
}

function ModalPop(url, id, form) {
    $.get(url + id, { "_": $.now() }, function (data) {
        $(form).html(data).dialog("open");
        $(form).html(data).dialog({ draggable: false }).parent().draggable();
    });
}