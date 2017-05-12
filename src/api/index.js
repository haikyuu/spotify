import axios from 'axios'

const getSearchQuery = ({query, type})=>(
	`search?q=${query}&type=${type}`
)

const search = (props)=> {
	const req = getSearchQuery(props)
	return axios.get(`https://api.spotify.com/v1/${req}`)
}

export {
	search,
	getSearchQuery,
}