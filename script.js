document.getElementById('send-btn').addEventListener('click', () => {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== "") {
        addMessage('user', userInput);
        getResponse(userInput);
        document.getElementById('user-input').value = '';
    }
});

function addMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(input) {
    // Simple mock AI response
    const responses = {
        "hello": "Hi there!",
        "how are you?": "I'm a computer program, so I don't have feelings, but thanks for asking!"
    };

    const response = responses[input.toLowerCase()] || "Sorry, I don't understand that.";
    setTimeout(() => addMessage('bot', response), 500);
}
