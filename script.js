
        function addTodo() {
            const newTodoInput = document.getElementById('newTodo');
            const todoList = document.getElementById('todoList');

            if (newTodoInput.value.trim() !== '') {
                const li = document.createElement('li');
                const span = document.createElement('span');
                span.innerText = newTodoInput.value;
                li.appendChild(span);

                const editButton = document.createElement('button');
                editButton.innerText = 'Edit';
                editButton.onclick = function() {
                    editTodo(li);
                };
                li.appendChild(editButton);

                const deleteButton = document.createElement('button');
                deleteButton.innerText = 'Delete';
                deleteButton.onclick = function() {
                    deleteTodo(li);
                };
                li.appendChild(deleteButton);

                todoList.appendChild(li);
                newTodoInput.value = '';
            }
        }

        function editTodo(li) {
            const span = li.querySelector('span');
            const editButton = li.querySelector('button:nth-child(2)');

            const input = document.createElement('input');
            input.value = span.innerText;
            li.replaceChild(input, span);

            editButton.innerText = 'Save';
            editButton.onclick = function() {
                span.innerText = input.value;
                li.replaceChild(span, input);
                editButton.innerText = 'Edit';
                editButton.onclick = function() {
                    editTodo(li);
                };
            };
        }

        function deleteTodo(li) {
            li.parentNode.removeChild(li);
        }

        function deleteAllTodos() {
            const todoList = document.getElementById('todoList');
            todoList.innerHTML = '';
        }
 