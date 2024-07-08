import { logger } from '.';
import { TEXT } from '../utils/colors';

logger(__filename, `   setTimeout`);

function showNotification(message, duration) {
  const notification = document.createElement('DIV');
  notification.innerText = message;
  notification.className = 'notification';
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, duration);
}

showNotification('SIgned you In!', 5000);
showNotification('I hate you!', 300);
showNotification('Pleas come again!', 1000);
