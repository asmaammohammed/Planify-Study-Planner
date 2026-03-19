
(function () {
    'use strict';

    var sidebar    = document.getElementById('sidebar');
    var appMain    = document.querySelector('.app-main');
    var openBtn    = document.getElementById('js-sidebar-open');
    var closeBtn   = document.getElementById('js-sidebar-close');
    var collapseBtn = document.getElementById('js-sidebar-collapse');
    var overlay    = document.getElementById('js-sidebar-overlay');

    function openSidebar() {
        if (!sidebar) return;
        sidebar.classList.add('is-open');
        if (overlay) overlay.classList.add('is-visible');
        if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
    }

    function closeSidebar() {
        if (!sidebar) return;
        sidebar.classList.remove('is-open');
        if (overlay) overlay.classList.remove('is-visible');
        if (openBtn) openBtn.setAttribute('aria-expanded', 'false');
    }

    function toggleCollapse() {
        if (!sidebar) return;
        sidebar.classList.toggle('is-collapsed');
        if (appMain) appMain.classList.toggle('is-collapsed');
    }

    if (openBtn)      openBtn.addEventListener('click', openSidebar);
    if (closeBtn)     closeBtn.addEventListener('click', closeSidebar);
    if (overlay)      overlay.addEventListener('click', closeSidebar);
    if (collapseBtn)  collapseBtn.addEventListener('click', toggleCollapse);

})();