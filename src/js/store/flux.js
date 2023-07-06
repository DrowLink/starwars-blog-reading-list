const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
		},
		actions: {
			loadPeople: async ()=>{
				try{
					const resp = await fetch(`https://www.swapi.tech/api/people/`)
					const data = await resp.json()
					setStore({characters: data.results})
					console.log(data)
				}catch(err){
					console.log(err)
				}
			},
			loadPlanets: async ()=>{
				try{
					const resp = await fetch(`https://www.swapi.tech/api/planets/`)
					const data = await resp.json()
					setStore({planets: data.results})
					console.log(data)
				}catch(err){
					console.log(err)
				}
			},
			loadVehicles: async ()=>{
				try{
					const resp = await fetch(`https://www.swapi.tech/api/vehicles/`)
					const data = await resp.json()
					setStore({vehicles: data.results})
					console.log(data)
				}catch(err){
					console.log(err)
				}
			},
			addFavorites: (item) =>{
				const store = getStore()
				const favoriteCondition = store.favorites.some((fav)=>fav.name== item.name)
				if(favoriteCondition){
					const nuevoFavorito = store.favorites.filter((fav)=>fav.name != item.name)
					setStore({
						...store, 
						favorites : nuevoFavorito
					})
					localStorage.setItem("favorites", JSON.stringify(store.favorites))
				} else{
					setStore({
						...store,
						favorites : [...store.favorites, item]
					})
					localStorage.setItem("favorites", JSON.stringify(store.favorites))
				}
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => {
				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;