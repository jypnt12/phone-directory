
const contactForm = document.getElementById('contactForm');
const errorDiv = document.getElementById('error');
const successMessageDiv = document.getElementById('successMessage');
const contactList = document.getElementById('contactList');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();

    if (!name.match(/^[A-Za-z\s]{1,20}$/)) {
        showError('Name is invalid.');
        return;
    }

    if (!mobile.match(/^[0-9]{10}$/)) {
        showError('Mobile number is invalid.');
        return;
    }

    if (!email.match(/^[A-Za-z][A-Za-z0-9.]*@[A-Za-z]{2,10}\.[A-Za-z]{2,10}$/)) {
        showError('Email is invalid.');
        return;
    }

    // If all validations pass, reset the form and add the contact to the table.
    successMessageDiv.style.display = 'block';
    contactForm.reset();
    showError('');
    addContactToTable(name, mobile, email);
});

function showError(message) {
    errorDiv.textContent = message;
    if (message) {
        errorDiv.style.display = 'block';
    } else {
        errorDiv.style.display = 'none';
    }
}

function addContactToTable(name, mobile, email) {
    const row = contactList.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    cell1.textContent = name;
    cell2.textContent = mobile;
    cell3.textContent = email;
}
