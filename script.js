//your JS code here. If required.
document.getElementById('ageForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value.trim(), 10);

    if (!name || isNaN(age)) {
        alert('Please fill out both fields correctly.');
        return;
    }

    verifyAge(name, age)
        .then((message) => {
            alert(message);
        })
        .catch((error) => {
            alert(error);
        });
});

function verifyAge(name, age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000); // 4 seconds delay
    });
}

