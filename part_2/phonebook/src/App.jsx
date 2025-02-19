import { useState, useEffect } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/contacts'


//root component
const App = () => {

  //all different states used in the App
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')


  //uses person service to get and set iniitial
  //list of contacts
  useEffect(() => {
    personService
      .getAll()
      .then(returnedPersons => {
        setPersons(returnedPersons)
      })
  }, [])


  //resets name and number input fields
  //sets empty strings for newNumber and newName states
  const reset = () => {
    setNewName('')
    setNewNumber('')
  }


  //Adds details(name and number to a phonebook) through a form
  //detects if name or number being added is already in the phonebook
  const addDetails= (event) => {
    event.preventDefault()

    const nameObject = {
      name: newName,
      number: newNumber
    }
    
    const existingPerson = persons.find(person => person.name === newName)
    if(existingPerson) {
      if(
        window.confirm(
          `${newName} is already added to the phonebook, replace old number with a new one ?`
        )
      ) {
        const updatedPerson = {
          ...existingPerson,
          number: newNumber
        }
        personService
          .updateNumber(existingPerson.id, updatedPerson)
          .then(returnedPerson  => {
            setPersons(
              persons.map(person => person.id === existingPerson.id ? returnedPerson : person)
            )
            reset()
          })
      } 
      else {
        reset()
        return
      }
    } 
    else {
      personService
        .create(nameObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          reset('')
        })
    }
  }


  //three  handle functions that follow
  //changes in three input fields in the
  //App (name, number, filter)
  //whatever the user types is set as the state
  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }


  //handles filtering/search functionality
  //when a user tries searching by name
  const personsToShow = filter ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) : persons


  //handles deleting a user when the delete button is clicked
  //user has to confirm deletion
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