import Link from "next/link";
const Footer = () => {
	return (
		<footer className="flex align-bottom leading-8 justify-center m-8 rounded-md bg-lime-100">
			{" "}
			Made by{" "}
			<Link className=" text-blue-500 px-2" href="https://github.com/Orlandini-Sebastien">
				Orlandini Sébastien
			</Link>{" "}
			at <Link  className=" text-blue-500 px-2 " href="https://www.lereacteur.io/">Le Reacteur</Link>{" "}
		</footer>
	);
};

export default Footer;
