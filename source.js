const showHTML    = document.getElementById('show-html');
const showCSS     = document.getElementById('show-css');
const htmlDisplay = document.getElementById('html');
const cssInput    = document.getElementById('css');
const cssDisplay  = document.getElementById('highlighted-css');
const outputUser  = document.getElementById('output-user').contentWindow.document;

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

// Initialise the htmlDisplay
htmlDisplay.innerText = html;

const handleCSSInput = () => {
  cssDisplay.textContent = cssInput.value;

  const css = `<style>${cssInput.value}</style>`;

  outputUser.open();
  outputUser.write(html + css);
  outputUser.close();
};
