import { useState } from "react";
import { AddCategories, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);
   
    const onAddCategory = (value) => {

        if (categories.includes(value)) return;
        setCategories([value, ...categories]);
    }

    return (
        <>
         
          <h1>GifExpertApp</h1>
         <AddCategories onNewCategory={ value => onAddCategory(value)}/>
              {
                  categories.map(category => (
                      <GifGrid key={category} category={category} />
                  ))
              }
        </>
    )
}