import React from 'react'
import usePagination from '../../../hooks/usePagination';

export default function PaginationOnPage({totalPages, changePage, page}) {

  const pagesArrayForPagination = usePagination(totalPages);

  return (
    <div className="pagination_wrapper">
      {
        pagesArrayForPagination.map(p => 
          <span
            onClick={()=>changePage(p)} 
            key = {p} 
            className={ page === p ? "pagination_btn pagination_current" : "pagination_btn"}>
            {p}
          </span>
        )
      }
    </div>
  )
}
