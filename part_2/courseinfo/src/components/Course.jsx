
const Course = (props) => {
    console.log('hello')
    return (
        <div>
            <Header name={props.course.name}/>
            <Content parts={props.course.parts} />
        </div>
    )
}

const Header = (props) => {
    console.log('wagwan')
    return (
        <h1>{props.name}</h1>
    )
}

const Content = (props) => {
    return (
        <div>{props.parts.map(part =>
                <Part key={part.id} name={part.name} exercise={part.exercise}/>
              )}
        </div>
    )
}

const Part = (props) => {
    return (
        <p>{props.name} {props.exercise}</p>
    )
}

export default Course



