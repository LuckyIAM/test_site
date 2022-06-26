let checkboxButtons=document.querySelectorAll('[name="product"]');
let btnElement=document.querySelector('.btn');
let resultElement=document.querySelector('.result');

btnElement.addEventListener("click", function(){
    let selectedProductValue=[];
    for(const checkboxButton of checkboxButtons){
        if (checkboxButton.checked){
            selectedProductValue.push(checkboxButton.value);
        }
    }

    if(selectedProductValue.length!=0){
        let count=0;
        for(let i=0; i<selectedProductValue.length; i++){
            count=count+parseInt(selectedProductValue[i]);
        }
        resultElement.textContent=count;
    }
    else{
        resultElement.textContent=0;
    }
        
});