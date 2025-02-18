import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/contacts'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3002/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addDetails= (event) => {
    event.preventDefault()
    if (persons.some(person => person.name.toLowerCase() === newName.toLowerCase())) {
      alert(`${newName} is already added to the phonebook`)
      return
    } 
    const nameObject = {
      name: newName,
      number: newNumber
    }
    personService
      .create(nameObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const personsToShow = filter ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons

  const deleteEntry = id => {
    const person = persons.find(person => person.id === id)

    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deleteUser(id)
        .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(e => {
          alert(
            `Failed to delete user.`
          )
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={filter} setSearch={handleFilter} />
      <h2>Add a new</h2>
      <PersonForm
        addDetails = {addDetails} 
        newName = {newName} 
        handleNewName = {handleNewName}
        newNumber = {newNumber}
        handleNewNumber = {handleNewNumber}
      />
      <h3>Numbers</h3>
      <ul>
        {personsToShow.map(element => 
          <Persons
            key={element.id}
            persons={element}
            deletePerson={() => deleteEntry(element.id)}
          />
        )}
      </ul>
    </div>
  )
}

export default App