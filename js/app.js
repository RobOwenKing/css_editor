const html = '<p>Test!</p>';

const showHTMLClick = (event) => {
  TargetUI.htmlDisplay.style.display = 'block';
  TargetUI.cssDisplay.style.display = 'none';
  TargetUI.cssInput.style.display = 'none';

  TargetUI.showHTML.classList.add('tab-active');
  TargetUI.showCSS.classList.remove('tab-active');
};

const showCSSClick = (event) => {
  TargetUI.htmlDisplay.style.display = 'none';
  TargetUI.cssDisplay.style.display = 'block';
  TargetUI.cssInput.style.display = 'block';

  TargetUI.showHTML.classList.remove('tab-active');
  TargetUI.showCSS.classList.add('tab-active');
};

TargetUI.showHTML.addEventListener('click', showHTMLClick);
TargetUI.showHTML.addEventListener('keydown', showHTMLClick);
TargetUI.showCSS.addEventListener('click', showCSSClick);
TargetUI.showCSS.addEventListener('keydown', showCSSClick);

const showOutputTargetClick = (event) => {
  TargetUI.outputTarget.style.display = 'block';
  TargetUI.outputUser.style.display = 'none';

  TargetUI.showOutputTarget.classList.add('tab-active');
  TargetUI.showOutputUser.classList.remove('tab-active');
};

const showOutputUserClick = (event) => {
  TargetUI.outputTarget.style.display = 'none';
  TargetUI.outputUser.style.display = 'block';

  TargetUI.showOutputTarget.classList.remove('tab-active');
  TargetUI.showOutputUser.classList.add('tab-active');
};

TargetUI.showOutputTarget.addEventListener('click', showOutputTargetClick);
TargetUI.showOutputTarget.addEventListener('keydown', showOutputTargetClick);
TargetUI.showOutputUser.addEventListener('click', showOutputUserClick);
TargetUI.showOutputUser.addEventListener('keydown', showOutputUserClick);

const handleCSSInput = () => {
  TargetUI.cssDisplay.textContent = TargetUI.cssInput.value;

  const css = `<style>${TargetUI.cssInput.value}</style>`;

  TargetUI.outputUserDoc.open();
  TargetUI.outputUserDoc.write(html + css);
  TargetUI.outputUserDoc.close();
};

// Initialise the htmlDisplay
TargetUI.htmlDisplay.innerText = html;
