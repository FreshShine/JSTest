function animate(obj, target, callback) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    // var number = Math.ceil((target - obj.offsetLeft) / 10);
    var number = (target - obj.offsetLeft) / 10;
    number = number > 0 ? Math.ceil(number) : Math.floor(number);
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer)
      console.log(callback);
      if (callback) {
        callback();
      }
    }
    obj.style.left = obj.offsetLeft + number + 'px';

  }, 50)
}