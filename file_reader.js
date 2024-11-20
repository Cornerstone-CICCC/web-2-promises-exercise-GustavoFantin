const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE ///John Smith is 50 years old and his hobbies are swimming and dancing

let firstname, lastname, hobbies, age
fs.readFile('firstname.txt', 'utf-8' )
    .then(data => {
        firstname = data
        return fs.readFile('lastname.txt', 'utf-8')
    })
    .then(data => {
        lastname = data
        return fs.readFile('age.txt', 'utf-8')
    })
    .then(data => {
        age = data
        return fs.readFile('hobbies.txt', 'utf-8')
    })
    .then(data => {
        hobbies = JSON.parse(data)
        console.log(`THEN-CATCH:    ${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`)
    })
    .catch(err => {
        console.error(err)
    })
    


// ASYNC/AWAIT SOLUTION BELOW THIS LINE 

const waiting = async () => {
    const firstname = await fs.readFile('firstname.txt', 'utf-8')
    const lastname = await fs.readFile('lastname.txt', 'utf-8')
    const age = await fs.readFile('age.txt', 'utf-8')
    const hobbies = JSON.parse(await fs.readFile('hobbies.txt', 'utf-8'))
    console.log(`ASYNC/AWAIT:    ${firstname} ${lastname} is ${age} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`)
}


waiting()