

import { test, expect, describe } from "vitest";
import { Doctor } from "../doctor.entities";


describe('Doctor Entities', () => {
    test('Should be able to create new doctor', () => {
        const doctor = Doctor.create({
            crm: '123456',
            email: 'email@gmail.com',
            userId: 'user_ID',
            specialityId: 'speciality_id',
        });

        console.log(doctor);


        expect(doctor).toBeInstanceOf(Doctor);
        expect(doctor).toHaveProperty("id");
    });

    test('Should not be able to create a new doctor with CRM invali!', () => {
        expect(() => {
            Doctor.create({
                crm: '',
                email: 'email@gmail.com',
                userId: 'user_ID',
                specialityId: 'speciality_id',
            });
        }).toThrow('This CRM required!');
    });


    test('Should not be able to create a new doctor with CRM length invalid!', () => {
        expect(() => {
            Doctor.create({
                crm: '12345',
                email: 'email@gmail.com',
                userId: 'user_ID',
                specialityId: 'speciality_id',
            });
        }).toThrow('CRM must contain 6 characters');
    });


    test('Should not be able to create a new doctor with Email invalid!', () => {
        expect(() => {
            Doctor.create({
                crm: '123456',
                email: '',
                userId: 'user_ID',
                specialityId: 'speciality_id',
            });
        }).toThrow('This email required!');
    });
    
});