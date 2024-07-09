function queryAPI(searchTerm, color) {
  console.log(`Searching the API for ${searchTerm}`);
  console.log(`color argument is ${color}`);
}

const debouncedSearchInput = document.querySelector('#Debounced-search');
debouncedSearchInput.addEventListener('input', (event) => {
  debouncedQueryAPI(event.target.value, 'purple');
});

const noDebouncedSearchInput = document.querySelector('#No-Debounce-search');
noDebouncedSearchInput.addEventListener('input', () => {
  queryAPI();
});

function debounce(callback, delay) {
  let timeoutId;

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debouncedQueryAPI = debounce(queryAPI, 300);
