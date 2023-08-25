export const addFavToLocalStorage = (vote) => {
  const storageItem = JSON.parse(localStorage.getItem("historyVote"));
  storageItem.unshift(vote);
  localStorage.setItem("historyVote", JSON.stringify(storageItem));
};

export const removeFavFromLocalStorage = (image_id) => {
  const storageItem = JSON.parse(localStorage.getItem("historyVote"));
  const filteredStorage = storageItem.filter((item) => item.id !== image_id);
  localStorage.setItem("historyVote", JSON.stringify(filteredStorage));
};
