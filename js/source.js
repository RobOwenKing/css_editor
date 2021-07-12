//const showHTML    = document.getElementById('show-html');
const showHTML    = document.getElementById('show-html');
const showCSS     = document.getElementById('show-css');
const htmlDisplay = document.getElementById('html');
const cssInput    = document.getElementById('css');
const cssDisplay  = document.getElementById('highlighted-css');

const showOutputTarget = document.getElementById('show-target');
const showOutputUser   = document.getElementById('show-user');
const outputTarget     = document.getElementById('output-target')
const outputUser       = document.getElementById('output-user')
const outputUserDoc    = outputUser.contentWindow.document;

const html = '<p>Test!</p>';

const showHTMLClick = (event) => {
  htmlDisplay.style.display = 'block';
  cssDisplay.style.display = 'none';
  cssInput.style.display = 'none';

  showHTML.classList.add('tab-active');
  showCSS.classList.remove('tab-active');
};

const showCSSClick = (event) => {
  htmlDisplay.style.display = 'none';
  cssDisplay.style.display = 'block';
  cssInput.style.display = 'block';

  showHTML.classList.remove('tab-active');
  showCSS.classList.add('tab-active');
};

showHTML.addEventListener('click', showHTMLClick);
showHTML.addEventListener('keydown', showHTMLClick);
showCSS.addEventListener('click', showCSSClick);
showCSS.addEventListener('keydown', showCSSClick);

const showOutputTargetClick = (event) => {
  outputTarget.style.display = 'block';
  outputUser.style.display = 'none';

  showOutputTarget.classList.add('tab-active');
  showOutputUser.classList.remove('tab-active');
};

const showOutputUserClick = (event) => {
  outputTarget.style.display = 'none';
  outputUser.style.display = 'block';

  showOutputTarget.classList.remove('tab-active');
  showOutputUser.classList.add('tab-active');
};

showOutputTarget.addEventListener('click', showOutputTargetClick);
showOutputTarget.addEventListener('keydown', showOutputTargetClick);
showOutputUser.addEventListener('click', showOutputUserClick);
showOutputUser.addEventListener('keydown', showOutputUserClick);

const handleCSSInput = () => {
  cssDisplay.textContent = cssInput.value;

  const css = `<style>${cssInput.value}</style>`;

  outputUserDoc.open();
  outputUserDoc.write(html + css);
  outputUserDoc.close();
};

// Initialise the htmlDisplay
htmlDisplay.innerText = html;
