import { HiOutlineHome, HiOutlineBadgeCheck, HiOutlineCollection, HiOutlineLightningBolt, HiOutlineSearch, HiOutlineUser} from 'react-icons/hi'
import Image from "next/image";
import HeaderItem from "./HeaderItem";

export default function Header(){
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" icon={<HiOutlineHome size={32}/>} />
        <HeaderItem title="TRENDING" icon={<HiOutlineLightningBolt size={32}/>} />
        <HeaderItem title="VERIFIED" icon={<HiOutlineBadgeCheck size={32}/>} />
        <HeaderItem title="COLLECTIONS" icon={<HiOutlineCollection size={32}/>} />
        <HeaderItem title="SEARCH" icon={<HiOutlineSearch size={32}/>} />
        <HeaderItem title="ACCOUNT" icon={<HiOutlineUser size={32}/>} />
      </div>
      <Image
        alt=""
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
};