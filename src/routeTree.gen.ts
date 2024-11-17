/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from "./routes/__root";
import { Route as AuthImport } from "./routes/_auth";
import { Route as AuthIndexImport } from "./routes/_auth/index";
import { Route as AuthProfileImport } from "./routes/_auth/profile";

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
	}
}

// Create and export the route tree

interface AuthRouteChildren {
	AuthProfileRoute: typeof AuthProfileRoute;
	AuthIndexRoute: typeof AuthIndexRoute;
}

const AuthRouteChildren: AuthRouteChildren = {
	AuthProfileRoute: AuthProfileRoute,
	AuthIndexRoute: AuthIndexRoute,
};

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren);

export interface FileRoutesByFullPath {
	"": typeof AuthRouteWithChildren;
	"/profile": typeof AuthProfileRoute;
	"/": typeof AuthIndexRoute;
}

export interface FileRoutesByTo {
	"/profile": typeof AuthProfileRoute;
	"/": typeof AuthIndexRoute;
}

export interface FileRoutesById {
	__root__: typeof rootRoute;
	"/_auth": typeof AuthRouteWithChildren;
	"/_auth/profile": typeof AuthProfileRoute;
	"/_auth/": typeof AuthIndexRoute;
}

export interface FileRouteTypes {
	fileRoutesByFullPath: FileRoutesByFullPath;
	fullPaths: "" | "/profile" | "/";
	fileRoutesByTo: FileRoutesByTo;
	to: "/profile" | "/";
	id: "__root__" | "/_auth" | "/_auth/profile" | "/_auth/";
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
        "/_auth/"
      ]
    },
    "/_auth/profile": {
      "filePath": "_auth/profile.tsx",
      "parent": "/_auth"
    },
    "/_auth/": {
      "filePath": "_auth/index.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
