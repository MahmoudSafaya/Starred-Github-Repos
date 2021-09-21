import React from 'react'
import { useGlobalContext } from './Context';

const Navbar = () => {
  const {input, setInput} = useGlobalContext();
  
  return (
    <header>
      <div className='container navbar flex'>
        <h1>Trending Repos</h1>
        <form onSubmit={e => e.preventDefault()}>
          <input
          type='search' 
          placeholder='search' 
          className='search'
          value={input}
          onChange={e => setInput(e.target.value)}
          ></input>
        </form>
      </div>
    </header>
  )
}

export default Navbar
