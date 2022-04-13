function steps (n) {
  let str = "'";
  
  for (let i=1; i<=n; i++) {
    for (let j=1; j<=i; j++) {
      if (j <= i) {
        str += '#';
      }
      else {
        str += '';
      }
    }
    console.log(str); 
    str = "'";
  }
}

steps(4);

