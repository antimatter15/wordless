(function() {
  window.parse = function(ab) {
    var first, header, magic, masternum, minsize, order, revision, secid, secnum, sectornum, sectorsize, shortsize, uid, unused, unused2, version, _ref;
    header = new QuasiStruct([8, 16, 2, 2, 2, 2, 2, 10, 4, 4, 4, 4, 4, 4, 4, 4]);
    return _ref = header.parse(new Uint8Array(ab)), magic = _ref[0], uid = _ref[1], revision = _ref[2], version = _ref[3], order = _ref[4], sectorsize = _ref[5], shortsize = _ref[6], unused = _ref[7], sectornum = _ref[8], first = _ref[9], unused2 = _ref[10], minsize = _ref[11], secid = _ref[12], secnum = _ref[13], secid = _ref[14], masternum = _ref[15], _ref;
  };
}).call(this);
