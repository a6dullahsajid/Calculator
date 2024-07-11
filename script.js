let calc = " ";
document.addEventListener("keydown",(e)=>{
  console.log(e);
})
document.addEventListener(
  "keydown",
  (event) => {
    // if (event.defaultPrevented) {
    //   return; // Do nothing if the event was already processed
    // }

    switch (event.key) {
      case "1":
        calc += '1';
        disp();
        break;

      case "2":
        calc += '2';
        disp();
        break;
      case "3":
        calc += '3';
        disp();
        break;
      case "4":
        calc += '4';
        disp();
        break;
      case "5":
        calc += '5';
        disp();
        break;
      case "6":
        calc += '6';
        disp();
        break;
      case "7":
        calc += '7';
        disp();
        break;
      case "8":
        calc += '8';
        disp();
        break;
      case "9":
        calc += '9';
        disp();
        break;
      case "+":
        calc += '+';
        console.log(calc);
        disp();
        break;
      case "-":
        calc += '-';
        disp();
        break;
      case "*":
        calc += '*';
        disp();
        break;
      case "/":
        calc += '/';
        disp();
        break;
      case "=":
        result();
        disp();
        break;
      case "Enter":
        result();
        disp();
        break;
      case "Backspace":
        removelast();
        disp();
        break;
      case "c":
        calc = '';
        disp();
        break;
      default:
        return;
    }
  }
);

function disp() {
  document.getElementById("display").innerHTML = `${calc}`;
}
function result() {
  try {
    const ans = eval(calc);
    calc = ans.toString();
  } catch (e) {
    removelast();
    result();
  }
}
function removelast() {
  calc = calc
    .slice(0, calc.length - 1);
}
function percent() {
  let nump = '';
  for (let i = calc.length - 1; i >= 0; i--) {
    if (calc[i] >= '0' && calc[i] <= '9') {
      nump = calc[i] + nump;
    } else {
      break;
    }
  }
  topercof = eval(calc.slice(0, calc.length - nump.length - 1));
  console.log(topercof);
  if (nump.length > 0) {
    let numValue = parseFloat(nump);
    let percentageValue = topercof * (numValue / 100);
    calc = calc.slice(0, calc.length - nump.length) + percentageValue;
  }
}
