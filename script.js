const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];


function search(str) {
	let results = [];
	// TODO
		//iterate over entire fruits array
		fruits.filter(fruit => {
			//check if the beginning of the word or anywhere in the value contains the string
			const isAMatch =  fruit.toLowerCase().startsWith(str.toLowerCase()) ||
			fruit.toLowerCase().includes(" " + str.toLowerCase()) || //checks for first word
			fruit.toLowerCase().includes(str.toLowerCase()) || //checks for last word
			fruit.toLowerCase().includes(" " + str.toLowerCase() + " ") //checks for words anywhere between
			//if array value matches input push value to results array
			if(isAMatch) {
				results.push(fruit);
			}
		})
		//return the results array
		// showSuggestions(results, str);
		return results;
}

function searchHandler(e) {
	// TODO
	const inputVal = e.target.value;
	//clears values from the array if the input box
	//is triggered and then the value is deleted

	if(inputVal.trim() === '') {
		showSuggestions([], '');
		return;
	}
	const searchResults = search(inputVal)
	showSuggestions(searchResults, inputVal)
	console.log(search(inputVal)); //REMOVE CONSOLE.LOG ONCE WE HAVE LI WORKING
}

function showSuggestions(results, inputVal) {
	// TODO
	suggestions.innerHTML = '';
	results.forEach(fruit => {
		const li = document.createElement('li');
		li.textContent = fruit;
		suggestions.append(li);
	});

	if(results.length > 0) {
		suggestions.classList.add('has-suggestions');
	} else {
		suggestions.classList.remove('has-suggestions');
	}
}

function useSuggestion(e) {
	// TODO
	const clickedValue = e.target.textContent;
	console.log("You clicked on: ", clickedValue);
	input.value = clickedValue;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);