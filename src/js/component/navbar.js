import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
	return (
		<nav   className="navbar navbar-dark bg-dark mb-3 p-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars 🧑‍🚀⭐</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button  className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					{ <ul id="nav-body" className="dropdown-menu">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul> }
				</div>
			</div>
		</nav>
	);
};
