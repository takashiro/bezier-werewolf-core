import Role from './Role';

interface GameConfig {
	roles: Role[];
	cardNum: number;
	random: boolean;
	loneWolf: boolean;
}

export default GameConfig;
