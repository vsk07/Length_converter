var input  =  document.getElementById('input');
var result =  document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

// now add listener 
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value 
inputTypeValue = inputType.value;
resultTypeValue = resultType.value;


function myResult(){
    // when we change the input and output type value we need to update the inputTypeValue and resultTypeValue  
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;

    // now compair the input and resultType value and addd formula

    // Meter to other unit 

    if(inputTypeValue === "meter" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.001;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "centimeter"){
        result.value = Number(input.value) * 100;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "foot"){
        result.value = Number(input.value) * 3.280839895;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "inch"){
        result.value = Number(input.value) * 39.37007874;
    }
    else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
        result.value = Number(input.value)
    }

    

    // Kilometer to other unit 

    if(inputTypeValue === "kilometer" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 1000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){
        result.value = Number(input.value) * 100000;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "foot"){
        result.value = Number(input.value) * 3280.839895;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "inch"){
        result.value = Number(input.value) * 39370.07874;
    }
    else if(inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){
        result.value = Number(input.value)
    }


    // Centimeter to other unit 

    if(inputTypeValue === "centimeter" && resultTypeValue === "meter"){
        result.value = Number(input.value) *0.01;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.00001;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "foot"){
        result.value = Number(input.value) * 0.032808399;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "inch"){
        result.value = Number(input.value) * 0.3937007874;
    }
    else if(inputTypeValue === "centimeter" && resultTypeValue === "centimeter"){
        result.value = Number(input.value)
    }


    // Foot to other unit 


    if(inputTypeValue === "foot" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 0.3048;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.0003048;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "centimeter"){
        result.value = Number(input.value) * 30.48;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "inch"){
        result.value = Number(input.value) * 12;
    }
    else if(inputTypeValue === "foot" && resultTypeValue === "foot"){
        result.value = Number(input.value) 
    }



    // Inch to other unit 

    if(inputTypeValue === "inch" && resultTypeValue === "meter"){
        result.value = Number(input.value) * 0.0254;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "kilometer"){
        result.value = Number(input.value) * 0.0000254;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "centimeter"){
        result.value = Number(input.value) * 2.54;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "foot"){
        result.value = Number(input.value) * 0.0833333333;
    }
    else if(inputTypeValue === "inch" && resultTypeValue === "inch"){
        result.value = Number(input.value) 
    }
}