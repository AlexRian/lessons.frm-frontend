const buttons = document.getElementsByTagName('button');
const textContainers = document.getElementsByClassName('text');

function onTabClick(e) {
    const index = e.target.dataset.index;

    for (let i = 0; i < textContainers.length; i++) {
        const element = textContainers[i];

        if(i !== (index - 1)){
            element.style.display = 'none';
        }else{
            element.style.display = 'block';
        }
    }
}

for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    element.onclick = onTabClick;
}