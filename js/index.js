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
    let alternative1 = "";
    let alternative2 = "";
  
    // Logik for at vælge resultat og alternativer baseret på svar
    if (taste === "bitter" && type === "IPA" && strength === "stærk") {
      resultText = "Mikkeller – IPA";
      alternative1 = "To Øl – Hazy IPA";
      alternative2 = "Brewdog – Punk IPA";
    } else if (taste === "sur" && type === "sour") {
      resultText = "Ebeltoft Gårdbryggeri – Wildflower Sour";
      alternative1 = "Mikkeller – Spontanfrugt";
      alternative2 = "To Øl – Hazy IPA";
    } else if (taste === "bitter" && type === "IPA" && strength === "medium") {
      resultText = "To Øl – Hazy IPA";
      alternative1 = "Mikkeller – IPA";
      alternative2 = "Ølsnedkeren – Session IPA";
    } else if (taste === "sød" && color === "mørk") {
      resultText = "Thisted Bryghus – Limfjordsporter";
      alternative1 = "Krenkerup – Dunkel";
      alternative2 = "Amager Bryghus – Populus IPA";
    } else if (price === "dyr" && type === "IPA") {
      resultText = "Brewdog – Punk IPA";
      alternative1 = "Mikkeller – IPA";
      alternative2 = "To Øl – Hazy IPA";
    } else if (strength === "let" && type === "IPA") {
      resultText = "Ølsnedkeren – Session IPA";
      alternative1 = "Amager Bryghus – Populus IPA";
      alternative2 = "Brewdog – Punk IPA";
    } else if (taste === "sur" && color === "frugtig") {
      resultText = "Mikkeller – Spontanfrugt";
      alternative1 = "Ebeltoft Gårdbryggeri – Wildflower Sour";
      alternative2 = "To Øl – Hazy IPA";
    } else if (color === "mørk" && type === "lager") {
      resultText = "Krenkerup – Dunkel";
      alternative1 = "Thisted Bryghus – Limfjordsporter";
      alternative2 = "Svaneke Bryghus – Pale Ale";
    } else if (type === "Pale Ale") {
      resultText = "Svaneke Bryghus – Pale Ale";
      alternative1 = "Amager Bryghus – Populus IPA";
      alternative2 = "To Øl – Hazy IPA";
    } else {
      resultText = "Amager Bryghus – Populus IPA";
      alternative1 = "Mikkeller – IPA";
      alternative2 = "Brewdog – Punk IPA";
    }
  
    // Gem resultatet i lokal storage
    localStorage.setItem('mainResult', resultText);
    localStorage.setItem('alt1', alternative1);
    localStorage.setItem('alt2', alternative2);
  
    // Naviger til resultat side
    window.location.href = "result.html";
  }
  
