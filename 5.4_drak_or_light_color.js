function whichColor (stringColor) {

 stringColor = stringColor.toLowerCase() ;

  switch (stringColor) {
    case 'yellow':
    case 'pink':
    case 'orange':
      console.log('light color');
      break;

    case 'blue':
    case 'purple':
    case 'brown':
      console.log('dark color');
      break;

    default:
      console.log('Unknown color');

    }

  }


whichColor('YELLoW');
whichColor('green');
whichColor('purple');
whichColor('puRPle');