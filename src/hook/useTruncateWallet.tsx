import { useMemo } from "react";

const useTruncateWallet = (address: string) => {
	return useMemo(() => {
		if (!address) return "";
		return `${address.slice(0, 4)}...${address.slice(-4)}`;
	}, [address]);
};

export default useTruncateWallet;
