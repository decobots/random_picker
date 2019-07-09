window.onload = () => {
    setNewW();
    let bad = document.getElementById('bad');
    let good = document.getElementById('good');
    bad.onanimationend = function (event) {
        setNewW();
        restart_anim(bad);
        restart_anim(good);
    };
}

function setNewW(goto = 0) {
    let width1 = goto || parseInt(Math.random() * 100);
    let width0 = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--w1'));
    let speed = parseFloat(window.getComputedStyle(document.documentElement).getPropertyValue('--speed'));

    let duration = Math.abs(width1 - width0) / speed;

    document.documentElement.style.setProperty('--w0', width0 + '%');
    document.documentElement.style.setProperty('--w1', width1 + '%');
    document.documentElement.style.setProperty('--duration', duration + 's');
}

function restart_anim(elem) {
    let classes = [...elem.classList];
    elem.classList.remove(...classes);
    void elem.offsetWidth;
    elem.classList.add(classes);
}