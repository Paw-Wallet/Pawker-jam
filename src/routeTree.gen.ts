/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from "@tanstack/react-router";

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as AuthImport } from "./routes/_auth";
import { Route as AuthIndexImport } from "./routes/_auth/index";
import { Route as AuthProfileImport } from "./routes/_auth/profile";

// Create Virtual Routes

const AuthLobbyGameIdLazyImport = createFileRoute("/_auth/lobby/$gameId")();
const AuthDetailGameIdIndexLazyImport = createFileRoute(
	"/_auth/detail/$gameId/"
)();
const AuthDetailGameIdRegisteredLazyImport = createFileRoute(
	"/_auth/detail/$gameId/registered"
)();

// Create/Update Routes

const AuthRoute = AuthImport.update({
	id: "/_auth",
	getParentRoute: () => rootRoute,
} as any);

const AuthIndexRoute = AuthIndexImport.update({
	id: "/",
	path: "/",
	getParentRoute: () => AuthRoute,
} as any);

const AuthProfileRoute = AuthProfileImport.update({
	id: "/profile",
	path: "/profile",
	getParentRoute: () => AuthRoute,
} as any);

const AuthLobbyGameIdLazyRoute = AuthLobbyGameIdLazyImport.update({
	id: "/lobby/$gameId",
	path: "/lobby/$gameId",
	getParentRoute: () => AuthRoute,
} as any).lazy(() =>
	import("./routes/_auth/lobby/$gameId.lazy").then((d) => d.Route)
);

const AuthDetailGameIdIndexLazyRoute = AuthDetailGameIdIndexLazyImport.update({
	id: "/detail/$gameId/",
	path: "/detail/$gameId/",
	getParentRoute: () => AuthRoute,
} as any).lazy(() =>
	import("./routes/_auth/detail/$gameId/index.lazy").then((d) => d.Route)
);

const AuthDetailGameIdRegisteredLazyRoute =
	AuthDetailGameIdRegisteredLazyImport.update({
		id: "/detail/$gameId/registered",
		path: "/detail/$gameId/registered",
		getParentRoute: () => AuthRoute,
	} as any).lazy(() =>
		import("./routes/_auth/detail/$gameId/registered.lazy").then((d) => d.Route)
	);

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
	interface FileRoutesByPath {
		"/_auth": {
			id: "/_auth";
			path: "";
			fullPath: "";
			preLoaderRoute: typeof AuthImport;
			parentRoute: typeof rootRoute;
		};
		"/_auth/profile": {
			id: "/_auth/profile";
			path: "/profile";
			fullPath: "/profile";
			preLoaderRoute: typeof AuthProfileImport;
			parentRoute: typeof AuthImport;
		};
		"/_auth/": {
			id: "/_auth/";
			path: "/";
			fullPath: "/";
			preLoaderRoute: typeof AuthIndexImport;
			parentRoute: typeof AuthImport;
		};
		"/_auth/lobby/$gameId": {
			id: "/_auth/lobby/$gameId";
			path: "/lobby/$gameId";
			fullPath: "/lobby/$gameId";
			preLoaderRoute: typeof AuthLobbyGameIdLazyImport;
			parentRoute: typeof AuthImport;
		};
		"/_auth/detail/$gameId/registered": {
			id: "/_auth/detail/$gameId/registered";
			path: "/detail/$gameId/registered";
			fullPath: "/detail/$gameId/registered";
			preLoaderRoute: typeof AuthDetailGameIdRegisteredLazyImport;
			parentRoute: typeof AuthImport;
		};
		"/_auth/detail/$gameId/": {
			id: "/_auth/detail/$gameId/";
			path: "/detail/$gameId";
			fullPath: "/detail/$gameId";
			preLoaderRoute: typeof AuthDetailGameIdIndexLazyImport;
			parentRoute: typeof AuthImport;
		};
	}
}

// Create and export the route tree

interface AuthRouteChildren {
	AuthProfileRoute: typeof AuthProfileRoute;
	AuthIndexRoute: typeof AuthIndexRoute;
	AuthLobbyGameIdLazyRoute: typeof AuthLobbyGameIdLazyRoute;
	AuthDetailGameIdRegisteredLazyRoute: typeof AuthDetailGameIdRegisteredLazyRoute;
	AuthDetailGameIdIndexLazyRoute: typeof AuthDetailGameIdIndexLazyRoute;
}

const AuthRouteChildren: AuthRouteChildren = {
	AuthProfileRoute: AuthProfileRoute,
	AuthIndexRoute: AuthIndexRoute,
	AuthLobbyGameIdLazyRoute: AuthLobbyGameIdLazyRoute,
	AuthDetailGameIdRegisteredLazyRoute: AuthDetailGameIdRegisteredLazyRoute,
	AuthDetailGameIdIndexLazyRoute: AuthDetailGameIdIndexLazyRoute,
};

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);

export interface FileRoutesByFullPath {
	"": typeof AuthRouteWithChildren;
	"/profile": typeof AuthProfileRoute;
	"/": typeof AuthIndexRoute;
	"/lobby/$gameId": typeof AuthLobbyGameIdLazyRoute;
	"/detail/$gameId/registered": typeof AuthDetailGameIdRegisteredLazyRoute;
	"/detail/$gameId": typeof AuthDetailGameIdIndexLazyRoute;
}

export interface FileRoutesByTo {
	"/profile": typeof AuthProfileRoute;
	"/": typeof AuthIndexRoute;
	"/lobby/$gameId": typeof AuthLobbyGameIdLazyRoute;
	"/detail/$gameId/registered": typeof AuthDetailGameIdRegisteredLazyRoute;
	"/detail/$gameId": typeof AuthDetailGameIdIndexLazyRoute;
}

export interface FileRoutesById {
	__root__: typeof rootRoute;
	"/_auth": typeof AuthRouteWithChildren;
	"/_auth/profile": typeof AuthProfileRoute;
	"/_auth/": typeof AuthIndexRoute;
	"/_auth/lobby/$gameId": typeof AuthLobbyGameIdLazyRoute;
	"/_auth/detail/$gameId/registered": typeof AuthDetailGameIdRegisteredLazyRoute;
	"/_auth/detail/$gameId/": typeof AuthDetailGameIdIndexLazyRoute;
}

export interface FileRouteTypes {
	fileRoutesByFullPath: FileRoutesByFullPath;
	fullPaths:
		| ""
		| "/profile"
		| "/"
		| "/lobby/$gameId"
		| "/detail/$gameId/registered"
		| "/detail/$gameId";
	fileRoutesByTo: FileRoutesByTo;
	to:
		| "/profile"
		| "/"
		| "/lobby/$gameId"
		| "/detail/$gameId/registered"
		| "/detail/$gameId";
	id:
		| "__root__"
		| "/_auth"
		| "/_auth/profile"
		| "/_auth/"
		| "/_auth/lobby/$gameId"
		| "/_auth/detail/$gameId/registered"
		| "/_auth/detail/$gameId/";
	fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
	AuthRoute: typeof AuthRouteWithChildren;
}

const rootRouteChildren: RootRouteChildren = {
	AuthRoute: AuthRouteWithChildren,
};

export const routeTree = rootRoute
	._addFileChildren(rootRouteChildren)
	._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_auth"
      ]
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/profile",
        "/_auth/",
        "/_auth/lobby/$gameId",
        "/_auth/detail/$gameId/registered",
        "/_auth/detail/$gameId/"
      ]
    },
    "/_auth/profile": {
      "filePath": "_auth/profile.tsx",
      "parent": "/_auth"
    },
    "/_auth/": {
      "filePath": "_auth/index.tsx",
      "parent": "/_auth"
    },
    "/_auth/lobby/$gameId": {
      "filePath": "_auth/lobby/$gameId.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/detail/$gameId/registered": {
      "filePath": "_auth/detail/$gameId/registered.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/detail/$gameId/": {
      "filePath": "_auth/detail/$gameId/index.lazy.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
