import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Character from "../component/card";
import { Navbar } from "../component/navbar";

export const Single = () => {

	const {store, actions} = useContext(Context)
	console.log(store)

	useEffect(()=> {
		actions.loadPeople();
		actions.loadPlanets();
		actions.loadVehicles();
	}, [])

	return (
		<div className="text-center bg-dark text-white">
			{/* <Navbar/> */}
			<h1>Star Wars API 💫</h1>
			<div className="d-flex flex-wrap bg-dark text-white">
				{
					store.characters.length > 0 &&
					store.characters.map((people) => <Character item={people} key={people.uid} naturate="characters" />)
				}
			</div>
			<div className="d-flex flex-wrap">
				{
					store.planets.length > 0 &&
					store.planets.map((planets) => <Character item={planets} key={planets.uid} naturate="planets" />)
				}
			</div>
			<div className="d-flex flex-wrap">
				{
					store.vehicles.length > 0 &&
					store.vehicles.map((vehicles) => <Character item={vehicles} key={vehicles.uid} naturate="vehicles" />)
				}
			</div>
		</div>
	)
};