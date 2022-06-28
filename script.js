
//-------------fuction declaration------------------------------

// function kar(x = 40, y = 10) {                 //'saved for later use'
//     if (x > 30) {                              // need a function name
//        return x*5;
//     }
//     return y*5;
// }

// var x = kar(30);
// console.log(x);

//-------------

// function foo(x, y, z = 5) {
//      return x + y + z;
// }

// console.log(foo(10,20,30));
// console.log(foo(10,20,));

//-------------function expressions or (anonymous)-----------------


// var kar = function (x = 12, y = 30) {        // expression stored in a variable
//     console.log(x / y );                     // do not need function name
// };

// console.log(kar);
// kar(90, 6);

//--------------

// var xxx = function () {
//     console.log('x');
// };

// xxx()

//-----------iife--------------------------

// iife

// (function (value1, value2 = 5) {

//     console.log(value1 > value2);
    

// })(60);

//---------------

// (function (){
//     console.log('this is iife');
// })()

//value for iife

// (function (value) {
//     console.log(value);
// })('thank you')

//---------------------------

// function printing(){
//     for(var i = 0; i<10; i++) {
//         console.log(i);
//     }
// }

//----------arrow function------------------------

// let age = 5;

// let welcome = (age < 18) ?
// () => console.log('baby') :
// () => console.log('adult');

// welcome();

//--------------

// var tt = (value) => {
//     console.log("this is arrow func");
//     console.log(value);
// };

// tt(12);

//-------------es6---------
                                                //es6
// let y = (a, b) => {              //we don't need the 'function' keyword
//     let result = a + b;          // ,'return' keyword and 'curly faces' 
//     return result;                // using const           
                                                //es5
// }                                 //we need all the above keywords,
// let x = y(5,7);                   // using var
// console.log(x);

//-------------inside regular function-------------

// function person() {
//     this.name = 'karthik' ,
//     this.age = '22' ,
//     this.place = 'vellore' ,
//     this.sayname = function () {
        
//         console.log(this.place);
        

//         function innerfunc() {
//             console.log(this.place); // <= 'this' refer to the global object,
//             console.log(this);       //  so result = 'undefined'
            
//         }

//         innerfunc()
//     }
// }

// let x = new person();
// x.sayname();


//-------------inside arrow function-----------------


// function person() {

//     this.name = 'karthik' ,
//     this.age = '22' ,
//     this.place = 'vellore' ,
//     this.sayName = function () {
        
//         // console.log(this.age);
        

//         let innerFunc = () => {
//             console.log(this.place);          // arrow function does allow inside
//             console.log(this.name);
//         }

//         innerFunc()
//     }
// }

// const x = new person();
// x.sayName();


//-----------------------------------------------------------

// let person = {

//         fistName:'karthik' ,
//         age: '22' ,
//         place: 'vellore' ,
//            sayName: () => {
//             console.log(this.age);    // result = undefined
//         }
//     }
    
//     person.sayName();


//---------------function arguments-------------------------


// x = findmax(1, 123, 500, 115, 44, 88);

// function findmax() {
//     let max = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(x);



//------------square of a number------------

// function square(a,b){
//     console.log(a**b);
// }

// var x = square(3,2)


//----------------------

// function square(x = 5, y = 4) {
//     if(x>=10) {
//         return y**x
//     }  else{
//         return x**y
//     }
   
// }

// var x =square(5,4)
// console.log(x);

//---------------swapping two numbers---------------------



// var x = 6;
// var y = 9;

//      [x,y] = [y,x]

// console.log('x:',x,'y:',y);



//-------------swapping three numbers---------------------


// var x = 20;
// var y = 30;
// var z = 40;

// [x,y,z] =[z,y,x]

// console.log('x:',x, 'y:',y, 'z:',z);


//-----------------


// var swap = function (x = 12, y = 30, z =100) {
//     console.log([x,y,z] = [z,y,x]);
// };

// console.log(swap);
// swap();


//-----------------------------------------------

// function swap(a = 100, b = 200, c = 300,) {
//     return([a,b,c] = [c,b,a]);
// }

// var x = swap()
// console.log(x);


//------------------class------------------------------



// function dog(name,sound) {
//     this.name = name;
//     this.sound = sound;
        
//     }
    
// var d = new dog("fido", "bark");
// console.log(d);
// console.log(d.name);
// console.log(d.sound);

//-----------------es5--------


// function dog(name,sound) {
//     this.name = name;
//     this.sound = sound;

//     this.getsound = function () {
//         console.log(this.sound);
//     };

//     dog.prototype.getname = function () {
//         console.log(this.name);
//      };
        
//  }

 
//  var d = new dog("fido", "bark");
// console.log(d);
// d.getname();
// d.getsound();

//-------------class-es6-------------------


// class dog {
//     constructor(name, sound) {
//         this.name = name;                  //this is template
//         this.sound= sound;
//     }

//     getName() {
//         console.log(this.name);
//     }
    
//     getSound() {
//         console.log(this.sound);
//     }
// }

// var dd = new dog ('puppy', 'bark');     //creating instances
// dd.getName();
// dd.getSound();


//--------------getter & setter method----------------------------- 

// class dog {
//     getName() {
//         console.log(this.name);        //getter
//     }
//     setName(name) {
//         this.name = name;              //setter
//     }
//     getSound() {
//         console.log(this.sound);
//     }
//     setSound(sound) {
//         this.sound = sound;
//     }
// }

// var dd = new dog();
// dd.setName("puppy");      //only this order to write code to 
// dd.getName();             //access in this method otherwise
// dd.setSound("bark");      //its displayed "undefined"
// dd.getSound();


//--------------------------------------------


// class Animal {
//     constructor(legs, tail, gender) {          //this is parent
//         this.legs = legs;
//         this.tail = tail;
//         this.gender = gender;
//    }
 
//        getLegs() {
//         console.log(this.legs);
//     }
// }
// class Dog extends Animal {
//     constructor(name, sound) {                //this is child
//         super(4, true, "male");
//         this.name = name;
//         this.sound = sound;
//     }
//    getData() {
//         console.log(this.name, this.sound, this.tail, this.gender);
//         this.getLegs();
//     }   
// }
// var dd = new Dog("doggy", "bark");

// dd.getData();


//------------simple calculation---------------------



// class bef {
//     constructor(a,b) {
//         this.a = a;
//         this.b = b;
//     }
// }


// class aft extends bef {
//     constructor(a,b,c,d) {
//         super(a,b);
//         this.c = c;
//         this.d = d;
//     }

//     getmulti() {
//         console.log((this.a * this.b) + (this.c * this.d));
//     }
// }

// let dd = new aft(5,6,7,8);
// dd.getmulti();



//-------------------------------


// class Animal {
//                                              //parent
//        setTail(tail) {
//         this.tail = tail
//     }
// }
// class Dog extends Animal {
//     constructor(name, sound, tail) {                //this is child
//         super();
//         super.setTail(tail);
//         this.name = name;
//         this.sound = sound;
//     }
//    getData() {
//         console.log(this.name, this.sound, this.tail);
        
//     }   
// }
// var dd = new Dog("doggy", "bark", "true");

// dd.getData();


//-----------------------------------







