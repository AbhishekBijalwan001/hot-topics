// GET THE REFERENCES
const container = document.querySelector('.new-content');

const links = document.querySelectorAll('header a');

let url = 'partials/home.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL

// RUN THE fetch(urlFeed).then().then().catch()
function loadContent(url){
    fetch(url)
  .then(function (rsp) {
    return rsp.text();
  })
  .then(function (data) {
    container.innerHTML = data;
  });
    
// CLOSE YOUR FUNCTION loadContent HERE
}

// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);

// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:

function selectContent(event){
    event.preventDefault();

// GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
    let clicked = event.target.href;

// OF loadContent FUNCTION.
    loadContent(clicked);
    
}

for (let i = 0; i < links.length; i++) {

  links[i].addEventListener("click", selectContent);
    // CLOSE YOUR FUNCTION selectContent HERE

}