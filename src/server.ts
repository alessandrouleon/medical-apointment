import express from 'express';

import { userRouter } from './routes/users.routes';

const app = express();

app.use(express.json());

const port = 3333;

app.use('/user', userRouter);



app.get("/", (req, res) => {
    return res.send('Helos word');
});

app.listen(port, () => console.log(`Server run in port: ${port}`));
