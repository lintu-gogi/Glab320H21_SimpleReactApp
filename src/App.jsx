
import './App.css'

function App() {

  return (
    <>
    <h1>Hello</h1>
    <Header></Header>
    <Content color="blue" text="This is my first React Application!" />
    <Content color="red" text="Wish me luck..." />
    <Content color="green" text="I think I've got it!" />
    <Footer></Footer>
    </>
  )
}
function Header() {
  return (<h1>Simple React Application</h1>);
}

function Content(props) {
  return (<p style={{color: props.color}}>{props.text}</p>);
}


function Footer() {
  return (<h1>Created by Me, of course.</h1>);
}

export default App
