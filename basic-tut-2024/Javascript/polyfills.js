// polyfills

if (!Array.prototype.contains) {
  Array.prototype.contains = function () {
    return this.indexOf(searchElement) >= 0 ? true : false;
  };
}
