import React,{useState} from 'react';

const UserContext = React.createContext({});


export function GifsContextProvider ({children}) {
  const [gifs, setGifs] = useState([])

  return <UserContext.Provider value={{gifs, setGifs}}>
    {children}
  </UserContext.Provider>
}

export default UserContext;