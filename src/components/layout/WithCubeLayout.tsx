import React from "react";

export default function WithCubeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col h-full">
			{children}
			<img
				alt="dicecube"
				className="absolute bottom-2 -z-[9] left-1/2 -translate-x-1/2"
				src="/image/layout/dicecube.png"
			/>
			<div className="-z-10 absolute left-0 right-0 top-[60%] bottom-0 bg-gradient-to-b from-[#2C2C2C] to-[#A55A04]" />
		</div>
	);
}
