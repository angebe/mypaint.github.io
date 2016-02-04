/*jslint browser: true, node: true */
/*global $, draw, write, reset */
"use strict";
$(document).ready(function () {
    var mousePressed = false,
        lastX,
        lastY,
        canvas = $("canvas").get(0).getContext("2d"), //Permet l'ecriture sur le canvas
        rectangle = false,
        trait = false,
        crayon = true,
        i = 0,
        cercle = false,
        all = false,
        texte = false;

    $('#pic').change(function () {
        $('#image').prepend('<img id="theImg" src="' + $("#pic").val() + '" />');
    });

    $('#texte').click(function () {
        $("#inputTEXT").show();
        reset();
        texte = true;
    });

    $('#trait').click(function () {
        reset();
        trait = true;
    });

    $('#crayon').click(function () {
        reset();
        crayon = true;
    });

    $('#rect').click(function () {
        reset();
        rectangle = true;
    });

    $('#rectA').click(function () {
        reset();
        rectangle = true;
        all = true;
    });

    $('#cercleA').click(function () {
        reset();
        cercle = true;
        all = true;
    });

    $('#cercle').click(function () {
        reset();
        cercle = true;
    });

    function reset() {
        texte = false;
        trait = false;
        crayon = false;
        rectangle = false;
        cercle = false;
        all = false;
    }

    $('#canvas').mousedown(function (e) { // Lorsque le clique gauche est actif sur le canvas
        if (trait) {
            mousePressed = false;
            draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        } else if (crayon) {
            mousePressed = true;
            draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, false);
        } else if (rectangle) {
            mousePressed = false;
            draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        } else if (cercle) {
            mousePressed = false;
            draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        } else if (texte) {
            mousePressed = false;
            write(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top);
        }
        // e.pageX place de x dans la page, - $(this).offset().left cad moins la marge en dehors du canvas
    });

    $('#canvas').mousemove(function (e) { //lorsque la souris bouge sur le canvas
        if (mousePressed) {
            draw(e.pageX - $(this).offset().left, e.pageY - $(this).offset().top, true);
        }
    });

    $('#canvas').mouseup(function () { //Lorsque le clique gauche est relaché
        mousePressed = false;
    });

    $('#canvas').mouseleave(function () { //lorsque la souris sort du canvas
        mousePressed = false;
    });

    //Clear le canvas
    $('#clear').click(function () {
        canvas.clearRect(0, 0, 500, 500);
    });

    $('#back').click(function () {
        $("#inputTEXT").hide();
        texte = false;
        trait = false;
        crayon = true;
        rectangle = false;
        cercle = false;
    });
    function write(x, y) {
        canvas.font = $('#sizeTEXT').val() + "px " + $('#fontTEXT').val();
        canvas.fillText($('#valueTEXT').val(), x, y);
    }
    //function pour draw
    function draw(x, y, isDown) {
        if (!isDown) {
            lastX = x - 1;
            lastY = y;
        }
        if (crayon || trait) {
            if ((trait && i === 1) || crayon) {
                canvas.beginPath();
                canvas.strokeStyle = $('#color').val();
                canvas.lineWidth = $('#size').val();
                canvas.lineJoin = "round"; //type de coin (pinceau rond)
                canvas.moveTo(lastX, lastY); //debut du parcours
                canvas.lineTo(x, y); //Tracé de la ligne
                canvas.closePath();
                canvas.stroke(); //Dessine le path definit
                i = 0;
            } else {
                i += 1;
            }
        } else if (rectangle) {
            if (i === 1) {
                canvas.beginPath();
                canvas.strokeStyle = $('#color').val();
                canvas.lineWidth = $('#size').val();
                canvas.lineJoin = "round"; //type de coin (pinceau rond)
                if (rectangle === true && all === false) {
                    canvas.rect(lastX, lastY, x - lastX, y - lastY); //donne une valeur positive
                    canvas.closePath();
                    canvas.stroke();
                } else if (rectangle === true && all === true) {
                    canvas.fillStyle = $('#color').val();
                    canvas.fillRect(lastX, lastY, x - lastX, y - lastY);
                }
                i = 0;
            } else {
                i += 1;
            }
        } else if (cercle) {
            if (i === 1) {
                canvas.beginPath();
                canvas.strokeStyle = $('#color').val();
                canvas.lineWidth = $('#size').val();
                canvas.lineJoin = "round"; //type de coin (pinceau rond)
                if (cercle === true && all === false) {
                    canvas.arc(lastX, lastY, Math.sqrt(Math.pow(x - lastX, 2) + Math.pow(y - lastY, 2)), 0, 2 * Math.PI); //donne une valeur positive
                    canvas.closePath();
                    canvas.stroke();
                } else if (cercle === true && all === true) {
                    canvas.fillStyle = $('#color').val();
                    canvas.arc(lastX, lastY, Math.sqrt(Math.pow(x - lastX, 2) + Math.pow(y - lastY, 2)), 0, 2 * Math.PI); //donne une valeur positive
                    canvas.fill();
                }
                i = 0;
            } else {
                i += 1;
            }
        }
        lastX = x;
        lastY = y;
    }
});