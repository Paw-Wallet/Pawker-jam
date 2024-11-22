import Record from "./Record";

const recordList = [
	{
		name: "Dogwifhat x MEW",
		timeStamp: "Oct 13th, 3:56AM",
		point: "+20,000",
	},
	{
		name: "Bonk x Jupiter",
		timeStamp: "Oct 12th, 4:23PM",
		point: "-4,000",
	},
	{
		name: "Paw Wallet x Trekn",
		timeStamp: "Oct 11th, 10:10AM",
		point: "0",
	},
];

function RecordList() {
	return (
		<div className="p-4 flex flex-col gap-2 rounded-lg border-[1px] border-[#3C3C3C]">
			<span className="text-xl font-bold text-[#FFFFFF80]">Game Records</span>
			<div className="grid grid-cols-1 divide-y divide-[#FFFFFF1A]">
				{recordList.map((item, index) => (
					<Record key={index} data={item} />
				))}
			</div>
		</div>
	);
}

export default RecordList;
