function renderTodos() {
  const todoListElement = document.getElementById("todoList");
  todoListElement.innerHTML = "";

  for (let index = 0; index < todos.length; index++) {
    const todo = todos[index];

    const card = createTodoCard(todo);

    todoListElement.append(card);
    todoListElement.className = "todoListClass";
  }
}

function createTodoCard(todo) {
  const article = document.createElement("article");
  article.className = "card";

  const title = document.createElement("h2");
  title.textContent = todo.title;
  title.className = "card-title";

  const desc = document.createElement("p");
  desc.textContent = "Beskrivning: " + todo.description;
  desc.className = "card-description";

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Klar";
  doneBtn.addEventListener("click", () => deleteTodo(todo.id));

  const label = document.createElement("label");
  label.append("Avklarad: ", doneBtn);

  const completed = document.createElement("p");
  completed.textContent =
    "Skapad: " + new Date(todo.createdAt).toLocaleDateString("sv-SE");
  completed.className = "card-created";

  const due = document.createElement("p");
  due.textContent =
    "Förfaller: " +
    (todo.dueDate
      ? new Date(todo.dueDate).toLocaleDateString("sv-SE")
      : "Ingen deadline");
  due.className = "card-due";

  article.append(title, desc, completed, due, label);

  return article;
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}