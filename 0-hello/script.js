// Write a JavaScript program to print the current window contents.
function print_current_page()
{
window.print();
}

// program to find the area of a triangle where three sides are 5, 6, 7.
const side1 = 5; 
const side2 = 6; 
const side3 = 7; 
const perimeter = (side1 + side2 + side3) / 2;
const area = Math.sqrt(perimeter * ((perimeter - side1) * (perimeter - side2) * (perimeter - side3)));
console.log(area);

// whether a given year is a leap year in the Gregorian calendar
const is_leapyear = year => new Date(year, 1, 29).getMonth() === 1;
console.log(is_leapyear(2016)); 
console.log(is_leapyear(2000));

//  if 1st January will be a Sunday between 2014 and 2050.
for (let year = 2014; year <= 2050; year++) {
    const d = new Date(year, 0, 1);
    if (d.getDay() === 0) {
        console.log(`1st January is being a Sunday  ${year}`);
    }
}
// Fahrenheit and Centigrade Temperatures:
const cToF = (celsius) => {
  const cTemp = celsius;
  const cToFahr = cTemp * 9 / 5 + 32;
  const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
  console.log(message);
};

const fToC = (fahrenheit) => {
  const fTemp = fahrenheit;
  const fToCel = (fTemp - 32) * 5 / 9;
  const message = `${fTemp}\xB0F is ${fToCel} \xB0C.`;
  console.log(message);
};
cToF(60);
fToC(45);  
