//  chrome://extensions/


///creating two variable
let myLeads = []
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEL = document.getElementById('ul-el')

///////using eventlistner//////
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
   inputEl.value = " "  ////clear out input field
    
    renderLeads()
})

function renderLeads(){
    ////creating a listItem variable
    let listItems = ''
    
    for (let i = 0; i < myLeads.length; i++) {
        
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
              ${myLeads[i]}
            </a>
        </li>`

        console.log(listItems)
    
    }
    //////////render the list item inside the ordered list using ulEl.innerHtml
    ulEL.innerHTML = listItems

}




