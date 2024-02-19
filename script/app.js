
const allBtn = document.getElementsByClassName('add-btn');

let price = 0;

for (const btn of allBtn){
  
  btn.addEventListener('click', function(e){

    // sitCondition select 4 sit    
    const sitCondition = getElementConvertValue('showSet');

    if(sitCondition === 3){
      alert('1 person booking total 4 seat! 🙂');
      disabledSet();
    } 

    if(sitCondition >= 4){
      return;
    }

    e.target.setAttribute('disabled', true);
    e.target.classList.add('disabled:bg-[#1DD100]')
    e.target.classList.add('disabled:text-white')

    price = price + 550;

    const setText = e.target.innerText;
    const li = document.createElement('li');
    li.innerText = setText;
    const li2 = document.createElement('li');
    li2.innerText = 'Economy';
    const li3 = document.createElement('li');
    li3.innerText = 550;

    const ul = document.createElement('ul');

    ul.classList.add('flex');
    ul.classList.add('justify-between');


    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    
    const priceContainer = document.getElementById('priceContainer');
    priceContainer.appendChild(ul);

    // totalSeat decrease 
    const totalSeat = getElementConvertValue('totalSeat');
    let decSet = totalSeat - 1; 
    setElementInnerByValue('totalSeat', decSet)

    // showSeat increase    
    const showSeat = getElementConvertValue('showSet');    
    let incSet = showSeat + 1; 
    setElementInnerByValue('showSet', incSet);
    
    // total price      
    const totalPrice = document.getElementById('totalPrice').innerText = price;

    // grand total price  
    document.getElementById('grandTotal').innerText = totalPrice;

    // coupon code button condition
    const couponButton = document.getElementById('couponId');

    if(sitCondition >= 3 ){
      couponButton.removeAttribute('disabled');
    }
    

    // Next button modal button condition
    const phoneNumber = document.getElementById('phoneNumber').value;
    let numberToText = phoneNumber.toString();

    const sitSelected = getElementConvertValue('showSet');
    const modalButton = document.getElementById('nextButton');    
        
    if(sitCondition >= 0 && numberToText.length >= 1 ){
      modalButton.removeAttribute('disabled');
    }



  })
}

document.getElementById('couponId').addEventListener('click', function(e){

  const couponCode = document.getElementById('coupon').value; 
  
  const p1 = document.createElement('p');
  p1.innerText = 'Discount Price';  
  const p2 = document.createElement('p'); 
  p2.innerText = 'BDT ';
  const span = document.createElement('span');
  p2.appendChild(span);
  
  const newDiv = document.createElement('div');
  newDiv.classList.add('flex');
  newDiv.classList.add('justify-between');
  newDiv.classList.add('bg-[#F7F8F8]');
  newDiv.classList.add('font-bold');

  newDiv.appendChild(p1);
  newDiv.appendChild(p2);
  const discountPriceDiv = document.getElementById('addNewDiv');

 
  if(couponCode == 'NEW15' ){   

    const grandTotal = getElementConvertValue('grandTotal');
    const discount = grandTotal * 15 / 100; 
    span.innerText = discount; 
    const round = Math.round(discount);
    const discountPrice = grandTotal - round;
    document.getElementById('grandTotal').innerText = discountPrice; 
    e.target.parentNode.classList.add('hidden');  
    discountPriceDiv.appendChild(newDiv);

  }else if(couponCode == 'Couple 20'){

    const grandTotal = getElementConvertValue('grandTotal');
    const discount = grandTotal * 20 / 100;
    span.innerText = discount; 
    const round = Math.round(discount);
    const discountPrice = grandTotal - round;
    document.getElementById('grandTotal').innerText = discountPrice; 
    e.target.parentNode.classList.add('hidden');        
    discountPriceDiv.appendChild(newDiv);

  }else{
    alert('sorry wrong coupon code please type valid coupon code again!')
    document.getElementById('coupon').value = '';
  }

})

function disabledSet(){

  for (const btn of allBtn){
    btn.setAttribute('disabled', true);

  }
}





