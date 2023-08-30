//Model
let items = [];



//View
updateView();

function updateView() {
    document.getElementById('app').innerHTML = /* HTML */ `
        <h1 id="header">Shopping List</h1>
        <h3>Items:</h3>
        <div id="cart">
            ${items.map(item => `<div class="item">- ${item}</div>`).join('')}
        </div>
        
        <div id="inputField">
        <input id="itemInput"><button onclick="createItem()">Add</button>
        </div>
    `;
}


//Controller
function createItem() {
    var newItem = document.createElement('div');
    var input = document.getElementById('itemInput');

    newItem.className = 'item';
    newItem.innerHTML = input.value;

    var cartDiv = document.getElementById('cart');
    cartDiv.appendChild(newItem);

    items.push(input.value);
    input.value = '';

    updateView();
}
