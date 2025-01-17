export interface PageInfo {
  continuationToken?: string;
}

const pageMap = new WeakMap<object, PageInfo>();

/**
 * Given a result page from a pageable operation, returns a
 * continuation token that can be used to begin paging from
 * that point later.
 * @param page A result object from calling .byPage() on a paged operation.
 * @returns The continuation token that can be passed into byPage().
 */
export function getContinuationToken(page: unknown): string | undefined {
  if (typeof page !== "object" || page === null) {
    return undefined;
  }
  return pageMap.get(page)?.continuationToken;
}

export function setContinuationToken(
  page: unknown,
  continuationToken: string | undefined
): void {
  if (typeof page !== "object" || page === null || !continuationToken) {
    return;
  }
  const pageInfo = pageMap.get(page) ?? {};
  pageInfo.continuationToken = continuationToken;
  pageMap.set(page, pageInfo);
}
