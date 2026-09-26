(function () {
    try {
        var stored = localStorage.getItem('zynocodex-theme');
        var theme =
            stored ||
            (window.matchMedia('(prefers-color-scheme: light)').matches
                ? 'light'
                : 'dark');
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    } catch (e) {}
})();

(function () {
    var year = document.getElementById('footerYear');
    if (year) {
        year.textContent = new Date().getFullYear();
    }
})();

(function () {
    var root = document.documentElement;
    var btn = document.getElementById('themeToggle');
    function sync() {
        var isLight = root.getAttribute('data-theme') === 'light';
        btn.setAttribute('aria-pressed', isLight ? 'true' : 'false');
        btn.setAttribute(
            'aria-label',
            isLight ? 'Switch to dark theme' : 'Switch to light theme',
        );
    }
    sync();
    btn.addEventListener('click', function () {
        var isLight = root.getAttribute('data-theme') === 'light';
        if (isLight) {
            root.removeAttribute('data-theme');
        } else {
            root.setAttribute('data-theme', 'light');
        }
        try {
            localStorage.setItem('zynocodex-theme', isLight ? 'dark' : 'light');
        } catch (e) {}
        sync();
    });
})();
