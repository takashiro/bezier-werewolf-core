import Artifact from './Artifact.js';
import Mark from './Mark.js';
import Role from './Role.js';

interface Player {
	seat: number;
	role: Role;
	shielded?: boolean;
	artifacts?: Artifact[];
	marks?: Mark[];
}

export default Player;
