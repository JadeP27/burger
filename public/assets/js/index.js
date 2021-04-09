// Burger form to submit additions
$(function() {
    $(".change-devoured").on("click", function (event) {
        let id = $(this).data("id");
        let changedDevoured = $$(this).data("devoured");
        if (changedDevoured == false) {
            devoured = false,
        } else {
            devoured = true,
        }
    })
})

$(function() {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        const newBurger = {
            burger_name: $("#food").val().trim(),
            devoured: data
        };
// AJAX calls for burger apis
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            })
     });
})