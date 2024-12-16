import Constants from "./harryPottersBooks.enum";
import { Books } from "./harryPotterBooks.types";

const fetchBooks = async () =>{
    try {
        const endpoint = Constants.BASE_URL;
        const response = await fetch(endpoint);
        const data = await response.json() as Books;
        return data; // return books
      } catch (err) {
        console.log(err);
      }
}

export {
    fetchBooks
}