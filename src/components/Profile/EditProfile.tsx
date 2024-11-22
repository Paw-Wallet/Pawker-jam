import Avatar from "@/components/Profile/Avatar";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { SiTelegram } from "react-icons/si";
import { useCallback, useState } from "react";
import { debounce } from "lodash";

type Profile = {
	name: string;
	url: string;
};

function EditProfile({ onClose }: { onClose: () => void }) {
	const [profile, setProfile] = useState<Profile>({
		name: "anonglob",
		url: "https://imgv3.fotor.com/images/gallery/anime-male-avatar-with-a-pair-of-glasses-made-in-fotor-ai-anime-avatar-creator_2023-06-25-054224_ybzr.jpg",
	});

	const handleNameChange = (e: any) => {
		const { value } = e.target;

		setProfile((pre) => ({
			...pre,
			name: value,
		}));

		debounceUpdateName(value, profile.url);
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				setProfile((pre) => ({
					...pre,
					url: reader.result as string,
				}));
				debounceUpdateName(profile.name, reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmitProfile = debounce(
		(name, url) => console.log(name, url),
		1000
	);

	const debounceUpdateName = useCallback(
		(name: string, url: string) => handleSubmitProfile(name, url),
		[]
	);
	return (
		<div className="w-full flex flex-col px-5 items-end">
			<button
				className=" flex justify-end items-center text-white p-3 w-9 h-9 bg-[#FF843780] rounded-full font-bold mb-2"
				onClick={onClose}
			>
				X
			</button>
			<div className="w-full flex flex-col justify-center items-center gap-[13px] mb-12">
				<div>
					<Avatar props="big" url={profile.url} />
				</div>
				<label className="text-[#FFA31A] font-default">
					Edit profile
					<input className="hidden" type="file" onChange={handleFileChange} />
				</label>
			</div>
			<div className="w-full grid grid-cols-1 divide-y divide-[#FFFFFF1A]">
				<div className="w-full grid grid-cols-2 font-default pb-9 text-base font-normal">
					<span>Name</span>
					<div className="flex gap-2">
						<input
							className="bg-[#2C2C2C] w-[65%] p-1 no-underline focus:outline-none px-1"
							value={profile.name}
							onChange={handleNameChange}
						/>
					</div>
				</div>
				<div className="w-full flex font-default py-10 text-base font-normal justify-between items-center">
					<span>Connected wallet</span>
					<span>7FZZ...Mo5GH</span>
					<MdKeyboardArrowRight className="w-6 h-6" />
				</div>
				<div className="w-full grid grid-cols-2 font-default py-10 text-base font-normal">
					<span>Verified socials</span>
					<div className="flex flex-col gap-6">
						<div className="flex gap-2 font-default items-center">
							<FaXTwitter className="w-6 h-6 text-[#bcbcbc]" />
							<span>Limon</span>
						</div>
						<div className="flex gap-2 font-default items-center">
							<FaDiscord className="w-6 h-6 text-[#bcbcbc]" />
							<span>Limoncanvas</span>
						</div>
						<div className="flex gap-2 font-default items-center">
							<SiTelegram className="w-6 h-6 text-[#bcbcbc]" />
							<span>Limoncanvas</span>
						</div>
					</div>
				</div>
				<div className="w-full font-default pt-10">
					<span className="text-sm text-[#FFFFFF80]">
						You can change verified social links in Paw Wallet
					</span>
				</div>
			</div>
		</div>
	);
}

export default EditProfile;
