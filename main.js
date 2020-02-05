//variables
var x = ' Nilo, ';
document.write(x);

//deffierent types of variables
var music = ' faint, ';
document.write(music);
var song = ' I love music, \" it so nice \" ';
document.write(song);

//using variables with strings
var name = ' nilo ';
var age = 28;
var address = ' duay ';
document.write(name + ' is my name and my age is ' + age);
document.write(name + age + address);
 
//functions 
function funk () {
    alert('hello world');
}

//using parameters with functions
function eat (y) {
    alert('i love to' + y);
}
eat(' eat ');
eat(' sleep ');
eat(' play ');

//functions with multiple parameters
function manggo(one, two) {
    document.write(one + 'is sweeter than' + two + '<br />');
}
manggo(' chocolate ', ' sugar ');
manggo(' strawberry ', ' apple ');
manggo(' pineapple ', ' oranges ');

//the return statement
function addNumbers(a, b)  {
    var c = a + b;
    return c;
}
document.write(addNumbers(10, 5));

//calling function from another function
    function doFirst() {
        document.write(' hey! this is first ');
    }
    function doSecond() {
        document.write('hey! second here');
    }
    function start() {
        doFirst();
        doSecond();
    }
    start();
//if else statement
var show = 10;
var eat = 10;
    if(show != eat) {
        document.write(' Correct, ');
    }else{
        document.write(' wrong, ');
    }