console.log(`working`);

fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
  .then(response => response.json())
  .then(data => console.log(data));