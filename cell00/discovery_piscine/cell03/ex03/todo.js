const listContainer = document.getElementById("ft_list");

function createToDo() {
  const text = prompt("Enter your TO DO:");
  if (text && text.trim() !== "") {
    addToDo(text.trim());
    saveToCookies();
  }
}

function addToDo(text) {
  const div = document.createElement("div");
  div.className = "todo";
  div.textContent = text;

  div.addEventListener("click", function () {
    if (confirm("Do you want to delete this TO DO?")) {
      div.remove();
      saveToCookies();
    }
  });

  listContainer.appendChild(div);
}

function saveToCookies() {
  const todos = [];
  const todoElements = listContainer.querySelectorAll(".todo");
  todoElements.forEach((x) => todos.push(x.textContent));
  document.cookie =
    "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}

function loadFromCookies() {
  const match = document.cookie.match(/(?:^|;) *todos=([^;]+)/);
  if (match) {
    try {
      const todos = JSON.parse(decodeURIComponent(match[1]));
      todos.forEach(addToDo);
    } catch (e) {
      console.error("Failed to parse cookie data:", e);
    }
  }
}

window.onload = loadFromCookies();
