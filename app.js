const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const copyBtn = document.getElementById("copy-btn");

encryptBtn.addEventListener("click", () => {
  const input = inputText.value.toLowerCase();
  let output = "";

  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "e":
        output += "enter";
        break;
      case "i":
        output += "imes";
        break;
      case "a":
        output += "ai";
        break;
      case "o":
        output += "ober";
        break;
      case "u":
        output += "ufat";
        break;
      default:
        output += input[i];
    }
  }

  outputText.value = output;
});

decryptBtn.addEventListener("click", () => {
  const input = inputText.value.toLowerCase();
  let output = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "e" && input.slice(i, i + 5) === "enter") {
      output += "e";
      i += 4;
    } else if (input[i] === "i" && input.slice(i, i + 4) === "imes") {
      output += "i";
      i += 3;
    } else if (input[i] === "a" && input.slice(i, i + 2) === "ai") {
      output += "a";
      i += 1;
    } else if (input[i] === "o" && input.slice(i, i + 4) === "ober") {
      output += "o";
      i += 3;
    } else if (input[i] === "u" && input.slice(i, i + 4) === "ufat") {
      output += "u";
      i += 3;
    } else {
      output += input[i];
    }
  }

  outputText.value = output;
});

copyBtn.addEventListener("click", () => {
  outputText.select();
  document.execCommand("copy");
});
