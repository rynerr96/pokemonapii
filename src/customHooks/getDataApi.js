import axios from "axios";
import { useEffect, useState } from "react"

function getDataApi(url,body,numberOfPages) {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);


  const dataApi = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setData(response.data);
        setIsError(false);
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
  },[body,numberOfPages])


  return{
    //getDataApi
    data,
    //Loading
    isLoading,
    //Error
    isError
  }
}

export default getDataApi;
