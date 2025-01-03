import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    const { name } = req.query;
    return res.status(200).json({ data: `Hello ${name}! Great to see you.` })
})

app.get('/status', (req, res) => {
    return res.status(200).json({ status: `App is working ${process.env.API_KEY} .` })
})

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
})


