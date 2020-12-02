document.querySelectorAll('.header')[0].oncliсk = function() {left()};
document.querySelectorAll('.header')[1].oncliсk = function() {both()};
document.querySelectorAll('.header')[2].oncliсk = function() {right()};

function left(){
    document.getElementById('second').querySelector('img').style.display = 'none';
    document.getElementById('first').querySelector('img').style.display = '';
    document.getElementById('second').style.width = '100px';
    document.getElementById('first').style.width = '800px';
}
function both(){
    document.getElementById('second').querySelector('img').style.display = '';
    document.getElementById('first').querySelector('img').style.display = '';
    document.getElementById('second').style.width = '450px';
    document.getElementById('first').style.width = '450px';
}
function right(){
    document.getElementById('first').querySelector('img').style.display = 'none';
    document.getElementById('second').querySelector('img').style.display = '';
    document.getElementById('first').style.width = '100px';
    document.getElementById('second').style.width = '800px';
}
