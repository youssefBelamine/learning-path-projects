function log(obj){
    console.log(obj);
}


let btns = document.querySelectorAll("div");
let showZone = document.getElementById("showZone");

let op = "";
let num = 0;
let operator = "+";
let a = [];
let error = "";

let previosOP = 0;

for (let btn of btns){
    btn.onclick = () => {
        let val = btn.innerHTML;

        if (!Boolean(op[0]) && !isNaN(val) ) {
            // showZone.style.cssText = "font-size: 39px;"
            op += val;
            showZone.innerHTML = op;
            log(op)
            log("1 : "+val)
        }
        else if (Boolean(op[0]))  {
            if (!isNaN(val)){
                op += val;
                showZone.innerHTML = op;
                log("2 : "+val)
            }
            else {
                a.push(Number(op))
                a.push(val)
                log("3 : "+val)
                op = "";
                if (val === "="){
                    for (let ele of a){
                        if (!isNaN(ele)){
                            if (operator === "+"){
                                num += ele;
                            }
                            else if (operator === "-"){
                                num -= ele;
                            }
                            else if (operator === "X"){
                                num *= ele;
                            }
                            else if (operator === "/"){
                                if (ele === 0){
                                    error = "Error : Division By Zero";
                                }
                                else {
                                    num /= ele;
                                }
                                
                            }
                        }
                        else{
                            operator = ele;
                        }
                    }
                    log(a)
                    op = ""+num;
                    a = [];
                    if (error === ""){
                        showZone.innerHTML = ""+num;
                    }
                    else {
                        showZone.style.cssText = "font-size: 39px;"
                        showZone.innerHTML = error;
                        error = "";
                        op = "";
                        operator = "+";
                        a = [];
                    }
                }
            }
        }
log(a)
log(op)
    }
}


let o = "/";

if (o === "/"){
    log("It's work")
}
log(isNaN("06"))
log(Number("03"))