let calc = " ";
// document.addEventListener("keydown",(e)=>{
//   console.log(e);
  
// })
document.addEventListener(
  "keydown",
  (event) => {
    // if (event.defaultPrevented) {
    //   return; // Do nothing if the event was already processed
    // }

    switch (event.key) {
      case "1":
        calc+='1';
        disp();
        break;
        
      case "2":
        calc+='2';
        disp();
        break;
      case "3":
        calc+='3';
        disp();
        break;
      case "4":
        calc+='4';
        disp();
        break;
      case "5":
        calc+='5';
        disp();
        break;
      case "6":
        calc+='6';
        disp();
        break;
      case "7":
        calc+='7';
        disp();
        break;
      case "8":
        calc+='8';
        disp();
        break;
      case "9":
        calc+='9';
        disp();
        break;
      case "+":
        calc+='+';
        console.log(calc);
        disp();
        break;
      case "-":
        calc+='-';
        disp();
        break;
      case "*":
        calc+='*';
        disp();
        break;
      case "/":
        calc+='/';
        disp();
        break;
      case "=":
        result();
        disp();
        break;
      case "Backspace":
        removelast();
        disp();
        break;
      case "c":
        calc='';
        disp();
        break;
      default:
        return;
    }
    // event.preventDefault();
  }
);

      function disp() {
        document.getElementById("display").innerHTML = `${calc}`;
      }
      function result() {
        try {
          const ans = eval(calc);
          document.getElementById("display").innerText = result;
          calc = ans.toString();
        } catch (e) {
          document.getElementById("display").innerText = "Error";
          calc = "";
        }
      }
      function removelast(){
        calc = calc
        .slice(0, calc.length - 1);
      }
      function percent() {
        let nump = '';
        // Loop through the string 'calc' from the end to the beginning
        for (let i = calc.length - 1; i >= 0; i--) {
            // Check if the character is a digit
            if (calc[i] >= '0' && calc[i] <= '9') {
                nump = calc[i] + nump; // Append the digit to 'nump'
            } else {
                break; // Stop the loop if a non-digit character is found
            }
        }
        topercof = eval(calc.slice(0, calc.length - nump.length - 1));
        console.log(topercof);
        // If 'nump' contains digits, convert it to a number and calculate the percentage
        if (nump.length > 0) {
            let numValue = parseFloat(nump);
            let percentageValue =topercof * (numValue / 100);
            calc = calc.slice(0, calc.length - nump.length) + percentageValue;
        }
    }
    
      // function percent() {
      //   nump='';
      //   for (let i = calc.length-1; i <= 0; i--) {
      //     if(calc[i]!=1 ||calc[i]!=2 ||calc[i]!=3 ||calc[i]!=4 ||calc[i]!=5 ||calc[i]!=6 || calc[i]!=7 || calc[i]!=8 || calc[i]!=9){
      //       calc=calc.slice(0,calc.length-1);
            
      //     }
      //     else{
      //       nump+=calc[i];
      //     }
      //   }
      //   nump=nump.slice(nump.length-1,0,1);
      //   nump+='calc'
      // }