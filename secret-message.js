let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Remove the last string of the array
secretMessage.pop();

// Add two strings to the end of the array
secretMessage.push('to', 'Program');

// Replace the string at index 7 of the array
secretMessage[7] = 'right';

// Remove the first string of the array
secretMessage.shift();

// Add a string to the beginning of the array
secretMessage.unshift('Programming');

// Replace five strings in the array with one other string, starting at index 6
secretMessage.splice(6, 5, 'know,');

// Print the secret message as a sentence
console.log(secretMessage.join(' '));