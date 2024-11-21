import { useEffect, useState } from "react";

export default function useCountdown(targetDate: Date) {
	const [timeLeft, setTimeLeft] = useState("");

	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date();
			const difference = targetDate.getTime() - now.getTime();

			if (difference > 0) {
				const hours = Math.floor(difference / (1000 * 60 * 60));
				const minutes = Math.floor(
					(difference % (1000 * 60 * 60)) / (1000 * 60)
				);
				const seconds = Math.floor((difference % (1000 * 60)) / 1000);

				setTimeLeft(
					`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
				);
			} else {
				setTimeLeft("00:00:00");
			}
		};

		const timer = setInterval(calculateTimeLeft, 1000);

		calculateTimeLeft();
		return () => clearInterval(timer);
	}, [targetDate]);

	return timeLeft;
}
