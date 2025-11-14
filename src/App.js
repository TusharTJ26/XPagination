import { useEffect, useState } from "react";
import Table from "./table/Table";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
        );
        let data = await response.json();
        setData(data);
      } catch (e) {
        console.error("failed to fetch data");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
