function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

var dropped = false;

async function scatter(el){
    background = document.getElementById('background');
    var h = background.offsetHeight;
    var w = background.offsetWidth;
    var clone = el.cloneNode(true);
    clone.style.opacity = '0';
    background.appendChild(clone);
    clone.removeEventListener('click', fadeandfall);
    clone.style.top = Math.random()*h*.8 + h*.1 + 'px';
    clone.style.left = Math.random()*w*.8 + w*.1 + 'px';
    clone.style.position = 'absolute';
    clone.style.transform = 'rotate(' + Math.random()*360 +'deg)'
    clone.setAttribute('href', el.getAttribute('nothref'));
    clone.removeAttribute('nothref');
    await sleep(2000);
    clone.classList.add('wally');
    if (!dropped){
        alert("Looks like you dropped the link, I'm sure it's down there somewhere!");
        dropped = true;
    }
    clone.style.opacity = '1';
}

function fadeandfall(){
    wrapper = document.createElement('div');
    this.parentElement.appendChild(wrapper);
    wrapper.appendChild(this);
    this.parentElement.classList.add('spin');
    this.parentElement.parentElement.classList.add('fall')
    this.parentElement.parentElement.style.transition = 'opacity 2s';
    this.parentElement.parentElement.style.opacity = '0'
    scatter(this)
}

function moveElements(){
    var all_elements = document.body.childNodes;
    dummy = document.createElement('div');
    console.log(all_elements)
    document.body.appendChild(dummy);
    dummy.style.padding = '0px';
    dummy.id = 'dummy';
    var nav = document.getElementsByTagName('nav')[0];
    var content = document.getElementsByClassName('content')[0]
    dummy.appendChild(nav)
    dummy.appendChild(content);
    dummy.style.display = 'inline-block';
    nav.style.float = 'left';
    nav.style.height = '100%';
    dummy.style.width = screen.width + 'px';
    console.log(screen.width - nav.clientWidth + 'px')
    content.style.width = screen.width - nav.clientWidth - 20 + 'px'
    content.style.float = 'right'
    links = nav.getElementsByTagName('a')
    for (var i = 0; i < links.length; i++){
        var el = links[i]
        el.addEventListener('click', fadeandfall);
        // el.addEventListener('transitionend', () => el.style.display = 'None');
        el.setAttribute('nothref', el.href);
        el.removeAttribute('href');
    }

}
moveElements()
document.body.style.display = 'block';
backgrounds = ['wheres-waldo-2.jpg','wheres-waldo-9.jpg', 'wheres-waldo-wallpaper-19.jpg', 'GXfmEe6.jpg', '2687205.png', '213-2132593_waldo-cartoon-wheres-wally.jpg']
var i = Math.floor(Math.random()*backgrounds.length);
console.log(i);

background = document.createElement('div');
background.id = 'background';
document.body.appendChild(background);
var dir = "resources/" + backgrounds[i]
background.style.background = "url('"+ dir +"')";

function getImgSize(imgSrc, b) {
var newImg = new Image();

newImg.onload = function() {
    var height = newImg.height;
    var width = newImg.width;
    if (width < screen.width){
    b.style.height = height * screen.width/width + 'px';
    b.style.width = screen.width + 'px';
    } else {
    b.style.height = height + 'px';
    b.style.width = width + 'px';
    }
}

newImg.src = imgSrc; // this must be done AFTER setting onload
}
getImgSize(dir, background)
document.body.style.padding = 0;
// document.body.style.background = "url('"+backgrounds[i]+"')";
var paragraphs = document.getElementsByTagName('p');
for (var i = 0; i < paragraphs.length; i++){
    var p = paragraphs[i]
    p.style.fontWeight = 700;
    p.style.webkitTextStroke = '1px';
    p.style.webkitTextStrokeColor = 'white';
}

// document.getElementsByTagName('nav')[0].style.display = 'none';
// document.getElementsByClassName('content')[0].style.height = '300px';
// document.getElementsByClassName('content')[0].style.width = '100%';