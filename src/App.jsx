import { Brand } from "./component/brand";
import { Card } from "./component/card";
import { Subscribe } from "./component/email";
import { Footer } from "./component/footer";
import { Menu } from "./component/menu";
import { Printbook } from "./component/printbook";


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Card></Card>
      <Brand></Brand>
      <Printbook></Printbook>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
