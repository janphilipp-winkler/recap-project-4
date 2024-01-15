import "./Pagination.css";

export default function Pagination({
  currentPage,
  onNextPage,
  onPrevPage,
  totalPages,
}) {
  return (
    <div className="pagination">
      <button
        className={`pagination__button ${currentPage === 1 ? "hidden" : ""}`}
        onClick={onPrevPage}
      >
        -
      </button>
      <span className="pagination__count">
        {currentPage}/{totalPages}
      </span>
      <button
        className={`pagination__button ${
          currentPage === totalPages ? "hidden" : ""
        }`}
        onClick={onNextPage}
      >
        +
      </button>
    </div>
  );
}
