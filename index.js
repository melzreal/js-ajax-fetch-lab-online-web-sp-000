const token = 'ca8f851fa946c09c52257f31efc545c91aa8d7a3';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return 'ca8f851fa946c09c52257f31efc545c91aa8d7a3';
}

function forkRepo() {
  const repo = 'https://api.github.com/learn-co-curriculum/js-ajax-fetch-lab/forks';
  //use fetch to fork it!
  fetch('https://api.github.com/repos/learn-co-curriculum/js-ajax-fetch-lab/forks', {
    method: 'GET',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(response => response.json())
  .then(reply =>  showResults(reply));

}

function showResults(json) {
  //use this function to display the results from forking via the API
  document.getElementById('results').innerHTML = `<a href=${json.html_url}>${
     json.html_url
   }</a>`;
}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
