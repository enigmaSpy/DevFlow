import qs from "query-string";
interface UrlQueryParams{
    params: string;
    key: string;
    value: string;
}
interface RemoveUrlQueryParams{
    params: string;
    keysToRemove: string[];
}
export const formURLQuery = ({params, key, value}:UrlQueryParams)=>{
    const queryString = qs.parse(params);

    queryString[key]= value;
    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString
    });
}

export const removeKeysFromQuery =({params, keysToRemove}:RemoveUrlQueryParams)=>{
        const queryString = qs.parse(params);
    keysToRemove.forEach((key:string) => {
        delete queryString[key];
    });
    return qs.stringifyUrl({
        url: window.location.pathname,
        query: queryString
    },{skipNull:true});
}