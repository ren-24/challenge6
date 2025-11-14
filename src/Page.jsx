import { useParams } from "react-router-dom";
import Page1 from "./components/page1.jsx";
import Page2 from "./components/page2.jsx";
import Page3 from "./components/page3.jsx";

export default function Page() {
  const { id } = useParams();

  const pages = {
    1: <Page1 />,
    2: <Page2 />,
    3: <Page3 />,
  };

  return pages[id]
}