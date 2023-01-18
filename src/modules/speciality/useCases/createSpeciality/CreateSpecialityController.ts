import { Request, Response } from "express";
import { ISpecialityRepository } from "../../repositories/ISpecialityRepositories";
import { CreateSpecialityUseCase } from "./CreateSpecialityUseCase";


export class CreateSpecialityController {

    constructor(private specialityRepository: ISpecialityRepository) { }

    async handle(request: Request, response: Response) {
        try {
            const specialityUseCase = new CreateSpecialityUseCase(this.specialityRepository);
            const speciality = await specialityUseCase.execute(request.body);
            return response.status(201).json(speciality);
        } catch (err: any) {
            return response.status(err.statusCode || 400).json({
                error: err.message
            });
        }
    }
}