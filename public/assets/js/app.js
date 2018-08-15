$( () => {
    $(".devour-btn").on("click", (event) => {
        console.log(event.target.dataset.id)
        // let name2 = $(this).data("id")
        // console.log(name2);
        let id = event.target.dataset.id
        let updateBurger = {
            id: id,
        }
        $.ajax("/api/burgers", {
            type: "PUT",
            data: updateBurger
        }).then( () => {
            location.reload()
        });
    });

    $(".create-form").on("submit", event => {
        event.preventDefault();
        let newBurger = {
            burger_name: $("#new-burger").val().trim()
        }
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then( () => {
            location.reload()
        });
    });
});