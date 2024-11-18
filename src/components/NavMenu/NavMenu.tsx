import NavItem from "./NavItem";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";

const navMenuItems = [
	{
		to: "/",
		icon: faHome,
		label: "Home",
	},
	{
		to: "/profile",
		icon: faUser,
		label: "Profile",
	},
];

export default function NavMenu() {
	return (
		<div
			className="fixed bottom-0 w-full bg-[#2C2C2C] border-t border-[#D9D9D91A] pt-5 pb-10 px-4
		grid grid-cols-2"
		>
			{navMenuItems.map((item, idx) => (
				<NavItem {...item} key={idx} />
			))}
		</div>
	);
}
