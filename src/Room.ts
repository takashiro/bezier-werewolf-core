import GameConfig from './GameConfig.js';

interface Room extends GameConfig {
	id: number;
	salt: string;
	ownerKey?: string;
}

export default Room;
