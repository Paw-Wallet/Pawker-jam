import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useState } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const data = [
	"0x92EFCb670b9e20a83BbEfBec8c004479000Cb0dE",
	"0x92EFCb670b9e20a83BbEfBec8c004479000Cb0dA",
	"0x92EFCb670b9e20a83BbEfBec8c004479000Cb0dB",
];

function ConnectWallet() {
	const [isConnected, setConnected] = useState(false);
	const [selectedWallet, setWallet] = useState<string>(
		"0x92EFCb670b9e20a83BbEfBec8c004479000Cb0dE"
	);
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
						<span className="text-[#FFFFFF80]">
							{selectedWallet.substring(0, 4)}...{selectedWallet.substring(38)}
						</span>
					</button>
					{data &&
						data.map((item: string, index: number) => (
							<button
								key={index}
								className="w-full flex justify-between p-3 rounded-lg border-[1px] border-[#BF6A02] text-white"
								onClick={() => setWallet(item)}
							>
								<div className="flex gap-1 items-center">
									{selectedWallet == item && (
										<BsFillCheckCircleFill color="#20cc51" />
									)}
									<span>Wallet {index}</span>
								</div>
								<span className="text-[#FFFFFF80]">
									{item.substring(0, 4)}...{item.substring(38)}
								</span>
							</button>
						))}
				</Paper>
			</Slide>
		</Box>
	);
}

export default ConnectWallet;
