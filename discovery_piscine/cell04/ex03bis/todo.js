function addToDo(text) {
  const $div = $('<div class="todo"></div>').text(text);

  $div.on("click", function () {
    if (confirm("Do you want to delete this TO DO?")) {
      $(this).remove();
      saveToCookies();
    }
  });

  $("#ft_list").append($div);
}

function saveToCookies() {
  const todos = [];
  $(".todo").each(function () {
    todos.push($(this).text());
  });
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

$(document).ready(function () {
  $("#newTodoBtn").on("click", function () {
    const text = prompt("Enter your TO DO:");
    if (text && text.trim() !== "") {
      addToDo(text.trim());
      saveToCookies();
    }
  });

  loadFromCookies();
});
