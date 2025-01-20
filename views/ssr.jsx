import {createContext, useContext} from "react";

const SSRContext = createContext(false);

export const SSRProvider = (props) => {
    const {value, ..._props} = props;
    return <SSRContext.Provider value={value} {..._props}/>
}

export const useSSR = () => useContext(SSRContext);