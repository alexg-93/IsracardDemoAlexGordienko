import { useState, useMemo } from "react";
import _ from "lodash";
import { BookTyped } from "@/src/services/harryPotterBooks.types";
import moment from "moment";

export type TSortCriteria = "title" | "pages" | "releaseDate";
export type TSortOrder = "asc" | "desc";

export const useSortBooks = (books: BookTyped[], sortBy: TSortCriteria) => {

  const [sortOrder, setSortOrder] = useState<TSortOrder>("asc");

  const sortedBooks = useMemo(() => {

     if (!books || books.length === 0) return [];

    const order = sortOrder === "asc" ? "asc" : "desc";

    switch (sortBy) {
      case "title":
        return _.orderBy(books, [(book) => book.title.toLowerCase()], order);
      case "pages":
        return _.orderBy(books, ["pages"], order);
      case "releaseDate":
        // Use moment.js to parse the date and compare
        return _.orderBy(
          books,
          [(book) => moment(book.releaseDate, "MMM D, YYYY").toDate().getTime()],
          order
        );
      default:
        return books;
    }
  }, [books, sortBy, sortOrder]);

  // Toggle sort order between ascending and descending
  const toggleSortOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return { sortedBooks, sortOrder, toggleSortOrder };
};