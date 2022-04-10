function passValid1 (password) {
  if (password.length > 7 ) {
      console.log('Strong');
  }
  
  return 'Weak';
}

function passValid2 (password) {

   return (password.length > 7 ? console.log('Strong') : console.log('Weak'));
}


function passValid3 (password) {
  if (password.length > 7 && typeof password === 'string') {
    console.log('Strong');
  }
  return 'Weak';
}

function isUpperCase(str) {
  for(let i=0; i<str.length; i++) {
  if ((str[i] >= 'A') && (str[i] <= 'Z')) {
    return true;
    }
  else {
    i++;
    }
  }
}

function advancedPassValid (password) {


  return (password.length > 7 && isUpperCase ? 'Very Strong' : password.length > 7 ? 'Strong' : 'Weak'); 
}

console.log(advancedPassValid('abcdefGhijk'));
console.log(advancedPassValid('1234'));