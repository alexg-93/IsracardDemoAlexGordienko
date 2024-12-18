import { useMemo } from "react";
import { BookTyped } from "../services/harryPotterBooks.types";

type TFilterBooks = {
    books: BookTyped[],
    searchValue: string,
    filterBy: 'title' | 'description' | 'both'
}

export const useFilterBooks = ({books, searchValue = '',filterBy = 'title'}:TFilterBooks)=> {

    const normalizedSearchValue = searchValue.toLowerCase().trim();


    const filteredBooks = useMemo(() => {

    if(!searchValue.trim()) return books;

    return books?.filter((book) => {
            const titleMatch = book?.title?.toLowerCase().includes(normalizedSearchValue);
            const descriptionMatch = book?.description?.toLowerCase().includes(normalizedSearchValue);

            if (filterBy === 'title') return titleMatch;
            if (filterBy === 'description') return descriptionMatch;
            if(filterBy === 'both') return titleMatch || descriptionMatch;
                
        });

    }, [searchValue, books, filterBy]);


    return {filteredBooks};
};
