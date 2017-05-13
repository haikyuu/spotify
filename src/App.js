import React from 'react'
import SearchScene from './scenes/SearchScene'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { search, } from './api'

const onSearch = ({query, type}) => search({query, type}).then(res=>console.log(res.data))
const onFilterSelect = (filter) => console.log(filter)
// onSearch, query, type, hasError, onFilterSelect, onInputChange, searchResult
export default function App(){
	const query = 'beatles'
	const type = 'artist'
	return (
		<SearchScene
		 query={query} 
		 type={type} 
		 onSearch={()=>onSearch({query, type})} 
		 onFilterSelect={onFilterSelect}
		 hassError={false}
		 onInputChange={()=>null}
		 searchResult={[1,2,3,4,5,6,7,8,9]}
		/>
	)
}