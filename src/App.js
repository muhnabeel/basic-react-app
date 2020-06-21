 import React,{Fragment} from 'react';
 import Hello from './Hello';


function App({name,age}) {
  return <div>
      
<h1>Hello {name} your age is {age}</h1>
      <br/>
     <Hello firstname={name} ></Hello> 
      
      
     </div>
}

export default App;
