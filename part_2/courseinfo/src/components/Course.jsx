
const Course = (props) => {
    return (
        <div>
            <Header name={props.course.name}/>
            <Content parts={props.course.parts} />
            <Total total={props.course.parts} />
        </div>
    )
}

const Header = (props) => {
    return (
        <h1>{props.name}</h1>
    )
}

const Content = (props) => {
    return (
        <div>{props.parts.map(part =>
                <Part key={part.id} name={part.name} exercise={part.exercises}/>
              )}
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    const list = props.total.map(item => item.exercises)
    const sum = list.reduce((acc, curr) => acc + curr, 0);

    return (
        <p>Total of {sum} exercises</p>
    )
}

/* const Total = (props) => {
    let score = 0
    const lists = props.total.map(item =>
      score = score + item.exercises
    )
  
    return (
      <p>Total of {score} exercises</p>
    )
} */

const Part = (props) => {
    return (
        <p>{props.name} {props.exercise}</p>
    )
}


export default Course