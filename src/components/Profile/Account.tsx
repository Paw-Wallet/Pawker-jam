import Avatar from "./Avatar";

function Account() {
	return (
		<div className="flex gap-[13px]">
			<Avatar props="small" />
			<div className="flex flex-col gap-1">
				<span className="text-white font-default">anonglob</span>
				<span className="text-[#757575]">7FZZ...Mo5GH</span>
			</div>
		</div>
	);
}

export default Account;
