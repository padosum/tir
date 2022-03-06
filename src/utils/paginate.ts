/* https://jasonwatmore.com/post/2018/08/07/javascript-pure-pagination-logic-in-vanilla-js-typescript */

const paginate = (
  totalItems: number,
  currentPage = 1,
  pageSize: number | string = 10,
  maxPages = 10
): {
  totalItems: number
  currentPage: number
  pageSize: number
  totalPages: number
  startPage: number
  endPage: number
  startIndex: number
  endIndex: number
  pages: number[]
} => {
  // 총 페이지 계산
  pageSize = parseInt(pageSize.toString())
  const totalPages = Math.ceil(totalItems / pageSize)

  // 현재 페이지가 범위를 넘지 않는지 확인
  if (currentPage < 1) {
    currentPage = 1
  } else if (currentPage > totalPages) {
    currentPage = totalPages
  }

  let startPage: number, endPage: number
  if (totalPages <= maxPages) {
    // 총 페이지가 max 보다 작기 때문에 모든 페이지 보여주기
    startPage = 1
    endPage = totalPages
  } else {
    // 총 페이지가 max 보다 크면 시작, 끝 페이지 계산
    const maxPagesBeforeCurrentPage = Math.floor(maxPages / 2) // 5
    const maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1 // 4

    if (currentPage <= maxPagesBeforeCurrentPage) {
      // current page near the start
      startPage = 1
      endPage = maxPages
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // current page near the end
      startPage = totalPages - maxPages + 1
      endPage = totalPages
    } else {
      // current page somewhere in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage
      endPage = currentPage + maxPagesAfterCurrentPage
    }
  }

  // caculate start and end item indexes
  const startIndex = (currentPage - 1) * pageSize
  const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1)

  // create an array of pages to ng-repeat in the pager control
  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  )

  return {
    totalItems,
    currentPage,
    pageSize,
    totalPages,
    startPage,
    endPage,
    startIndex,
    endIndex,
    pages,
  }
}

export default paginate
