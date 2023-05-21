//  chrome://extensions/


///creating two variable
let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEL = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');

///////// get leads from  local storage///////////

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log( leadsFromLocalStorage );

if (leadsFromLocalStorage ){
    myLeads = leadsFromLocalStorage
    render(myLeads);
    
}

function render(leads){
    ////creating a listItem variable
    let listItems = ''
    
    for (let i = 0; i <leads.length; i++) {
        
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
              ${leads[i]}
            </a>
        </li>`

        console.log(listItems)
    
    }
    //////////render the list item inside the ordered list using ulEl.innerHtml
    ulEL.innerHTML = listItems

}


//////// delete all bbutton ///////////////////
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
     myLeads = []
    render(myLeads)
})

///////using eventlistner//////
inputBtn.addEventListener("click", function() {
   myLeads.push(inputEl.value)
   inputEl.value = " "  ; ////clear out input field


   localStorage.setItem("myLeads",JSON.stringify(myLeads))  ///////saving myleads array to local storage/////////
    
    render(myLeads)

    console.log(localStorage.getItem("myLeads"))
});
 



// //////////////////checking trusy and falsy/////////////
// console.log( Boolean("") )// false
// console.log( Boolean("0") )// true
// console.log( Boolean(100) )// true
// console.log( Boolean(null) )// false
// console.log( Boolean([0]) )//  true
// console.log( Boolean(-0) )//   false