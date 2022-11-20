import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost:8800/api/city?name=${term}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCities(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto p-4 md:p-4 lg:p-0">
      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && cities.length === 0 && (
        <h1 className="text-5xl text-center mt-32">No Images found !</h1>
      )}
      {isLoading ? (
        <h1 className="text-6xl text-center mt-32">Image Loading</h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map((city) => (
            <ImageCard key={city.id} city={city} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
