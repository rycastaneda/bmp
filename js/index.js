(function () {

    $(document).ready(function () {
        $('[data-slide="next"], [data-slide="prev"]').click(function () {
            $('#lenderCarousel').carousel($(this).data('slide'));
        });

        $('#lenderCarousel').on('slide.bs.carousel', function (e) {
          $('[data-slide-to="' + e.to + '"]')
            .addClass('active');
          $('[data-slide-to="' + e.from + '"]')
            .removeClass('active');
        });
    });
})();