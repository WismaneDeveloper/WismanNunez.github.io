

document.addEventListener('DOMContentLoaded', function() {
  const chatMessages = document.getElementById('chatMessages');
  const messageInput = document.getElementById('messageInput');
  const sendButton = document.getElementById('sendButton');
  const typingIndicator = document.getElementById('typingIndicator'); 

  const mensaje = '¡Valoro tu interés! Esta es una simulación, pero me encantaría conversar de verdad. Usa los botones de contacto aquí abajo 👇';
  
  // Ocultar indicador de "escribiendo" inicialmente
  typingIndicator.style.display = 'none';
  
  // Función para añadir mensaje al chat
  function addMessage(text, isReceived = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isReceived ? 'received' : 'sent'}`;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    messageDiv.innerHTML = `
      <p>${text}</p>
      <span class="time">${timeString}</span>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Animación de entrada
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = isReceived ? 'translateX(-10px)' : 'translateX(10px)';
    messageDiv.style.animation = 'messageIn 0.3s forwards';
  }
  
  // Enviar mensaje al hacer clic o presionar Enter
  function sendMessage() {
    const message = messageInput.value.trim();
    if (message) {
      addMessage(message);
      messageInput.value = '';
      
      // Simular respuesta después de 1-2 segundos
      setTimeout(() => {
        typingIndicator.style.display = 'flex';
        setTimeout(() => {
          typingIndicator.style.display = 'none';
          addMessage(mensaje, true);
        }, 1500);
      }, 1000 + Math.random() * 1000);
    }
  }
  
  // Event Listeners
  sendButton.addEventListener('click', sendMessage);
  
  messageInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  // Mostrar/ocultar indicador al escribir
  messageInput.addEventListener('input', function() {
    if (messageInput.value.trim()) {
      typingIndicator.style.display = 'flex';
    } else {
      typingIndicator.style.display = 'none';
    }
  });
});


