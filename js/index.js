const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchSuggested = document.getElementById('searchSuggested');
const lastSearchs = document.getElementById('searchlastSearchs');
const searchButtons = document.getElementsByClassName('searchButtons');
const buttonIcon = document.getElementById('buttonIcon');
const buttonSeeMore = document.getElementsByClassName('buttonSeeMore');
const firstDiv = document.getElementById('firstDiv');
const secondDiv = document.getElementById('secondDiv');
const thirdDiv = document.getElementById('thirdDiv');
const fourthDiv = document.getElementById('fourthDiv');

getTendenciesGifs(gifsResultsGrid);

searchButton.addEventListener('click', searchEventListener);
const searchEventListener = () => {
  searchGifs(searchInput.value, gifsResultsGrid);
  gifsResultsText.innerText = searchInput.value;
  gifsResultsText.scrollIntoView();
  saveSearchs(searchInput.value.trim());
  searchInput.value = '';
  searchSuggested.style.display = 'none';
  lastSearchs.style.display = 'block';
  lastSearchs.style.display = 'flex';
};


searchInput.addEventListener('keyup', (e) => {
  if (searchInput.value.trim() !== '' && e.keyCode === 13) {
    searchEventListener();
  }
});

Array.from(searchButtons).forEach(element => {
  element.addEventListener('click', () => {
    gifsResultsText.innerText = element.textContent;
    searchSuggested.style.display = 'none';
    searchGifs(element.childNodes[0].nodeValue, gifsResultsGrid);
    gifsResults.scrollIntoView();
  });
});

searchInput.addEventListener('keyup', () => {
  if (searchInput.value.trim() !== '') {
    searchButton.removeAttribute('disabled');
    searchButton.classList.add('button--primary');
    searchSuggested.style.display = 'block';
    buttonIcon.style.opacity = 1;
  } else {
    searchButton.setAttribute('disabled', '');
    searchButton.classList.remove('button--primary');
    buttonIcon.style.opacity = 0.3;
    searchSuggested.style.display = 'none';
  }
});

Array.from(buttonSeeMore).forEach(element => {
  element.addEventListener('click', () => {
    searchGifs(element.name, gifsResultsGrid);
    gifsResults.scrollIntoView();
  });
});

searchCategoryGifs('thanos', firstDiv);
searchCategoryGifs('ubuntu', secondDiv);
searchCategoryGifs('baby yoda', thirdDiv);
searchCategoryGifs('sailor moon', fourthDiv);
