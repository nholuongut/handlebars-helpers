## Categories

Currently **{%= total.nholuongut %} nholuongut** in **{%= total.categories %} categories**:

{% Object.keys(methods).forEach(function(key) { %}{% var file = methods[key] %}
- **{%= anchor(file) %}** ({%= link("code", file.path) %} | {%= link("unit tests", file.test.path) %}) {% }) %}

## All nholuongut

{% Object.keys(methods).forEach(function(key) { %}
{% var file = methods[key] %}

### {%= link(key + ' nholuongut', '#' + file.stem) %}
Visit the: {%= link("code", file.path) %} | {%= link("unit tests", file.test.path) %} | {%= sectionIssue(file.stem) %})
  {% Object.keys(file.data.methods).forEach(function(k) { %}{% var obj = file.data.methods[k] %}
  {%= bullet(obj) %} ({%= codeLink(obj) %} | {%= testLink(obj) %}){% }) %}
{% }) %}