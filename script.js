document.addEventListener('DOMContentLoaded', () => {
  const statusElement = document.getElementById('receiver-status');
  
  fetch('https://vk2icw.com/api')
    .then(response => {
      if (!response.ok) throw new Error('Offline or unreachable');
      return response.json();
    })
    .then(data => {
      if (data && typeof data === 'object') {
        statusElement.textContent = 'Online and ready! OpenWebRX version: ' + (data['ver'] || 'unknown');
        statusElement.style.color = '#31eb38';
      } else {
        throw new Error('Unexpected API response');
      }
    })
    .catch(() => {
      statusElement.textContent = 'Offline or unreachable';
      statusElement.style.color = '#eb3131';
    });
});
