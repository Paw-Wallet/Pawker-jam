import { faUser } from "@fortawesome/free-solid-svg-icons";
import { RewardItem } from "./RewardItem";
import { StartTimeStatus } from "./StartTimeStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export interface GameProps {
	name: string;
	partner: { image: string; name: string }[];
	reward: string | number;
	image: string;
	registered: string[];
	startAt: Date;
	slot: number;
	isRegistered: boolean;
}

export const GameCard: React.FC<GameProps> = ({
	name,
	partner,
	reward,
	image,
	registered,
	startAt,
	slot,
	isRegistered,
}) => {
	return (
		<div className="p-4 bg-[#352E2C] border-[2px] border-[#FFFFFF0D] rounded-xl">
			<Header image={image} startAt={startAt} />
			<Title name={name} />
			<Partners partners={partner} />
			<Reward reward={reward} />
			<Footer isRegistered={isRegistered} registered={registered} slot={slot} />
		</div>
	);
};

const Header: React.FC<{ image: string; startAt: Date }> = ({
	image,
	startAt,
}) => (
	<div className="flex justify-between">
		<img
			alt="Game thumbnail"
			className="h-[100px] w-[100px] rounded-xl object-cover"
			src={image}
		/>
		<StartTimeStatus startAt={startAt} />
	</div>
);

const Title: React.FC<{ name: string }> = ({ name }) => (
	<h3 className="mt-6 mb-4 font-bold text-xl leading-6">{name}</h3>
);

const Partners: React.FC<{ partners: { image: string; name: string }[] }> = ({
	partners,
}) => (
	<div className="flex items-center flex-wrap gap-4">
		{partners.map((partner) => (
			<div key={partner.name} className="flex items-center gap-1">
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

const Reward: React.FC<{ reward: string | number }> = ({ reward }) => (
	<div className="my-4">
		<RewardItem reward={reward} />
	</div>
);

const Footer: React.FC<{
	registered: string[];
	slot: number;
	isRegistered: boolean;
}> = ({ registered, slot, isRegistered }) => (
	<div className="flex gap-2">
		<div className="flex items-center justify-center gap-2 px-5 py-4 bg-[#00000033] rounded-xl">
			<FontAwesomeIcon icon={faUser} size="xs" />
			<p className="text-[#FFFFFFB2] text-sm leading-4">
				{registered.length}/{slot}
			</p>
		</div>
		<div
			className={clsx(
				"flex-1 flex items-center justify-center rounded-xl px-4 py-2 font-bold text-base leading-5 text-white h-auto",
				{
					"bg-[#FF8437]": isRegistered,
					"bg-black": !isRegistered,
				}
			)}
		>
			{isRegistered ? "Play" : "See details"}
		</div>
	</div>
);
