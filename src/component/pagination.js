import React from "react";
import { Pagination } from "react-bootstrap";

const Paginate = ({ postPerpage, totalpost, changeNumber,currentPage }) => {
    let items = [];
    for (let number = 1; number <= Math.ceil(totalpost/postPerpage); number++) {
        items.push(
            <Pagination.Item key={number} active={number===currentPage} onClick={()=>changeNumber(number)}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    );
}

export default Paginate;