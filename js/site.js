// get values from the page
//controller function
function getValues() {
  //get values from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    //we call generateNumbers
    let numbers = generateNums(startValue, endValue);
    //we call displayNumbers
    displayNums(numbers);
  } else {
    alert("You must enter a number");
  }
}

// generate numbers from startvalue to the endvalue
//logic function
function generateNums(startValue, endValue) {
  let numbers = [];

  for (let index = startValue; index <= endValue; index++) {
    numbers.push(index);
  }

  return numbers;
}

// display the numbers, mark even numbers bold
// display or view function
function displayNums(numbers) {
  let templateRows = "";
  for (let index = 0; index < numbers.length; index++) {
    let className = "even";
    let number = numbers[index];
    if (number % 2 == 0) {
      className = "even";
    } else {
      className = "odd";
    }
    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
  }

  document.getElementById("results").innerHTML = templateRows;
}
