(function() {


    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('fixed-mate-left') || event.target.classList.contains('fixed-mate-right')) {
            event.target.classList.toggle('extended');
        }
    });
}());