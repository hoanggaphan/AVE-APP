const tabs = document.querySelectorAll('[data-tab-target]');

tabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    const tabActivated = document.querySelector('.is-tab-active');
    tabActivated.classList.remove('is-tab-active');
    
    const target = document.querySelector(tab.dataset.tabTarget);
    target.classList.add('is-tab-active');
  });
});
