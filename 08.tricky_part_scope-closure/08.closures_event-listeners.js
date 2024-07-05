document //
  .querySelector('button')
  .addEventListener(
    'click',
    (() => {
      let count = 0;

      return () => {
        count += 1;
        console.log(`You clicked ${count} times`);
      };
    })()
  );

function createCounterButton(id) {
  const button = document.getElementById(id);
  let count = 0;

  button.addEventListener('click', () => {
    count += 1;
    button.innerHTML = `Clicked ${count} times`;
  });
}

createCounterButton('clickMe2');
