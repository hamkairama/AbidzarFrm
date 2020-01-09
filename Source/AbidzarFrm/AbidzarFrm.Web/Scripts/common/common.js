$.extend({
    //Passing with primitif object
    xResponse: function (url, data) {
        var theResponse = null;
        $.ajax({
            url: url,
            cache: false,
            traditional: true,
            type: 'POST',
            data: data,
            dataType: "json",
            async: false,
            success: function (respText) {
                theResponse = respText;
            },
            error: function (jqXHR, textStatus, errorMessage) {
                console.log(errorMessage);
            }
        });
        return theResponse;
    },
    //Passing with modern object
    xResponseJson: function (url, data) {
        var theResponse = null;
        $.ajax({
            url: url,
            cache: false,
            traditional: true,
            type: "POST",
            data: data,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            async: false,
            success: function (respText) {
                theResponse = respText;
            },
            error: function (jqXHR, textStatus, errorMessage) {
                console.log(errorMessage);
            }
        });
        return theResponse;
    },
})
