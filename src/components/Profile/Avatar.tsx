function Avatar({ props, url }: { props: string; url: string }) {
	return (
		<div
			className={`p-[2px] rounded-full bg-gradient-to-b w- to-[#FFD2AA] from-[#F5832D] ${props === "small" ? "w-14 h-14" : "w-[82px] h-[82px]"}`}
		>
			<div
				className={`${props === "small" ? "w-[52px] h-[52px]" : "w-[78px] h-[78px]"} bg-[#2c2c2c] rounded-full flex justify-center items-center`}
			>
				<img
					alt="avatar"
					className={`${props === "small" ? "w-12 h-12" : "w-[74px] h-[74px]"} rounded-full object-cover`}
					src={url}
				/>
			</div>
		</div>
	);
}

export default Avatar;
