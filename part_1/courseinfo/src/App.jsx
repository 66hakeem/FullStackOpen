
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  const lists = props.course.parts.map(function(item) {
    return (
      <div>
        <p>{item.name}: {item.exercises}</p>
      </div>
    )
  })
  return lists
}

const Total = (props) => {
  let score = 0
  const lists = props.course.parts.map(function(item) {
    score = score + item.exercises
  })

  return (
    <p>Number of exercises: {score}</p>
  )
}




const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  console.log("hello")
  console.log(course.parts[2].exercises)

  return (
    <div>
      <Header course={course.name} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}
export default App