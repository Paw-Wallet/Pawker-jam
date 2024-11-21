import Avatar from "./Avatar";

function Account() {
	return (
		<div className="flex gap-[13px]">
			<Avatar
				props="small"
				url={
					"https://imgv3.fotor.com/images/gallery/anime-male-avatar-with-a-pair-of-glasses-made-in-fotor-ai-anime-avatar-creator_2023-06-25-054224_ybzr.jpg"
				}
			/>
			<div className="flex flex-col gap-1">
				<span className="text-white font-default">anonglob</span>
				<span className="text-[#757575]">7FZZ...Mo5GH</span>
			</div>
		</div>
	);
}

export default Account;
