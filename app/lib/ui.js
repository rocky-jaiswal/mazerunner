var $ = require('jquery');
import input from './input';
import Cell  from './cell';

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
                    tableContent = tableContent + this.cellContent(i, j);
                }
                tableContent = tableContent + "</tr>";
            }

            container.html(tableStart + tableContent + tableEnd);
        },

        cellContent: function(i, j) {
            var cell = new Cell(i, j);
            if(cell.content() === "$"){
                return "<td class='gold' id='" + cell.jquerySelector() + "'>" + input[i][j] + "</td>";
            }
            if(cell.content() === "@"){
                return "<td class='ogre' id='" + cell.jquerySelector() + "'></td>";
            }
            if(cell.content() === "O"){
                return "<td class='hole' id='" + cell.jquerySelector() + "'></td>";
            }
            return "<td class='grass' id='" + cell.jquerySelector() + "'>" + input[i][j] + "</td>";
        },

        highlight: function(path){
            for(var i in path){
                var cell = path[i];
                $("#" + cell.jquerySelector()).addClass("path");
            }
        }

    };
})();

export default ui;
