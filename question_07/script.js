const input = document.querySelector("#input");
const inputUrl = document.querySelector("#input-url");
const inputAuthorName = document.querySelector("#input-author-name");
const para = document.querySelector("#para");
const showTitle = document.querySelector("#show-title");
const showImage = document.querySelector(".image");
const showStory = document.querySelector("#story");
const showAuthorName = document.querySelector("#show-author-name");

input.addEventListener("input", () => {
    showTitle.textContent = input.value;
});

inputUrl.addEventListener("input", () => {
    showImage.style.backgroundImage = `url('${inputUrl.value}')`;
});

inputAuthorName.addEventListener("input", () => {
    showAuthorName.textContent = inputAuthorName.value;
});

para.addEventListener("input", () => {
    showStory.textContent = para.value;
});