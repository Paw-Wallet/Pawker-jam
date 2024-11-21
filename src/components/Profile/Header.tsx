import { Dispatch, SetStateAction } from "react";
import Account from "./Account";

function Header({
	onEditProfile,
}: {
	onEditProfile: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<div className="w-full flex justify-between">
			<Account />
			<button
				className="border-[1px] border-[#493B2D] bg-[#E591000D] p-3 rounded-[4px]"
				onClick={() => onEditProfile(true)}
			>
				Edit profile
			</button>
		</div>
	);
}

export default Header;
