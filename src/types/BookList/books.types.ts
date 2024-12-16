
export type BookTyped = {
    number: number;
    title: string;
    originalTitle: string;
    releaseDate: string;
    description: string;
    pages: number;
    cover: string;
    index: number;
  };

export interface IBookProps {
      books: BookTyped[];
}

export interface IBookItemProps {
    number: number
    title: string;
    releaseDate: string;
    cover: string;
}
