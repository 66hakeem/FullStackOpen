import { useState, useEffect } from 'react'
import axios from 'axios'
import CountryDetails from './Components/CountryDetails'

function App() {

  const [countries, setCountries] = useState([])
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
    .then(response => {
      setCountries(response.data)
    })
  }, [])

  const handleValueChange = (event) => {
    setData(event.target.value)
  }

  const filteredCountries = data ? countries.filter(country => country.name.common.toLowerCase().includes(data.toLowerCase())) : []


  
  return (
    <div>
      <div>
        find countries <input value={data} onChange={handleValueChange}/>
      </div>
        {filteredCountries.length > 10 ? 
          (
            <p>Too many matches, specify another filter</p>
          ) : 
        filteredCountries.length === 1 ? 
          (
            <CountryDetails country={filteredCountries[0]} />
          ) :
          (
            <ul>
              {filteredCountries.map(country => (
                <li key={country.ccn3}>{country.name.common}</li>
              ))}
            </ul>
          )
        }
    </div>
  )
}

export default App
