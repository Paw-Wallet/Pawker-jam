import Header from "@/components/Profile/Header";
import GameInformation from "@/components/Profile/GameInformation";
import Operation from "@/components/Profile/Operation";
import RecordList from "@/components/Profile/RecordList";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import EditProfile from "@/components/Profile/EditProfile";

export const Route = createFileRoute("/_auth/profile")({
	component: Profile,
});

function Profile() {
	const [isEdition, setEdition] = useState(false);
	return (
		<div className="overflow-hidden bg-[#2C2C2C]">
			{!isEdition ? (
				<div className="w-full h-full px-4 flex flex-col gap-10">
					<Header onEditProfile={setEdition} />
					<Operation />
					<GameInformation />
					<RecordList />
				</div>
			) : (
				<EditProfile onProfile={setEdition} />
			)}
		</div>
	);
}
