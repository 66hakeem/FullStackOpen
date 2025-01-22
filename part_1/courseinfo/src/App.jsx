/* const PartLists = [
  {
    id: 1,
    part: 'Fundamentals of React',
    exercises: 10
  },
  {
    id: 2,
    part: 'Using props to pass data',
    exercises: 7
  },
  {
    id: 3,
    part: 'State of a component',
    exercises: 14
  }
]; */

/* const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
} */

/* const Content = () => {
  const lists = PartLists.map(
          function(list) {
            return (
              <div>
                <Part part = {list.part} exercises = {list.exercises} />
              </div>
            )
          }
  )
  return lists
} */

/* const Total = () => {
  let num = 0

  for (let i = 0; i < PartLists.length; i++) {
    num = num + PartLists[i].exercises
  }

  return (
    <p>Number of exerices: {num}</p>
  )
} */

/* const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part}: {props.exercises}</p>
    </div>
  )
} */


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1.name}: {part1.exercises}</p>
      <p>{part2.name}: {part2.exercises}</p>
      <p>{part3.name}: {part3.exercises}</p>
      <p>Number of exercises: {part1.exercises + part2.exercises + part3.exercises}</p>
    </div>
  )
}

export default App