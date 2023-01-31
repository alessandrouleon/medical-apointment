
import { test, expect, describe , beforeAll} from "vitest";
import { CreateDoctorRequest, CreateDoctorUseCase } from "../../create-doctor/create-doctor.usecase";
import { UsersMemoryRepository } from "../../../../users/repositories/implementations/users.memory.repository";
import { DoctorMemoryRepository } from "../../../repositories/implementations/doctor.memory.repository";
import { SpecialityMemoryRepository } from "../../../../speciality/repositories/implementations/speciality.memory.repository";
import { Speciality } from "../../../../speciality/entities/Speciality";
import { ISpecialityRepository } from "../../../../speciality/repositories/ISpecialityRepositories";

let specialityRepository: ISpecialityRepository;
let speciality: Speciality;

beforeAll(async () => {
    specialityRepository = new SpecialityMemoryRepository();

    speciality = Speciality.create({
        description: "Description_TEST",
        name: "NAmr_TEST"
    });

    await specialityRepository.save(speciality);
});

describe('Create Doctor Use Case', () => {
    test('Should be able to create a new doctor', async () => {
        const userRepository = new UsersMemoryRepository();
        const doctorRepository = new DoctorMemoryRepository();

        speciality = Speciality.create({
            description: "Description_TEST",
            name: "NAmr_TEST"
        });
    
        await specialityRepository.save(speciality);

        const doctorMoch: CreateDoctorRequest = {
            name: 'name_test',
            username: 'username_test',
            password: '123456',
            email: 'manuela@gmail.com',
            crm: '123456',
            specialityId: speciality.id
        }

        const createDoctorUseCase = new CreateDoctorUseCase(
            userRepository,
            doctorRepository,
            specialityRepository
        );

        const doctorCreated = await createDoctorUseCase.execute(doctorMoch);

        expect(doctorCreated).toHaveProperty('id');
        
    });


    test('Should not be able to create a new doctor with exists crm', async () => {
        const userRepository = new UsersMemoryRepository();
        const doctorRepository = new DoctorMemoryRepository();
    
        speciality = Speciality.create({
            description: "Description_TEST",
            name: "Name_TEST"
        });
    
        await specialityRepository.save(speciality);

        const doctorMoch: CreateDoctorRequest = {
            name: 'name_test',
            username: 'username_test',
            password: '123456',
            email: 'manuela@gmail.com',
            crm: '123456',
            specialityId: speciality.id
        }

        const doctorMochExists: CreateDoctorRequest = {
            name: 'name_test2',
            username: 'username_test2',
            password: '1234567',
            email: 'joanaa@gmail.com',
            crm: '123456',
            specialityId: speciality.id
        }

        const createDoctorUseCase = new CreateDoctorUseCase(
            userRepository,
            doctorRepository,
            specialityRepository
        );

        await createDoctorUseCase.execute(doctorMoch);

        expect(async () => {
            await createDoctorUseCase.execute(doctorMochExists);
        }).rejects.toThrowError("THis CRM exists!");

    });


    test('Should not be able to create a new doctor with exists crm length incorrect.', async () => {

        const doctorMoch: CreateDoctorRequest = {
            name: 'name_test',
            username: 'username_test',
            password: '123456',
            email: 'manuela@gmail.com',
            crm: '123459',
            specialityId: speciality.id
        }

        const userRepository = new UsersMemoryRepository();
        const doctorRepository = new DoctorMemoryRepository();
        const createDoctorUseCase = new CreateDoctorUseCase(
            userRepository,
            doctorRepository,
            specialityRepository
        );

        await createDoctorUseCase.execute(doctorMoch);

        expect(async () => {
            await createDoctorUseCase.execute(doctorMoch);
        }).rejects.toThrowError("This username alread exists!");

    });


});