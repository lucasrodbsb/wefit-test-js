$(window).on("load", function () {

    //menu-----------------------------------------

    $(".btn-group-vertical").css(
        {
            "gap": "5px",
            "flex-direction": "row",
            "align-items": "center",
            "justify-content": "center",
            "white-space": "nowrap",

        });

    $(".btn-group-vertical .btn-secondary").css(
        {
            "padding": "8px 10px",
            "border-radius": "5px",
            "overflow-wrap": "normal",

        });

    //----------------------------------------------

    //header----------------------------------------

    $(".jumbotron").css({
        "text-align": "right",
        "color": "#fff",
        "background-color": "#6B757E",
    });

    $(".jumbotron .btn").css({
        "color": "#fff",
        "background-color": "#27A844",
        "border": "#27A844"
    });

    //----------------------------------------------

    //Cards----------------------------------------

    $(".card-title").first()
    .text('Natureza');

    $(".card-title").eq(1)
    .text('Animais');

    $(".card-body a").eq(1).css({"background":"#27A844", "border":"#27A844" });

    $(".card-title").eq(2)
    .text('Pessoas');

    $(".card-title").eq(3)
    .text('Tecnologias');

    $(".card-img-top").first().attr({"src":"https://placeimg.com/300/180/nature"})

    $(".card-img-top").eq(1).attr({"src":"https://placeimg.com/300/180/animals"});

    $(".card-img-top").eq(3).attr({"src":"https://placeimg.com/300/180/tech"});

    //----------------------------------------------


    //Lista----------------------------------------

    $(".list-group .list-group-item").first().removeClass( "active" )

    $(".list-group").append(
            '<li class="list-group-item active">Quarto item</li>',
            '<li class="list-group-item">Quinto item</li>'
        );

    //----------------------------------------------
});

//fim c: