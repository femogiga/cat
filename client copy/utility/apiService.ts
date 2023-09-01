
export const fetchData = async (url, setDataCallback) => {
    const apikey = 'live_iMUqJb7gjlT4vDMVIcb6qmUevcFeh246fAHXU0ijTVLgaXk1l4Eas68c9jsoaDhL';
    const response = await fetch(`${url}${apikey}`)
    const result = await response.json();
    setDataCallback(result);
    return result;
};
