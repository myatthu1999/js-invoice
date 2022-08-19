//selectors

let items = document.querySelector("#items");
let quantity = document.querySelector("#quantity");
let addBtn = document.querySelector("#addBtn");
let inputForm =document.querySelector("#inputForm");
let rows =document.querySelector("#rows");
let total =document.querySelector("#total");


//functions
function calcTotal (){
    let costs =document.querySelectorAll('.cost');
    let totalCost = [...costs].reduce((pv,cv) => pv+Number(cv.innerHTML),0) 
    total.innerHTML = totalCost;
}

function del(event){
   if(confirm('Are u sure to delet?')){
        event.target.parentElement.parentElement.remove();
        calcTotal();
   }
}


//process

products.forEach(function(product){
    let newOption = new Option( product.name,product.id);
    items.append(newOption);
});

inputForm.addEventListener("submit",function(e){
    e.preventDefault();
    let currentProduct = products.find(product => product.id == items.value);
    let cost = currentProduct.price * quantity.valueAsNumber;
    
    let newTr =document.createElement('tr');
    newTr.innerHTML = `
                        <td>
                        ${currentProduct.name}
                        <p class=" small text-danger mb-0 del-btn" onclick="del(event)">Delete</p>
                        </td>
                        <td class=" text-end">${currentProduct.price}</td>
                        <td class=" text-end">${quantity.valueAsNumber}</td>
                        <td class=" text-end cost">${cost}</td>
                        `;
    rows.append(newTr);
    inputForm.reset();
    calcTotal();
});

                  