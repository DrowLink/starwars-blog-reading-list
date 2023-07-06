import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Character = (props) => {

	const {
		store,
		actions
	}= useContext(Context)

	return (
		<div className="col-3 p-2 bg-dark">
			<div className="card bg-dark text-white border border-white">
				{	props.item.image != "" &&
					<img src={`https://starwars-visualguide.com/assets/img/${props.naturate}/${props.item.uid}.jpg`} className="card-img-top" style={{ maxHeight: '300px', objectFit: 'cover' }} alt={"person"+props.item.name}/>}
				<div className="card-body bg-dark  border border-white">
					<h5 className="card-title">{ props.item && props.item.name}</h5>
					<p className="card-text">{
						props.item.gender
					}</p>
				<div className=" d-flex mb-3">
					<div className="p-2 me-auto">		
					<Link to={`details/${props.naturate}/${props.item.uid}`} className="btn btn-outline-info d-flex justify-content-start">View details</Link>
					</div>
					<div className="p-2 btn btn-outline-warning d-flex justify-content-end" onClick={()=> { 
						actions.addFavorites(props.item)}}>
						
						💛
					</div>
				</div>
				</div>
			</div>
		</div>
	);
}

export default Character