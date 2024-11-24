import * as React from "react";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import DetailHeader from "@/components/detail/DetailHeader";
import clsx from "clsx";
import { FaCheckCircle } from "react-icons/fa";
import useTruncateWallet from "@/hook/useTruncateWallet";

export const Route = createLazyFileRoute("/_auth/detail/$gameId/quest")({
	component: RouteComponent,
});

interface User {
	name: string;
	walletAddress: string;
}

interface Quest {
	name: string;
	description?: string;
	isComplete: boolean;
	type?: string;
	btnContent?: string;
}

interface MockData {
	name: string;
	quest: Quest[];
}

const mockUser: User = {
	name: "abc",
	walletAddress: "EbGWwCXS4YqRp2Kq7cYPuFmJsboPwJv4KeoyrV3cW45m",
};

const mock: MockData = {
	name: "Paw Wallet x Trekn tournament",
	quest: [
		{
			name: "Connect SOL wallet",
			description: "Reward will be sent to this wallet",
			isComplete: true,
			type: "wallet",
			btnContent: "connect",
		},
		{
			name: "Follow Paw Wallet on X",
			isComplete: true,
		},
		{
			name: "Like & Retweet Paw Wallet post xyzasd",
			isComplete: false,
			btnContent: "verify",
		},
		{
			name: "Follow Trekn on X",
			isComplete: false,
			btnContent: "follow",
		},
		{
			name: "Like & Retweet Trekn post",
			isComplete: false,
			btnContent: "verify",
		},
	],
};

function RouteComponent() {
	const navigate = useNavigate();
	const questComplete = mock.quest.filter((item) => item.isComplete).length;

	return (
		<div className="flex flex-col h-full">
			<DetailHeader to={".."}>{mock.name}</DetailHeader>
			<div className="mt-[56px] mb-[48px]">
				<p className="text-center text-sm leading-4 font-bold">
					499<span className="text-[#F5F5F580]">/500 registered</span>
				</p>
				<p className="text-center mt-3 mb-6 text-xl font-bold leading-6">
					Complete the Quests to register
				</p>
				<div className="grid grid-cols-5 items-center rounded-xl overflow-hidden flex-1">
					{mock.quest.map((quest, idx) => (
						<div
							key={idx}
							className={clsx(
								"flex items-center justify-center h-12 relative",
								{
									"bg-[#FF8437]": quest.isComplete,
									"bg-[#474747]": !quest.isComplete,
								}
							)}
							style={{
								background:
									questComplete === idx + 1
										? "linear-gradient(90deg, #FF8437 50%, #474747 50%)"
										: "",
							}}
						>
							{questComplete === idx + 1 ? (
								<div className="bg-black w-12 h-12 rounded-full flex items-center justify-center">
									{questComplete}
								</div>
							) : (
								<div
									className={clsx("w-1 h-1 rounded-full", {
										"bg-black": quest.isComplete,
										"bg-white": !quest.isComplete,
									})}
								/>
							)}
						</div>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-6">
				{mock.quest.map((quest, idx) => (
					<QuestItem key={idx} quest={quest} />
				))}
			</div>
			<div
				className={clsx(
					"fixed left-0 bottom-0 w-full bg-[#222222] border-t border-[#D9D9D91A] pt-5 pb-10 px-4"
				)}
				onClick={() => navigate({ to: ".." })}
			>
				<div className="flex items-center justify-center gap-1">
					<p className="font-bold">Get back to see details</p>
				</div>
			</div>
		</div>
	);
}

interface QuestItemProps {
	quest: Quest;
}

const QuestItem: React.FC<QuestItemProps> = ({ quest }) => {
	const walletAddress = useTruncateWallet(mockUser.walletAddress);

	return (
		<div>
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-2 w-full truncate">
					{!quest.isComplete ? (
						<div
							className={clsx(
								"flex items-center justify-center w-4 h-4 rounded-full bg-[#5A5A5A]"
							)}
						/>
					) : (
						<FaCheckCircle color="#FF8437" />
					)}
					<p className="text-sm leading-4 truncate">{quest.name}</p>
				</div>
				{quest.isComplete ? (
					<>
						{quest.type === "wallet" && (
							<p className="flex-shrink-0 bg-[#434343] px-3 py-1 rounded-full text-sm leading-4 text-[#F3F3F3]">
								{walletAddress}
							</p>
						)}
					</>
				) : (
					<div className="flex-shrink-0 w-1/4 bg-[#FF8437] py-3 rounded-xl font-bold flex items-center justify-center capitalize">
						{quest.btnContent}
					</div>
				)}
			</div>
			<p className="text-sm leading-4 text-[#989898]">{quest?.description}</p>
		</div>
	);
};
