import React from 'react'
import { useGlobalContext } from './Context';
import Pagination from './Pagination';

const Items = () => {
  const {list, loading, error, input} = useGlobalContext();

  if (loading) return (
    <div className='container loading'>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
  if (error) return <div className='container'>Error</div>;

  return (
    <div className='container'>
      <Pagination />
      {
        list.filter(item => item.name.toLowerCase().includes(input.toLowerCase()))
        .map((item) => {
          const {id, name, description, stargazers_count, open_issues_count, owner, clone_url} = item;
          return (
            <article key={id} className='repo flex'>
              <div className='owner-avatar'>
                <img src={owner.avatar_url} alt={owner.login}></img>
              </div>
              <div className='repo-info'>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className=''>
                  <p>Stars: <span>{stargazers_count}</span></p>
                  <p>Issues: <span>{open_issues_count}</span></p>
                  <p>Submitted by <span>{owner.login}</span></p>
                </div>
                <a href={clone_url} className='btn'>View live</a>
              </div>
            </article>
          )
        })
      }
      {
        list.filter(item => item.name.toLowerCase().includes(input.toLowerCase())).length === 0
        ?  <div className='center container no-repos'>no repos with this name</div> : ''
      }
      <Pagination />
    </div>
  
  )
}

export default Items
