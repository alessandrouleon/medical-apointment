import { request, response, Router } from "express";
import { createSpecialityController } from "../modules/speciality/useCases/createSpeciality";


const specialityRouter = Router();

specialityRouter.post('/', async (request, response) => {
    await createSpecialityController.handle(request, response);
});

export { specialityRouter };