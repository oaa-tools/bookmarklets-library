/*
*   init.js: Initialization functions called by Bookmarklets constructor
*/

export function initJQueryUITooltips () {
  var jq = require("jquery");

  require("core");
  require("widget");
  require("position");
  require("tooltip");

  // Initialize jQuery UI Tooltips
  jq(document).tooltip({
    items: "div.oaa-overlay-label",
    content: function (callback) {
      // callback(jq(this).prop('title').replace(/\n/g, '<br />'));
      let list = jq(this).prop('title').split('\n');
      let html = '<h4>' + list[0] + '</h4>';
      html += '<ul>';
      for (let i = 1; i < list.length; i++)
        html += '<li>' + list[i] + '</li>';
      html += '</ul>';
      callback(html);
    }
  });

  // Select theme
  require("modules/jquery-ui/themes/base/jquery-ui.css");
  require("modules/jquery-ui/themes/base/jquery.ui.theme.css");
}
