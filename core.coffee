window.parse = (ab) ->
	header = new QuasiStruct [8,16,2,2,2,2,2,10,4,4,4,4,4,4,4,4]

	[magic, uid, revision, version, order, sectorsize, shortsize, unused, sectornum, first, unused2, minsize, secid, secnum, secid, masternum] = header.parse(new Uint8Array(ab))
