
let myLeads =  []
const inputBtn= document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
const inputName= document.getElementById("input-name");

const inputEl = document.getElementById("input-el");

inputBtn.addEventListener("click", function(){  
addLead()
});

inputEl.addEventListener("keypress", function(event){
  if(event.key==="Enter"){
   addLead();
  }
});

inputName.addEventListener("keypress", function(event){
if(event.key==="Enter"){
  addLead();
}
});


function addLead() {
  const url = inputEl.value.trim();
  const name = inputName.value.trim();
  if (url && name) {
    myLeads.push({ url: url, name: name });
    inputEl.value = '';
    inputName.value = '';
    renderLeads();
  }
}




function renderLeads(){
  let listItems = ""
  for (let i = 0; i < myLeads.length; i++) {
    
    listItems += `
    <li>
    <a href='${myLeads[i].url}' target='_blank'>
      ${myLeads[i].url}
    </a>  - ${myLeads[i].name}
  </li>
`;


  }
  ulEl.innerHTML = listItems

}


