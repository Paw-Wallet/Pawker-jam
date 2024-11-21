import Header from "@/components/Profile/Header";
import GameInformation from "@/components/Profile/GameInformation";
import Operation from "@/components/Profile/Operation";
import RecordList from "@/components/Profile/RecordList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/profile")({
	component: Profile,
});

function Profile() {
	return (
		<div className="overflow-hidden bg-[#2C2C2C]">
			<div className="w-full h-full px-4 flex flex-col gap-10">
				<Header />
				<Operation />
				<GameInformation />
				<RecordList />
			</div>
		</div>
	);
}
