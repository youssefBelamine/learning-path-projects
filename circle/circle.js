 //  console.log(rangeValue)   console.log(typeof rangeValue)

function showValue() {
    let rangeValue = document.getElementById('range').value;
    document.getElementById('rangeValue').innerHTML = rangeValue;
    return rangeValue
}


function enlargeCircle() {
    let scaleValue = +showValue()/100;
    const transformValue = 'scale('+scaleValue+','+scaleValue+')'
    document.getElementById('circle').style.transform = transformValue;
}