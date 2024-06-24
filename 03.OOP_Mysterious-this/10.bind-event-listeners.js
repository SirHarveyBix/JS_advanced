const TEXT = {
  BOLD: '\x1b[1m',
  PURPLE: '\x1b[34m',
  YELLOW: '\x1b[33m',
};

const guillaume = {
  name: 'Guillaume',
  city: 'Nantes',
  sing: function () {
    console.log(`${TEXT.YELLOW}${TEXT.BOLD}This is ${TEXT.CLOSURE}`, this);
    console.log(`${this.name} Sing`);
  },
};

const haveYouClick = {
  name: 'have you clicked on ?',
};

const button = document.querySelector('#clickMe');
const button2 = document.querySelector('#clickMe2');
const button3 = document.querySelector('#clickMe3');

button.addEventListener('click', guillaume.sing);
button2.addEventListener('click', guillaume.sing.bind(guillaume));
button3.addEventListener('click', guillaume.sing.call(haveYouClick));

// guillaume.sing.call(guillaume) would execute the function right away !
