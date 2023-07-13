function getUserData() {
    const username = document.getElementById('usernameInput').value;
    const apiUrl = `https://api.github.com/users/${username}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const avatarElement = document.querySelector('.avatar');
            const nameElement = document.getElementById('name');
            const reposElement = document.getElementById('repos');
            const followersElement = document.getElementById('followers');

            avatarElement.style.backgroundImage = `url(${data.avatar_url})`;
            avatarElement.style.backgroundSize = "100%"
            nameElement.textContent = `Name: ${data.name}`;
            reposElement.textContent = `Repositories: ${data.public_repos}`;
            followersElement.textContent = `Followers: ${data.followers}`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}