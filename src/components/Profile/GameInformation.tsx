function GameInformation() {
	return (
		<div className="px-4 py-6 rounded-lg border-[1px] border-[#3C3C3C] flex justify-between">
			<div className="flex flex-col gap-1">
				<div className="flex gap-2 items-center">
					<img alt="icon" className="w-3 h-3" src="./image/ic-unit.png" />
					<span className="text-white text-base font-bold">32K</span>
				</div>
				<span className="text-sm text-[#FFFFFFB2] font-default">Won</span>
			</div>
			<div className="flex flex-col gap-1">
				<span className="text-base font-bold">132/22</span>
				<span className="text-sm text-[#FFFFFFB2] font-default">Won/Lost</span>
			</div>
			<div className="flex flex-col gap-1">
				<span className="text-base font-bold">1211</span>
				<span className="text-sm text-[#FFFFFFB2] font-default">
					Hand played
				</span>
			</div>
		</div>
	);
}

export default GameInformation;
