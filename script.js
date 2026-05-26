// Document Element Selectors
const tokenBox = document.getElementById('gate-token');
const entryStatus = document.getElementById('entry-status');
const statusPanel = document.getElementById('status-panel');
const failBtn = document.getElementById('fail-btn');

// Click logic to simulate physical gate interactions
tokenBox.addEventListener('click', () => {
    alert("📡 Swift-Start transmitting passport token... Access Authorized! Move through safely.");
});

// Exception Event Handler: Demonstrating UI adjustment under validation failure
failBtn.addEventListener('click', () => {
    // Modify token visual variables
    tokenBox.style.backgroundColor = '#ff3333';
    tokenBox.style.color = '#ffffff';
    tokenBox.innerHTML = '[ ACCESS DENIED ]<br><span class="sub-text" style="color:#ffffff;">REPORT TO SITE OFFICE</span>';
    
    // Modify compliance message status
    entryStatus.textContent = 'REJECTED ❌';
    entryStatus.style.color = '#ff3333';
    statusPanel.style.borderLeftColor = '#ff3333';
});
