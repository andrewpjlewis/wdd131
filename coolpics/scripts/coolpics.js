function removePTags() {
    var screenWidth = window.innerWidth;
    if (screenWidth > 500) {
        const pTags = document.getElementsByTagName('p');
        for (var i = 0; i < pTags.length; i++) {
            pTags[i].style.display = 'none';
        }
    } else {
        const pTags = document.getElementsByTagName('p');
        for (var i = 0; i < pTags.length; i++) {
            pTags[i].style.display = 'block';
        }
    }
}

window.onload = removePTags;
window.onresize = removePTags;