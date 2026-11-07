(() => {
  'use strict';
  const devices = [...document.querySelectorAll('[data-device]')];
  const televisions = [...document.querySelectorAll('[data-tv]')];
  const panels = [...document.querySelectorAll('[data-panel]')];
  const tvOptions = document.getElementById('tv-options');
  const currentDevice = document.getElementById('current-device');
  const names = {android: 'android', ios: 'iPhone / iPad', windows: 'Windows', macos: 'MacBook / iMac', appletv: 'Apple TV', androidtv: 'android TV / Google TV'};
  let television = 'appletv';
  function select(platform) {
    if (!Object.hasOwn(names, platform)) return;
    const isTV = platform === 'appletv' || platform === 'androidtv';
    if (isTV) television = platform;
    for (const button of devices) button.setAttribute('aria-pressed', String(button.dataset.device === (isTV ? 'tv' : platform)));
    for (const button of televisions) button.setAttribute('aria-pressed', String(button.dataset.tv === platform));
    tvOptions.hidden = !isTV;
    for (const panel of panels) panel.hidden = panel.dataset.panel !== platform;
    currentDevice.textContent = names[platform];
    document.documentElement.dataset.platform = platform;
  }
  for (const button of devices) button.addEventListener('click', () => select(button.dataset.device === 'tv' ? television : button.dataset.device));
  for (const button of televisions) button.addEventListener('click', () => select(button.dataset.tv));
  for (const group of [devices, televisions]) {
    for (const [index, button] of group.entries()) button.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (index + 1) % group.length;
      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (index - 1 + group.length) % group.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = group.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      group[next].focus();
      group[next].click();
    });
  }
  const ua = navigator.userAgent;
  const isIPad = /iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  select(isIPad || /iPhone|iPod/.test(ua) ? 'ios' : /Android/.test(ua) ? (/TV|AFT/.test(ua) ? 'androidtv' : 'android') : /Windows/.test(ua) ? 'windows' : /Macintosh|Mac OS X/.test(ua) ? 'macos' : 'android');
})();
