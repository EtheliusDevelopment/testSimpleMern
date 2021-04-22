const express = require ('express');
const app = express()
const morgan = require('morgan')
const path = require('path')

// const taskrouter = require('../src/routes/task.routes')



// Settings

// const PORT = process.env.PORT || 3000 ( get and set way)
app.set('port', process.env.PORT || 3000)

// Middlewares

app.use(morgan('dev'));
app.use(express.json());

// Routes

app.use('/api/tasks',require('../src/routes/task.routes'))

// Static Files
app.use(express.static(path.join(__dirname, 'public')))


// Starting the server




// app.listen(PORT, ()=>{
//     console.log(`Server running on http://localhost:${PORT}` );
// });
// const PORT = process.env.PORT || 3000 ( get and set way)

app.listen(app.get('port'), () => {
    console.log(`Server running on http://localhost:${app.get('port')}` );
})