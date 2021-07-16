/**
 * Namespace for all the UI DOM elements our JS needs access to
 * @namespace
*/
const CTPUI = {
  // Main screens
  home: document.getElementById('home'),
  app:  document.getElementById('app'),

  // Home screen
  challengeForm:   document.getElementById('challenge-form'),
  challengeSelect: document.getElementById('challenge-select'),

  // App screen
  showHTML:    document.getElementById('show-html'),
  showCSS:     document.getElementById('show-css'),
  htmlDisplay: document.getElementById('html'),
  cssInput:    document.getElementById('css'),
  cssDisplay:  document.getElementById('highlighted-css'),

  showOutputTarget: document.getElementById('show-target'),
  showOutputUser:   document.getElementById('show-user'),
  outputTarget:     document.getElementById('output-target'),
  outputTargetDoc:  document.getElementById('output-target').contentWindow.document,
  outputUser:       document.getElementById('output-user'),
  outputUserDoc:    document.getElementById('output-user').contentWindow.document

};
