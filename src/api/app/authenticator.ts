import Environment from './environment';
import jwt from 'jsonwebtoken';

export namespace Authenticator {

    export type UserData = {

        id: number;

        name: string;

    }

    export function isValid(bearer: string): boolean {

        const isValid = (function (bearer: string): boolean {

            const token = bearer.split(' ')[1];

            const decoded = jwt.verify(token, Environment.jwt.secret) as Authenticator.UserData;

            const isValid = decoded.id === 1 // TEMP

            return isValid;

        })(bearer);

        if (!isValid) {
            throw new Error('Invalid token');
        }

    }

    export function getToken(bearer: string): string {

        if (!bearer) {
            throw new Error('Authorization not found');
        }

    }


}

export default Authenticator;