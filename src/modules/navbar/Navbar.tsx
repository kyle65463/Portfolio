import NavbarItem from "./NavbarItem";

export default function Navbar() {
	return (
		<nav className='page-px'>
			<h2 className='logo'>KYLE</h2>
			<div className='navbar-item-container'>
				<NavbarItem to='/home' title='HOME'/>
				<NavbarItem to='/projects' title='PROJECTS'/>
			</div>
		</nav>
	);
}
