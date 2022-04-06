const pi = Math.PI;

function calcCircleArea (radius) {
  let area = radius**2 * pi ;
  return area;
}
let r = prompt("Enter radius: ");
let areaCalc = calcCircleArea(r);

console.log(areaCalc);

