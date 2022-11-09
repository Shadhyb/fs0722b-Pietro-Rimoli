




document.querySelector('#add')
.addEventListener('click', function()
{
    let task = document.querySelector('#testoTask');

    let div = document.createElement('div');
    div.textContent = task.value;

    div.classList.add('task');

    let completa = document.createElement('button');
            completa.textContent = 'Completato';

    completa.addEventListener('click', ()=>{
        div.classList.add('done');
        document.querySelector('#done').append(div);
    })

    div.append(task);

    document.querySelector('#toDO').append(div);
    task.value = ''
});
