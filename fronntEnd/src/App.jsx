import { useState, useEffect } from "react";
import "./App.css";
import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
function App() {
  const [data, setData] = useState(null);
  const builder = imageUrlBuilder(client);
  function urlFor(source) {
    return builder.image(source);
  }
  useEffect(() => {
    try {
      client
        .fetch(
          `*[_type == "product"]{
            name,
            prices,
            images
          }`
        )
        .then((data) => {
          // console.log(data);
          setData(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {data?.map((document) => {
        return (
          <div key={document.id}>
            <p>{document.name}</p>
            <img src={urlFor(document.images[0].asset._ref).url()} alt="" />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    marginRight: ".5rem",
                  }}
                >
                  {document.prices[0].currency}
                </p>
                <h2>{parseFloat(document.prices[0].value).toFixed(2)}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default App;
