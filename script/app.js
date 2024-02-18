const allBtn = document.getElementsByClassName('add-btn');

let count = 40;
let set = 0;
let price = 0;


function ticketContinue(){

}


for (const btn of allBtn){
  btn.addEventListener('click', function(e){
    e.target.setAttribute('disabled', true);
    e.target.classList.add('disabled:bg-[#1DD100]')
    e.target.classList.add('disabled:text-black')

    count = count - 1;
    set = set + 1 ; 
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

    






   


    const totalSet = document.getElementById('totalSeat').innerText = count;
    const showSet = document.getElementById('showSet').innerText = set;
    const totalPrice = document.getElementById('totalPrice').innerText = price;
    const grandTotal = document.getElementById('grandTotal').innerText = totalPrice;

    if(showSet === 4){
      alert('1 person booking total 4 seat! 🙂')
    }
    
    
    
    
    
    // e.target.removeAttribute('disabled', true)   
    
    
  })
}

document.getElementById('couponId').addEventListener('click', function(e){


  const couponCode = document.getElementById('coupon').value;
  
  if(couponCode == 'NEW15' ){   

  const grandTotal = getElementConvertValue('grandTotal');
  const discount = grandTotal * 15 / 100;
  const round = discount.toFixed(2)
  const discountPrice = grandTotal - round;
  document.getElementById('grandTotal').innerText = discountPrice; 
  e.target.parentNode.classList.add('hidden');

  }else if(couponCode == 'Couple 20'){

    const grandTotal = getElementConvertValue('grandTotal');
    const discount = grandTotal * 20 / 100;
    const round = discount.toFixed(2)
    const discountPrice = grandTotal - round;
    document.getElementById('grandTotal').innerText = discountPrice; 

    e.target.parentNode.classList.add('hidden');

  }else{
    alert('sorry wrong coupon code please type valid coupon code again!')
    document.getElementById('coupon').value = '';
  }

})
