import axios from 'axios'

const getSearchQuery = ({query, filter})=>(
	`search?q=${query}&type=${filter}`
)

const search = (props)=> {
	const req = getSearchQuery(props)
	return axios.get(`https://api.spotify.com/v1/${req}`)
}

export {
	search,
	getSearchQuery,
}