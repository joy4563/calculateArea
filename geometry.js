// get input value

function getInputValue(input1Id, input2Id) {
  const input1Field = document.getElementById(input1Id);
  const input2Field = document.getElementById(input2Id);

  const input1 = parseFloat(input1Field.value);
  const input2 = parseFloat(input2Field.value);

  input1Field.value = "";
  input2Field.value = "";

  if (isNaN(input1) || isNaN(input2)) {
    alert("Input a valid number");
    // process.abort();
  } else {
    return input1 * input2;
  }
}

// Triangle button
document.getElementById("triangle-btn").addEventListener("click", function () {
  const multiplication = getInputValue("triangle-base", "triangle-height");

  if (multiplication == undefined) {
  } else {
    // add to area container
    const areaContainer = document.getElementById("area-container");
    const p = document.createElement("p");
    p.innerText = multiplication;
    areaContainer.appendChild(p);
  }
});

// Rectangle button
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const multiplication = getInputValue("rectangle-width", "rectangle-length");

  console.log(multiplication);
});

// Parallelogram button
document
  .getElementById("parellelogram-btn")
  .addEventListener("click", function () {
    const multiplication = getInputValue(
      "parellelogram-base",
      "parellelogram-height"
    );

    console.log(multiplication);
  });

// rhombus button
document.getElementById("rhombus-btn").addEventListener("click", function () {
    const multiplication = getInputValue("rhombus-d1", "rhombus-d2");
    const totalArea = .5 * multiplication;

  console.log(totalArea);
});

// pentagon button
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const multiplication = getInputValue("pentagon-p", "pentagon-b");
  const totalArea = 0.5 * multiplication;

  console.log(totalArea);
});

// ellipse button
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const multiplication = getInputValue("ellipse-a", "ellipse-b");
  const totalArea = 3.14 * multiplication;

  console.log(totalArea.toFixed(2));
});