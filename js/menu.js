var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-7192572-2']);
_gaq.push(['_trackPageview']);
(function() {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();

document.querySelector(".popup").addEventListener('click', function() {
    Swal.fire({
            title: '',
            imageUrl: '../images/logo-black.png',
            imageHeight: 150,
            html: '<a class="tab-menu" href="https://url.wargati.ga/how-to/" target="_blank"><span class="fas fa-link"></span>&nbsp;&nbsp;URL Shortener</a>' +
                '<a class="tab-menu" href="https://utbk.wargati.ga/" target="_blank"><span class="fas fa-desktop"></span>&nbsp;&nbsp;UTBK Dashboard</a>' +
                '<a class="tab-batch" href="https://2021.wargati.ga/" target="_blank">Warga Tiga 2021</a>',
            showCloseButton: false,
            showConfirmButton: false,
        })
        .then(function(result) {
            if (result.isConfirmed) {
                window.location = "/pomodoro";
            }
        })
});