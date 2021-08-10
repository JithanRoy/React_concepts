import {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let products = [
        {name : 'photoshop', price : '$29.99' },
        {name : 'illustrator' , price : '$10.22'},
        {name : 'premier pro', price : '$20.22'},
        {name : 'lightroom', price : '$9.99'}
      ]

  let friends = [
    {name: 'samir', age: '18', designation: 'student'},
    {name: 'karim', age: '20', designation: 'photographar'},
    {name: 'jerin', age: '23', designation: 'talented'},
    {name: 'merin', age: '25', designation: 'telano'}
  ]
  var jobList = ['Programmer', 'Teacher', 'Singer','Photographer'];

  return (
    <div className="App">
      <header className="App-header">

        <Users></Users>
        <Counter></Counter>
       
        <p>I am a react person -_-</p>
        
        <ul>
            {
              jobList.map(catagory => <li>{catagory}</li>)
            }
        </ul>
         
            {
              products.map(pd => <Product x ={pd}></Product>)
            }

            {
              friends.map(each => <Friends bio ={each} ></Friends>)
            }
  
 
         
      </header>
    </div>
          
  );
        }      

function Users() {
  const [users , setUsers] = useState([]);


  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
       <ul>
          <h3>{users.length}</h3>
      </ul>

      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}
function Counter() {
  var buttonStyle = {
    border: '1px solid grey',
    borderRadius: '5px',
    height: '35px',
    width: '80px',
    margin: '10px'
  }
  const [count, setCount] = useState(0)
  //const Decrease = () => setCount(count-1); 
  return (
      <div>
        <p>You Clicked {count} times.</p>
        <button style= {buttonStyle} onClick = {() => setCount(count+1)}>push me.baby!</button>
        <button onClick = {() => setCount(count-1)} style = {buttonStyle}> pop me!baby </button>
      </div>
  );
}

function Friends(props) {
  const cardStyle = {
    height : '300px',
    width : '300px',
    border : '1px solid gray',
    borderRadius: '10%',
    float : 'left'
  }
 
  const {name, age, designation} = props.bio;
  return (
      <div style={cardStyle}>
          <h3>{name}</h3>
          <h2>{age}</h2>
          <h3>{designation}</h3>
      </div>
  );
}

function Product (props) {

  const cardStyle = {
    height : '300px',
    width : '300px',
    border : '1px solid gray',
    borderRadius: '10%',
    float : 'left'
  }

  var buttonStyle = {
    border: '1px solid grey',
    borderRadius: '5px',
    ///fontColor: 'white',
    height: '35px',
    width: '80px'
  }
  
  const {name, price} = props.x;
  return (
    <div style = {cardStyle}>
          <h3>{name}</h3>
          <h2>{price}</h2>
          <button style= {buttonStyle}>Buy Now</button>
    </div>
  );
    
}

function Person (props) {

 const personStyle = {
   border : '2px solid red',
   color : 'yellow',
   margin : '10px',
   padding : '10px'
   
 }

  return (
    <div style = {personStyle}>
        <h1 style={{fontSize : '50px', color : 'cyan'}}>Name : {props.name}</h1>
        <h3>Job : {props.Job}</h3>
    </div>
  );
}


 export default App;