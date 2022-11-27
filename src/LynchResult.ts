import Vote from './Vote';
import Progress from './Progress';

interface LynchResult {
	progress: Progress;
	votes?: Vote[];
}

export default LynchResult;
