G1 = document.getElementById('group1').onclick(alert('hello'));
G1 =  document.getElementById('group2');
G3 = document.getElementById('group3');

G1.addeventListener('onmouseover',() =>{
    alert('hello')
        G3.style.backgroundColor = 'red';
})