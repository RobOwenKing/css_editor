const handleCSSInput = () => {
  const html = '<p>Test!</p>';
  const css = `<style>${document.getElementById('css').value}</style>`;

  const outputUser = document.getElementById('output-user').contentWindow.document;
  outputUser.open();
  outputUser.write(html + css);
  outputUser.close();
};
