let serial = 0;

// get input value

function getInputValue(input1Id, input2Id) {
  const input1Field = document.getElementById(input1Id);
  const input2Field = document.getElementById(input2Id);

  const input1 = parseFloat(input1Field.value);
  const input2 = parseFloat(input2Field.value);

  input1Field.value = "";
  input2Field.value = "";

  if (isNaN(input1) || isNaN(input2) || input1 < 0 || input2 < 0) {
    alert("Input a valid number");
    // process.abort();
  } else {
    return input1 * input2;
  }
}

// set the area

function setArea(areaName, areaValue) {
  serial++;
  const areaList = document.getElementById("area-list");

  const div = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const btn = document.createElement("button");

  const finalArea = areaValue.toFixed(2);

  p1.innerHTML = serial + ". " + areaName;
  p2.innerHTML = finalArea + "cm<sup>2</sup> ";
  btn.innerHTML = "Convert to m<sup>2</sup>";

  btn.classList.add("bg-[#1090D8]", "rounded-md", "p-2");
  div.classList.add("flex", "mb-4", "gap-1", "justify-between", "items-center");

  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(btn);

  areaList.appendChild(div);
}

// Triangle button
document.getElementById("triangle-btn").addEventListener("click", function () {
  const multiplication = getInputValue("triangle-base", "triangle-height");

  if (multiplication == undefined) {
  } else {
    setArea("Triangle", multiplication * 0.5);
  }
});

// Rectangle button
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const multiplication = getInputValue("rectangle-width", "rectangle-length");
  if (multiplication == undefined) {
  } else {
    setArea("Rectangle", multiplication);
  }
});

// Parallelogram button
document
  .getElementById("parellelogram-btn")
  .addEventListener("click", function () {
    const multiplication = getInputValue(
      "parellelogram-base",
      "parellelogram-height"
    );
    if (multiplication == undefined) {
    } else {
      setArea("Parallelogram", multiplication);
    }
  });

// rhombus button
document.getElementById("rhombus-btn").addEventListener("click", function () {
  const multiplication = getInputValue("rhombus-d1", "rhombus-d2");
  const totalArea = 0.5 * multiplication;

  if (multiplication == undefined) {
  } else {
    setArea("Rhombus", totalArea);
  }
});

// pentagon button
document.getElementById("pentagon-btn").addEventListener("click", function () {
  const multiplication = getInputValue("pentagon-p", "pentagon-b");
  const totalArea = 0.5 * multiplication;

  if (multiplication == undefined) {
  } else {
    setArea("Pentagon", totalArea);
  }
});

// ellipse button
document.getElementById("ellipse-btn").addEventListener("click", function () {
  const multiplication = getInputValue("ellipse-a", "ellipse-b");
  const totalArea = 3.14 * multiplication;
  if (multiplication == undefined) {
  } else {
    setArea("Ellipse", totalArea);
  }
});

// go to my blog page

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "my-blog.html";
});
