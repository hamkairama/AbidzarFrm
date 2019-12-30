$(document).ready(function () {
    $('.modal-dialog').draggable();
    $('#AbidzarFrameModalFormEdit').on('show.bs.modal', function (e) {
        if (e.target.id == 'AbidzarFrameModalFormEdit') {
            var data = $(e.relatedTarget).data();
            $.ajax({
                cache: false,
                async: false,
                type: "POST",
                traditional: false,
                url: data.url,
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify({
                    id: data.itemId
                }),
                datatype: "application/json",
                success: function (ret) {
                    $('#AbidzarFrameModalFormContent').html(ret);
                },
                error: function () {
                    $(this).modal('hide');
                    alertError("Failed to open form, please try again");
                }
            })                

                //$('.description', this).text(data.itemDescription);
                //$('#btnSaveForm', this).data('urlAction', data.urlAction);
        }
    });

})
