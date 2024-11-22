import { PointIcon } from "../Icon";
import Avatar from "../Profile/Avatar";

export const Header = () => {
	return (
		<div className="flex items-center justify-between">
			<div className="flex items-center gap-3">
				{/* <div className="w-14 h-14 rounded-full bg-gray-500"></div> */}
				<Avatar
					props="small"
					url="https://imgv3.fotor.com/images/gallery/anime-male-avatar-with-a-pair-of-glasses-made-in-fotor-ai-anime-avatar-creator_2023-06-25-054224_ybzr.jpg"
				/>
				<div className="flex flex-col gap-1">
					<p className="font-bold">anonglob</p>
					<p className="text-[#757575] text-sm leading-4">7FZZ...Mo5GH</p>
				</div>
			</div>
			<div className="flex items-center bg-[#E591000D] border border-[#493B2D] rounded-[4px]">
				<div className="bg-[#FFA5501A] rounded-[4px] p-3 flex items-center justify-center">
					<PointIcon />
				</div>
				<p className="p-3 text-sm leading-4 font-bold">
					{(5000).toLocaleString()}
				</p>
			</div>
		</div>
	);
};
