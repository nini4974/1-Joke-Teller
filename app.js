// Selecting DOM Elements:
const jokeContainer = document.querySelector(".joke");
const btn = document.querySelector(".btn-request");

// Initial Joke Requests:
getJoke();

// Event Listener for Button Click:
btn.addEventListener("click", getJoke);

// // Async Function to Fetch Jokes:
async function getJoke() {
  // Code inside this function is asynchronous and uses the Fetch API

  // Configuration for the request headers
  const header = {
    headers: {
      Accept: "application/json",
    },
  };

  // Fetching the joke from the API
  const res = await fetch("https://icanhazdadjoke.com", header);

  // Extracting JSON data from the response
  const data = await res.json();

  // Displaying the joke in the HTML
  jokeContainer.innerHTML = data.joke;
}

// // promises fetch
// // send a request to the url
// function getJoke() {
//   const header = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   // fetch api
//   fetch("https://icanhazdadjoke.com", header)
//     // fetch("https://icanhazdadjoke.com", {
//     //   headers: { Accept: "application/json"},
//     // })
//     // request res
//     .then((res) => res.json())
//     .then((data) => {
//       jokeContainer.innerHTML = data.joke;
//     });
// }
