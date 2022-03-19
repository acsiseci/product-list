import "./Pagination.sass";

const Pagination = (props: {
  pageCount: any;
  selectedPage: any;
  onPaginationChange: any;
}) => {
  const { pageCount, selectedPage, onPaginationChange } = props;

  return (
    <div>
      <div className="product-pagination">
        {Array.from(Array(pageCount), (e, i) => {
          return (
            <div
              className={
                selectedPage == i + 1
                  ? "selected-pagination-number"
                  : "pagination-number"
              }
              key={i}
              onClick={() => onPaginationChange(i)}
            >
              {i + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pagination;
