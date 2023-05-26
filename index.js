//  chrome://extensions/


///creating two variable
let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEL = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const tabBtn = document.getElementById('save-tab');
///////// get leads from  local storage///////////
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
//console.log( leadsFromLocalStorage );


if (leadsFromLocalStorage ){
    myLeads = leadsFromLocalStorage
    render(myLeads);
    
}

tabBtn.addEventListener("click", function (){
    //Grab url from chrome browser///
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //   //console.log(tabs[0].url)
    //     myLeads.push(tabs[0].url)
    //     localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
    //     render(myLeads) 
    // });
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myleads", JSON.stringify(myLeads))
        render(myLeads)
    })
    
});

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

       // console.log(listItems)
    
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

    //console.log(localStorage.getItem("myLeads"))
});
 



