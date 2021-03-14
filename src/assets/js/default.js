/*
 * ----------------------------------------
 * Use lazy load for image
 * ----------------------------------------
 */

if ('loading' in HTMLImageElement.prototype) {
  const images = document.querySelectorAll('img[loading="lazy"]');
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Dynamically import the LazySizes library
  const script = document.createElement('script');
  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.1.2/lazysizes.min.js';
  document.body.appendChild(script);
}

/*
 * ----------------------------------------
 * Create dropdown for navbar use popperjs
 * ----------------------------------------
 */

import { createPopper } from '@popperjs/core';

const dropdowns = document.querySelectorAll('[data-dropdown-target]');

dropdowns.forEach((dropdown) => {
  const target = document.querySelector(dropdown.dataset.dropdownTarget);

  const popperInstance = createPopper(dropdown, target, {
    placement: 'bottom-start',
    modifiers: [
      {
        name: 'flip',
        options: {
          fallbackPlacements: ['bottom-end'],
        },
      },
    ],
  });

  dropdown.addEventListener('mouseenter', function () {
    // Make the dropdown visible
    target.setAttribute('data-dropdown-show', '');

    // Enable the event listeners
    popperInstance.setOptions({
      modifiers: [{ name: 'eventListeners', enabled: true }],
    });

    // Update its position
    popperInstance.update();
  });

  dropdown.addEventListener('mouseleave', function () {
    // Hide the dropdown
    target.removeAttribute('data-dropdown-show');

    // Disable the event listeners
    popperInstance.setOptions({
      modifiers: [{ name: 'eventListeners', enabled: false }],
    });
  });
});

/*
 * ----------------------------------------
 * Toggle show/hide for search area in mobile
 * ----------------------------------------
 */

const mobileSearch = document.querySelector('#mobile-search');
const closeSearchArea = document.querySelector('#close-search-area');
const searchAreaWrapper = document.querySelector('.search-area-wrapper');

mobileSearch.addEventListener('click', function () {
  searchAreaWrapper.style.display = 'block';
});

closeSearchArea.addEventListener('click', function () {
  searchAreaWrapper.style.display = 'none';
});
