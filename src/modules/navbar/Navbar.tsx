import { useEffect } from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
	useEffect(() => {
		window.addEventListener("scroll", () => {
			const nav = document.querySelector("nav");
			if (nav) {
				const value = 100 - window.pageYOffset;
				console.log(value)
				nav.style.opacity = `${value / 100}`;
			}
		});
	}, []);

	return (
		<nav className='page-px'>
			<h2 className='logo'>KYLE</h2>
			<div className='navbar-item-container'>
				<NavbarItem to='/home' title='HOME' />
				<NavbarItem to='/projects' title='PROJECTS' />
			</div>
		</nav>
	);
}
