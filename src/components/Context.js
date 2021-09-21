import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {

  
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [input, setInput] = useState('');
  const [page, setPage] = useState(1);
  
  const url = `https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`;

  useEffect(() => {
    fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    })
    .then(data => {
      setList(data.items);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [page]);

  return(
    <AppContext.Provider value={{
      list,
      loading,
      error,
      input,
      page,
      setList,
      setInput,
      setPage,
      setLoading
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }