const kanban_list_item = document.querySelectorAll ('.kanban-list-item');
const kanban_list = document.querySelectorAll ('.kanban-list')

let draggedItem = null;
for (let i= 0; i < kanban_list_item.length; i++) {
    const item = kanban_list_item[i];

    item.addEventListener ('dragstart', function() {
        draggedItem = item;
        setTimeout (function() {
        this.style.display = 'none';
        }, 0);
    });

    item.addEventListener ('dragend', function() {
        console.log('dragend');
        setTimeout(function () {
            draggedItem.style.display = 'block';
            draggedItem = null; 
        }, 0);
    });

    for (let j= 0; j < kanban_list.length; j++) {
        const list = kanban_list[j];
        list.addEventListener('dragover', function(e) {
            e.preventDefault();
        });
        list.addEventListener('dragenter', function(e) {
            e.preventDefault();
        });
        list.addEventListener('drop', function(e) {
            console.log('drop');
            list.append(draggedItem);
        });
    }
}