function isLeapYear (year) {
  
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)  {
     return console.log('It is a leap year');
  }
  return console.log('This is not a leap year');
}


isLeapYear(2100);