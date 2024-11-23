import { useNavigate } from "@tanstack/react-router";
import React from "react";
import { FaX } from "react-icons/fa6";

export default function DetailHeader({
	children,
}: {
	children: React.ReactNode;
}) {
	const navigate = useNavigate();
	return (
		<div className="flex items-center justify-between">
			<p className="font-bold text-base leading-[18px] text-[#FFFFFF99]">
				{children}
			</p>
			<div
				className="w-9 h-9 flex items-center justify-center bg-[#FF843780] rounded-full"
				onClick={() => navigate({ to: "/" })}
			>
				<FaX size={12} />
			</div>
		</div>
	);
}
