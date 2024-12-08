$(document).ready(function () {
    // Handle form submission
    $('#submitBtn').click(function () {
        // Get form data
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let age = $('#age').val();
        let address = $('#address').val();
        let dob = $('#dob').val();
        let email = $('#email').val();
        let password = $('#password').val();
        let gender = $('#gender').val();

        // Validate required fields
        if (!firstName || !lastName || !age || !address || !dob || !email || !password || !gender) {
            alert("Please fill out all fields.");
            return;
        }

        // Store data in localStorage for the next page
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('age', age);
        localStorage.setItem('address', address);
        localStorage.setItem('dob', dob);
        localStorage.setItem('email', email);
        localStorage.setItem('gender', gender);

        // Redirect to the display page
        window.location.href = 'display.html';
    });
});
