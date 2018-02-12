

(function init() {
    (function (i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] ||
            function () {
                (i[r].q = i[r].q || []).push(arguments);
            }, i[r].l = 1 * new Date();
        a = s.createElement(o), m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-99047122-1', 'auto');

})();



//Finction to collapse the mobile nav after selection
$(document).ready(function () {
    $('body').on('click', '.navbar-collapse a', function (e) {
        if ($(window).width() < 800) {
            $('.navbar-collapse').collapse('toggle');
        }
    });
});