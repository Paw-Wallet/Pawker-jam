import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const data = ["7FZZ...Mo5GH", "7FZZ...Mo5GH", "7FZZ...Mo5GH"];

const connectSlide = (
	<Paper
		elevation={4}
		sx={{
			p: 2,
			width: "100vw",
			height: "60vh",
			borderTopRightRadius: "16px",
			borderTopLeftRadius: "16px",
			background: "#1C1C1C",
			display: "flex",
			flexDirection: "column",
			gap: "24px",
		}}
	>
		<span className="font-default text-xl text-white">
			Link your wallet to Pawker
		</span>
		<button className="w-full flex justify-between p-3 rounded-lg border-[1px] border-[#BF6A02] text-white">
			<span>Connected wallet</span>
			<span className="text-[#FFFFFF80]">7FZZ...Mo5GH</span>
		</button>
		{data &&
			data.map((item: string, index: number) => (
				<button className="w-full flex justify-between p-3 rounded-lg border-[1px] border-[#BF6A02] text-white">
					<div className="flex gap-1 items-center">
						{index == 0 && <BsFillCheckCircleFill color="#20cc51" />}
						<span>Wallet {index}</span>
					</div>
					<span className="text-[#FFFFFF80]">{item}</span>
				</button>
			))}
	</Paper>
);

function ConnectWallet() {
	const [isConnected, setConnected] = useState(false);
	return (
		<Box>
			<MdKeyboardArrowRight
				className="w-6 h-6"
				onClick={() => setConnected(true)}
			/>
			<Slide
				mountOnEnter
				unmountOnExit
				className="absolute bottom-0 left-0 w-full h-full"
				direction="up"
				in={isConnected}
				onMouseDown={() => setConnected(false)}
			>
				{connectSlide}
			</Slide>
		</Box>
	);
}

export default ConnectWallet;
