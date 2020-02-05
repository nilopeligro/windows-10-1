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
//global & local function
var food = " rice ";

function grow() {
    
    document.write(food);
}
grow();
document.write(food);

//math operators
var dog = 5 + 10;
document.write(dog);

var cat = 9;
cat++;
document.write(cat);

var horse = 10;
horse--;
document.write(horse);

var mouse = 20;
mouse = mouse + 30;

document.write(mouse);

//assignment  operators
var peligro = 10;
peligro *= 3;

document.write(peligro);

var nilo = 25;
nilo -= 5;
nilo *= 2;
nilo /= 2;

document.write(nilo);
// if statement 
var pine = 90;
var apple = 90;

if(pine == apple) {
    document.write('yes, it is wright');
}
//if / else statement
var show = 10;
var eat = 10;
    if(show != eat) {
        document.write(' Correct, ');
    }else{
        document.write(' wrong, ');
    }
// nesting
var firstName = 'Nilo';
var lastName = 'Peligro';

if(firstName == 'Nilo') {
    if(lastName == 'Peligro') {
        document.write('Welcome Nilo Peligro!!');
    }else{
        document.write('Who are you?');
    }
}
//complex conditions
var name = 'Nilo';
var surname = 'Peligro';

if((name=='Nilo')&&(surname=='Peligro')) {
    document.write('You did it right!');
}else{ 
    document.write('What are you doing?');
}
// or
if((name=='Nilo')||(surname=='Ampo')) {
    document.write('wooh...good!');
}
// switch
var hello = 'They';

switch(hello) {
    case 'You':
        document.write('hey me and you!');
        break;
    case 'Me':
        document.write('hey you and me!');
        break;
    default:
        document.write('You are having default.');
}
//for loop
for(y=0;y<10;y++) {
    document.write('I am loving programming <br />');
}
//while loop
var y = 1;
while(y<10) {
    document.write(y + "Do you want some cockies? <br />");
    y++;
}
//do while
var x = 5;
do{
    document.write(x + 'hey! <br />');
    x++;
}while(x<=20);

//creating my own objects
function person(name, age) {
    this.name = name;
    this.age = age;
}
var nilo = new person(' Nilo Peligro <br/> ', 28);
var adrea = new person(' Andrea Corr <br /> ', 40);
const haley = new person(' Haley Williams <br /> ', 39);

document.write(nilo.name);
document.write(adrea.name);
document.write(adrea.age);
document.write(haley.name);

// object initializers
nilo = {name:' Nilo Peligro ', age:28};
andrea = {name:' Andrea Corr ', age:40};

document.write(nilo.name + ' loves ' + andrea.name + ' despite her age ' + andrea.age);

//adding methods to my object
function people(name, age) {
    this.name = name;
    this.age = age;
    this.yearsUntilRetire = yearsLeft;
}
function yearsLeft() {
    var numYears = 65 - this.age;
    return numYears;
}
var nilo = new people('Nilo Peligro<br />', 28);

document.write(nilo.yearsUntilRetire());

// arrays
var people = new Array('Nilo', 'Andrea', 'Haley', 'Anne')

document.write(people[1]);
