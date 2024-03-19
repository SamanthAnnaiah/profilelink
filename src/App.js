import { Namecomp } from './Namecomp';
import './profilestyle.css';

function App() {
  return (
    <>
      <div className='profilecard'>
        <div className='tac mt1'>
          <a href="https://avp.fandom.com/wiki/Predator_versus_Wolverine" target='_blank' rel="noreferrer">
            <img className='rounded' src={process.env.PUBLIC_URL + "/pimage.jpeg"} alt="profileimage" />
          </a>
        </div>
        <Namecomp classid={"tac cname mt2"} datacont={"Pedator Wolverine"} />
        <Namecomp classid={"tac cplace"} datacont={"Planet - Yautja Prime"} clink={"https://avp.fandom.com/wiki/Yautja_Prime"} />
        <Namecomp classid={"tac cquote mt1"} datacont={'"You will never see me coming."'} clink={"https://avp.fandom.com/wiki/Yautja_Prime"} />
        <Namecomp classid={"tac cbutton mt2"} paddy={"paddy"} datacont={'Youtube'} clink={"https://www.youtube.com/watch?v=2cFZcb6z8NA"} />
        <Namecomp classid={"tac cbutton mt3"} paddy={"paddy"} datacont={'Twitter'} clink={"https://twitter.com/Predator"} />
        <Namecomp classid={"tac cbutton mt3"} paddy={"paddy"} datacont={'Instagram'} clink={"https://www.instagram.com/predator/?hl=en"} />
        <Namecomp classid={"tac cbutton mt3"} paddy={"paddy"} datacont={'Fandom'} clink={"https://avp.fandom.com/wiki/Yautja_(Predator)"} />
        <Namecomp classid={"tac cbutton mt3 mb1"} paddy={"paddy"} datacont={'Wiki'} clink={"https://en.wikipedia.org/wiki/Predator_(franchise)"} />
      </div>
    </>
  );
}

export default App;
