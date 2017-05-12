import React from 'react'
import SearchScene from './scenes/SearchScene'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { search, } from './api'

const onSearch = ({query, type}) => search({query, type}).then(res=>console.log(res.data))
const onFilterSelect = (filter) => console.log(filter)

export default function App(){
	const query = 'beatles'
	const type = 'artist'
	return (
		<SearchScene
		 query={query} 
		 type={type} 
		 onSearch={()=>onSearch({query, type})} 
		 onFilterSelect={onFilterSelect}
		/>
	)
}
