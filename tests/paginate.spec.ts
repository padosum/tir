import { describe, test, expect } from "vitest";
import paginate from "@/utils/paginate";

describe("paginate", () => {
  test("첫 페이지는 1페이지다.", () => {
    const { startPage, endPage, startIndex, endIndex } = paginate(10, 1, 6);
    expect(startPage).toBe(1);
  });
});
