$(document).ready(



    window.addEventListener('mousemove', (e) => {
        $('.cursor').css({ 'top': e.pageY - 20, 'left': e.pageX - 20 })
    }),

    $('.box').mouseenter(() => {
        // $('.box').siblings('.box').css({ 'color': `#444444`, 'border': `2.5px solid #444444` }),

        $('.cursor').css('border', 0)



    }),

    $('.box').mouseleave(() => {
        $('.cursor').css('border', `3px solid rgb(255, 81, 0)`),
            $
    })

)