const tasklist = {
    tasks: [],
    storage: getTaskStorage('tasks_11_1'),
    displayDiv: null,
    deleteClickHandler: null,
    load: function () {
        if (this.tasks.length === 0) {
            tasklist.tasks = this.storage.get();
        }
    },
	save: function () {
        this.storage.set(this.tasks);
    },
    sort: function () {
        this.tasks.sort();
    },
    add: function (task) {
        this.tasks.push(task.toString());
    },
    deletetask: function (i) {
        this.sort();
        this.tasks.splice(i, 1);
    },
    clear: function () {
        this.tasks.length = 0;
        this.storage.clear();
        this.displayDiv.innerHTML = '';
    },
    display: function () {
        let html = '', links;
        this.sort();

        // CRATE AND LOAD HTML STRING FROM SORTED ARRAY
        for (let i in this.tasks) {
            html += `<p><a href='#' title=${i}>Delete</a>${this.tasks[i]}</p>`;
        }
        this.displayDiv.innerHTML = html;

        // GET LINKS, LOOP, AND ADD ONCLICK EVENT HANDLER
        links = this.displayDiv.getElementsByTagName('a');
        for (let i = 0; i < links.length; i++) {
			if (links[i].innerHTML === 'Delete') {
                links[i].onclick = this.deleteClickHandler;
            } else {
                links[i].onclick = this.editClickHandler;
            }
        }
    }
};