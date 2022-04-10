function languages (language) {

  switch (language) {
    case 'mandarin':
      console.log('Most number of native speakers!');
      break;
    
    case 'spanish':
      console.log('2nd place in number of native speakers');
      break;

    case 'english':
      console.log('3rd place');
      break;

    case 'arabic':
        console.log('5th most speaken language');
        break;
      
    default:
      console.log('Not in the top 5');
  }

}

let language = 'arabic' ;
languages(language);