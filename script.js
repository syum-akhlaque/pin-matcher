let generatedPinNumber , count = 3 ;

function createRandomPin(){
    const randomPin = Math.floor(1000 + Math.random() * 9000);
    generatedPinNumber = document.getElementById("generatedPinNumber").value= randomPin;
    document.getElementById("inputPinNumber").value= "";
    count = 3;
    document.getElementById('actionLeft').style.display = 'none';
}

function enterPinHandler(num){
    let currentPinCode = document.getElementById("inputPinNumber");
    const inputPinNumber = currentPinCode.value + num;
    currentPinCode.value = inputPinNumber ;
}

function submitBtnHandler(){
    let getInputNumber = document.getElementById("inputPinNumber");
    let inputNumber = parseInt(getInputNumber.value);
    if ( count >= 0) { 
        if( inputNumber == generatedPinNumber ){
            document.getElementById('match').style.display = 'block'; 
            document.getElementById('wrondInput').style.display = 'none'; 
            document.getElementById('actionLeft').style.display = 'none';        
        }
        else {
            document.getElementById('wrondInput').style.display = 'block'; 
            document.getElementById('match').style.display = 'none'; 
            getInputNumber.value = "";
            document.getElementById('actionLeft').style.display = 'block';
                if (count >= 1){
                document.getElementById('actionLeft').innerText = count + 'try left'; 
                }
                else{
                    document.getElementById("actionLeft").innerText = 'Please reload this page & try again'; 
                }
            count = count -1  ; 
        }
    }    
}

 function deleteInputNumber(){
    let inputNumber = document.getElementById("inputPinNumber");
    let str = inputNumber.value;
    //let newStr = str.substring(0, str.length-1);
    let newStr = str.slice(0, -1);
    inputNumber.value = newStr; 
 }

function clearInputNumber(){
    document.getElementById("inputPinNumber").value = "";
}
