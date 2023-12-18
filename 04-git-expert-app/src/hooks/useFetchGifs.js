import React from 'react'
import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
       getGifs(category)
       .then(newIamges => setGifs(newIamges))
       setIsLoading(false)
    }, []);

   return {
    images : gifs ,
    isLoading : isLoading,

   }
}

