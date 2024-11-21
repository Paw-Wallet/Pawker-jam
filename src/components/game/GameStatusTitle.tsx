import { RegisteredIcon, UpcomingIcon } from "../Icon";

export default function GameStatusTitle({
	type,
}: {
	type: "registered" | "upcoming";
}) {
	return (
		<div className="flex items-center gap-2">
			<div className="bg-[#FF84371A] w-9 h-9 flex items-center justify-center rounded-[4px]">
				{type === "upcoming" ? <UpcomingIcon /> : <RegisteredIcon />}
			</div>
			<p className="uppercase font-bold text-sm leading-4">{type}</p>
		</div>
	);
}
