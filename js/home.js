/**
  Adds an <option> for each challenge to the home screen <select>
*/
const buildChallengeSelect = () => {
  TargetOptgroups.forEach((group) => {
    TargetUI.challengeSelect.insertAdjacentHTML('beforeend', `<optgroup label=${group}>`);
    TargetChallenges.filter(challenge => {return challenge.optgroup === group})
                    .forEach(challenge => {
                        TargetUI.challengeSelect.insertAdjacentHTML('beforeend', `<option value=${challenge.id}>${challenge.name}</option>`);
                      })
    TargetUI.challengeSelect.insertAdjacentHTML('beforeend', `</optgroup>`);
  })
};

/**
 * Call buildChallengeSelect() once the page is loaded
*/
window.onload = function() {
  buildChallengeSelect();
};

/**
 * Retrieves the challenge selected by the user
 * @see formSubmitCallback()
*/
const setChallenge = () => {
  const id = TargetUI.challengeSelect.value;
  TargetState["id"] = id;

  // Find the challenge selected by its id
  const challenge = TargetChallenges.find(element => {return element.id == id});
  // Copy the challenge's html and targetCSS to the state
  TargetState["html"] = challenge.html;
  TargetState["targetCSS"] = challenge.targetCSS;
};

/**
 * Sets up app with the challenge selected by the user
 * @see formSubmitCallback()
*/
const displayChallenge = () => {
  // Display the challenge's HTML in the input html tab
  TargetUI.htmlDisplay.textContent = TargetState.html;

  // To write below, we need the css in style tabs
  const css = `<style>${TargetState.targetCSS}</style>`;

  // Display the challenge target in the output section
  TargetUI.outputTargetDoc.open();
  TargetUI.outputTargetDoc.write(TargetState.html + css);
  TargetUI.outputTargetDoc.close();
};

/**
 * Sets and reveals the challenge selected by the user
 * @param {Event} event - The submit event from addEventListener
*/
const formSubmitCallback = (event) => {
  // Need to prevent default form submission behaviour
  event.preventDefault();

  setChallenge();
  displayChallenge();

  // Hide the home screen and show the challenge
  TargetUI.home.hidden = true;
  TargetUI.app.hidden  = false;
};

/**
 * Call formSubmitCallback() when the user clicks the home screen submit button
*/
TargetUI.challengeForm.addEventListener('submit', formSubmitCallback);
