import Link from "next/link";
import { Bellefair, Barlow_Condensed } from "next/font/google";
import Image from "next/image";
import logo from "~/assets/shared/logo.svg";

const bellefair = Bellefair({
  subsets: ["latin"],
  variable: "--font-bellfair",
  weight: ["400"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["400", "700"],
});

const mainMenu = [
  { name: "Home", path: "/" },
  { name: "Destination", path: "/destination" },
  { name: "Crew", path: "/crew" },
  { name: "Technology", path: "/technology" },
];

const convertToDoubleDigit = (number: number) => {
  return number < 10 ? `0${number}` : number;
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${bellefair.variable} ${barlowCondensed.variable}`}>
      <nav className=" text-white relative top-10 flex">
        <div className=" rounded-full bg-white">
          <Image src={logo} alt="logo" width={50} height={50} />
        </div>
        <ul className="absolute flex gap-12 justify-between uppercase font-barlow w-4/5">
          {mainMenu.map((item, index) => (
            <li key={item.name}>
              <Link href={item.path} key={item.name} className="flex gap-3">
                <span>{convertToDoubleDigit(index)}</span>
                <p>{item.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
}