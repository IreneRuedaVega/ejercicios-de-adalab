function getUserGitHub() {
  const inputValue = document.querySelector(".text").value;
  console.log(inputValue);
  fetch("https://api.github.com/users/" + inputValue)
    .then((response) => response.json())
    .then((data) => {
      const name = document.querySelector(".name");
      name.innerHTML = data.name;
      const img = document.querySelector("img");
      img.src = data.avatar_url;
      img.alt = "Gootyfer";
      const repos = document.querySelector(".number");
      repos.innerHTML = data.public_repos;
    });
}
const btn = document.querySelector(".js-search");
btn.addEventListener("click", getUserGitHub);
