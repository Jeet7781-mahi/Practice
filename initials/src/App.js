//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

let ox="Hello";
let user={
  firstName:"Jeet",
  lastName:"Chaudhary",
  imageURL:"https://avatars.githubusercontent.com/u/66759896?v=4",
  size:90
}
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
let listItems= products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
)
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
function App() {
  return (
    <>
    <div className="close">Lovely</div>
      <h1><i>{ox}</i></h1>
      <h1>Hello, {user.firstName} {user.lastName}</h1>
      <img className='profile' src={user.imageURL} alt="Profile" width={user.size} height={user.size}/>
      <ul>
        {listItems}
      </ul>
      <MyButton />
      <MyButton />
      
        
      </>
  );

}

export default App;
