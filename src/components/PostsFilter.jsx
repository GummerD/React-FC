import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

export default function PostsFilter({filter, setFilter}) {
  return (
    <div>
        <MyInput 
          value = {filter.query}
          placeholder = "Поиск..."
          onChange={e =>setFilter({...filter, query: e.target.value})}
        />
        <MySelect 
          value={filter.sort}
          onChange={setSort => setFilter({...filter, sort: setSort})}
          options = {[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
          defaultValue='Сортировка'
        />
      </div>
  )
}
