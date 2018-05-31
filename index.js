function loadIssues() {
  const template = Handlebars.compile(document.getElementById("issue-template").innerHTML);
  const result = template(issues);
  document.getElementsByTagName("main")[0].innerHTML += result;
}