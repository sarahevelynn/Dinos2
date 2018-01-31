// (function initializePage(){
//   getDinosaurs().then(response => {
//     response.map(buildProfileItem).forEach(addProfileItem);
//     document.querySelectorAll('.profile-card')
//       .forEach(element => element.addEventListener('click', toggleDetails));
//   });
// })();

// function getDinosaurs() {
//   let apiURL = './dinosaurs.json';
//   return fetch(apiURL).then(response => response.json());
// }

function addProfileItem(profileItem) {
  document.querySelector('#profiles').appendChild(profileItem);
}

function buildProfileItem(profile){
  // profile-template is referring to handlebars
  const template = document.querySelector('#profile-template').innerHTML;
  const $li = document.createElement('li');
  $li.innerHTML = Handlebars.compile(template)(profile);
  return $li;
}
