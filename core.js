(function() {
  window.parse = function(ab) {
    var arr, i, ptr, read, skip, _abSig, _clsid, _csectDif, _csectDir, _csectFat, _csectMiniFat, _sectDifStart, _sectDirStart, _sectFat, _sectMiniFatStart, _signature, _uByteOrder, _uDllVersion, _uMiniSectorShift, _uMinorVersion, _uSectorShift, _ulMiniSectorCutoff, _ulReserved1, _usReserved;
    ptr = 0;
    arr = new Uint8Array(ab);
    skip = function(num) {
      return ptr += num;
    };
    read = function(num) {
      var n, val;
      val = 0;
      ptr += num;
      for (n = 1; 1 <= num ? n <= num : n >= num; 1 <= num ? n++ : n--) {
        val = (val * 256) + arr[ptr - n];
      }
      return val;
    };
    _abSig = read(8);
    _clsid = read(16);
    _uMinorVersion = read(2);
    _uDllVersion = read(2);
    _uByteOrder = read(2);
    if (_uByteOrder === !0xfffe) {
      throw "Wrong endianness.";
    }
    _uSectorShift = read(2);
    console.log(_uSectorShift);
    _uMiniSectorShift = read(2);
    _usReserved = read(2);
    _ulReserved1 = read(4);
    _csectDir = read(4);
    _csectFat = read(4);
    _sectDirStart = (read(4)) >> 0;
    _signature = read(4);
    _ulMiniSectorCutoff = read(4);
    _sectMiniFatStart = (read(4)) >> 0;
    _csectMiniFat = read(4);
    _sectDifStart = (read(4)) >> 0;
    console.log(_sectDirStart, _sectMiniFatStart, _sectDifStart);
    _csectDif = read(4);
    console.log(_csectDif);
    _sectFat = (function() {
      var _results;
      _results = [];
      for (i = 0; i < 109; i++) {
        _results.push((read(4)) >> 0);
      }
      return _results;
    })();
    return console.log(_sectFat);
  };
}).call(this);
