import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const url = "https://www.googleapis.com/customsearch/v1";
const accessKey = "AIzaSyBcIyTr7kN4P7SkjlE3Jd1B3b_oL1FxTns";
const searchKey = "7b443b67ed3bf1b8d";

const AppProvider = ({ children }) => {
  const [term, setTerm] = useState("");
  const [input, setInput] = useState("");
  const [queryInfo, setQueryInfo] = useState();
  const [query, setQuery] = useState([]);

  const fetchQuery = async (param) => {
    const response = await fetch(
      `${url}?key=${accessKey}&cx=${searchKey}&q=${param}`
    );
    const result = await response.json();
    if (result.items) {
      setQueryInfo(result.searchInformation);
      setQuery([...result.items]);
    }
  };

  useEffect(() => {
    fetchQuery(term);
  }, [term]);

  return (
    <AppContext.Provider
      value={{
        input,
        setInput,
        setTerm,
        queryInfo,
        query,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => useContext(AppContext);
