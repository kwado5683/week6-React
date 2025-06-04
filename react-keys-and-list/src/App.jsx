import Header from "./Components/Header.jsx";
import Section from "./Components/Section.jsx";
import Footer from "./Components/Footer.jsx";
import {data} from "./lib/data.js";

export default function App() {
  return (
    <>
      <Header />
      {data.map(function (dataItem) {
        return (
          <Section
            key={dataItem.id}
            title={dataItem.title}
            content={dataItem.content}
          />
        );
      })}
      <Footer />
    </>
  )
}