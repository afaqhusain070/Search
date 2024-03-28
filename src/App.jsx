import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  // const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // if (search.trim().split(/\s+/).length < 3) {
    //   // If search query has less than 3 words, don't make API call
    //   setData([]);
    //   return;
    // }

    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      try {
        // setLoading(true);
        setError(false);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?search=${search}`,
          { signal }
        );
        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        setError(true);
      }
      // finally {
      //   setLoading(false);
      // }
    })();

    return () => {
      controller.abort();
    };
  }, [search]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  return (
    <>
      <h3> Axios Data Fetching Example: {data.length} results</h3>
      <div>
        <input
          type="text"
          placeholder="Search (at least 3 words)..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
