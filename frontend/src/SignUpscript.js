document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        console.log(data);
        form.reset();
    });
});