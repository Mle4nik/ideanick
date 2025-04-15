import express from 'express'

const ideas = [
    { nick: 'cool-idea-nick-1', name: 'idea 1', description: 'description of idea 1' },
    { nick: 'cool-idea-nick-2', name: 'idea 2', description: 'description of idea 2' },
    { nick: 'cool-idea-nick-3', name: 'idea 3', description: 'description of idea 3' },
    { nick: 'cool-idea-nick-4', name: 'idea 4', description: 'description of idea 4' },
    { nick: 'cool-idea-nick-5', name: 'idea 5', description: 'description of idea 5' },
  ];

const expressApp = express()
expressApp.get('/ping', (req, res) => {
    res.send('pong')
})
expressApp.get('/ideas', (req, res) => {
    res.send(ideas)
})
expressApp.listen(3000, () => {
    console.info('Listening at http://localhost:3000')
})