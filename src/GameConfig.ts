import Role from './Role.js';

interface GameConfig {
	roles: Role[];
	cardNum?: number;
	random?: boolean;
	loneWolf?: boolean;
}

export default GameConfig;
