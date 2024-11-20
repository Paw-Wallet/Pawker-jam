function Record({ data }: { data: any }) {
	return (
		<div className="flex justify-between items-center text-[#FFFFFF1A] py-4">
			<div className="flex flex-col gap-1">
				<span className="text-white text-base">{data.name}</span>
				<span className="text-[#989898] text-sm">{data.timeStamp}</span>
			</div>
			<div className="flex gap-1 items-center">
				<span
					className={`${data.point === "0" ? "text-[#FFFFFF80]" : "text-white font-bold"} text-base`}
				>
					{data.point}
				</span>
				<img alt="vector" className="w-4 h-4" src="./Vector.png" />
			</div>
		</div>
	);
}

export default Record;
