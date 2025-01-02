import express from 'express';

const app = express();

const port = process.env.PORT || 4000;

app.use('/', (req, res) => {
    const { name } = req.query;
    return res.status(200).json({ data: `Hello ${name}! Great to see you.` })
})

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
})


