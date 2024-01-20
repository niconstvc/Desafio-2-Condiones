document.addEventListener("click", (e) => {

    if (e.target.id == "sticker-logo") {
        const borderImg = document.getElementById("sticker-logo");
  
        if (borderImg.style.border == "2px solid red") {
            borderImg.style.border = "none";
        } else {
            borderImg.style.border = "2px solid red";
        }
    }
  
    if (e.target.id == "btn-verificar") {
        const num1 = document.querySelector("#card-1");
        const num2 = document.querySelector("#card-2");
        const num3 = document.querySelector("#card-3");
  
        if (validarInput(num1) && validarInput(num2) && validarInput(num3)) {
            const suma = Number(num1.value) + Number(num2.value) + Number(num3.value);
  
            if (suma > 10) {
                document.querySelector("#txt-verificar").innerHTML = "Llevas demasiados stickers!";
            } else {
                document.querySelector("#txt-verificar").innerHTML = `Llevas ${suma} stickers.`;
            }
        } else {
            document.querySelector("#txt-verificar").innerHTML = "";
        }
    }
  
    if (e.target.id == "btn-ingresar") {
        const digito0 = document.getElementById("digito-0").value;
        const digito1 = document.getElementById("digito-1").value;
        const digito2 = document.getElementById("digito-2").value;
        const password = Number(digito0 + digito1 + digito2);
  
        const mensaje = document.getElementById("txt-password");
        password === 911
            ? (mensaje.innerHTML = "Password 1 correcto")
            : password === 714
            ? (mensaje.innerHTML = "Password 2 correcto")
            : (mensaje.innerHTML = "Password Incorrecto!");
    }
  });
  
  function validarInput(inputNum) {
    let valor = parseFloat(inputNum.value);
  
    if (Number.isInteger(valor) && valor >= 0) {
        inputNum.style.border = "1px solid #333";
        inputNum.style.animation = "";
        inputNum.placeholder = "";
        return true;
    } else {
        inputNum.style.border = "1px solid red";
        inputNum.style.animation = "shake-horizontal 0.8s ease-out";
        inputNum.value = "";
        inputNum.placeholder = "Numero no valido";
        return false;
    }
  }