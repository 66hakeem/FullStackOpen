
const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts} />
            <Total total={course.parts} />
        </div>
    )
}

const Header = ({name}) => {
    return (
        <h2>{name}</h2>
    )
}

const Content = ({parts}) => {
    return (
        <div>{parts.map(part =>
                <Part key={part.id} part={part} />
              )}
        </div>
    )
}

const Total = ({total}) => {
    const list = total.map(item => item.exercises)
    const sum = list.reduce((acc, curr) => acc + curr, 0);

    return (
        <p>Total of {sum} exercises</p>
    )
}

const Part = ({part}) => {
    return (
        <p>{part.name} {part.exercise}</p>
    )
}


export default Course






/* const Total = (props) => {
    let score = 0
    const lists = props.total.map(item =>
      score = score + item.exercises
    )
  
    return (
      <p>Total of {score} exercises</p>
    )
} */