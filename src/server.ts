import 'dotenv/config';
import express from 'express';
import { userRouter } from './routes/users.routes';
import { specialityRouter } from './routes/speciality.routes';
import swaggerUI from 'swagger-ui-express';

import swaggerDocument from '../swagger.json'
import { doctorRouter } from './routes/doctor.routes';

const app = express();

app.use(express.json());

const port = 3333;


app.use('/docs-api', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/user', userRouter);
app.use('/speciality', specialityRouter);
app.use('/doctor', doctorRouter);



app.get("/", (req, res) => {
    return res.send('Helos word');
});

app.listen(port, () => console.log(`Server run in port: ${port}`));
