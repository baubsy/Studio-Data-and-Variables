// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-08";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMasskg = 80.7;
let crewMassKg = astronautCount * averageAstronautMasskg;
let fuelMassKg = 760.000
let shuttleMassKg = 7482.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = 100;
let weatherStatus = "clear";

let line = "-------------------------------------";


// Write code to generate the LC04 report here:

console.log(line);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(line);
console.log("Date: " + date);
console.log("Time: " + time);

console.log("\n" + line);
console.log("> ASTRONAUT INFO");
console.log(line);
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus);

console.log("\n" + line);
console.log("> FUEL DATA");
console.log(line);
console.log("* Fuel temp celsius: " + fuelTempCelsius);
console.log("* Fuel Level: " + fuelLevel + "%");

console.log("\n" + line);
console.log("> MASS DATA");
console.log(line);
console.log("* Crew mass: " + crewMassKg + " kg");
console.log("* Fuel mass: " + fuelMassKg + " kg");
console.log("* Shuttle mass: " + shuttleMassKg + " kg");
console.log("* Total mass: " + totalMassKg + " kg");

console.log("\n" + line);
console.log("> FLIGHT PLAN");
console.log(line);
console.log("* weather: " + weatherStatus);

console.log("\n" + line);
console.log("> OVERALL STATUS");
console.log(line);
console.log("* Clear for takeoff: YES");


// When done, have your TA check your code.
/*-------------------------------------

* Total mass: 835407.21 kg

-------------------------------------
> FLIGHT PLAN
-------------------------------------
* weather: clear

-------------------------------------
> OVERALL STATUS
-------------------------------------
* Clear for takeoff: YES
*/



// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.