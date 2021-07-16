/**
  Adds an <option> for each challenge to the home screen <select>
*/
const buildChallengeSelect = () => {
  CTPOptgroups.forEach((group) => {
  CTPUI.challengeSelect.insertAdjacentHTML('beforeend', `<optgroup label=${group}>`);
    CTPChallenges.filter(challenge => {return challenge.optgroup === group})
                    .forEach(challenge => {
                        CTPUI.challengeSelect.insertAdjacentHTML('beforeend', `<option value=${challenge.id}>${challenge.name}</option>`);
                      })
    CTPUI.challengeSelect.insertAdjacentHTML('beforeend', `</optgroup>`);
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
  const id = CTPUI.challengeSelect.value;
  CTPState["id"] = id;

  // Find the challenge selected by its id
  const challenge = CTPChallenges.find(element => {return element.id == id});
  // Copy the challenge's html and targetCSS to the state
  CTPState["html"] = challenge.html;
  CTPState["targetCSS"] = challenge.targetCSS;
};

/**
 * Sets up app with the challenge selected by the user
 * @see formSubmitCallback()
*/
const displayChallenge = () => {
  // Display the challenge's HTML in the input html tab
  CTPUI.htmlDisplay.textContent = CTPState.html;

  // To write below, we need the css in style tabs
  const css = `<style>${CTPState.targetCSS}</style>`;

  // Display the challenge target in the output section
  CTPUI.outputTargetDoc.open();
  CTPUI.outputTargetDoc.write(CTPState.html + css);
  CTPUI.outputTargetDoc.close();
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
  CTPUI.home.hidden = true;
  CTPUI.app.hidden  = false;
};

/**
 * Call formSubmitCallback() when the user clicks the home screen submit button
*/
CTPUI.challengeForm.addEventListener('submit', formSubmitCallback);
