import React from 'react'

import { withReducer, compose, pure, withHandlers, lifecycle, } from 'recompose'
import SearchResultItem from '../components/SearchResultItem'
import NavBar, { FILTER, } from '../components/NavBar'
import { getSearchQuery, search, } from '../api'

import queryString from 'query-string'

import './searchScene.css'

const SearchScene = ({state, dispatch, onSearchClick})=>(
	<div className="body">
	<NavBar counter={state.result.length} onFilterSelect={({filter})=> dispatch({ type: 'ON_FILTER_CHANGE', filter, })}/>
		<div className="container">
	      <form className="form-horizontal">
	        <div className="form-group form-group-lg">
	          <div className="col-xs-12 col-sm-8 col-sm-offset-2">
	          {
	          	state.isLoading
	          	? <input value={state.query} readOnly onChange={(event)=> dispatch({ type: 'ON_QUERY_CHANGE', query: event.target.value})} className="form-control" type="text" id="formGroupInputLarge" placeholder={`Search... ${state.filter.toLowerCase()}s`}/>
	          	: <input value={state.query} onChange={(event)=> dispatch({ type: 'ON_QUERY_CHANGE', query: event.target.value})} className="form-control" type="text" id="formGroupInputLarge" placeholder={`Search... ${state.filter.toLowerCase()}s`}/>

	          }
	            <a href={`#${getSearchQuery({query: state.query, filter: state.filter, }).replace('search?', '')}`} onClick={onSearchClick} className="search-icon"><i className="fa fa-search" aria-hidden="true"></i></a>
	            {
	            	state.hasError
	            	? <p className="error">{state.errorText}</p>
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
				state.result.map( ({id, name, images})=>(
	          		<SearchResultItem 
          				key={id}
          				imageUrl={images && images.length? images[0].url : 'http://placekitten.com/64/64'}
	          		 	name={name}
	          		/>
				))
	        }
	        </ul>
	      </div>
	    </div>
	</div>
)
const searchReducer = (state, action)=>{
	switch(action.type) {
		case 'ON_FILTER_CHANGE':
			return {
				...state,
				filter: action.filter,
			}
		case 'ON_QUERY_CHANGE':
			return {
				...state,
				query: action.query,
			}
		case 'ON_REQUEST_START':
			return {
				...state,
				isLoading: true,
			}
		case 'ON_REQUEST_SUCCESS':
			return {
				...state,
				isLoading: false,
				hasError: false,
				result: action.result.items,
			}
		case 'ON_REQUEST_FAILURE':
			return {
				...state,
				isLoading: false,
				hasError: true,
				errorText: 'There was an error processing your request, please try again later.',
			}
		case 'TRIGGER_ERROR':
			return {
				...state,
				hasError: true,
				errorText: action.errorText,
			}
		default: 
			return state
	}
}

const query = queryString.parse(window.location.hash).q
const filter = queryString.parse(window.location.hash).type

const enhance = compose(
	withReducer('state', 'dispatch', searchReducer, {
		query: query || '',
		filter: filter || FILTER.ARTIST,
		result: [],
		hasError: false,
		isLoading: false,
		errorText: '',
	}),
	withHandlers({
		onSearchClick: ({state, dispatch,}) => () =>{
			if (state.isLoading) {
				return
			}
			if (state.query.length === 0) {
				return dispatch({ type: 'TRIGGER_ERROR', errorText: 'Please fill out the form.', })
			}
			dispatch({ type: 'ON_REQUEST_START', })
			search({query: state.query, filter: state.filter, }).then(result=>{
				let type = `${state.filter.toLowerCase()}s`
				dispatch({ type: 'ON_REQUEST_SUCCESS', result: result.data[type], })

			}).catch(error=>{
				dispatch({ type: 'ON_REQUEST_FAILURE', })
			})
		},
	}),
	lifecycle({
		componentDidMount: function(){
			if (this.props.state.query.length > 0) {
				this.props.onSearchClick()
			}
		},
	}),
	pure,
)
export default enhance(SearchScene)