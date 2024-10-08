const video = document.getElementById('video');
const chatLog = document.getElementById('chat-log');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const recordButton = document.getElementById('record-button');
const inviteButton = document.getElementById('invite-button');
const inviteCodeInput = document.getElementById('invite-code-input');
const joinButton = document.getElementById('join-button');

let meetingCode = ''; // Make it a global variable
let stream = null;

// Request access to camera and microphone
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
        video.srcObject = stream;
        this.stream = stream;
    })
    .catch(error => {
        console.error('Error getting user media:', error);
    });

// Generate a unique meeting code when the "Invite People" button is clicked
inviteButton.addEventListener('click', () => {
    meetingCode = generateMeetingCode();
    alert(`Meeting code: ${meetingCode}`);
});

// Generate a random meeting code
function generateMeetingCode() {
    return Math.random().toString(36).substr(2, 6);
}

// Handle joining a meeting when the "Join Meeting" button is clicked
joinButton.addEventListener('click', () => {
    const enteredCode = inviteCodeInput.value.trim();
    if (enteredCode === meetingCode) { // Now it can access the meetingCode variable
        alert('You have joined the meeting!');
    } else {
        alert('Invalid meeting code');
    }
});





function generateMeetingCode() {
    const code = Math.random().toString(36).substr(2, 6);
    console.log('Generated meeting code:', code);
    return code;
}







joinButton.addEventListener('click', () => {
    const enteredCode = inviteCodeInput.value.trim();
    console.log('Entered meeting code:', enteredCode);
    if (enteredCode === meetingCode) {
        alert('You have joined the meeting!');
    } else {
        alert('Invalid meeting code');
    }
});

















