import React,{Fragment} from 'react';
import './Hello.css';


function Hello({firstname}) {
  return <div>
      
<h3 className="myname">This is child component to add parent and parent variable value  is {firstname} </h3>
      
      
     </div>
}

export default Hello;
