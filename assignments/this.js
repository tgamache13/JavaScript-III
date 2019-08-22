/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/global binding - when in the global scope 'this' refers to the entire window.
* 2. Implicit Binding - when 'this' is used in implicit binding, it refers to what is to the left of the dot.
* 3. New Binding - 'this' refers to the object constructed by a constructor function.
* 4. Explicit Binding - 'this' is explicitly defined when call, bind or apply methods are used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
'use strict';



console.log(this);

// Principle 2

// code example for Implicit Binding
const myFamily = {
    oldestDaughter: 'Sierra',
    age: 26,
    intro: function(){
        return `My oldest daughter's name is ${this.oldestDaughter} and she is ${this.age} years old.`
    }
};
 console.log(myFamily.intro());

// Principle 3

// code example for New Binding
function myJob(job, company){
    this.company = company;
    this.job = job;
    this.phrase = function(){
        console.log(`I work as a ${this.job} at ${this.company}.`);
    }
};
 const nightAudit = new myJob('Night Auditor', 'Hampton Inn & Suites');
 const gsr = new myJob('GSR', 'Hampton Inn & Suites');

 nightAudit.phrase();
 gsr.phrase();


// Principle 4

// code example for Explicit Binding
function song(){
    console.log(this.name, this.band)
}
 let favSong = {
     name: 'Voodoo',
     band: 'Godsmack'
 }

 song.call(favSong);