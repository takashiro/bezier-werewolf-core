import Card from './Card';
import LynchVote from './LynchVote';

interface LynchResult {
	progress: number;
	limit: number;
	cards?: Card[];
	players?: LynchVote[];
}

export default LynchResult;
