import { ClockIcon } from "../Icon";

interface StartTimeStatusProps {
	startAt: Date;
}

export const StartTimeStatus: React.FC<StartTimeStatusProps> = ({
	startAt,
}) => {
	const currentDate = new Date();
	const isStarted = startAt <= currentDate;

	const getStatusLabel = () => {
		if (isStarted) return "LIVE";
		return `${startAt.toLocaleString("default", { month: "short" })} ${startAt.getDate()}`;
	};

	const getFormattedTime = () => {
		if (isStarted) {
			const elapsedMilliseconds = currentDate.getTime() - startAt.getTime();
			const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

			const minutes = Math.floor(elapsedSeconds / 60);
			const seconds = elapsedSeconds % 60;

			return `${minutes}m ${seconds}s`;
		}

		return startAt.toLocaleTimeString("en-US", {
			hour: "numeric",
			hour12: true,
		});
	};

	const StatusIcon = () =>
		isStarted ? (
			<div className="w-2.5 h-2.5 bg-[#20CC51] border-[2px] border-[#ACECBE] rounded-full" />
		) : (
			<ClockIcon />
		);

	return (
		<div className="bg-[#FF84371A] rounded-full px-3 py-1.5 flex items-center gap-1.5 h-fit mt-auto">
			<StatusIcon />
			<div className="flex items-center">
				{getStatusLabel()} | {getFormattedTime()}
			</div>
		</div>
	);
};
