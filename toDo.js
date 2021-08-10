
window.onload = function () {
    setTimeout(() => {
        $('.loading').fadeOut(500);
    }, 1500);
}

$(document).ready(function () {
    var date = new Date();
    $("#sana2").text(date.toLocaleDateString());


    var sanoqb = 0;

    if (localStorage.sanoq == undefined) {

        var arr = [];
        localStorage.sanoq = JSON.stringify(arr);
    }

    if (localStorage.sanoq != undefined) {
        arr = JSON.parse(localStorage.sanoq);
        sanoqb = (JSON.parse(localStorage.sanoq).length) / 2;
        console.log("qiymat: " + sanoqb);

    }

    if (sanoqb > 0) {


        for (let i = 0; i < sanoqb; i++) {

            if (JSON.parse(localStorage.sanoq)[i * 2] != undefined) {

                $(".list").append('<div class="flexbox"> <div class="' + ("rt rt" + i) + '">  <h4>' + (JSON.parse(localStorage.sanoq)[i * 2]) + '</h4> <p>' + (JSON.parse(localStorage.sanoq)[i * 2 + 1]) + '</p> </div>  <button class="remove">X</button>  </div>');
                console.log(i);

            }

        }



    }





    $("#add").click(function () {



        $(".input").toggle(0);
        $(".input").css("display", "flex");


    });

    $("#submit").click(function () {


        $(".input").toggle(0);














        var title = $('#title').val();
        var yozuv = $('#yozuv').val();
        var sana = $('#sana').val();

        arr.push(title + " " + sana);
        arr.push(yozuv);

        localStorage.sanoq = JSON.stringify(arr);









        $(".list").append('<div class="flexbox"> <div class="' + ("rt rt" + sanoqb) + '">  <h4>' + (JSON.parse(localStorage.sanoq)[sanoqb * 2]) + '</h4> <p>' + (JSON.parse(localStorage.sanoq)[sanoqb * 2 + 1]) + '</p> </div>  <button class="remove">X</button>  </div>');
        sanoqb++;


        $(".remove").click(function () {

            var name = $(this).prev().attr("class");
            var slname = name.slice(5, name.length);
            slname = parseInt(slname)
            delete arr[slname * 2];
            delete arr[slname * 2 + 1];
            localStorage.sanoq = JSON.stringify(arr);
            $(this).parent().remove();

        });




        ///////////////////////////////////////




        //////////////////////////////




        var title = $('#title').val("");
        var yozuv = $('#yozuv').val("");
        var sana = $('#sana').val("");











    });

    $(".remove").click(function () {

        var name = $(this).prev().attr("class");
        var slname = name.slice(5, name.length);
        slname = parseInt(slname)
        delete arr[slname * 2];
        delete arr[slname * 2 + 1];
        localStorage.sanoq = JSON.stringify(arr);
        $(this).parent().remove();




    });


});
