import './App.css';
import { useState } from 'react';
import List from './List';
import Input from './Components/Input';

function App() {

  const [ postId, setPostId ] = useState("")
  return (
    <>
      <List postId={postId}/>
      <Input setPostId = {setPostId} />
    </>
  );
}

export default App;