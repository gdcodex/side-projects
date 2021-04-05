import { useState } from "react";
import image from "./image.json";
import "./pexels.css";
var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "563492ad6f91700001000001fc51065f4305444fa8ed6995fb178d3c"
);
myHeaders.append(
  "Cookie",
  "__cf_bm=e67d70cf5a7c18c04047ea83b22de7bdb5920577-1617543980-1800-AfwNhcORIiLVzZcpOdC9ZH6yYoPryCFyS8lI6mPhyZ0FhktcaZB1v09/cB3oCcpIe6LPpXDaJk4+tCcwH4Fw4B0=; __cfduid=ddc3de9ead0391d1a562a3f004bedc4531617515105"
);

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};
function App3() {
  const [ImageBox, setImageBox] = useState(image.photos);
  const [InputText, setInputText] = useState("");
  const [loading, setloading] = useState(null);
  const [error, seterror] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    setInputText((p) => value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    seterror(false);
    setloading(true);
    fetch(`https://api.pexels.com/v1/search?query=${InputText}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setloading(false);
        setImageBox(result.photos);
      })
      .catch((error) => {
        console.log("error", error);
        setloading(false);
        seterror(error);
      });
  };
  return (
    <main className="pexel-container">
      <header className="pexel-header">
        <h3>
          Nudes <img src="./sexy.png" id="icon" alt="icon" />
        </h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search your fantasies"
            name="query"
            onChange={onChange}
            value={InputText}
            autoComplete="off"
            id="input"
          />
          <input id="label" type="submit" value="Search" />
        </form>
      </header>
      <section className="result-container">
        {loading && <h3>loading.....</h3>}
        {error && <h3>{error}</h3>}
        {!loading && (
          <>
            <div className="result">
              {ImageBox &&
                ImageBox.slice(0, 5).map((e, i) => (
                  <img className="pexels" src={e.src.large} alt="img" key={i} />
                ))}
            </div>
            <div className="result">
              {ImageBox &&
                ImageBox.slice(5, 10).map((e, i) => (
                  <img className="pexels" src={e.src.large} alt="img" key={i} />
                ))}
            </div>
            <div className="result">
              {ImageBox &&
                ImageBox.slice(10, 15).map((e, i) => (
                  <img className="pexels" src={e.src.large} alt="img" key={i} />
                ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}

export default App3;
