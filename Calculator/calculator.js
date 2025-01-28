function log(obj){
    console.log(obj);
}


let btns = document.querySelectorAll("div");
let showZone = document.getElementById("showZone");

let op = "";
let num = 0;
let strNum = "";
let operator = "+";
let error = "";
let preResult = "";

for (let btn of btns){
    btn.onclick = () => {
        let val = btn.innerHTML;
        log(val)
        if (preResult != "" && isNaN(val)){
            op = preResult;
        }
        
        if (op.length === 0 && !isNaN(val)) {
            // showZone.style.cssText = "font-size: 39px;"
            op += val;
            strNum += val;
            showZone.innerHTML = op;
            log(op)
            // log("1 : "+val)
        }
        else if (op.length != 0)  {
            if (!isNaN(val)){
                op += val;
                strNum += val;
                showZone.innerHTML = op;
                // log("2 : "+val)
            }
            else {
                // log("3 : "+val)
                    if (operator === "+"){
                        num += Number(strNum);
                        strNum = "";
                        operator = val;
                        op += val;
                        showZone.innerHTML = op;
                    }
                    else if (operator === "-"){
                        num -= Number(strNum);
                        strNum = "";
                        operator = val;
                        op += val;
                        showZone.innerHTML = op;
                    }
                    else if (operator === "X"){
                        num *= Number(strNum);
                        strNum = "";
                        operator = val;
                        op += val;
                        showZone.innerHTML = op;
                    }
                    else if (operator === "/"){
                        if (Number(strNum) === 0){
                            error = "Error";
                            strNum = "";
                            operator = "+";
                            op = "";
                            num = 0;
                        }
                        else {
                            num /= Number(strNum);
                            strNum = "";
                            operator = val;
                            op += val;
                            showZone.innerHTML = op;
                        }
                        
                    }
                   if (val === "="){
                    if (error === ""){
                        op = ""+num;
                        showZone.innerHTML = op;
                        preResult = op;
                        strNum = "";
                        operator = "+";
                        op = "";
                        num = 0;
                    }
                   }
                }
            }
        
        
        log(op)
        }
    }



let o = "/";

if (o === "/"){
    log("It's work")
}
log(isNaN("06"))
log(Number("03"))