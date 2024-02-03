import Vote from './Vote.js';
import Progress from './Progress.js';

interface LynchResult {
	progress: Progress;
	votes?: Vote[];
}

export default LynchResult;
