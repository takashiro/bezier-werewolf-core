interface Vote {
	/**
	 * The seat number of who submits the vote.
	 */
	source: number;

	/**
	 * The seat number of who is voted.
	 */
	target: number;
}

export default Vote;
