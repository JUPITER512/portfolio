// App.js

import Home from "@pages/Home/Home";
import Loader from "@pages/Loader/Loader";
import { useEffect, useState } from "react";

const App = () => {
  const [display, setState] = useState(false);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setState(true);
    }, 500);
    return () => clearTimeout(timeOutId);
  }, []);

  if (display) {
    return <Home />;
  }
  
  return <Loader />;
};

export default App;
