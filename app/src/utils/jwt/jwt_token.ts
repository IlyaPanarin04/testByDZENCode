import * as jwt from 'jsonwebtoken';
export function CreateToken(id: string | Error) {
    const body = {id: id}
    return jwt.sign(body, 'TEST_KEY', {
        expiresIn: '12h'
    });
}

export function DecodedToken(token: string) {
    const decodedToken = jwt.verify(token, 'TEST_KEY');
    return decodedToken.id
}