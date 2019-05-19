var mouseout = false;
var mouseover = false;
var btnClicked = false;
var layerNaranjaClicked = false;
var click = false;
var numImg = 1;

var valoresDefecto = function () {
    $('#contenedor').addClass("background-default");
    $('#logo').attr("src", "Images/Logo%20San%20José%20en%20colores/amarillo.png");
    $('#header').css("background-color", "gray");
};

var btnNaranjaClick = function () {
    if(!btnClicked){
        btnClicked = true;
        $('#imgNaranja').removeClass("hide");
        $('#lnkSgte').removeClass("hide");
        $('#logo').addClass("hide");
        $('#botones').addClass("hide");
        $('#contenedor').removeClass('background-naranja');
        $('#contenedor').addClass('background-naranja1');
    }
};

var btnNaranjaOver = function(){
    $('#contenedor').removeClass("background-default");
    $('#contenedor').addClass("background-naranja");
    $('#imgNaranja2').removeClass("hide");
    //$('#imgNaranja2').addClass("animated cnce slideInLeft");
    $('#logo').attr("src", "Images/Logo%20San%20José%20en%20colores/rojo.png");
    $('#header').css("background-color", "rgb(213,157,60)");
};

var btnNaranjaOut = function(){

    $('#contenedor').removeClass('background-naranja');
    $('#imgNaranja2').addClass('hide');
    // $('#imgNaranja2').addClass("animated once slideOutLeft");
    valoresDefecto();
};

var animationDone = function(){
    if(mouseover){
        $('#imgNaranja2').removeClass("animated once slideInLeft");
        mouseover = false;
    }
    if(mouseout){
        $('#imgNaranja2').addClass("hide");
        $('#imgNaranja2').removeClass("animated once slideOutLeft");
        mouseout = false;
    }
};

var btnRojoClick = function () {
    if(!btnClicked){
        btnClicked = true;
        $('#imgRojo').removeClass("hide");
        $('#logo').addClass("hide");
        $('#botones').addClass("hide");
        $('#contenedor').removeClass('background-rojo');
        $('#contenedor').addClass('background-rojo1');
    }
};
var btnRojoOver = function(){
    if(!btnClicked) {
        $('#contenedor').removeClass("background-default");
        $('#contenedor').addClass("background-rojo");
        //document.getElementById("contenedor").style.backgroundImage = "url("+img.src+")";
        $('#logo').attr("src", "Images/Logo%20San%20José%20en%20colores/azul.png");
        $('#header').css("background-color", "rgb(197, 69, 55)");
    }
};

var btnRojoOut = function(){
    $('#contenedor').removeClass("background-rojo");
    valoresDefecto();
};

var btnVerdeOver = function(){
    if(!btnClicked){
        $('#contenedor').removeClass("background-default");
        $('#contenedor').addClass("background-verde");
        $('#logo').attr("src", "Images/Logo%20San%20José%20en%20colores/naranja.png");
        $('#header').css("background-color", "rgb(111, 159, 61)");
    }

};

var btnVerdeOut = function(){
    $('#contenedor').removeClass("background-verde");
    valoresDefecto();
};

var btnAzulOver = function(){
    if(!btnClicked){
        $('#contenedor').removeClass("background-default");
        $('#contenedor').addClass("background-azul");
        $('#logo').attr("src", "Images/Logo%20San%20José%20en%20colores/rosado.png");
        $('#header').css("background-color", "rgb(51, 138, 192)");
    }
};

var btnAzulOut = function(){
    $('#contenedor').removeClass("background-azul");
    valoresDefecto();
};

var btnRosaOver = function(){
    if(!btnClicked) {
        $('#contenedor').removeClass("background-default");
        $('#contenedor').addClass("background-rosa");
        $('#logo').attr("src", "Images/Logo%20San%20José%20en%20colores/verde.png");
        $('#header').css("background-color", "rgb(212, 132, 60)");
    }
};

var btnRosaOut = function(){
    $('#contenedor').removeClass("background-rosa");
    valoresDefecto();
};

var lnkSgteClick = function(event){
    event.preventDefault();
    numImg++;
    if(numImg > 4){
        numImg = 1;
    }

    var textLink = "Siguiente><br>" + numImg + "/4";
    if(numImg == 4){
        textLink = "Vuelve a la página principal<br>" + numImg + "/4";
    }

    $('#imgNaranja').prop('src',"Images/Elementos%20%20Qué%20proponemos/elemento-0"+numImg+".png");
    $('#lnkSgte').html(textLink);
};

var layerNaranjaClick = function(){
    layerNaranjaClicked = true;
};

var contenedorClick = function(){
    deshacer_click_btnNaranja();
};

var deshacer_click_btnNaranja = function(){
    if(!layerNaranjaClicked){
        btnClicked = false;
        $('#contenedor').removeClass("background-naranja1");
        $('#imgNaranja').addClass("hide");
        $('#lnkSgte').addClass("hide");
        $('#logo').removeClass("hide");
        $('#botones').removeClass("hide");
        valoresDefecto();
    }
    layerNaranjaClicked = false;
};

var btnFacebookClick = function(){
    window.open("https://www.facebook.com");
};

var btnInstagramClick = function(){
    window.open("https://www.instagram.com");
};

var btnYoutubeClick = function(){
    window.open("https://www.youtube.com");
};
$(document).ready(function(){
    $('.modal').modal();

    //añadiendo acciones a los botones
    $('#btnNaranja').on("click", btnNaranjaClick);
    $('#btnNaranja').on("mouseover", btnNaranjaOver);
    $('#btnNaranja').on("mouseout", btnNaranjaOut);

    $('#btnRojo').on("click",btnRojoClick);
    $('#btnRojo').on("mouseover", btnRojoOver);
    $('#btnRojo').on("mouseout", btnRojoOut);

    $('#btnVerde').on("mouseover", btnVerdeOver);
    $('#btnVerde').on("mouseout", btnVerdeOut);

    $('#btnAzul').on("mouseover", btnAzulOver);
    $('#btnAzul').on("mouseout", btnAzulOut);

    $('#btnRosa').on("mouseover", btnRosaOver);
    $('#btnRosa').on("mouseout", btnRosaOut);

    $('#contenedor').on("click",contenedorClick);

    $('#layerNaranja').on("click", layerNaranjaClick);


    $('#btnFacebook').on("click", btnFacebookClick);
    $('#btnInstagram').on("click", btnInstagramClick);
    $('#btnYoutube').on("click", btnYoutubeClick);
    //añadiendo animaciones
//$('#imgNaranja2').on("animationend", animationDone);
});

$('#contenedor').ready(function () {

    var isFirefox = typeof InstallTrigger !== 'undefined';

   /* if(isFirefox){
        var array = ['default','rojo','naranja', 'rosa', 'verde', 'azul'];
        var i = 1;
        setInterval(function () {
            if(i == array.length)
                clearInterval(this);
            $('#contenedor').removeClass("background-"+array[i-1]);
            $('#contenedor').addClass("background-"+array[i]);
            i++;
        },1);

        $('#contenedor').ready(function () {
            $('#contenedor').addClass("background-default");
            $("#preloader").addClass("hide");
        })
    }*/

        $("#preloader").addClass("hide");

});




