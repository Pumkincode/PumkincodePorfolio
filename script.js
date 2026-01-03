document.addEventListener("DOMContentLoaded", function () {

  const before = "Hi, I’m ";
  const name = "Sára Erdei";
  const after = ", a dedicated software developer. Welcome to my portfolio website — feel free to explore my projects and skills.";

  const elBefore = document.getElementById("before");
  const elName   = document.getElementById("name");
  const elAfter  = document.getElementById("after");

  let i = 0, j = 0, k = 0;

  function type() {

    if (i < before.length) {
      elBefore.textContent += before.charAt(i++);
      return setTimeout(type, 40);
    }

    if (j < name.length) {
      elName.textContent += name.charAt(j++);
      return setTimeout(type, 40);
    }

    if (k < after.length) {
      elAfter.textContent += after.charAt(k++);
      return setTimeout(type, 40);
    }
  }

  type();
});
