interface Partner {
	image: string;
	name: string;
}

export interface IRegisteredPlayer {
	id: number;
	username: string;
	avatar: string;
}

export interface IGame {
	name: string;
	partner: Partner[];
	reward: number;
	image: string;
	registered: IRegisteredPlayer[];
	startAt: Date;
	slot: number;
	isRegistered: boolean;
	description: string;
}
