import { createContext, useContext, useEffect, useState } from "react";

const LayoutContext = createContext();

function LayoutProvider({ children }) {
  const [cardView, setCardView] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setApiData(result);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const deleteItem = (id) => {
    setApiData(apiData.filter((item) => item.id !== id));
  };

  return (
    <LayoutContext.Provider
      value={{
        setCardView,
        cardView,
        setApiData,
        setError,
        error,
        loading,
        setLoading,
        apiData,
        deleteItem,
        showForm,
        setShowForm,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}

function useLayoutData() {
  const context = useContext(LayoutContext);
  if (context === undefined)
    throw new Error("LayoutContext was used outside the LayoutProvider");
  return context;
}

export { LayoutProvider, useLayoutData };
