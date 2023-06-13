import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


/* 
NOTA: este archivo sirve para que la página vuelva al top 0 cada vez que cambie
      la URL y se renderice un componente. 

      Debes agregarlo en el archivo main.jsx:
       
        // LO IMPORTAMOS:
        import ScrollToTop from "./components/ScrollToTop/ScrollToTop"; 


        ReactDOM.createRoot(document.getElementById("root")).render(

          <Provider store={store}>
          // LO AGREGAMOS ACÁ:
              <BrowserRouter>
              <ScrollToTop />
                <App />
              </BrowserRouter>
            </Provider>
        );


*/