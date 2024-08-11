const fs = require('fs');

function register(user) {
    // Extract user inputs from the form
    const { username, email, password } = user;

    // Create a new user object
    const newUser = {
        username,
        email,
        password
    };

    // Convert the user object to CSV format
    const csvData = `${newUser.username},${newUser.email},${newUser.password}\n`;

    // Append the CSV data to the users.csv file
    fs.appendFile('users.csv', csvData, (err) => {
        if (err) {
            console.error('Error writing to users.csv:', err);
        } else {
            console.log('User registered successfully!');
        }
    });
}

// Example usage
const user = {
    username: 'john_doe',
    email: 'john@example.com',
    password: 'password123'
};

register(user);