const tabs = document.querySelectorAll('[data-tab-target]');

tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    const tabActivated = document.querySelector('.is-tab-active');
    tabActivated.classList.remove('is-tab-active');
    
    const target = document.querySelector(tab.dataset.tabTarget);
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



function collapseElement(element) {
  element.className = "";
  element.classList.add("collapsing");

  element.style.height = null;

  element.addEventListener('transitionend', function handleTransition (e) {
    element.removeEventListener('transitionend', handleTransition);
    element.classList.remove("collapsing");
    element.classList.add("collapse");
  });
}

function expandElement(element) {
  element.className = "";
  element.classList.add("collapsing");

  const elementHeight = element.scrollHeight;
  element.style.height = elementHeight + 'px';

  element.addEventListener('transitionend', function handleTransition (e) {
    element.removeEventListener('transitionend', handleTransition);
    
    element.classList.remove("collapsing");
    element.classList.add("collapse", "show");
  });
}

function hasClass(element, classes) {
  return element.classList.contains(classes);
}

const collapses = document.querySelectorAll('[data-collapse-target]');
collapses.forEach(collapse => {
  collapse.addEventListener("click", function () {
    const list = document.querySelector(collapse.dataset.collapseTarget);
    
    if(hasClass(list, "collapsing")) return;

    if (hasClass(list, "show")) {
      collapseElement(list);
      return;
    }
    
    expandElement(list);
  }
)})