import Artifact from './Artifact';
import Mark from './Mark';
import Role from './Role';

interface Player {
	seat: number;
	role: Role;
	shielded?: boolean;
	artifacts?: Artifact[];
	marks?: Mark[];
}

export default Player;
