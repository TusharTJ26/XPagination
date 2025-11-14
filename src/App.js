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
        alert("Failed to fetch data");
      }
    };
    fetchData();
  }, []);
  // useEffect(() => {
  //   fetch(
  //     "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
  //   )
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Fetch failed");
  //       return res.json();
  //     })
  //     .then((data) => setData(data))
  //     .catch(() => {
  //       alert("Failed to fetch data"); // EXACT TEXT REQUIRED
  //     });
  // }, []);

  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
// import React, { useState, useEffect } from "react";
// import "./App.css"; // Import CSS for styling

// function App() {
//   const [employees, setEmployees] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 10;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
//         );
//         if (!response.ok) throw new Error("Network response was not ok");
//         const data = await response.json();
//         setEmployees(data);
//       } catch (error) {
//         alert("failed to fetch data");
//       }
//     };

//     fetchData();
//   }, []);

//   const totalPages = Math.ceil(employees.length / rowsPerPage);

//   const handlePrevious = () => {
//     if (currentPage > 1) setCurrentPage((prev) => prev - 1);
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
//   };

//   const indexOfLastEmployee = currentPage * rowsPerPage;
//   const indexOfFirstEmployee = indexOfLastEmployee - rowsPerPage;
//   const currentEmployees = employees.slice(
//     indexOfFirstEmployee,
//     indexOfLastEmployee
//   );
//   return (
//     <div className="App">
//       <h1>Employee Data Table</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentEmployees.map((emp) => (
//             <tr key={emp.id}>
//               <td>{emp.id}</td>
//               <td>{emp.name}</td>
//               <td>{emp.email}</td>
//               <td>{emp.role}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination">
//         <button onClick={handlePrevious}>Previous</button>
//         <div>{currentPage}</div>
//         <button onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default App;
