function perform() {
    //TODO implement
	var callArg_1 = arguments[1]();
    return {
        then: function (cb) {
            callArg_1 = cb(callArg_1);
            return this;
        }
    }
}

perform(null, function() {
    var param = 1;
    console.log(param);
    return param;
})
    .then(function(param) {
        console.log(++param);
        return param;
    })
    .then(function(param) {
        console.log(++param);
        return param;
    });