const allBtn = document.getElementsByClassName('add-btn');

// let count = 40;

for (const btn of allBtn){
  btn.addEventListener('click', function(e){
    e.target.setAttribute('disabled', true);
    e.target.class



  })
}