import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Character from "../component/card";
import { Navbar } from "../component/navbar";

export const Home = () => {

	const {store, actions} = useContext(Context)
	console.log(store)

	useEffect(()=> {
		actions.loadPeople();
		actions.loadPlanets();
		actions.loadVehicles();
	}, [])

	return (
		<div className="text-center bg-dark text-white">
			<h1>Star Wars 🧑‍🚀</h1>
			<h2 className="my-5">Characters</h2>
			<div className="d-flex bg-dark flex-wrap  text-white">
				{
					store.characters.length > 0 &&
					store.characters.map((people) => <Character item={people} key={people.uid} naturate="characters" />)
				}
			</div>
			<h2 className="my-5">Planets</h2>
			<div className="d-flex flex-wrap">
				{
					store.planets.length > 0 &&
					store.planets.map((planets) => <Character item={planets} key={planets.uid} naturate="planets" />)
				}
			</div>
			<h2 className="my-5">Vehicles</h2>
			<div className="d-flex flex-wrap">
				{
					store.vehicles.length > 0 &&
					store.vehicles.map((vehicles) => <Character item={vehicles} key={vehicles.uid} naturate="vehicles" />)
				}
			</div>
		</div>
	)
};

