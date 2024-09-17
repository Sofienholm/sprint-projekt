function startQuiz() {
    console.log('Start Quiz clicked');
    let landingElement = document.getElementById("landing");
    let questionElement = document.getElementById("question1");
    
    if (landingElement) {
      console.log('Landing element found');
      landingElement.classList.remove("active");
      
      // Completely hide the landing page
      landingElement.style.display = 'none';
    }
    
    if (questionElement) {
      console.log('Question element found');
      questionElement.classList.add("active");
    }
}
let taste, type, strength, color, price;

function nextQuestion(current) {
  // Hent og gem brugerens valg
  if (current === 1) {
    taste = document.querySelector('input[name="taste"]:checked').value;
  } else if (current === 2) {
    type = document.querySelector('input[name="type"]:checked').value;
  } else if (current === 3) {
    strength = document.querySelector('input[name="strength"]:checked').value;
  } else if (current === 4) {
    color = document.querySelector('input[name="color"]:checked').value;
  } else if (current === 5) {
    price = document.querySelector('input[name="price"]:checked').value;
  }

  // Skift til næste spørgsmål
  document.getElementById("question" + current).classList.remove("active");
  let next = current + 1;
  document.getElementById("question" + next).classList.add("active");
}

function getResult() {
  let resultText = "";

  // Tilføj betingelser for alle 10 øl
  if (taste === "bitter" && type === "IPA" && strength === "stærk") {
    resultText = "Vi anbefaler Mikkeller – IPA!";
  } else if (taste === "sur" && type === "sour") {
    resultText = "Vi anbefaler Ebeltoft Gårdbryggeri – Wildflower Sour!";
  } else if (taste === "bitter" && type === "IPA" && strength === "medium") {
    resultText = "Vi anbefaler To Øl – Hazy IPA!";
  } else if (taste === "sød" && color === "mørk") {
    resultText = "Vi anbefaler Thisted Bryghus – Limfjordsporter!";
  } else if (price === "dyr" && type === "IPA") {
    resultText = "Vi anbefaler Brewdog – Punk IPA!";
  } else if (strength === "let" && type === "IPA") {
    resultText = "Vi anbefaler Ølsnedkeren – Session IPA!";
  } else if (taste === "sur" && color === "frugtig") {
    resultText = "Vi anbefaler Mikkeller – Spontanfrugt!";
  } else if (color === "mørk" && type === "lager") {
    resultText = "Vi anbefaler Krenkerup – Dunkel!";
  } else if (type === "Pale Ale") {
    resultText = "Vi anbefaler Svaneke Bryghus – Pale Ale!";
  } else {
    resultText = "Vi anbefaler Amager Bryghus – Populus IPA!";
  }

  // Vis resultatet
  document.getElementById("result").innerHTML = resultText;
}
