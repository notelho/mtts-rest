import UserData from '../interfaces/user-data.interface';
import Environment from './environment';
import jwt from 'jsonwebtoken';

export class Authenticator {

    readonly bearer: string;

    readonly token: string;

    readonly user: UserData;

    readonly valid: boolean;

    constructor(bearer: string) {

        this.bearer = bearer;

        const { token, userData, isValid } = this.verifyToken(this.bearer);

        this.token = token;

        this.user = userData;

        this.valid = isValid;
    }

    private verifyToken(bearer: string) {

        let token: string;

        let userData: UserData;

        let isValid: boolean;

        try {

            token = bearer.split(' ')[1];

            userData = jwt.verify(token, Environment.jwt.secret) as UserData; // TEMP

            isValid = userData.id === 1; // TEMP

        } catch (error) {

            throw new Error('Invalid token provided');

        }

        return { token, userData, isValid };
    }

}

export default Authenticator;
