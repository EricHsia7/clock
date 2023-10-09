function getCurrentTime() {
  var p = function (n) {
    var string = String(n);
    return string.padStart(2, '0');
  };
  var now = new Date();
  var hours = p(now.getHours());
  var minutes = p(now.getMinutes());
  var seconds = p(now.getSeconds());
  return [hours, minutes, seconds].join(':');
}

window.clock2 = {
  getCurrentTime
};

export default window.clock2;
