import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DataTable from 'react-data-table-component';


const Table = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")
    const [filteredCountries, setFilteredCountries] = useState([])

    const getCountries = async() =>{
       try{
          const response = await axios.get('https://restcountries.com/v2/all')
          setCountries(response.data)
          setFilteredCountries(response.data)
       }catch(error){
          console.log(error)
       }
    }

    const columns = [
      {
        name: 'Country Name',
        selector: row => row.name,
        sortable: true,
      },
      {
        name: 'Country Native Name',
        selector: row => row.nativeName,
      },
      {
        name: 'Country Capital',
        selector: row => row.capital,
      },
      {
        name: 'Country Flag',
        selector: (row) => <img width={50} height={50} src={row.flag} />,
      },
      {
        name: 'Action',
        cell: (row) => <button 
            style={{
                backgroundColor: '#58BDFE',
                border: 'none',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
        >Edit</button>
      }
    ]


    useEffect(()=>{
       getCountries()
    }, [])

    useEffect(()=>{
       const result = countries.filter((country) => {
         return country.name.toLowerCase().match(search.toLowerCase())
       })

       setFilteredCountries(result)
    }, [search])

  return (
    <DataTable 
       title="Country List"
       columns={columns} 
       data={filteredCountries} 
       pagination
       fixedHeader
       fixedHeaderScrollHeight='450px'
       selectableRows
       highlightOnHover
       actions={
            <button style={{
            backgroundColor: '#58BDFE',
            border: 'none',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer'
            }}
            >Export</button>
        }
        subHeader
        subHeaderComponent={
          <input 
            type='text' 
            placeholder='Searh'
            value={search}
            style={{
              padding: '3px',
              borderRadius: '5px',
              border: '2px solid rgb(49, 162, 227)'
            }}
            onChange={(e)=> setSearch(e.target.value)}
          />
        }
    />
  )
}

export default Table