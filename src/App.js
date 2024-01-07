import React,{useState} from 'react'
import List from './components/List'

const App = () => {

  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  }
  const hideCartHandler = () => {
    setCartShown(false);
  }

  return (
    <>
      <List onCartShow={showCartHandler} cartShown={cartShown} />
    </>
  )
}

export default App
