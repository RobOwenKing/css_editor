const cssInput = document.getElementById('css');
const cssDisplay = document.getElementById('highlighted-css');
const outputUser = document.getElementById('output-user').contentWindow.document;

// Initialise the highlighted output with whatever is in the input
cssDisplay.textContent = cssInput.value;

const handleCSSInput = () => {
  cssDisplay.textContent = cssInput.value;

  const html = '<p>Test!</p>';
  const css = `<style>${cssInput.value}</style>`;

  outputUser.open();
  outputUser.write(html + css);
  outputUser.close();
};
