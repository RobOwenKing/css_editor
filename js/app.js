const html = '<p>Test!</p>';

const showHTMLClick = (event) => {
  CTPUI.htmlDisplay.style.display = 'block';
  CTPUI.cssDisplay.style.display = 'none';
  CTPUI.cssInput.style.display = 'none';

  CTPUI.showHTML.classList.add('tab-active');
  CTPUI.showCSS.classList.remove('tab-active');
};

const showCSSClick = (event) => {
  CTPUI.htmlDisplay.style.display = 'none';
  CTPUI.cssDisplay.style.display = 'block';
  CTPUI.cssInput.style.display = 'block';

  CTPUI.showHTML.classList.remove('tab-active');
  CTPUI.showCSS.classList.add('tab-active');
};

CTPUI.showHTML.addEventListener('click', showHTMLClick);
CTPUI.showHTML.addEventListener('keydown', showHTMLClick);
CTPUI.showCSS.addEventListener('click', showCSSClick);
CTPUI.showCSS.addEventListener('keydown', showCSSClick);

const showOutputTargetClick = (event) => {
  CTPUI.outputTarget.style.display = 'block';
  CTPUI.outputUser.style.display = 'none';

  CTPUI.showOutputTarget.classList.add('tab-active');
  CTPUI.showOutputUser.classList.remove('tab-active');
};

const showOutputUserClick = (event) => {
  CTPUI.outputTarget.style.display = 'none';
  CTPUI.outputUser.style.display = 'block';

  CTPUI.showOutputTarget.classList.remove('tab-active');
  CTPUI.showOutputUser.classList.add('tab-active');
};

CTPUI.showOutputTarget.addEventListener('click', showOutputTargetClick);
CTPUI.showOutputTarget.addEventListener('keydown', showOutputTargetClick);
CTPUI.showOutputUser.addEventListener('click', showOutputUserClick);
CTPUI.showOutputUser.addEventListener('keydown', showOutputUserClick);

const handleCSSInput = () => {
  CTPUI.cssDisplay.textContent = CTPUI.cssInput.value;

  const css = `<style>${CTPUI.cssInput.value}</style>`;

  CTPUI.outputUserDoc.open();
  CTPUI.outputUserDoc.write(html + css);
  CTPUI.outputUserDoc.close();
};

// Initialise the htmlDisplay
CTPUI.htmlDisplay.innerText = html;
