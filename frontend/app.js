
var cognitoDomain;
var apiGatewayUrl;
var ClientId;
var idToken;

function signIn(cognitoDomain, ClientId) {
// Construct the URL for the hosted login UI
    var authenticationUrl = `${window.location.origin}#id_token=32434kjkdjfkdfk`;
    // ${cognitoDomain}/login?response_type=token&client_id=${ClientId}&redirect_uri=${window.location.origin}`

    // Redirect the user to the hosted login UI
    window.location.href = authenticationUrl;
}

function main() {
    // Parse the URL to extract tokens after the hosted UI redirect
    var hash = window.location.hash.substring(1);
    console.log(window.location)
    var tokenParams = new URLSearchParams(hash);

    if (tokenParams.has('id_token')) {
        console.log("Yes")
        idToken = tokenParams.get('id_token');
        console.log('ID Token:', idToken);
        document.getElementById('login-section').innerHTML = ``;
        showReminderSection();
    } else {
        console.log("Showing sign in")
        showSignInButton();
    }
}

function showReminderSection() {
    var reminderSection = document.getElementById('reminder-section');
    reminderSection.innerHTML = `
        <div class="form-group">
            <label for="reminder-text">Reminder:</label>
            <input type="text" class="form-control" id="reminder-text">
        </div>
        <div class="form-group">
            <label for="reminder-time">Time (in minutes):</label>
            <input type="number" class="form-control" id="reminder-time">
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="email-checkbox">
            <label class="form-check-label" for="email-checkbox">Send via Email</label>
        </div>
        <div class="form-check">
            <input type="checkbox" class="form-check-input" id="sms-checkbox">
            <label class="form-check-label" for="sms-checkbox">Send via SMS</label>
        </div>
        <button class="btn btn-success" onclick="setReminder()">Set Reminder</button>
        <div class="alert alert-dismissible fade mt-3" id="reminder-alert" role="alert" style="display:none;">
            <strong id="alert-message"></strong>
        </div>
    `;
    reminderSection.style.display = 'block';
}

function showSignInButton() {
    var loginSection = document.getElementById('login-section');
    loginSection.innerHTML = `
        <button class="btn btn-primary" onclick="signIn()">Sign In</button>
    `;
}

function setReminder() {
    var reminderText = document.getElementById('reminder-text').value;
    var reminderTime = document.getElementById('reminder-time').value;
    var sendEmail = document.getElementById('email-checkbox').checked;
    var sendSMS = document.getElementById('sms-checkbox').checked;

    // Make a request to your API Gateway endpoint
    fetch(`${apiGatewayUrl}/your/resource`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + idToken
        },
        body: JSON.stringify({
            text: reminderText,
            time: reminderTime,
            sendEmail: sendEmail,
            sendSMS: sendSMS
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('API Gateway Response:', data);
        displayAlert('success', 'Reminder set successfully!');
    })
    .catch(error => {
        console.error('Error calling API Gateway:', error);
        displayAlert('danger', 'Error setting reminder. Check console for details.');
    });
}

function displayAlert(type, message) {
    var alertDiv = document.getElementById('reminder-alert');
    alertDiv.className = 'alert alert-dismissible fade show alert-' + type;
    document.getElementById('alert-message').innerText = message;
    alertDiv.style.display = 'block';

    setTimeout(function() {
        alertDiv.style.display = 'none';
    }, 5000);  // Hide the alert after 5 seconds
    }

    function signOut() {
    currentUser.signOut();
    console.log('User signed out');
    location.reload();
}


fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Update URLs based on the loaded config
    var cognitoDomain = config.cognitoDomain;
    var apiGatewayUrl = config.apiGatewayUrl;
    var ClientId = config.ClientId;

    console.log("Running main")

    // Call the handleRedirectCallback function on page load to check for tokens in the URL
    main();
  })
  .catch(error => console.error('Error loading config:', error));
