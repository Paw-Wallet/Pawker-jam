import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth/detail/$gameId/")({
	component: RouteComponent,
});

function RouteComponent() {
	return "Hello /_auth/detail/$gameId!";
}
