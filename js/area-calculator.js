

function getInputValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    return inputValue;
}

function addTextById(constName, elementId){
    const element = document.getElementById(elementId);
    element.innerText = constName;
}



document.getElementById('triangle-btn').addEventListener('click', function(){
    const baseValue = getInputValueById('input-base');
    const heightValue = getInputValueById('input-height');

    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('Please enter a valid number.');
        return;
    }

    const triangeArea = 0.5 * baseValue * heightValue;

    addTextById(triangeArea, 'triangle-result');

    // Add to calculation Area

    addToCalculationArea('Triangle', triangeArea);
})


document.getElementById('rectangle-btn').addEventListener('click', function(){
    const wideValue = getInputValueById('input-width');
    const lengthValue = getInputValueById('input-length');


    if(isNaN(wideValue) || isNaN(lengthValue)){
        alert('Please enter a valid number.');
        return;
    }

    const rectangleArea = wideValue * lengthValue;

    addTextById(rectangleArea, 'rectangle-result');



    // Add to calculation Area

    addToCalculationArea('Rectangle', rectangleArea);
})


document.getElementById('parallelogram-btn').addEventListener('click', function(){
    const parallelogramBaseValue = getInputValueById('parallelogram-input-base');
    const parallelogramHeightValue = getInputValueById('parallelogram-input-height');


    if(isNaN(parallelogramBaseValue) || isNaN(parallelogramHeightValue)){
        alert('Please enter a valid number.');
        return;
    }

    const parallelogramArea = parallelogramBaseValue * parallelogramHeightValue;
    
    addTextById(parallelogramArea, 'parallelogram-result');



     // Add to calculation Area

     addToCalculationArea('Parallelogram', parallelogramArea);
})


document.getElementById('rhombus-btn').addEventListener('click', function(){
    const rhombusD1 = getInputValueById('input-d1');
    const rhombusD2 = getInputValueById('input-d2');


    if(isNaN(rhombusD1) || isNaN(rhombusD2)){
        alert('Please enter a valid number.');
        return;
    }

    const rhombusArea = 0.5 * rhombusD1 * rhombusD2;

    addTextById(rhombusArea, 'rhombus-result')



    // Add to calculation Area

    addToCalculationArea('Rhombus', rhombusArea);
})


document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pentagonP = getInputValueById('input-p');
    const pentagonB = getInputValueById('input-b');


    if(isNaN(pentagonP) || isNaN(pentagonB)){
        alert('Please enter a valid number.');
        return;
    }

    const pentagonArea = 0.5 * pentagonP * pentagonB;

    addTextById(pentagonArea, 'pentagon-result');



    // Add to calculation Area

    addToCalculationArea('Pentagon', pentagonArea);
})


document.getElementById('ellipse-btn').addEventListener('click', function(){
    const ellipseA = getInputValueById('ellipse-input-a');
    const ellipseB = getInputValueById('ellipse-input-b');


    if(isNaN(ellipseA) || isNaN(ellipseB)){
        alert('Please enter a valid number.');
        return;
    }

    const ellipseArea = 3.14 * ellipseA * ellipseB;
    const ellipseArea1 = ellipseArea.toFixed(2);

    addTextById(ellipseArea1, 'ellipse-result');




     // Add to calculation Area

     addToCalculationArea('Ellipse', ellipseArea1);
})


// Add to calculation Area


function addToCalculationArea(areaType, area){
    const calculationArea = document.getElementById('calculation-area');
    const count = calculationArea.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-5');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>` ;


    calculationArea.appendChild(p);
}
/* 
// data validation 
1. use the proper type in the input field (type="number")
2. use typeof by js (typeof 13)
3. use IsNaN . IsNaN means is it not a number. (IsNaN(13))
*/