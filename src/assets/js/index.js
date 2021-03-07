const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) =>
      tabContent.classList.remove('is-tab-active')
    );

    target.classList.add('is-tab-active');
  });
});



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



const mobileSearch = document.querySelector('#mobile-search');
const closeSearchArea = document.querySelector('#close-search-area');
const searchAreaWrapper = document.querySelector('.search-area-wrapper');

mobileSearch.addEventListener('click', function () {
  searchAreaWrapper.style.display = "block"
});

closeSearchArea.addEventListener('click', function () {
  searchAreaWrapper.style.display = "none"
});