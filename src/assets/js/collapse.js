import { hasClass } from './helpers';

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
)});
