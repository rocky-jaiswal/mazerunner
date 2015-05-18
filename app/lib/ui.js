var $ = require('jquery');
import input from './input';

var ui = (function(){
    return {

      render: function(){
        var container    = $("#maze");
        var tableStart   = "<table class='maze'><tbody>";
        var tableEnd     = "</tbody></table>";
        var dim          = input.length;
        var tableContent = "";

        for(var i=0; i<dim; i++){
          tableContent = tableContent + "<tr>";
          for(var j=0; j<dim; j++){
            tableContent = tableContent + "<td id=cell-" + i + "-" + j + ">" + input[i][j] + "</td>";
          }
          tableContent = tableContent + "</tr>";
        }

        container.html(tableStart + tableContent + tableEnd);
      },

      highlight: function(path){
        for(var i in path){
          var cell = path[i];
          $("#" + cell.jquerySelector()).addClass("highlight");
        }
      }

    };
})();

export default ui;
