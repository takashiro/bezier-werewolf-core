import Role from './Role';
import Team from './Team';

const ship = new Map<Role, Team>();

ship.set(Role.Unknown, Team.Unknown);
ship.set(Role.Werewolf, Team.Werewolf);
ship.set(Role.Villager, Team.Villager);
ship.set(Role.Seer, Team.Villager);
ship.set(Role.Tanner, Team.Tanner);
ship.set(Role.Minion, Team.Werewolf);
ship.set(Role.Troublemaker, Team.Villager);
ship.set(Role.Robber, Team.Villager);
ship.set(Role.Drunk, Team.Villager);
ship.set(Role.Mason, Team.Villager);
ship.set(Role.Hunter, Team.Villager);
ship.set(Role.Witch, Team.Villager);
ship.set(Role.AlphaWolf, Team.Werewolf);
ship.set(Role.DreamWolf, Team.Werewolf);
ship.set(Role.Prince, Team.Villager);
ship.set(Role.MysticWolf, Team.Werewolf);
ship.set(Role.Cursed, Team.Villager);
ship.set(Role.ParanormalInvestigator, Team.Villager);
ship.set(Role.Insomniac, Team.Villager);
ship.set(Role.Doppelganger, Team.Unknown);
ship.set(Role.Sentinel, Team.Villager);
ship.set(Role.ApprenticeSeer, Team.Villager);
ship.set(Role.VillageIdiot, Team.Villager);
ship.set(Role.Revealer, Team.Villager);
ship.set(Role.Curator, Team.Villager);
ship.set(Role.Bodyguard, Team.Villager);

export default ship;
