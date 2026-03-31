import Header from './Header.jsx'
import Footer from './footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button.jsx'
function App(){
    return(
        <>
            <Header/>
            <Food/>
            <Card name="Eunice" title="Chief Marketing Officer" isDesigner={true}/>
            <Card name="Jenny" title="Chief Financial Officer" isDesigner={true}/>
            <Card name="Angella" title="Chief Operating Officer"isDesigner={false}/>
            <Card name="Lina" title="Chief Executive Officer" isDesigner={false}/>
            <Card/>
            <Card/>
            <Button/>
            <Footer/> 
        </>
    );
}

export default App