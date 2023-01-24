import { request, response, Router } from "express";
import { ensureAdmin } from "../infra/shared/http/middleware/enseure-admin.middleware";
import { ensureAuthenticate } from "../infra/shared/http/middleware/ensure-authenticate.middleware";
import { createSpecialityController } from "../modules/speciality/useCases/createSpeciality";


const specialityRouter = Router();

specialityRouter.post('/', ensureAuthenticate, ensureAdmin, async (request, response) => {
    await createSpecialityController.handle(request, response);
});

export { specialityRouter };