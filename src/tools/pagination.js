import drop from 'lodash/drop';

export function getPaginatedItems(items, page, pageSize) {
  const pg = page || 1;
  const pgSize = pageSize || 100;
  const offset = (pg - 1) * pgSize;
  const pagedItems = drop(items, offset).slice(0, pgSize);

  return {
    page: pg,
    pageSize: pgSize,
    total: items.length,
    total_pages: Math.ceil(items.length / pgSize),
    data: pagedItems,
  };
}
