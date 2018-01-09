$(function () {
    $("#createBurger").on("click", function (event) {
        var burgerName = $('#burgerName').val();
        console.log(burgerName);
        // Send the POST request.
        $.ajax("/createburger", {
            type: "POST",
            data: { "burger_name": burgerName }
        }).then(
            function (res) {
                location.reload();
            }
        );
    });
    $(".updateBurger").on("click", function (event) {
        // Send the PUT request.
        var burgerName = $('#burgerName').val();
        $.ajax("/updateburger", {
            type: "PUT",
            data: { "burger_name": event.currentTarget.id }
        }).then(
            function (res) {
                location.reload();
            }
        );
    });
});