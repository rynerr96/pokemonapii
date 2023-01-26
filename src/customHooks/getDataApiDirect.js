import axios from "axios";
import { useState,useEffect } from "react";

function getDataApiDirect(url,isBoolean, number) {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);


  const dataApi = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(url);

      if (response.status === 200 ) {
        setData(response.data);
        setIsError(false);
        setPage(number)
      };

    }
    catch (error) {
      setIsError(true);

    } finally {
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    dataApi();
  },[isBoolean])

  return {
    //getDataApi
    data,
    //for number page
    page,
    //Loading
    isLoading,
    //Error
    isError
  }
}

export default getDataApiDirect;
