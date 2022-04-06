function tellFortune (jobTitle, loaction, partnerName, numberOfChildren) {
  let str = `You will be a ${jobTitle} in ${loaction} and married to ${partnerName} with ${numberOfChildren} ` ;
  return str;
}

let fortune = tellFortune('Programmer', 'Haifa', 'Valery', 3);
console.log(fortune);