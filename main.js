var xhr = new XMLHttpRequest();
xhr.open('GET', 'Round 4.doc', true);
xhr.responseType = 'arraybuffer';
xhr.send(null)
xhr.onload = function(){
	parse(xhr.response)
}

function QuasiStruct(def){
  this.def = def;
}
QuasiStruct.prototype.format = function(arr){
  var str = '';
  this.def.forEach(function(e, i){
    while(e--)
      str += String.fromCharCode((arr[i] >> (e * 8)) & 0xff);
  });
  console.log(str.length, "out length");
  return str;
}
QuasiStruct.prototype.parse = function(arr){
  var ptr = 0;
  console.log(arr.length, "arr length");
  return this.def.map(function(e, i){
    var num = 0;
    while(e--){
      num = (num * 256) + arr[ptr++]
    }
    return num;
  })
}
