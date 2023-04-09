import { useState } from 'react'
import SearchBar from './components/SearchBar';
import { SearchResultsList } from "./components/SearchResultList";
import './App.css'

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
     <div className="search-bar">
      <SearchBar setResults={setResults} />
      {results && results.length > 0 && <SearchResultsList results={results} />}
     </div>
    </div>
  )
}

export default App
