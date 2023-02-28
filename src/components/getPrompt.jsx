import React, { useEffect, useState } from "react";

export default function GetPrompt() {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gamegenerator-cc1ec.web.app/main');
        const Data = await response.text();
        setData(Data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
}