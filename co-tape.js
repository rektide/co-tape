var co= require('co')

function CoTape(testGen, thisArg){
	thisArg= thisArg|| null
	var testCo= co(testGen)
	return function(t){
		testCo.call(thisArg, t)
	}
}

module.exports= CoTape
