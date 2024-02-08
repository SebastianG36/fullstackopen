const Header = (props) => (
  <h1>{props.course.name}</h1>
)

const Content = (props) => {
  console.log(props)

  return (
  <>
    <Part number={1} course={props.course} />
    <Part number={2} course={props.course} />
    <Part number={3} course={props.course} />
  </>
  )
}

const Part = ({number, course}) => (
  <>
    <h2>Part {number}: {course.parts[number - 1].name}</h2>
    <p>Number of exercises: {course.parts[number - 1].exercises} </p>
  </>
)

const Total  = (props) => (
  <h3>Total number of exercises: {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</h3>
)

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

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App