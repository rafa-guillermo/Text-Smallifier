const chars = ["ᴬ", "ᴮ", "ᶜ", "ᴰ", "ᴱ", "ᶠ", "ᴳ", "ᴴ", "ᴵ", "ᴶ", "ᴷ", "ᴸ", "ᴹ", "ᴺ", "ᴼ", "ᴾ", "ᵠ", "ᴿ", "ˢ", "ᵀ", "ᵁ", "ⱽ", "ᵂ", "ˣ", "ʸ", "ᶻ", "ᵃ", "ᵇ", "ᶜ", "ᵈ", "ᵉ", "ᶠ", "ᵍ", "ʰ", "ᶦ", "ʲ", "ᵏ", "ˡ", "ᵐ", "ⁿ", "ᵒ", "ᵖ", "ᵠ", "ʳ", "ˢ", "ᵗ", "ᵘ", "ᵛ", "ʷ", "ˣ", "ʸ", "ᶻ", "⁰", "¹", "²", "³", "⁴", "⁵", "⁶", "⁷", "⁸", "⁹"];

var input = document.getElementById('input');

input.addEventListener('input', function() {
  var str = this.value;

  if (str == "") {
    document.getElementById("output").value = "";
    return;
  }

  let conv = "";
  str.split("").forEach(function(char) {
    let code = char.charCodeAt();

    if (code > 64 && code < 91) {
      conv = conv + chars[code - 65];
   }
    else if (code > 96 && code < 123) {
      conv = conv + chars[code - 71];
    }
    else if (code > 47 && code < 58) {
      conv = conv + chars[code + 4];
    }
    else if (code == 32) {
      conv = conv + " ";
    }
    else if (code == 38) {
      conv = conv + "ᵎ";
    }
    else if (code == 40) {
      conv = conv + "⁽";
    }
    else if (code == 41) {
      conv = conv + "⁾";
    }
    else if (code == 43) {
      conv = conv + "⁺";
    }
    else if (code == 45) {
      conv = conv + "⁻";
    }
    else if (code == 46) {
      conv = conv + "·";
    }
    else if (code == 61) {
      conv = conv + "⁼";
    }
    else if (code == 63) {
      conv = conv + "ˀ";
    }
    else {
      conv = conv + char;
    }

    document.getElementById("output").value = conv;
  });
});
