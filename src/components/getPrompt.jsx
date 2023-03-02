import React, { useEffect, useState } from "react";

export default function GetPrompt({ refresh }) {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("https://gamegenerator-cc1ec.web.app/main");
        const Data = await response.text();
        setData(Data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [refresh]);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>{data}</p>}
    </div>
  );
}