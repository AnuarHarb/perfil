// Forma dinámica --- recomendada
// Querrys al DOM
// buttons
const tabsButtons = document.querySelectorAll('.tab-button');
// console.log(tabsButtons);
// sections
const tabsSections = document.querySelectorAll('.tab-section');
// console.log(tabsSections);

for(const button of tabsButtons){
  button.addEventListener('click', function(event) {
    const clickedButton = event.target;
    let activeTab = clickedButton.getAttribute('data-tab');
    activeTab += '-tab';

    for(const section of tabsSections){
      if(activeTab == section.getAttribute('id')){
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    }
  });
}

//---------------------------------

// // Forma específica --- Hardcodeada
// // Querrys al DOM
// //Buttons
// const friendsButton = document.querySelector('#friends-button');
// const settingsButton = document.querySelector('#settings-button');
// //Sections
// const friendsTab = document.querySelector('#friends-tab');
// const settingsTab = document.querySelector('#settings-tab');
//
// //Events
// friendsButton.addEventListener('click', function() {
//   friendsTab.classList.add('active');
//   settingsTab.classList.remove('active');
// });
//
// settingsButton.addEventListener('click', function() {
//   settingsTab.classList.add('active');
//   friendsTab.classList.remove('active');
// });
