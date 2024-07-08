function queryAPI() {
  console.log('MAKING AN API REQUEST!!!');
}

const debouncedSearchInput = document.querySelector('#Debounced-search');

let debounceTimeout;
debouncedSearchInput.addEventListener('input', () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    queryAPI();
  }, 400);
});

const noDebouncedSearchInput = document.querySelector('#No-Debounce-search');

noDebouncedSearchInput.addEventListener('input', () => {
  queryAPI();
});
