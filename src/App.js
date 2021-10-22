import './App.css';
import Card from './Card';
import Data from './Data';


function App() {
  return (
    
    <>
    <Card
    imgsrc={Data[0].imgsrc}
    title={Data[0].title}
    sname={Data[0].sname}
    link={Data[0].link}
    />
   <Card
    imgsrc={Data[1].imgsrc}
    title={Data[1].title}
    sname={Data[1].sname}
    link={Data[1].link}
    />
      <Card
    imgsrc={Data[2].imgsrc}
    title={Data[2].title}
    sname={Data[2].sname}
    link={Data[2].link}
    />

    <Card
    imgsrc={Data[3].imgsrc}
    title={Data[3].title}
    sname={Data[3].sname}
    link={Data[3].link}
    />
      <Card
    imgsrc={Data[4].imgsrc}
    title={Data[4].title}
    sname={Data[4].sname}
    link={Data[4].link}
    />
       <Card
    imgsrc={Data[5].imgsrc}
    title={Data[5].title}
    sname={Data[5].sname}
    link={Data[5].link}
    />
    </>
  );
}

export default App;
