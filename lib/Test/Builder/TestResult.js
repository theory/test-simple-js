// $Id$

if (!Test || !Test.Builder)
    throw new Error("Private class -- may only be loaded by Test.Builder");

// Package-private utility class for describing the results of a single test.
Test.Builder.TestResult = function (args) {
    var defaults = Test.Builder.TestResult.defaults;
    for (var name in defaults) {
        this[name] = defaults[name];
    }
    if (args) {
        for (var name in args) {
            // Validate params.
            if ({}.hasOwnProperty) {
                if (   args.hasOwnProperty(name) 
                    && !defaults.hasOwnProperty(name)
                ) {
                    throw new Test.Builder.Error("Invalid parameter: " + name);
                }
            }
            this[name] = args[name];
        }
    }
}

Test.Builder.TestResult.defaults = {
    ok:       null,
    actualOK: null,
    desc:     '',
    reason:   '',
    type:     null,
    output:   '' 
};

// Set up get/set accessors
Test.Builder.TestResult.makeGetSet = function (varName, reCasedName) {
    Test.Builder.TestResult.prototype[ 'get' + reCasedName ] 
        = function () { return this[varName] };
    Test.Builder.TestResult.prototype[ 'set' + reCasedName ] 
        = function (newVal) { this[varName] = newVal };
}
Test.Builder.TestResult.makeGetSet('ok',       'OK');
Test.Builder.TestResult.makeGetSet('actualOK', 'ActualOK'); 
Test.Builder.TestResult.makeGetSet('desc',     'Desc');
Test.Builder.TestResult.makeGetSet('reason',   'Reason');
Test.Builder.TestResult.makeGetSet('type',     'Type');
Test.Builder.TestResult.makeGetSet('output',   'Output');

// Append string to 'output' member var.
Test.Builder.TestResult.prototype.appendOutput = function (more) {
    this.output += more;
};

Test.Builder.TestResult.prototype.exportDetails = function () {
    return {
        ok:        this.ok,
        actual_ok: this.actualOK, // backwards compatible
        desc:      this.desc,
        reason:    this.reason,
        type:      this.type,
        output:    this.output
    };
};

