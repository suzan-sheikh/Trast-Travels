
const allBtn = document.getElementsByClassName('add-btn');

let price = 0;

for (const btn of allBtn){
  
  btn.addEventListener('click', function(e){

    // sitCondition select 4 sit    
    const sitCondition = getElementConvertValue('showSet');

    if(sitCondition === 4){
      alert('1 person booking total 4 seat! 🙂');
      disabledSet();
    } 

    if(sitCondition >= 4){
      return;
    }

    console.log(sitCondition);
    e.target.setAttribute('disabled', true);
    e.target.classList.add('disabled:bg-[#1DD100]')
    e.target.classList.add('disabled:text-black')

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

    const cp = document.getElementById('coupon');

    if(sitCondition >= 1 ){
      cp.removeAttribute('disabled');
    }

  })
}

document.getElementById('couponId').addEventListener('click', function(e){

  const couponCode = document.getElementById('coupon').value;
  
  if(couponCode == 'NEW15' ){   

  const grandTotal = getElementConvertValue('grandTotal');
  const discount = grandTotal * 15 / 100;
  const round = Math.round(discount);
  const discountPrice = grandTotal - round;
  document.getElementById('grandTotal').innerText = discountPrice; 

  e.target.parentNode.classList.add('hidden');

  }else if(couponCode == 'Couple 20'){

    const grandTotal = getElementConvertValue('grandTotal');
    const discount = grandTotal * 20 / 100;
    const round = Math.round(discount);
    const discountPrice = grandTotal - round;
    document.getElementById('grandTotal').innerText = discountPrice; 

    e.target.parentNode.classList.add('hidden');

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

