import { randomUUID } from 'crypto';
import AppErros from '../../../errors/AppError';

type ISpeciality = {
    name: string;
    description: string;
}

export class Speciality {
    id: string;
    name: string;
    description: string;
    created_at: Date;


    constructor({ name, description }: ISpeciality) {
        this.id = randomUUID();
        this.name = name;
        this.description = description;
        this.created_at = new Date();
    }

    static create(props: ISpeciality) {
        if (!props.name) {
            throw new AppErros('Speciality name is required!')
        }

        const speciality = new Speciality(props);
        return speciality;
    }
}

