import { describe , test, expect} from "vitest";
import { User } from "../User";


describe("User Entities", () => {

    test('Should be able to create a new User', async () => {
     const user = await User.create({
        name: "Name_test",
        username: "Username_test",
        password: "Password_test"
     });

     console.log(user);
     
     expect(user).toBeInstanceOf(User);
     expect(user).toHaveProperty('id');
     expect(user.password).not.equal('Password_test');
    });
});