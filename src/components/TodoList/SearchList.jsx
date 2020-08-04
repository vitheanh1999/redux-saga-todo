import React, {Fragment, useState} from 'react';
import { useSelector, useDispatch} from "react-redux"
import * as actions from '../../store/actions/search'
import { fetchInitSearch, fetchAfterSearch } from '../../store/actions/search';


function SearchList() {
    const [query, setQuery] = useState('')
    const data = useSelector(state => state.search.data);
    const dispatch = useDispatch();
    const doFetch = (query) =>{ 
         dispatch(fetchAfterSearch(query));
    }
    return (
        <Fragment>
            <div className="App">
                <input 
                    type="text"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                    ></input>
                <button 
                    type="button"
                    onClick={() => doFetch(query)}
                    >Click</button>
                <ul>
                    {
                        data.map(item => (
                            <li key={item.objectID}>
                                <a href={item.url}>{item.title}</a>
                            </li>
                            ))
                    }
                    
                </ul>
            </div>
        </Fragment>
    )
}

export default SearchList

