const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let classes = {
    'cleric': {
        'description': ['Order', 'lawful', 'by the book'],
        'house': 'Integrity',
        'color': 'yellow',
        'focus': 'ranged', 
        'sense': 'sight'
    },
    'hunter': {
        'description': ['Order', 'lawful', 'by the book'],
        'house': 'Integrity',
        'color': 'yellow',
        'focus': 'ranged', 
        'sense': 'sight'
    },
    'monk': {
        'description': ['Order', 'lawful', 'by the book'],
        'house': 'Integrity',
        'color': 'yellow',
        'focus': 'ranged', 
        'sense': 'sight'
    },
    'sorcerer':{
        'description': ['Wisdom', 'intelligence'],
        'house': 'Knowledge',
        'color': 'blue',
        'focus': 'arcana', 
        'sense': 'taste'
    },
    'mentalist':{
        'description': ['Wisdom', 'intelligence'],
        'house': 'Knowledge',
        'color': 'blue',
        'focus': 'arcana', 
        'sense': 'taste'
    },
    'artificer':{
        'description': ['Wisdom', 'intelligence'],
        'house': 'Knowledge',
        'color': 'blue',
        'focus': 'arcana', 
        'sense': 'taste'
    },
    'thief':{
        'description': ['Stealth', 'pranks'],
        'house': 'Chaos',
        'color': 'purple',
        'focus': 'stealth', 
        'sense': 'sound'
    },
    'necromancer':{
        'description': ['Stealth', 'pranks'],
        'house': 'Chaos',
        'color': 'purple',
        'focus': 'stealth', 
        'sense': 'sound'
    },
    'rogue':{
        'description': ['Stealth', 'pranks'],
        'house': 'Chaos',
        'color': 'purple',
        'focus': 'stealth', 
        'sense': 'sound'
    },
    'berserker':{
        'description': ['Strength', 'brute force', 'muscles'],
        'house': 'Fortitude',
        'color': 'red',
        'focus': 'strength', 
        'sense': 'smell'
    },
    'paladin':{
        'description': ['Strength', 'brute force', 'muscles'],
        'house': 'Fortitude',
        'color': 'red',
        'focus': 'strength', 
        'sense': 'smell'
    },
    'barbarian':{
        'description': ['Strength', 'brute force', 'muscles'],
        'house': 'Fortitude',
        'color': 'red',
        'focus': 'strength', 
        'sense': 'smell'
    },
    'shaman':{
        'description': ['Social butterfly', 'outdoors', 'charming'],
        'house': 'Charm',
        'color': 'green',
        'focus': 'social', 
        'sense': 'touch'
    },
    'druid':{
        'description': ['Social butterfly', 'outdoors', 'charming'],
        'house': 'Charm',
        'color': 'green',
        'focus': 'social', 
        'sense': 'touch'
    },
    'bard':{
        'description': ['Social butterfly', 'outdoors', 'charming'],
        'house': 'Charm',
        'color': 'green',
        'focus': 'social', 
        'sense': 'touch'
    },
    'unknown':{
        'description': 'unknown',
        'house': 'unknown',
        'color': 'unknown',
        'focus': 'unknown', 
        'sense': 'unknown'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
});

app.get('/api/:name', (request, response) => {
    const className = request.params.name.toLowerCase()
    if(classes[className]){
        response.json(classes[className]);
    }else{
        response.json(classes['unknown']);
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
});