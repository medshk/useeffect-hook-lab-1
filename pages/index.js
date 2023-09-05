import DogList from "../Components/DogList/DogList";
import Form from "../Components/Form/Form";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect
  const [data, setData] = useState([]);
  const [input, setInput] = useState();
  console.log("mounted");

  const fetchData = async () => {
    const data = await fetch(
      "https://dog.ceo/api/breeds/image/random/" + input
    );
    const response = await data.json();
    console.log("response", response.message);
    setData(response.message);
  };

  useEffect(() => {
    fetchData();
  }, [input]);

  return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      <Form setNumberOfDogs={setInput} />
      {/* This page should receive the images array */}
      <DogList dogsList={data} />
    </div>
  );
}
