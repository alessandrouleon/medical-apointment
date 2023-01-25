
import { test, expect, describe } from "vitest";
import { randomUUID } from 'crypto';
import { CreateDoctorRequest, CreateDoctorUseCase } from "../create-doctor/create-doctor.usecase";
import { UsersMemoryRepository } from "../../../users/repositories/implementations/users.memory.repository";
import { DoctorMemoryRepository } from "../../repositories/implementations/doctor.memory.repository";


describe('Create Doctor Use Case', () => {
    test('Should be able to create a new doctor', async () => {

        const doctorMoch: CreateDoctorRequest = {
            name: 'name_test',
            username: 'username_test',
            password: '123456',
            email: 'manuela@gmail.com',
            crm: '123456',
            specialityId: randomUUID()

        }

        const userRepository = new UsersMemoryRepository();
        const doctorRepository = new DoctorMemoryRepository();
        const createDoctorUseCase = new CreateDoctorUseCase(userRepository, doctorRepository);

        const doctorCreated = await createDoctorUseCase.execute(doctorMoch);

        expect(doctorCreated).toHaveProperty('id');
    });


    test('Should not be able to create a new doctor with exists crm', async () => {

        const doctorMoch: CreateDoctorRequest = {
            name: 'name_test',
            username: 'username_test',
            password: '123456',
            email: 'manuela@gmail.com',
            crm: '123456',
            specialityId: randomUUID()
        }

        const doctorMochExists: CreateDoctorRequest = {
            name: 'name_test2',
            username: 'username_test2',
            password: '1234567',
            email: 'joanaa@gmail.com',
            crm: '123456',
            specialityId: randomUUID()
        }

        const userRepository = new UsersMemoryRepository();
        const doctorRepository = new DoctorMemoryRepository();
        const createDoctorUseCase = new CreateDoctorUseCase(userRepository, doctorRepository);

        await createDoctorUseCase.execute(doctorMoch);
 
       expect(async () => {
        await createDoctorUseCase.execute(doctorMochExists);
       }).rejects.toThrowError("THis CRM exists!");
    });
   

    test('Should not be able to create a new doctor with exists crm length incorrect', async () => {

        const doctorMoch: CreateDoctorRequest = {
            name: 'name_test',
            username: 'username_test',
            password: '123456',
            email: 'manuela@gmail.com',
            crm: '123459',
            specialityId: randomUUID()
        }

        const userRepository = new UsersMemoryRepository();
        const doctorRepository = new DoctorMemoryRepository();
        const createDoctorUseCase = new CreateDoctorUseCase(userRepository, doctorRepository);

        await createDoctorUseCase.execute(doctorMoch);
 
       expect(async () => {
        await createDoctorUseCase.execute(doctorMoch);
       }).rejects.toThrowError("This username alread exists!");
    });



});