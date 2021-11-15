
function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
for (let checkYear = 2020; checkYear <= 2021; checkYear++){
  if (leapYear(checkYear)) {
    console.log(checkYear)
    console.log(checkYear + '年はうるう年です');
  } else {
    console.log(checkYear)
    console.log(checkYear + '年はうるう年ではありません');
  }
}