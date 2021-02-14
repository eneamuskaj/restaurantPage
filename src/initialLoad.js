function initialLoad() {
  parent = document.getElementById("content");
  const child1 = document.createElement("h1");
  child1.innerHTML = "Apollo Restaurant";
  const child2 = document.createElement("p");
  child2.innerHTML = " This is a great restaurant";
  parent.appendChild(child1);
  parent.appendChild(child2);
  const tabs = document.createElement("div");
  const input = document.createElement("input");
  const input1 = document.createElement("input");
  const input2 = document.createElement("input");
  const label = document.createElement("label");
  const label1 = document.createElement("label");
  const label2 = document.createElement("label");
  const tab = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  tabs.className = "tabs";
  input.type = "radio";
  input.name = "tabs";
  input.id = "tabone";

  input1.type = "radio";
  input1.name = "tabs";
  input1.id = "tabone";

  input2.type = "radio";
  input2.name = "tabs";
  input2.id = "tabone";

  input1.id = "tabtwo";
  input2.id = "tabthree";
  input.checked = "checked";
  input1.checked = "checked";
  input2.checked = "checked";

  label.htmlFor = "tabone";
  label1.htmlFor = "tabtwo";
  label2.htmlFor = "tabthree";

  tab.className = "tab";
  label.innerHTML = "Tab One";
  label1.innerHTML = "Tab Two";
  label2.innerHTML = "Tab Three";

  h1.innerHTML = "Tab One Content";
  p.innerHTML = "lorem ipsum";
  parent.appendChild(tabs);
  tabs.appendChild(input);

  tabs.appendChild(label);

  tabs.appendChild(tab);
  tab.appendChild(h1);
  tab.appendChild(p);

  tabs.appendChild(input1);

  tabs.appendChild(label1);

  tabs.appendChild(input2);

  tabs.appendChild(label2);
}

export { initialLoad };
