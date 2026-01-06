const form = document.getElementById("postForm");
const list = document.getElementById("postList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const li = document.createElement("li");
  li.innerHTML = `<strong>${title}</strong><p>${content}</p>`;

  list.prepend(li);
  form.reset();
});
