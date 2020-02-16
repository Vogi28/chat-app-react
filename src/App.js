import React from 'react';
import Contact from './components/Contact';

const isConnected = true;

function App() {
  return (
    <div classname='App'>
      <Contact 
      image="https://www.pngitem.com/pimgs/m/532-5325667_chibi-iron-man-chibi-iron-man-cute-hd.png" 
      name="CutIron" 
      status={isConnected} 
      statusText={isConnected ? 'online' : 'offline'} 
      />
      <Contact 
      image="https://i.pinimg.com/originals/5b/ca/cc/5bcacc2e312b5e929c8092cbfcb72858.jpg" 
      name="CutCaptain" 
      status={isConnected} 
      statusText={isConnected ? 'online' : 'offline'} 
      />
      <Contact 
      image="https://1.bp.blogspot.com/-Xj8pykSgDvU/V7c6N1paXtI/AAAAAAAAMu0/qftH8hn7OZUa4wMfjZiiFOjyV0MdgDv0ACLcB/s1600/chibi%2Bhulk.jpg" 
      name="CutHulk" 
      status={isConnected} 
      statusText={isConnected ? 'online' : 'offline'} 
      />
    </div>
  );
}

export default App;
