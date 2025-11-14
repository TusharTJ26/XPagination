import { useEffect, useState } from "react";
import Table from "./table/Table";

function App() {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let response = await fetch(
  //         "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
  //       );
  //       let data = await response.json();
  //       setData(data);
  //     } catch (e) {
  //       console.error("failed to fetch data");
  //     }
  //   };
  //   fetchData();
  // }, []);
  useEffect(() => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => setData(data))
      .catch(() => {
        alert("Failed to fetch data"); // EXACT TEXT REQUIRED
      });
  }, []);

  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
