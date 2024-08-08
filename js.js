const video = document.getElementById('video');
const chatLog = document.getElementById('chat-log');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const recordButton = document.getElementById('record-button');
const inviteButton = document.getElementById('invite-button');
const inviteCodeInput = document.getElementById('invite-code-input');
const joinButton = document.getElementById('join-button');

let meetingCode = '';
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
    if (enteredCode === meetingCode) {
        // Join the meeting logic here
        alert('You have joined the meeting!');
    } else {
        alert('Invalid meeting code');
    }
});


















