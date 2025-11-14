import "./pagination.css";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  return (
    <div className="pagination-container">
      <button
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>{currentPage}</span>
      {/* <button
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button> */}
      <button
        onClick={() => {
          setTimeout(() => {
            setCurrentPage((prev) => Math.min(prev + 1, totalPages));
          }, 0);
        }}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
