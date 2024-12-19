// Example: Simple form validation
document.querySelector('form').addEventListener('submit', function(e) {
    let valid = true;
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '';
        }
    });

    if (!valid) {
        e.preventDefault(); // Prevent form submission if invalid
        alert('Please fill all fields.');
    }
});
