const change = p => {
    let s = document.querySelector('.s'); // sun 1
    let m = document.querySelector('.m'); // mercury 2
    let v = document.querySelector('.v'); // venus 3
    let e = document.querySelector('.e'); // earth 4
    let ma = document.querySelector('.ma'); // mars 5
    let j = document.querySelector('.j'); // jupiter 6
    let sa = document.querySelector('.sa'); // saturn 7
    let u = document.querySelector('.u'); // uranus 8
    let n = document.querySelector('.n'); // neptune 9
    let pl = document.querySelector('.pl'); // pluto 10

    let main = document.querySelector('.container');

    if (p === 1) { //! 1s
        main.style.display = 'none';

        s.style.display = 'block';
        m.style.display = 'none';
        v.style.display = 'none';
        e.style.display = 'none';
        ma.style.display = 'none';
        j.style.display = 'none';
        sa.style.display = 'none';
        u.style.display = 'none';
        n.style.display = 'none';
        pl.style.display = 'none';
    } else if (p === 2) { //! 2m
        main.style.display = 'none';

        s.style.display = 'none';
        m.style.display = 'block';
        v.style.display = 'none';
        e.style.display = 'none';
        ma.style.display = 'none';
        j.style.display = 'none';
        sa.style.display = 'none';
        u.style.display = 'none';
        n.style.display = 'none';
        pl.style.display = 'none';
    } else if (p === 3) { //! 3v
        main.style.display = 'none';

        s.style.display = 'none';
        m.style.display = 'none';
        v.style.display = 'block';
        e.style.display = 'none';
        ma.style.display = 'none';
        j.style.display = 'none';
        sa.style.display = 'none';
        u.style.display = 'none';
        n.style.display = 'none';
        pl.style.display = 'none';
    } else if (p === 4) { //! 4e
        main.style.display = 'none';

        s.style.display = 'none';
        m.style.display = 'none';
        v.style.display = 'none';
        e.style.display = 'block';
        ma.style.display = 'none';
        j.style.display = 'none';
        sa.style.display = 'none';
        u.style.display = 'none';
        n.style.display = 'none';
        pl.style.display = 'none';
    } else if (p === 5) { //! 5ma
        main.style.display = 'none';

        s.style.display = 'none';
        m.style.display = 'none';
        v.style.display = 'none';
        e.style.display = 'none';
        ma.style.display = 'block';
        j.style.display = 'none';
        sa.style.display = 'none';
        u.style.display = 'none';
        n.style.display = 'none';
        pl.style.display = 'none';
    } else if (p === 6) { //! 6j
        main.style.display = 'none';

        s.style.display = 'none';
        m.style.display = 'none';
        v.style.display = 'none';
        e.style.display = 'none';
        ma.style.display = 'none';
        j.style.display = 'block';
        sa.style.display = 'none';
        u.style.display = 'none';
        n.style.display = 'none';
        pl.style.display = 'none';
    } else if (p === 7) { //! 7sa
        main.style.display = 'none';

        s.style.display = 'none';
        m.style.display = 'none';
        v.style.display = 'none';
        e.style.display = 'none';
        ma.style.display = 'none';
        j.style.display = 'none';
        sa.style.display = 'block';
        u.style.display = 'none';
        n.style.display = 'none';
        pl.style.display = 'none';
    } else if (p === 8) { //! 8u
        main.style.display = 'none';

        s.style.display = 'none';
        m.style.display = 'none';
        v.style.display = 'none';
        e.style.display = 'none';
        ma.style.display = 'none';
        j.style.display = 'none';
        sa.style.display = 'none';
        u.style.display = 'block';
        n.style.display = 'none';
        pl.style.display = 'none';
    } else if (p === 9) { //! 9n
        main.style.display = 'none';

        s.style.display = 'none';
        m.style.display = 'none';
        v.style.display = 'none';
        e.style.display = 'none';
        ma.style.display = 'none';
        j.style.display = 'none';
        sa.style.display = 'none';
        u.style.display = 'none';
        n.style.display = 'block';
        pl.style.display = 'none';
    } else if (p === 10) { //! 10p
        main.style.display = 'none';

        s.style.display = 'none';
        m.style.display = 'none';
        v.style.display = 'none';
        e.style.display = 'none';
        ma.style.display = 'none';
        j.style.display = 'none';
        sa.style.display = 'none';
        u.style.display = 'none';
        n.style.display = 'none';
        pl.style.display = 'block';
    } else {
        main.style.display = 'block';

        s.style.display = 'none';
        m.style.display = 'none';
        v.style.display = 'none';
        e.style.display = 'none';
        ma.style.display = 'none';
        j.style.display = 'none';
        sa.style.display = 'none';
        u.style.display = 'none';
        n.style.display = 'none';
        pl.style.display = 'none';
    }
}