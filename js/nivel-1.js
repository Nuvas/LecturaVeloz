var level0 = {name: 'Nivel 0', numberOfOptions: 3, time: 500, rows:1, asserts: 2}
var level1 = {name: 'Nivel 1', numberOfOptions: 3, time: 300, rows:1, asserts: 10}
var level2 = {name: 'Nivel 2', numberOfOptions: 4, time: 400, rows:1, asserts: 10}
var level3 = {name: 'Nivel 3', numberOfOptions: 4, time: 300, rows:1, asserts: 10}
var level4 = {name: 'Nivel 4', numberOfOptions: 3, time: 500, rows:2, asserts: 10}
var level5 = {name: 'Nivel 5', numberOfOptions: 4, time: 300, rows:2, asserts: 10}
var level6 = {name: 'Nivel 6', numberOfOptions: 4, time: 200, rows:2, asserts: 10}
var level7 = {name: 'Nivel 7', numberOfOptions: 4, time: 300, rows:4, asserts: 10}
var level8 = {name: 'Nivel 8', numberOfOptions: 4, time: 300, rows:4, asserts: 10}
var level9 = {name: 'Nivel 9', numberOfOptions: 6, time: 200, rows:6, asserts: 10}
var levels = [level0, level1, level2, level3].reverse();
var currentLevel;
var availableImages = ['images/units/apple.png', 'images/units/ball.png', 'images/units/banana.png', 'images/units/bike.png', 'images/units/boy.png', 'images/units/bucket.png', 'images/units/cat.png', 'images/units/crab.png', 'images/units/dog.png', 'images/units/flashlight.png', 'images/units/gift.png', 'images/units/girl.png', 'images/units/grape.png', 'images/units/help.png', 'images/units/icecream.png', 'images/units/joystick.png', 'images/units/orange.png', 'images/units/papaya.png', 'images/units/picture.png', 'images/units/pineapple.png', 'images/units/pipe.png', 'images/units/roller.png', 'images/units/shark.png', 'images/units/shell.png', 'images/units/skate.png', 'images/units/starfish.png', 'images/units/strawberry.png', 'images/units/sun.png', 'images/units/sunshade.png', 'images/units/surf.png', 'images/units/toy.png', 'images/units/watermelon.png', 'images/units/wave.png'];
var otherImages = ['images/Check_256x256.png', 'images/Delete_256x256.png'];
var asserts;

$(document).ready(function(){

    preloadImages(availableImages);
    preloadImages(otherImages);

    setLevel();

    $('#show').click(function(event){

        var units = generateImage(currentLevel.numberOfOptions);
        var option;

        for(i in units) {
            option = '<input class="an_option" type="image" src="'+units[i]+'"/>';
            $('#option'+i).html(option);
        }

        var theIndex = getRandomInt(0,currentLevel.numberOfOptions-1);
        var theUnit = '<img src="'+units[theIndex]+'"/>';

        $('#unit').html(theUnit).show();
        setTimeout("$('#unit img').hide();", currentLevel.time);
        setTimeout("$('#options').fadeIn();", currentLevel.time+300);
    });

    $('.an_option').live('click', function(){
        var optionSrc = $(this).attr('src');
        var unitSrc = $('#unit img').attr('src');
        if (optionSrc == unitSrc) {
            $('#rightPanel').html('<img src="images/Check_256x256.png" />');
            asserts += 1;
            var tilin = new Audio('tilin.ogg');
            tilin.play();
        } else {
            $('#rightPanel').html('<img src="images/Delete_256x256.png" />');
            var cueck  = new Audio('cueck.ogg');
            cueck.play();
            asserts -= 1;
        }
        setTimeout("$('#rightPanel img').hide();", 500);
        $('#score').html(asserts+'/'+currentLevel.asserts);

        if (currentLevel.asserts == asserts) {
            setLevel()
        }

    });

});

function generateNumber(digits)
{
    var from=Math.pow(10, digits-1);
    to = (from*10)-1;
    return getRandomInt(to, from);
}

function generateWord(){
    var words = new Array();
    words = ['entre', 'dos', 'primero', 'mismo', 'nos', 'porque', 'cuando', 'sin', 'muy', 'mucho', 'sobre', 'saber', 'deber', 'alguno', 'sólo', 'sí', 'pasar', 'país', 'ver', 'Parte', 'Oración', 'hasta', 'vez', 'Palabra', 'también', 'aquel', 'día'];
    return words[getRandomInt(0,words.length-1)];
}

function generateImage(number)
{
    var images = [];
    var index;
    var image;
    while (images.length != number) {
        index = getRandomInt(0, availableImages.length-1);
        image = availableImages[index];
        if (images.indexOf(image) == -1) {
            images = images.concat(image);
        }
    }

    if (number == 1) {
        return images[0];
    } else {
        return images;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setLevel() {
    currentLevel = levels.pop();
    $('#title').html(currentLevel.name);
    asserts = 0;
    $('#options').empty();
    for (var i=0;i<currentLevel.numberOfOptions;i++){
        $('#options').append('<span id="option'+i+'"></span>')
    }
}

function preloadImages(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
    });
}
