import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavBarItemProps {
	title: string;
	to: string;
}

export default function NavbarItem({ title, to }: NavBarItemProps) {
	const router = useRouter();
	const isSelected = router.asPath.includes(to);
	const selectedStyle = isSelected ? "text-primary" : "text-content-dark hover:text-primary";
	return (
		<div className='navbar-item'>
			<Link href={to}>
				<span className={`${selectedStyle}`}>{title}</span>
			</Link>
		</div>
	);
}
