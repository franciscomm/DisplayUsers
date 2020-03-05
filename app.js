//Init Github class
const github = new Github();

//Init UI class
const ui = new UI();


//Search user input
const searchUser = document.getElementById('searchUser');

//Search user input event-listener
searchUser.addEventListener('keyup', (e) => {
  //Get input text from user
  const userText = e.target.value;
  if (userText !== '') {
    //Make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          //Show Alert
          ui.showAlert('User not found', 'alert alert-danger');

        } else {
          //Show Profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    //Clear profile
    ui.clearProfile();
  }


});
