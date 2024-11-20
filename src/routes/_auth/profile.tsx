import Account from "@/components/Profile/Account";
import Record from "@/components/Profile/Record";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/_auth/profile")({
	component: RouteComponent,
});

const recordList = [
	{
		name: "Dogwifhat x MEW",
		timeStamp: "Oct 13th, 3:56AM",
		point: "+20,000",
	},
	{
		name: "Bonk x Jupiter",
		timeStamp: "Oct 12th, 4:23PM",
		point: "-4,000",
	},
	{
		name: "Paw Wallet x Trekn",
		timeStamp: "Oct 11th, 10:10AM",
		point: "0",
	},
];

function RouteComponent() {
	return (
		<div className="overflow-hidden bg-[#2C2C2C]">
			<div className="w-full h-full px-4 flex flex-col gap-10">
				<div className="w-full flex justify-between">
					<Account />
					<button className="border-[1px] border-[#493B2D] bg-[#E591000D] p-3 rounded-[4px]">
						Edit profile
					</button>
				</div>
				<div className="w-full px-1 flex justify-between items-center">
					<div className="flex flex-col gap-2">
						<span className="text-sm font-default text-[#FFFFFF80]">Blaze</span>
						<div className="flex gap-2 items-center">
							<img alt="vector" className="w-5 h-5" src="./Vector.png" />
							<span className="text-white text-2xl font-bold">25,000</span>
						</div>
						<div className="text-xs text-[#FFFFFFB2] flex gap-2">
							<span>≈</span>
							<span>25,000 USDC</span>
						</div>
					</div>
					{true ? (
						<div className="flex gap-4">
							<div className="w-14 h-14 px-3 py-2 rounded-full bg-[#040404] flex justify-center items-center">
								<span className="text-white font-bold">Sell</span>
							</div>
							<div className="w-14 h-14 px-3 py-2 rounded-full bg-gradient-to-b from-[#FF8437] to-[#FF9C5F] flex justify-center items-center">
								<span className="text-white font-bold">Buy</span>
							</div>
						</div>
					) : (
						<div className="p-3 rounded border-[1px] border-[#D9D9D91A]">
							<span className="text-sm text-[#FFFEFE80]">
								Sell/Buy is coming soon
							</span>
						</div>
					)}
				</div>
				<div className="px-4 py-6 rounded-lg border-[1px] border-[#3C3C3C] flex justify-between">
					<div className="flex flex-col gap-1">
						<div className="flex gap-2 items-center">
							<img alt="vector" className="w-3 h-3" src="./Vector.png" />
							<span className="text-white text-base font-bold">32K</span>
						</div>
						<span className="text-sm text-[#FFFFFFB2] font-default">Won</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="text-base font-bold">132/22</span>
						<span className="text-sm text-[#FFFFFFB2] font-default">
							Won/Lost
						</span>
					</div>
					<div className="flex flex-col gap-1">
						<span className="text-base font-bold">1211</span>
						<span className="text-sm text-[#FFFFFFB2] font-default">
							Hand played
						</span>
					</div>
				</div>
				<div className="p-4 flex flex-col gap-2 rounded-lg border-[1px] border-[#3C3C3C]">
					<span className="text-xl font-bold text-[#FFFFFF80]">
						Game Records
					</span>
					<div className="grid grid-cols-1 divide-y">
						{recordList.map((item, index) => (
							<Record key={index} data={item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
