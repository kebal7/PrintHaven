

function startSearch() {
    var input = document.getElementById('myInput');
    var filter = input.value;
  
    // Redirect to products.html with the search query as a parameter
    if(filter != "")
    {
        window.location.href = '../pages/products.html?search=' + encodeURIComponent(filter);
        console.log("search clocked");
    }
    
}

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the search query parameter from the URL
    var searchQuery = getParameterByName('search');
  
    if (searchQuery) {
      // Display search results on page load
      performSearch(searchQuery);
    }
  });
  
  function getParameterByName(name) {
    var url = new URL(window.location.href);
    return url.searchParams.get(name);
  }
  
  function performSearch(filter) {
    var main = document.querySelector('main');
    var productContainers = main.getElementsByClassName('product-container');
    var resultsFound = false;
  
    // Loop through all product containers, and hide those that don't match the search query
    for (var i = 0; i < productContainers.length; i++) {
      var h2 = productContainers[i].getElementsByTagName('h2')[0];
      var txtValue = h2.textContent || h2.innerText;
  
      if (txtValue.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
        productContainers[i].style.display = '';
        resultsFound = true;
      } else {
        productContainers[i].style.display = 'none';
      }
    }
  
    if (!resultsFound) {
      var noResultsMessage = document.getElementById('noResultsMessage');
      if (!noResultsMessage) {
        noResultsMessage = document.createElement('p');
        noResultsMessage.id = 'noResultsMessage';
        noResultsMessage.textContent = 'No results found.';
        main.appendChild(noResultsMessage);
      } else {
        noResultsMessage.style.display = 'block';
      }
    }
  }
  