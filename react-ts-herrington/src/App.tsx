import React from 'react';
import './App.css';

const Header = ({title}: {title:string}) => {
  return (
    <h2>{title}</h2>
  );
};

const Box:React.FC<{children:string}> = ({children}) => {
  return (
    <div style={{
      padding: "1rem",
      fontWeight: "bold"
    }}>
      {children}
    </div>
  );
};

const List:React.FC<{items: string[], onClick?: (item:string) => void}> = ({items, onClick}) => {
  return (
    <ul>
      {items.map((item, index) => <li key={index} onClick={()=>onClick?.(item)}>{item}</li>)}
    </ul>
  );
};

interface Payload {
  text: string;
}

function App() {

  const [payload, setPayload] = React.useState<Payload | null>(null);

  React.useEffect(() => {
    fetch('/data.json')
      .then(resp => resp.json())
      .then(data => {
        setPayload(data);
      })
  }, []);

  const onListClick = React.useCallback((item: string) => {
    alert(item);
  }, [])

  return (
    <div>
      <Header title="Introduction" />
      <Box>
        Hello there
      </Box>
      <List items={['one', 'two', 'three']} onClick={onListClick}/>
      <Box>{JSON.stringify(payload)}</Box>
    </div>
  );
}

export default App;
