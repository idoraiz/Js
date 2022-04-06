function sevenBoom (n) {
  const arr = [];
  arr[0]=1;

  for (let i=1; i<n; i++) {
    arr[i] = i+1;
  }

  for(let j=0; j<arr.length; j++) {

    if (arr[j] % 7 === 0 && arr[j].toString().includes('7')) {
      arr[j] = 'BOOM-BOOM';
    }
    else if (arr[j] % 7 === 0) {
      arr[j] = 'BOOM';
    }
  }  

  return arr;
}

const arr = sevenBoom(80);
console.log(arr);






