
export interface IPasswordCrypton {
    hash(password: string): Promise<string>;
}