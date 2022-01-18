// Filter Search

subjects = ['English', 
            'Mathematics', 
            'Computing Science', 
            'Graphic Communication', 
            'Biology', 'Chemistry', 
            'Physics', 
            'Application of Mathematics', 
            'Geography',
            'Modern Studies']

urls = ['Pages/eng',
        'Pages/math',
        'Pages/cs',
        'Pages/graph',
        'Pages/bio',
        'Pages/chem',
        'Pages/phys',
        'Pages/appMath',
        'Pages/geo',
        'Pages/mod']

let ul = document.querySelector('.urlList');

for(var i = 0; i < subjects.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = '<a href="'+ urls[i] +'">' + subjects[i] + '</a>'
    ul.appendChild(li);
}

const searchBar = document.querySelector('.inputBar');
const list = document.querySelector('.urlList');

searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const names = list.getElementsByTagName('li');

    // Search Function
    Array.from(names).forEach((name) => {
        const title = name.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1) {
            name.style.display = 'block';
        } else {
            name.style.display = 'none';
        }
    })
})