function celFah (value){
    return (value*(9/5))+32
}
function celKel (value){
    return value + 273.15
}
function fahCel (value){
    return (value-32)*(5/9)
}
function fahKel (value){
    return celKel(fahCel(value))
}
function kelCel (value){
    return value - 273.15
}
function kelFah (value){
    return celFah(kelCel(value))
}
function evaluateFunction (value,to,from){
    if (to=='Celsius' && from=='Fahrenheit'){
        return celFah(value)
    } else if (to=='Celsius' && from=='Kelvin'){
        return celKel(value)
    } else if (to=='Fahrenheit' && from=='Celsius'){
        return fahCel(value)
    } else if (to=='Fahrenheit' && from=='Kelvin'){
        return fahKel(value)
    } else if (to=='Kelvin' && from=='Celsius'){
        return kelCel(value)
    } else if (to=='Kelvin' && from=='Fahrenheit'){
        return kelFah(value)
    } else {
        return value
    }

}

function updateL(leftValue,leftUnit,rightUnit,model){
    const newRightValue = evaluateFunction (leftValue,leftUnit,rightUnit)
    return {
        ...model,
        side : 'left',
        leftValue: leftValue,
        leftUnit: leftUnit,
        rightValue: newRightValue,
        rightUnit: rightUnit
    }
}

function updateR(rightValue,rightUnit,leftUnit,model){
    const newLeftValue = evaluateFunction (rightValue,rightUnit,leftUnit)
    return {
        ...model,
        side : 'right',
        leftValue: newLeftValue,
        leftUnit: leftUnit,
        rightValue: rightValue,
        rightUnit: rightUnit
    }
}

module.exports = {
    updateL,
    updateR
}