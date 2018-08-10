import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBeb_kTjn6RRbLesAukuE0QJkFeKYfkXxU';

YTSearch({key: API_KEY, term: 'Drake'}, function(data) {
  console.log(data)
})

//Create a new component. This component should produce some HTML

const App =  () => {
  return  (
    <div>
    <SearchBar />
    </div>
 );
}

//Take this components generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container')) ;
