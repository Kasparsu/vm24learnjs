let text = 'Hello ' + 'World' + '!';
console.log(text);
text += 'yeee!';
console.log(text);
text = "don't do this ;P";
text = 'don\'t do\n this\t ;P';
console.log(text);
text = 'asdasdasdasdasdasdasdasdasdasdasdasdasdasd' +
        'asdasdasdasdasdasdasdasdasdasdasdasdasdasd' +
        'asdasdasdasdasdasdasdasdasdasdasdasdasdasd' +
        'asdasdasdasdasdasdasdasdasdasdasdasdasdasd';
let name = 'Kaspar';
let age = 32;
text = `Hello
this is multi line
text`;
console.log(text);
text = 'Hello ' + name + '! You are ' + age + ' years old!';
text = `Hello ${name}! You are ${age} years old!`;
console.log(text);
console.log(text.length);
console.log(text.toUpperCase());
