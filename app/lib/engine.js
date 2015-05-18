import input from './input';
import Cell  from './cell';

var engine = (function(){

    return {

      winner: [],

      solve: function(){
        var cells        = [];
        var visitedCells = [];

        for(var i=0; i<input.length; i++){
          for(var j=0; j<input.length; j++){
            cells.push(new Cell(i, j));
          }
        }

        this.dfs(this.findRunner(cells), visitedCells);
        return this.winner;
      },

      dfs: function(cell, visitedCells){
        if(this.winner.length > 0){
          return null;
        }

        visitedCells.push(cell);

        var _visitableNbours = this.visitableNeighbours(cell, visitedCells);

        if(_visitableNbours.length > 0 && this.containsGold(_visitableNbours)){
          //console.log("found gold!");
          //this.pp(visitedCells);
          this.winner = visitedCells;
        }

        for(var i in _visitableNbours){
          this.dfs(_visitableNbours[i], visitedCells);
        }
      },

      visitableNeighbours: function(cell, visitedCells){
        var _visitableNeighbours = [];
        var goodNeighbours = this.allGoodNeighbours(cell);

        for(var i in goodNeighbours){
          var nbour = goodNeighbours[i];
          _visitableNeighbours.push(nbour);
          for(var j in visitedCells){
            var vn = visitedCells[j];
            if(vn.toString() === nbour.toString()){
              _visitableNeighbours.pop();
            }
          }
        }

        return _visitableNeighbours;
      },

      allGoodNeighbours: function(cell){
        var visitable = []
        var dim = input.length;

        if(cell.x-1 >= 0){
          var cell1 = new Cell(cell.x-1, cell.y);
          if(cell1.content() !== "O"){
            visitable.push(cell1);
          }
        }
        if(cell.x+1 < dim-1){
          var cell2 = new Cell(cell.x+1, cell.y);
          if(cell2.content() !== "O"){
            visitable.push(cell2);
          }
        }
        if(cell.y-1 >= 0){
          var cell3 = new Cell(cell.x, cell.y-1);
          if(cell3.content() !== "O"){
            visitable.push(cell3);
          }
        }
        if(cell.y+1 < dim-1){
          var cell4 = new Cell(cell.x, cell.y+1);
          if(cell4.content() !== "O"){
            visitable.push(cell4);
          }
        }

        return visitable;
      },

      findRunner: function(cells){
        for(var i in cells){
          var c = cells[i];
          if(c.content() === "@"){
            return c;
          }
        }
      },

      containsGold: function(cells){
        for(var i in cells){
          var c = cells[i];
          if(c.content() === "$"){
            return true;
          }
        }
        return false;
      },

      pp: function(cells){
        for(var i in cells){
          console.log(cells[i].toString());
        }
      }

    };
})();

export default engine;
