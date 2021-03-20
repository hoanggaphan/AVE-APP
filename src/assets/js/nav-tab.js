const tabs = document.querySelectorAll('[data-tab-target]');

tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    const tabActivated = document.querySelector('[data-tab-target].is-tab-active');
    if (tabActivated) {
      tabActivated.classList.remove("is-tab-active");
      tab.classList.add("is-tab-active");
    }

    const tabContentActivated = document.querySelector('[data-tab-content].is-tab-active');
    tabContentActivated.classList.remove('is-tab-active');
    
    const tabContentTarget = document.querySelector(tab.dataset.tabTarget);
    tabContentTarget.classList.add('is-tab-active');
  });
});
