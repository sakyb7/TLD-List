// This file is part of the TLD List project, which can be found here:
// https://github.com/jdgregson/TLD-List
//
// It facilitates the easy export of the TLD list from here:
// https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains

function getTLDlist() {
    let tlds = [];
    let tds = document.querySelectorAll('td');
    for(let i=0; i<tds.length; i++) {
        let tdText = tds[i].innerText;
        if(tdText[0]==='.' && tdText.indexOf(' ')<0 && tlds.indexOf(tdText)<1) {
            tlds.push(tdText);
        }
    }
    return tlds;
}

function openPopup(content) {
    let outer = document.createElement('div');
    outer.style.position = 'fixed';
    outer.style.width = '98%';
    outer.style.height = '96%';
    outer.style.top = '0';
    outer.style.left = '0';
    outer.style.zIndex = '9999999';
    let inner = document.createElement('textarea');
    inner.style.position = 'absolute';
    inner.style.width = '100%';
    inner.style.height = '100%';
    inner.value = content;
    outer.appendChild(inner);
    document.body.appendChild(outer);
}

openPopup(
    '-------- newline-separated-tlds.txt --------\n' +
    getTLDlist().join('\n') +
    '\n\n\n\n-------- comma-separated-tlds.txt --------\n' +
    getTLDlist().join(',') +
    '\n\n\n\n-------- pipe-separated-tlds.txt --------\n' +
    getTLDlist().join('|')
);