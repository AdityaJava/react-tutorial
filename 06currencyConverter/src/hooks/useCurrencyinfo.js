import { useEffect, useState } from "react";

function useCurrencyInfo( currency ) {
  console.log( currency )
  const [ data, setData ] = useState( {} );
  useEffect( () => {
    fetch( `http://www.floatrates.com/daily/${ currency }.json` )
      .then( ( res ) => res.json() ) // <-- convert response to JSON
      .then( ( jsonData ) => setData( jsonData ) )
      .catch( ( err ) => console.error( "Error fetching currency data:", err ) );
  }, [ currency ] );
  return data;
}

export default useCurrencyInfo;