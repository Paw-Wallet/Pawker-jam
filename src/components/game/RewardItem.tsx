import { PointIcon } from "../Icon";

export const RewardItem = ({ reward }: { reward: string | number }) => {
	return (
		<div className="bg-gradient-to-r from-[#FF8437] to-[#FF9E62] p-[1px] rounded-lg">
			<div className="bg-[#49372D] w-full h-full px-4 py-3 flex items-center justify-between rounded-lg">
				<p className="text-sm leading-4 font-bold text-[#FF8437B2]">REWARDS</p>
				<div className="flex items-center gap-1.5">
					<PointIcon />
					<p className="text-base leading-4 font-bold">
						{reward.toLocaleString()}
					</p>
				</div>
			</div>
		</div>
	);
};
