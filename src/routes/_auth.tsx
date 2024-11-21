import NavMenu from "@/components/NavMenu/NavMenu";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
	component: RouteComponent,
});

export default function RouteComponent() {
	return (
		<div className="flex flex-col h-screen">
			<div className="flex-1 px-4 pt-11 pb-[120px]">
				<Outlet />
			</div>
			<NavMenu />
		</div>
	);
}
