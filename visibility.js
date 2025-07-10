function showSection(section) {
  var sections = document.querySelectorAll(".visible, .hidden");

  sections.forEach(function (div) {
    div.classList.remove("visible");
    div.classList.add("hidden");
  });

  document.getElementById(section).classList.remove("hidden");
  document.getElementById(section).classList.add("visible");
}

// <div id="home" class="visible"></div>
// <div id="other" class="hidden"></div>
// .hidden {display: none} .visible {display: block}