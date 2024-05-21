var Link = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            if (alist[i].id != document.getElementById('title_main').id)
                alist[i].style.color = color;
            i = i + 1;
        }
    }
}
var Body = {
    setColor: function (color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor: function (color) {
        document.querySelector('body').style.backgroundColor = color;

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