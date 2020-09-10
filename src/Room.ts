import Role from './Role';

interface Room {
	id: number;
	salt: string;
	ownerKey: string;
	roles: Role[];
}

export default Room;
