import clsx from "clsx";
import React from "react";

export const BottomWrapperContent = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div
			className={clsx(
				"fixed left-0 bottom-0 w-full bg-[#2C2C2C] border-t border-[#D9D9D91A] pt-5 pb-10 px-4"
			)}
		>
			{children}
		</div>
	);
};
