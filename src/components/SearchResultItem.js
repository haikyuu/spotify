import React from 'react'

const SearchResultItem = ({imageUrl, name})=> (
	<li>
		<img className="thumb" alt={`${name} thumb`} src={imageUrl}/>
		{name}
	</li>
)

export default SearchResultItem