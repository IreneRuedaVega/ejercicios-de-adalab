function getOrgsGitHub() {
  const inputValue = document.querySelector(".js-nameOrg").value;
  console.log(inputValue);
  fetch("https://api.github.com/orgs/" + inputValue)
    .then((response) => response.json())
    .then((data) => {
      const repos = data.repos_url;
      console.log(repos);
      return fetch(repos);
    })
    .then((secondResponse) => secondResponse.json())
    .then((secondData) => {
      const list = document.querySelector(".js-list");
      for (let i = 0; i < secondData.length; i++) {
        list.innerHTML += `<li>${secondData[i].name}</li>`;
      }
    });
}

const btn = document.querySelector(".js-button");
btn.addEventListener("click", getOrgsGitHub);
