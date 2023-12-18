import React from 'react'
import { useState } from 'react'

export  function AddCategories( {onNewCategory}) {
    const [searchValue, setSearchValue] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        if (searchValue.trim().length <= 1) return;
        onNewCategory(searchValue.trim());
        setSearchValue('');
    }
  return (
    <form onSubmit={ onSubmit}>
      <h1>Add Categories</h1>
      <input
       type="text" 
        placeholder="Buscar Gif" 
        value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)}
        />
      
    </form>
  )
}
