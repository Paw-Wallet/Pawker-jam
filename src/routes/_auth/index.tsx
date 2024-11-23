// Route.tsx
import { Header } from "@/components/header";
import GameStatusTitle from "@/components/game/GameStatusTitle";
import { createFileRoute } from "@tanstack/react-router";
import { GameCard } from "@/components/game";
import { IGame } from "@/interface/game.interface";

export const Route = createFileRoute("/_auth/")({
	component: RouteComponent,
});

interface GameSectionProps {
	titleType: "registered" | "upcoming";
	games: IGame[];
}

const mockGameProps: IGame[] = [
	{
		name: "Bonk x Jupiter tournament",
		partner: [
			{ image: "/image/mock/bonk-logo.png", name: "Bonk" },
			{ image: "/image/mock/jupiter-logo.png", name: "Jupiter" },
		],
		reward: 25000,
		image: "/image/mock/game-2.png",
		registered: Array.from({ length: 303 }, (_, i) => ({
			id: i + 1,
			username: `Player${i + 1}`,
			avatar:
				"https://imgv3.fotor.com/images/gallery/anime-male-avatar-with-a-pair-of-glasses-made-in-fotor-ai-anime-avatar-creator_2023-06-25-054224_ybzr.jpg",
		})),
		startAt: new Date(new Date().getTime() + 3600000),
		slot: 10,
		isRegistered: false,
		description: "aaa",
	},
	{
		name: "Bonk x Jupiter tournament 2",
		partner: [
			{ image: "/image/mock/bonk-logo.png", name: "Bonk" },
			{ image: "/image/mock/jupiter-logo.png", name: "Jupiter" },
		],
		reward: 25000,
		image: "/image/mock/game-2.png",
		registered: Array.from({ length: 303 }, (_, i) => ({
			id: i + 1,
			username: `Player${i + 1}`,
			avatar:
				"https://imgv3.fotor.com/images/gallery/anime-male-avatar-with-a-pair-of-glasses-made-in-fotor-ai-anime-avatar-creator_2023-06-25-054224_ybzr.jpg",
		})),
		description: "aa",
		startAt: new Date(new Date().getTime() + 3600000),
		slot: 10,
		isRegistered: false,
	},
];

const mockLiveGameProps: IGame[] = [
	{
		name: "Paw Wallet x Trekn tournament",
		partner: [
			{ image: "/image/mock/paw-logo.png", name: "Paw Wallet" },
			{ image: "/image/mock/trekn-logo.png", name: "Trekn" },
		],
		reward: 1000,
		image: "/image/mock/game-1.png",
		registered: Array.from({ length: 303 }, (_, i) => ({
			id: i + 1,
			username: `Player${i + 1}`,
			avatar:
				"https://imgv3.fotor.com/images/gallery/anime-male-avatar-with-a-pair-of-glasses-made-in-fotor-ai-anime-avatar-creator_2023-06-25-054224_ybzr.jpg",
		})),
		description: "aa",
		startAt: new Date(new Date().getTime() - 3600000),
		slot: 20,
		isRegistered: true,
	},
];

const GameSection: React.FC<GameSectionProps> = ({ titleType, games }) => (
	<div className="mt-10">
		<GameStatusTitle type={titleType} />
		<div className="flex flex-col mt-4 gap-4">
			{games.map((game) => (
				<GameCard {...game} key={game.name} />
			))}
		</div>
	</div>
);

function RouteComponent() {
	return (
		<>
			<Header />
			<GameSection games={mockLiveGameProps} titleType="registered" />
			<GameSection games={mockGameProps} titleType="upcoming" />
		</>
	);
}
