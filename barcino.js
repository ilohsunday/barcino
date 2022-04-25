 let body = document.querySelector('body');
   //body.style.background="green";
   let ul = document.querySelector('ul');
   let toggle = document.querySelector('.toggle-span');
   let toggleSpanAppear = document.querySelector('.toggle-span-appear');
   let toggleSpanCancel = document.querySelector('.toggle-span-cancel');
   let showCollapsed = document.querySelector('#collapseUpdate');
   let showBtn = document.querySelector('#btn');
   
  //toggleSpanCancel.style.display="none";
  
  toggle.addEventListener('click',toggleSpan);
  
  function toggleSpan(){
      body.classList.toggle('open');
      // showCollapsed.remove.classList('btn');
      showCollapsed.classList.remove("show");
      /*toggleSpanCancel.style.display="none";
      toggleSpanAppear.style.display="block";*/
  }