import { useState } from "react";
import ReactPaginate from "react-paginate";
import styles from './style.module.scss'


const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
function Items({ currentItems }) {
    return (
        <>
            {currentItems &&
                currentItems.map((item) => (
                    <div>
                        <h3>Item #{item}</h3>
                    </div>
                ))}
        </>
    );
}
const Pagination = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / 1);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <ReactPaginate
            nextLabel="Next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< Previous"
            pageClassName={`page-item`}
            pageLinkClassName={`page-link ${styles.pageLinkClassName}`}
            previousClassName={`page-item ${styles.previousClassName}`}
            previousLinkClassName={`page-link ${styles.previousNextClassName}`}
            nextClassName={`page-item ${styles.nextClassName}`}
            nextLinkClassName={`page-link ${styles.previousNextClassName}`}
            breakLabel="..."
            breakClassName={`page-item`}
            breakLinkClassName={`page-link ${styles.pageLinkClassName}`}
            containerClassName={`pagination ${styles.containerClassNamePagination}`}
            renderOnZeroPageCount={null}
            activeClassName={`active `}
            activeLinkClassName={`${styles.activeClassName}`}
            disabledLinkClassName={styles.disabledLinkClassName}
        />
    )
}

export default Pagination