function Operation() {
	return (
		<div className="w-full px-1 flex justify-between items-center">
			<div className="flex flex-col gap-2">
				<span className="text-sm font-default text-[#FFFFFF80]">Blaze</span>
				<div className="flex gap-2 items-center">
					<img alt="vector" className="w-5 h-5" src="./image/ic-unit.png" />
					<span className="text-white text-2xl font-bold">25,000</span>
				</div>
				<div className="text-xs text-[#FFFFFFB2] flex gap-2">
					<span>≈</span>
					<span>25,000 USDC</span>
				</div>
			</div>
			{true ? (
				<div className="flex gap-4">
					<div className="w-14 h-14 px-3 py-2 rounded-full bg-[#040404] flex justify-center items-center">
						<span className="text-white font-bold">Sell</span>
					</div>
					<div className="w-14 h-14 px-3 py-2 rounded-full bg-gradient-to-b from-[#FF8437] to-[#FF9C5F] flex justify-center items-center">
						<span className="text-white font-bold">Buy</span>
					</div>
				</div>
			) : (
				<div className="p-3 rounded border-[1px] border-[#D9D9D91A]">
					<span className="text-sm text-[#FFFEFE80]">
						Sell/Buy is coming soon
					</span>
				</div>
			)}
		</div>
	);
}

export default Operation;
