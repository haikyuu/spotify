import React from 'react'

import SearchResultItem from '../components/SearchResultItem'
import NavBar from '../components/NavBar'
import { getSearchQuery, } from '../api'
import './searchScene.css'

const SearchScene = ({onSearch, query, type, hasError, onFilterSelect})=>(
	<div className="body">
	<NavBar onFilterSelect={onFilterSelect}/>
		<div className="container">
	      <form className="form-horizontal">
	        <div className="form-group form-group-lg">
	          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
	            <input className="form-control" type="text" id="formGroupInputLarge" placeholder="Search..."/>
	            <a href={`#${getSearchQuery({query, type})}`} onClick={onSearch} className="search-icon"><i className="fa fa-search" aria-hidden="true"></i></a>
	            {
	            	hasError
	            	? <p className="error">Please fill out the form.</p>
	            	: null
	            }
	          </div>
	        </div>
	      </form>
	    </div>
	    <div className="container">
	      <div className="col-xs-12 col-sm-8 col-sm-offset-2">
	        <ul className="results">
	        {
				[1,2,3,4,5,6,7,8,9].map(i=>(
	          		<SearchResultItem key={i} imageUrl="http://placekitten.com/64/64" name={`Result ${i}`}/>
				))
	        }
	        </ul>
	      </div>
	    </div>
	</div>
)
export default SearchScene