const input = document.getElementById('fruit');
const suggestions = document.querySelector('.suggestions');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
  return fruit.filter(value =>
    value.toLowerCase().includes(str.toLowerCase())
  );
}

function showSuggestions(results) {
  suggestions.innerHTML = "";
  results.forEach(result => {
    const suggestionItem = document.createElement("li");
    suggestionItem.textContent = result;
    suggestionItem.addEventListener("click", function(){
      input.value = result;
      suggestions.style.display = 'none';
    });
    suggestions.appendChild(suggestionItem); 
  });

  if (results.length > 0) {
    suggestions.style.display = 'block';
  } else {
    suggestions.style.display = 'none';
  }
}

function searchHandler() {
  const searchText = input.value;
  const results = search(searchText);
  

  if (searchText.trim() === '') {
    suggestions.style.display = 'none';
  } else {
    showSuggestions(results);
  }
}

input.addEventListener('input', searchHandler);
