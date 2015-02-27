(function(angular) {

  function DataEnhancer() {
    this.enhancement = 'foo';
  }

  DataEnhancer.prototype.setEnhancement = function(enh) {
    this.enhancement = enh;
  };

  DataEnhancer.prototype.enhance = function(str) {
    return str + this.enhancement;
  };

  angular.module('mevisApp').service('DataEnhancer', DataEnhancer);

})(angular);