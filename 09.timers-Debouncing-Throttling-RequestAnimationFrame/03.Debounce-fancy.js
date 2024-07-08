function queryAPI(searchTerm, color) {
  console.log(`Searching the API for ${searchTerm}`);
  console.log(`color argument is ${color}`);
}

const debouncedSearchInput = document.querySelector('#Debounced-search');
const noDebouncedSearchInput = document.querySelector('#No-Debounce-search');

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

debouncedSearchInput.addEventListener('input', (evt) => {
  debouncedQueryAPI(evt.target.value, 'purple');
});

noDebouncedSearchInput.addEventListener('input', () => {
  queryAPI();
});
