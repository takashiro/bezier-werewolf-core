import GameConfig from './GameConfig';

interface Room extends GameConfig {
	id: number;
	salt: string;
	ownerKey?: string;
}

export default Room;
