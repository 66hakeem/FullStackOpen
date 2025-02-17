import Person from './Person'

const Persons = ({persons}) => {
    return (
        <ul>
            {persons.map(element => 
                <Person 
                    key={element.id} 
                    person={element}  
                />
            )}
        </ul>
    )
}

export default Persons