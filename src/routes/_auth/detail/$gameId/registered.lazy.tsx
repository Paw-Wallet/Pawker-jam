import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import WithCubeLayout from "@/components/layout/WithCubeLayout";
import { BottomWrapperContent } from "@/components/NavMenu";
import useCountdown from "@/hook/useCountdown";
import useTruncateWallet from "@/hook/useTruncateWallet";

interface Tournament {
	id: string;
	name: string;
	startDate: Date;
	wallet: string;
	gameType: string;
}

const mockTournament: Tournament = {
	id: "1",
	name: "Paw Wallet x Trekn tournament",
	startDate: new Date("2024-12-20T23:00:00Z"),
	wallet: "7FZZsjadkashdjMo5GH",
	gameType: "Texas hold’em",
};

export const Route = createLazyFileRoute("/_auth/detail/$gameId/registered")({
	component: RouteComponent,
});

function RouteComponent() {
	const navigate = useNavigate();

	const tournament: Tournament = mockTournament;

	const countdown = useCountdown(tournament.startDate);

	const walletAddress = useTruncateWallet(tournament.wallet);

	return (
		<WithCubeLayout>
			<div className="flex flex-col items-center mb-11">
				<p>🎉</p>
				<p className="text-[28px] leading-8 font-bold">Register successful</p>
				<p className="text-center mt-3 text-base leading-[22px] text-[#FFFFFF80] px-3">
					Brace yourself for the tournament grind Locked and loaded.
				</p>
			</div>
			<div className="border border-[#FFA31A] py-4 px-5 flex flex-col gap-4">
				<div className="flex justify-between items-start">
					<p className="text-sm leading-4 text-[#FFFFFFB2]">Tournament</p>
					<div className="w-1/2 text-right">
						<p className="text-base leading-[18px]">{tournament.name}</p>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<p className="text-sm leading-4 text-[#FFFFFFB2]">Start date</p>
					<div className="w-1/2 text-right">
						<p className="text-base leading-[18px]">
							{tournament.startDate.toLocaleString("en-US", {
								month: "short",
								day: "numeric",
								hour: "numeric",
								minute: "numeric",
								hour12: true,
							})}{" "}
							(UTC)
						</p>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<p className="text-sm leading-4 text-[#FFFFFFB2]">Your wallet</p>
					<div className="w-1/2 text-right">
						<p className="text-base leading-[18px]">{walletAddress}</p>
					</div>
				</div>
				<div className="flex justify-between items-center">
					<p className="text-sm leading-4 text-[#FFFFFFB2]">Game type</p>
					<div className="w-1/2 text-right">
						<p className="text-base leading-[18px]">{tournament.gameType}</p>
					</div>
				</div>
			</div>
			<div className="flex-1 flex flex-col items-center justify-center">
				<p className="text-base leading-[22px]">This tournament begins in</p>
				<p className="text-base leading-[22px]">{countdown}</p>
			</div>
			<BottomWrapperContent>
				<p
					className="pb-3 font-bold text-center"
					onClick={() => navigate({ to: "/" })}
				>
					Get back to Home
				</p>
			</BottomWrapperContent>
		</WithCubeLayout>
	);
}
