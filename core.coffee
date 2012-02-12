window.parse = (ab) ->
	ptr = 0
	arr = new Uint8Array ab
	skip = (num) ->
		ptr += num
	read = (num) ->
		val = 0
		ptr += num
		for n in [1..num]
			#console.log arr[ptr+n], (ptr+n).toString(16)
			val = (val * 256) + arr[ptr-n] 
		val
	_abSig = read 8
	_clsid = read 16
	_uMinorVersion = read 2
	_uDllVersion = read 2
	_uByteOrder = read 2
	throw "Wrong endianness." if _uByteOrder is not 0xfffe
	_uSectorShift = read 2
	console.log _uSectorShift
	_uMiniSectorShift = read 2
	_usReserved = read 2
	_ulReserved1 = read 4
	_csectDir = read 4
	_csectFat = read 4
	_sectDirStart = (read 4) >> 0
	_signature = read 4
	_ulMiniSectorCutoff = read 4
	_sectMiniFatStart = (read 4) >> 0
	_csectMiniFat = read 4
	_sectDifStart = (read 4) >> 0
	console.log _sectDirStart, _sectMiniFatStart, _sectDifStart
	_csectDif = read 4
	console.log _csectDif
	_sectFat = ((read 4) >> 0 for i in [0...109])

	console.log _sectFat
	
	
	