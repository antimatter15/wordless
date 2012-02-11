(function() {
  window.parse = function(ab) {
    var arr, ptr, read, skip;
    ptr = 0;
    arr = new Uint8Array(ab);
    skip = function(num) {
      return ptr += num;
    };
    read = function(num) {
      var n, val;
      val = 0;
      for (n = 0; 0 <= num ? n < num : n > num; 0 <= num ? n++ : n--) {
        console.log(arr[ptr + n], (ptr + n).toString(16));
        val = (val * 256) + arr[ptr + n];
      }
      return val;
    };
    console.log(read(8));
    ptr = 76;
    return console.log(read(4));
  };
}).call(this);
