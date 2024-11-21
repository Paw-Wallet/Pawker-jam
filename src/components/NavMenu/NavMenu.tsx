import { useLocation } from "@tanstack/react-router";
import NavItem from "./NavItem";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { BottomWrapperContent } from "./BottomWrapperContent";

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
	const location = useLocation();

	return (
		<>
			{["/", "/profile"].includes(location.pathname) && (
				<BottomWrapperContent>
					<div className="grid grid-cols-2">
						{navMenuItems.map((item, idx) => (
							<NavItem {...item} key={idx} />
						))}
					</div>
				</BottomWrapperContent>
			)}
		</>
	);
}
