export const helperHttp = () => {
  const custumFetch = (endpoint, options) => {
    const defaultHeaders = {
      accept: "application/json",
    };

    const controller = new AbortController();
    // const { signal } = controller;

    options.signal = controller.signal;
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeaders, ...options.headers }
      : defaultHeaders;
    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Occurred an Error",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => custumFetch(url, options);
  const post = (url, options = {}) => {
    options.method = "POST";
    return custumFetch(url, options);
  };
  const put = (url, options = {}) => {
    options.method = "PUT";
    return custumFetch(url, options);
  };
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return custumFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
