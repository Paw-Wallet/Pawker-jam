import NavMenu from "@/components/NavMenu/NavMenu";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
	component: RouteComponent,
});

export default function RouteComponent() {
	return (
		<div className="px-4 pt-11 mb-[120px]">
			<Outlet />
			<NavMenu />
		</div>
	);
}
