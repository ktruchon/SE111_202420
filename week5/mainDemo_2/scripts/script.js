const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

entries = urlParams.entries();

var body = document.querySelector("body")
for(const entry of entries) {
    var p = document.createElement('p') 
    var text = document.createTextNode(`${entry[0]}: ${entry[1]}`)
    
    p.appendChild(text)
    body.appendChild(p)

    console.log(`${entry[0]}: ${entry[1]}`);
}