(function() {
    var mate = document.querySelectorAll('.fixed-mate-left, .fixed-mate-right');

    for (var i = 0, len = mate.length; i < len; i++) {
        var wrapper = document.createElement('div');

        wrapper.innerHTML = mate[i].innerHTML;
        mate[i].textContent = '';
        mate[i].appendChild(wrapper);
        wrapper.classList.add('fixed-mate-wrapper');
    }

    document.addEventListener('click', onClick);
    document.addEventListener('touchstart', onClick);

    function onClick(event) {
        if (event.target.classList.contains('fixed-mate-left') || event.target.classList.contains('fixed-mate-right')) {
            event.target.classList.toggle('extended');
        }
    }
}());