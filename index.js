const token = '4fb1eb31d2e48f10d7d4cf8c78eaedf7454751dd';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'https://api.github.com/learn-co-curriculum/js-ajax-fetch-lab/forks';
  //use fetch to fork it!
  fetch(repo, {
    method: 'POST',
    headers: {
        Authorization: `token ${token}`
    }
  })

  .then(response => response.json())
  .then(reply =>  console.log(JSON.stringify(reply) );

}

function showResults(json) {
  //use this function to display the results from forking via the API

}

function createIssue() {
  //use this function to create an issue based on the values input in index.html
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
