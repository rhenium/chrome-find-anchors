Array.prototype.forEach.call(document.body.querySelectorAll("a.cfa-anchor"),
                             e => e.parentNode.removeChild(e));

if (window.cfaShown ^= true) {
  var elements = document.body.querySelectorAll("a[name], *[id]");
  Array.prototype.map.call(elements, e => {
    var anchorValue = e.id || e.name;
    var tagName = e.tagName.toLowerCase();
    if (tagName == "input" || tagName == "textarea")
      return null;

    var anchor = document.createElement("a");
    anchor.className = "cfa-anchor";
    anchor.style.cssText = `
      display: block;
      position: absolute;
      z-index: 1000;
      background-color: rgba(255, 255, 255, 0.8);
      position: absolute;
      padding: 4px;
    `;
    anchor.href = "#" + anchorValue;
    anchor.textContent = "#" + anchorValue;
    anchor.addEventListener("click", ev => ev.stopPropagation());
    anchor.addEventListener("mousedown", ev => ev.stopPropagation());
    return [e, e.firstChild, anchor];
  }).forEach(ary => ary && ary[0].insertBefore(ary[2], ary[1]));
}
