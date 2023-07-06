import React from "react";
import { Link } from "react-router-dom";
import Favorite from "./favorite";

export const Navbar = () => {
	return (
		<div>
		<nav className="navbar navbar-dark bg-dark ">
			<Link to="/">
				<img style={{marginLeft: "50px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" width="90" height="70" ms-1 p-0 alt="Star wars image"></img>			
			</Link>
			<Favorite/>
		</nav>
		</div>
	);
};