//closure
function promiseWrapper(promise: Promise<any>) {
  let status = "pending";
  let result;

  const suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      }
      if (status === "error") {
        throw result;
      }
      if (status === "success") {
        return result;
      }
    }
  };
}

function timedFetch(url, timer) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fetch(url).then((response) => {
        resolve(response.json());
      });
    }, timer);
  });
}

export function getResource(url) {
  const data = timedFetch(url, 500);
  return promiseWrapper(data);
}
