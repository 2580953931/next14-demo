//

export const getInfo = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const url = "https://jsonplaceholder.typicode.com/posts/1/comments";
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      console.log(data);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
