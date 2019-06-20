const token = 'ca8f851fa946c09c52257f31efc545c91aa8d7a3';

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return token;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
   fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'POST',
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
  const repo = `melzreal/js-ajax-fetch-lab`;
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}

function getIssues() {
  const repo = `melzreal/js-ajax-fetch-lab`;
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => console.log(json));
