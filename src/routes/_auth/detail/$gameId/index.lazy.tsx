import DetailHeader from "@/components/detail/DetailHeader";
import { RewardItem } from "@/components/game/RewardItem";
import {
	ClockIcon,
	InviteFillIcon,
	PointIcon,
	RuleBookIcon,
} from "@/components/Icon";
import { IGame } from "@/interface/game.interface";
import { createLazyFileRoute } from "@tanstack/react-router";
import clsx from "clsx";
import { FaUserPlus } from "react-icons/fa6";

export const Route = createLazyFileRoute("/_auth/detail/$gameId/")({
	component: RouteComponent,
});

const mock: IGame = {
	name: "Paw Wallet x Trekn Tournament",
	partner: [
		{ image: "/image/mock/paw-logo.png", name: "Paw Wallet" },
		{ image: "/image/mock/trekn-logo.png", name: "Trekn" },
	],
	reward: 25000,
	image: "/image/mock/game-detail.png",
	registered: Array.from({ length: 303 }, (_, i) => ({
		id: i + 1,
		username: `Player${i + 1}`,
		avatar:
			"https://imgv3.fotor.com/images/gallery/anime-male-avatar-with-a-pair-of-glasses-made-in-fotor-ai-anime-avatar-creator_2023-06-25-054224_ybzr.jpg",
	})),
	startAt: new Date(new Date().getTime() - 3600000),
	slot: 500,
	isRegistered: true,
	description: `
    <p>Get ready for a high-stakes showdown with the Paw Wallet & Trekn Poker Tournament!</p>
    <p>This electrifying event brings together Web3 enthusiasts, NFT collectors, and poker fans for an unforgettable night of skill, strategy, and community.</p>
	</br>
    <p>Hosted by two pioneering platforms, Paw Wallet and Trekn, the tournament offers a chance to showcase your poker prowess while competing for exciting rewards, from exclusive NFTs and tokens to unique in-game benefits.</p>
  `,
};

function RouteComponent() {
	return (
		<div className="flex flex-col gap-6 h-full">
			<DetailHeader>Detail</DetailHeader>
			<img
				alt="game detail img"
				className="rounded-lg shadow-lg"
				src={mock.image}
			/>
			<TournamentDetails />
			<RewardItem reward={mock.reward} />
			<ActionsSection />
			<Line />
			<HostedBySection />
			<Line />
			<GameTypeSection />
			<Line />
			<RegisteredSection />
			<Line />
			<AboutTournamentSection />
			<div
				className={clsx(
					"fixed left-0 bottom-0 w-full bg-[#FF8437] pt-5 pb-10 px-4"
				)}
			>
				<div className="flex items-center justify-center gap-1">
					<p className="font-bold">Register with 0</p>
					<PointIcon />
				</div>
			</div>
		</div>
	);
}

const TournamentDetails = () => (
	<div>
		<p className="mb-4 text-xl leading-6 font-bold">{mock.name}</p>
		<div className="flex items-center gap-1">
			<ClockIcon />
			<p className="text-sm leading-4 text-[#FFFFFF99]">
				Starts at <span className="text-white">{formatDate(mock.startAt)}</span>
			</p>
		</div>
	</div>
);

const ActionsSection = () => (
	<div className="grid grid-cols-2 gap-2">
		<div className="flex flex-col items-center justify-center bg-[#FF8437] gap-1 py-3 rounded-lg">
			<FaUserPlus />
			<p className="text-sm leading-4 font-bold">Register</p>
		</div>
		<div className="flex flex-col items-center justify-center bg-[#424242] py-3 rounded-lg">
			<InviteFillIcon />
			<p className="text-sm leading-4 font-bold">Invite</p>
		</div>
	</div>
);

const HostedBySection = () => (
	<div className="flex flex-col gap-3">
		<p className="">Hosted by</p>
		{mock.partner.map((partner) => (
			<div key={partner.name} className="flex items-center gap-2">
				<img
					alt={partner.name}
					className="w-6 h-6 object-center object-cover rounded-full"
					src={partner.image}
				/>
				<p className="text-sm leading-4 text-[#FFFFFFB2]">{partner.name}</p>
			</div>
		))}
	</div>
);

const GameTypeSection = () => (
	<div className="flex items-center p-3 gap-3 bg-[#FF84371A] bg-gradient-to-r from-[#FF6F1666] to-[#2C2C2C00] rounded-lg">
		<RuleBookIcon />
		<div className="flex-1">
			<p>Texas Hold’em</p>
			<p className="text-sm text-[#FFFFFF80]">
				<span className="text-white">6</span> players / table
			</p>
		</div>
	</div>
);

const RegisteredSection = () => (
	<div className="flex flex-col gap-4">
		<div className="flex items-center justify-between">
			<p className="text-base font-semibold">
				{mock.registered.length} REGISTERED
			</p>
			<div className="flex items-center">
				<p className="text-sm">MAX {mock.slot}</p>
			</div>
		</div>
		<div className="flex gap-2 overflow-auto">
			<Users users={mock.registered} />
		</div>
	</div>
);

const Users = ({
	users,
}: {
	users: { avatar: string; username: string }[];
}) => {
	const displayedUsers = users.slice(0, 3);
	const remainingCount = users.length - displayedUsers.length;

	return (
		<div>
			<div className="flex -space-x-2 rtl:space-x-reverse">
				{displayedUsers.map((user, idx) => (
					<img
						key={idx}
						alt={user.username}
						className="w-7 h-7 rounded-full"
						src={user.avatar}
					/>
				))}
				{remainingCount > 0 && (
					<div className="flex items-center justify-center w-7 h-7 text-[8px] leading-[10px] text-xs font-medium text-white bg-[#FF8437] rounded-full">
						+{remainingCount}
					</div>
				)}
			</div>

			<div className="flex items-center gap-1 mt-3">
				{displayedUsers.map((user, idx) => (
					<span key={idx} className="whitespace-nowrap">
						{user.username}
						{idx < displayedUsers.length - 1 && ","}
					</span>
				))}
				{remainingCount > 0 && <span>and {remainingCount} more</span>}
			</div>
		</div>
	);
};

const AboutTournamentSection = () => (
	<div>
		<p className="text-lg font-bold">About Tournament</p>
		<div
			dangerouslySetInnerHTML={{ __html: mock.description }}
			className="text-sm text-gray-500"
		/>
	</div>
);

const Line = () => <div className="h-[1px] bg-[#FFFFFF1A] rounded-full" />;

const formatDate = (date: Date) => {
	const options: Intl.DateTimeFormatOptions = {
		month: "short",
		day: "numeric",
		hour: "numeric",
		minute: "numeric",
		hour12: true,
		timeZoneName: "short",
	};
	return date.toLocaleString("en-US", options);
};
