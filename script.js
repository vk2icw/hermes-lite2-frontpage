// You can enhance this script to check real receiver status if there is an API.
// For now, we'll just display 'Online' after 1 second for demo purposes.

document.addEventListener('DOMContentLoaded', () => {
  const statusElement = document.getElementById('receiver-status');
  setTimeout(() => {
    statusElement.textContent = 'Online and ready!';
    statusElement.style.color = '#31eb38';
  }, 1000);
});