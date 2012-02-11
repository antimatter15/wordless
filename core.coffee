window.parse = (ab) ->
	ptr = 0
	arr = new Uint8Array ab
	skip = (num) ->
		ptr += num
	read = (num) ->
		val = 0
		for n in [0...num]
			console.log arr[ptr+n], (ptr+n).toString(16)
			val = (val * 256) + arr[ptr+n] 
		val
	console.log read 8
	ptr = 76
	console.log read 4
	
	