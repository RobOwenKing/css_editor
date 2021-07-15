/**
  Adds an <option> for each challenge to the home screen <select>
*/
const buildChallengeSelect = () => {
  TargetOptgroups.forEach((group) => {
    TargetUI.challengeSelect.insertAdjacentHTML('beforeend', `<optgroup label=${group}>`);
    TargetChallenges.filter(challenge => {return challenge.optgroup === group})
                    .forEach(challenge => {
                        TargetUI.challengeSelect.insertAdjacentHTML('beforeend', `<option id=${challenge.id}>${challenge.name}</option>`);
                      })
    TargetUI.challengeSelect.insertAdjacentHTML('beforeend', `</optgroup>`);
  })
};

/**
  Call buildChallengeSelect() once the page is loaded
*/
window.onload = function() {
  buildChallengeSelect();
};

/**
 * Reveals the challenge selected by the user
 * @param {Event} event - The submit event from addEventListener
*/
const formSubmitCallback = (event) => {
  // Need to prevent default form submission behaviour
  event.preventDefault();

  // Hide the home screen and show the challenge
  TargetUI.home.hidden = true;
  TargetUI.app.hidden  = false;
};

/**
  Call formSubmitCallback() when the user clicks the home screen submit button
*/
TargetUI.challengeForm.addEventListener('submit', formSubmitCallback);
