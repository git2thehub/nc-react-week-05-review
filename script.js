console.log('hello')
// will give you a 404 status - no data
// fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// will return data
// 200 status is good
// fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// async await
const fetchResponse = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log(data)
}

fetchResponse()