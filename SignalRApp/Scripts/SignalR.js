(function () {

    var Chat = $.connection.Chat;

    $("#btnsend").on("click", function () {
        var message = $("#message").val();
        Chat.server.Send(message);
        $("#message").val("");
        document.getElementById("message").value = '';
    });

    $("#message").keypress(function (e) {

        var key = e.which;
        if (key === 13)  // the enter key code
        {
            if ($('#message').val())
                $('#btnsend').click();
            return false;
        }
    });



    $.connection.hub.start()
        .done(function () {
            console.log("worked")
        })
        .fail(function () { alert("problem") });

    Chat.client.Display = function (message) {

        $('#message-area').append(message + '<br/>');

    };
})()  