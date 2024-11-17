import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth")({
	component: RouteComponent,
});

export default function RouteComponent() {
	return (
		<div>
			<Outlet />
		</div>
	);
}
