"use scrict";

{
  const menu=document.querySelector(".spmenu");
  const bar=document.querySelector(".bar");
  const close=document.getElementById("close");
  const html=document.querySelector("html");
  bar.addEventListener("click",()=>{
   menu.classList.add("appear");
   html.classList.add("appear");
  });
  close.addEventListener("click",()=>{
    menu.classList.remove("appear");
    html.classList.remove("appear");
  });
}
{
    const targetButton = document.querySelector('.submitButton');
    const triggerCheckbox = document.querySelector('.check');
  

    triggerCheckbox.addEventListener('change', ()=>{
      if (triggerCheckbox.checked) {
        targetButton.disabled = false;
        targetButton.classList.add("ok");
      } else {
        targetButton.disabled = true;
        targetButton.classList.remove("ok");
      }
    });
}