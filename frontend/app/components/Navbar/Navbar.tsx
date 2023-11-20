import { Flex, Text } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Link from "next/link";
import { SiMusicbrainz } from "react-icons/si";

const pathNames = [
  {
    title:'Главная',
    href:'/'
  },
  {
    title:'Треки',
    href:'/tracks'
  },
]

const Navbar = () => {
  return (
    <div className="w-60 p-2 bg-neutral-900 p-x-1">
      <Flex align='center' gap='3' justify='between'>
        <SiMusicbrainz fill="white" size='30'/>
        <Text className="text-white">Music platform</Text>
  
      </Flex>
      <ul className="mt-4 flex flex-col gap-2">
          {pathNames.map(el=>(
            <li key={el.href} className="px-1 rounded hover:bg-slate-300 transition-all transition-duration:150ms " >
              <Link href={el.href} className="text-white">{el.title}</Link>
            </li>
          ))} 
        </ul>
    </div>
  );
};

export default Navbar;
