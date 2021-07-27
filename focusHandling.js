export const focusHandling = (prop = null) => {
  // Make focus outline visible only for keyboard navigation
  const focusList = document.querySelectorAll(
    'a, button, input, select, textarea, .form-switch, [tabindex]'
  );
  const resetFocusList = (bool) => {
    const outlineStyle = bool ? '' : 'none';
    focusList.forEach((focusTab) => {
      (!prop || prop === 'outline') &&
        focusTab.style.setProperty('outline', outlineStyle);
      (!prop || prop === 'box-shadow') &&
        focusTab.style.setProperty('box-shadow', outlineStyle);
    });
  };
  const detectClick = () => {
    if (focusList.length > 0) {
      resetFocusList(false);
      // eslint-disable-next-line no-use-before-define
      window.addEventListener('keydown', detectTab);
    }
    window.removeEventListener('mousedown', detectClick);
  };
  const detectTab = (event) => {
    if (event.keyCode !== 9) return;
    resetFocusList(true);
    window.removeEventListener('keydown', detectTab);
    window.addEventListener('mousedown', detectClick);
  };
  window.addEventListener('mousedown', detectClick);
};
