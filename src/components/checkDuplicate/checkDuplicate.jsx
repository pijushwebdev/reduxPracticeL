

const CheckDuplicate = () => {

    // Get references to DOM elements
const itemInput = document.getElementById('item-input').value;
// const addItemButton = document.getElementById('add-item-button')
// const shoppingList = document.getElementById('shopping-list')
const listArr = []

// Function to check item is not duplicate
function checkDuplicate() {
    
    /* ⚠️ You need to add code to this function! ⚠️*/ 
    
    // const itemText = itemInput.value;

    const itemArr = itemInput.trim().split(' ');
    console.log(itemArr);

    if(listArr.length === 0){
        return itemInput;
    }else{
        // listArr.forEach(item => {

        // })
    }


    listArr.push(itemInput)
    // renderList()
}

// Function to add an item to the shopping list
// function renderList() {
//     shoppingList.innerHTML = ''
//     listArr.forEach((gift) => {
//         const listItem = document.createElement('li')
//         listItem.textContent = gift
//         shoppingList.appendChild(listItem)
//     })
//     itemInput.value = ''; // Clear the input field
// }

// Add event listener to button
// addItemButton.addEventListener('click', checkDuplicate)

// Allow adding items by pressing Enter key
// itemInput.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         checkDuplicate()
//     }
// })


    return (
        <div className="container">
		<h1>My Christmas List</h1>
		<div className="input-group">
			<label htmlFor="item-input">Enter an item</label>
			<div>
				<input type="text" id="item-input" placeholder="E.g. Socks"/>
				<button onClick={checkDuplicate} id="add-item-button">Add Item</button>
			</div>
		</div>
		<ul id="shopping-list" aria-live="polite"></ul>
	</div>
    );
};

export default CheckDuplicate;