import 'dotenv/config';

import express from 'express';

import { userRouter } from './routes/users.routes';
import { specialityRouter } from './routes/speciality.routes';

const app = express();

app.use(express.json());

const port = 3333;

app.use('/user', userRouter);
app.use('/speciality', specialityRouter);



app.get("/", (req, res) => {
    return res.send('Helos word');
});

app.listen(port, () => console.log(`Server run in port: ${port}`));
