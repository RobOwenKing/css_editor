const htmlDisplay = document.getElementById('html');
const cssInput    = document.getElementById('css');
const cssDisplay  = document.getElementById('highlighted-css');
const outputUser  = document.getElementById('output-user').contentWindow.document;

const html = '<p>Test!</p>';

// Initialise the htmlDisplay
htmlDisplay.innerText = html;

const handleCSSInput = () => {
  cssDisplay.textContent = cssInput.value;

  const css = `<style>${cssInput.value}</style>`;

  outputUser.open();
  outputUser.write(html + css);
  outputUser.close();
};
