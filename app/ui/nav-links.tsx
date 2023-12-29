"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
			<div className="flex  justify-center m-8 rounded-md bg-lime-100 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">
				<Link
					href="/third-project"
					className={clsx(
						"w-60 m-3 p-3 rounded-md   hover:bg-sky-100 hover:text-blue-600",
						{
							"bg-sky-100 text-blue-600": pathname === "/third-project",
						}
					)}
				>
					<p className="flex-1 text-center">Ariane</p>
				</Link>
				<Link
					href="/second-project"
					className={clsx(
						"flex w-60 m-3 p-3 rounded-md   hover:bg-sky-100 hover:text-blue-600",
						{
							"bg-sky-100 text-blue-600": pathname === "/second-project",
						}
					)}
				>
					<p className="flex-1 text-center">Netflix</p>
				</Link>
				<Link
					href="/"
					className={clsx(
						"w-60 m-3 p-3 rounded-md  hover:bg-sky-100 hover:text-blue-600",
						{
							"bg-sky-100 text-blue-600": pathname === "/",
						}
					)}
				>
					<p className="flex-1 text-center">Job-board</p>
				</Link>
			</div>
		</>
	);
}
