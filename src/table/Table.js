import { useState, useEffect } from "react";
import Pagination from "../pagination/Pagination";
import styles from "./table.module.css";

export default function Table({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [indexOfFirstItem, setIndexOfFirstItem] = useState(0);

  useEffect(() => {
    if (data.length === 0) return;
    const indexOfLastItem = currentPage * itemsPerPage;
    // setIndexOfLastItem(indexOfLastItem);
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setIndexOfFirstItem(indexOfFirstItem);
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    setCurrentItems(currentItems);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    setTotalPages(totalPages);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1); // fallback to page 1 if totalPages is 0
    }
  }, [data, currentPage, itemsPerPage]);
  return (
    <>
      <table width="100%" className={styles.table}>
        <thead>
          <tr className={styles.heading}>
            <th>ID</th>
            <th>Name</th>
            <th width="70%">Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {/* {data.map((item, index) => { */}
          {currentItems.map((item, index) => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
}
