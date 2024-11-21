import WithCubeLayout from "@/components/layout/WithCubeLayout";
import { BottomWrapperContent } from "@/components/NavMenu";
import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/lobby/$gameId")({
	component: RouteComponent,
});

function RouteComponent() {
	const navigate = useNavigate();
	return (
		<WithCubeLayout>
			<div className="flex flex-col items-center justify-center">
				<img alt="game img" src="/image/mock/game-1.png" />
				<p className="font-bold text-[28px] leading-8 text-center text-[#FFFFFF4D] mt-3.5 w-2/3">
					Paw Wallet x Trekn tournament
				</p>
			</div>
			<div className="flex items-center justify-center flex-1">
				<div className="text-center mb-20">
					<p>Waiting for players ready</p>
					<p className="mt-2 text-[38px] leading-11 font-bold">
						3<span className="text-[#FFFFFF80]">/500</span>
					</p>
				</div>
			</div>
			<BottomWrapperContent>
				<p
					className="pb-3 font-bold text-center"
					onClick={() => navigate({ to: "/" })}
				>
					Leave the lobby
				</p>
			</BottomWrapperContent>
		</WithCubeLayout>
	);
}
