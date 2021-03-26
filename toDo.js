$(document).ready(function(){
var sum=0;


$(".xcv").click(function(){
    $(this).parent().remove();
})
$("form").submit(function(event){
    sum++;
    event.preventDefault();
    
    var title = event.currentTarget['title'].value; // formani ichidagi title name li inputdan value olish
    var t = new Date(event.currentTarget['time'].value).toLocaleDateString(); // formani ichidagi title name li inputdan value olish
    var info = event.currentTarget['info'].value; // formani ichidagi title name li inputdan value olish
    var color = event.currentTarget['color'].value; // formani ichidagi title name li inputdan value olish
       
    var html="<div class='sdf'> <div class='box b"+sum+"'>  <img src='./plan-idea.svg'> <div class='info'><h3>"+t+"<span>"+title+"</span>"+"</h3><p>"+ info+"</p></div></div> <button class='xcv'>X</button></div>";
   
    
 
    $('.list').append(html);

    
    var t="b"+sum;

    $("."+t).css({
        "background":color
    });
 
    $(".xcv").click(function(){
        $(this).parent().remove();
    })
    $("form").trigger('reset');

    $("#hidden-form").css("display","none");
    $(".main").css("display","block");
    
     

})

});
var d=new Date();
 

function loading(){


    setTimeout(() => {
        $(".load").css({
            "opacity":"0",
            "display":"none"
        });

    }, 1500);

    setTimeout(() => {
        $(".main").show(500);
    }, 1750);

    setTimeout(() => {
        alert("this toDo app do not support firefox");
    }, 2500);

    
    var sana=d.getDate();
    var kunnav=d.getDay();
    var oynav=d.getMonth();
    var yilnav =d.getFullYear();
  
    var kunstring="";
    var Oystring="";
    

    $('.k'+kunnav+"").css("border-top","2px solid indigo");

    switch (kunnav) {
        case 1:
            kunstring="Monday"
            break;
            case 2:
            kunstring="Tuesday"
            break;
            case 3:
            kunstring="Wednesday"
            break;
            case 4:
            kunstring="Thursday"
            break;
            case 5:
            kunstring="Friday"
            break;
            case 6:
            kunstring="Saturday"
            break;
            case 7:
            kunstring="Sunday"
            break;
    
        default:
            break;
    }

    switch (oynav) {
        case 0:
            Oystring="January"
            break;
            case 1:
            
                Oystring="February"
            break;

            case 2:

                Oystring="March"            
            break;

            case 3:
            
                Oystring="April"
            break;

            case 4:
            
                Oystring="May"
            break;

            case 5:
            
                Oystring="June"
            break;



            case 6:
            
                Oystring="July"
            break;

            case 7:
            
                Oystring="August"
            break;

            case 8:
            
                Oystring="September"
            break;

            case 9:
            
                Oystring="October"
            break;

            case 10:
            
                Oystring="November"
            break;

            case 11:
            
                Oystring="December"
            break;
            
    
        default:
            break;
    }



     $("#sananav").text(sana);
     $("#kunnav").text(kunstring);
     $("#oynav").text(Oystring);
     $("#yilnav").text(yilnav);

}

$("#add").click(function(){
    $("#hidden-form").css("display","block");
    $(".main").css("display","none");
    
})