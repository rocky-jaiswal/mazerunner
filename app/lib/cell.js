import input from './input';

var Cell = function(x, y){

    this.x = x;
    this.y = y;

    this.content = function(){
      return input[x][y];
    };

    this.toString = function(){
      return this.x + "-" + this.y + "-" + this.content();
    };

    this.jquerySelector = function(){
      return "cell-" + this.x + "-" + this.y;
    };

};

export default Cell;
