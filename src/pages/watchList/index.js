import {
  Navigation
} from '/pages/navigation/index.js';

export const WatchList = () => {
  const nav = Navigation();
  const rootElement = document.createElement('div');

  rootElement.appendChild(nav);

  const contentElement = () => {
    const boxElement = document.createElement('div');
    let movieWatched = "";
    boxElement.innerHTML = 
    movieWatched +=
    `
  <div class="backgroundPoster" id="">
    <img class="poster" src="" alt="Capa do filme ..."/>
    </div>
  </div> 
  `;
  const userId = firebase.auth().currentUser.uid;
  const db = firebase.firestore();
  var watchedList = db.collection('users').doc(userId);
    watchedList.get({
    listwatched: firebase.firestore.FieldValue
  }).then(
        console.log("Document data:", watchedList))
    .catch(function(error) {
    console.log("Error getting document:", error);
});
    return boxElement
  }
  rootElement.appendChild(contentElement())

  return rootElement;
};
