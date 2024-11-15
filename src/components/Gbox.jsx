import { useLoaderData, useParams } from "react-router-dom";
import Box from "./Box";
import { useEffect, useState } from "react";

export default function Gbox() {
  const data = useLoaderData();
  const { category } = useParams();

  const [gadgetData, setGadgetData] = useState([]);

  useEffect(() => {
    if (category) {
      if (category === "All Products") {
        setGadgetData(data);
      } else {
        const filtered = [...data].filter((g) => g.category === category);
        setGadgetData(filtered);
      }
    } else {
      setGadgetData(data);
    }
  }, [category, data]);

  return (
    <div className="grid grid-cols-3 gap-2">
        
      {gadgetData.map((gadgets) => (
        <Box key={gadgets.product_id} gadgets={gadgets} />
      ))}
    </div>
  );
}
