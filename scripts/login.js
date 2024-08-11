const fs = require('fs');

function login(username, password) {
    // Read the users.csv file
    const usersData = fs.readFileSync('users.csv', 'utf8');
    
    // Split the file content into an array of lines
    const lines = usersData.split('\n');
    
    // Iterate over each line
    for (let i = 0; i < lines.length; i++) {
        // Split the line into an array of values
        const values = lines[i].split(',');
        
        // Check if the username and password match
        if (values[0] === username && values[1] === password) {
            return true; // Login successful
        }
    }
    
    return false; // Login failed
}

module.exports = login;