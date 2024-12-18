import { useState } from "react";

export const useLayout = () => {


    const [isGrid,setIsGrid] = useState<boolean>(false);

    const handleToggleLayout = () => {
        setIsGrid((prev) => !prev); // Toggle between grid and list
    }

     
    return {
        isGrid,
        handleToggleLayout,
    };
    
};