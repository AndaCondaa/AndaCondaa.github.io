var Link = {
    setColor: function (color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     if (alist[i].id != document.getElementById('title_main').id)
        //         alist[i].style.color = color;
        //     i = i + 1;
        // }
        if ($('a').id != 'title_main')
            $('a').not('#title_main').css('color', color);
    }
}
var Body = {
    setColor: function (color) {
        // document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor: function (color) {
        // document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);

    }
}
function nightDayHandler(self) {
    if (self.value === 'night') {
        Body.setColor('white');
        Body.setBackgroundColor('black');
        Link.setColor('powderblue');
        self.value = 'day';

    } else {
        Body.setColor('black');
        Body.setBackgroundColor('white');
        Link.setColor('blue');
        self.value = 'night';
    }
}