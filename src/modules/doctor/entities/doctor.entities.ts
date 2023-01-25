import { randomUUID } from 'crypto';
import CustomErro from '../../../errors/CustomError';
export type DoctorProps = {
    email: string;
    crm: string;
    userId: string;
    specialityId: string;
}

export class Doctor {
    id: string;
    email: string;
    crm: string;
    userId: string;
    specialityId: string;

    private constructor(props: DoctorProps) {

        if (!props.crm) {
            throw new CustomErro("This CRM required!");
        }

        if(props.crm.length !== 6){
          throw new CustomErro("CRM must contain 6 characters");
        }

        if(!props.email){
          throw new CustomErro("This email required!");
        }

        this.id = randomUUID();
        this.email = props.email;
        this.crm = props.crm;
        this.userId = props.userId;
        this.specialityId = props.specialityId;
    }

    static create(props: DoctorProps) {
        const doctor = new Doctor(props);
        return doctor;
    }

}

