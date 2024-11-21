import { useMatchRoute, useNavigate } from "@tanstack/react-router";
import clsx from "clsx";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface NavItemProps {
	to: string;
	icon: IconDefinition;
	label: string;
}

export default function NavItem({ to, icon, label }: NavItemProps) {
	const navigate = useNavigate();
	const matchRoute = useMatchRoute();

	const isActive = matchRoute({ to });

	return (
		<div
			className={clsx(
				"flex items-center justify-center gap-2 p-3 cursor-pointer rounded-xl text-[#FFFFFF66]",
				{
					"text-primary font-bold bg-[#43434338] text-white": isActive,
				}
			)}
			onClick={() => navigate({ to })}
		>
			<FontAwesomeIcon
				icon={icon}
				className={clsx("transition-colors", {
					"text-[#D6763A]": isActive,
					"text-[#FFFFFF80]": !isActive,
				})}
			/>
			{label}
		</div>
	);
}
