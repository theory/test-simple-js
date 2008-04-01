JSAN.addRepository('../lib').use('Test.Builder');

var T = new Test.Builder();

T.plan({ tests: 3 });
T.diag("Testing for IE6 try/catch/Error load confusion");

try { Test.Builder.die("foo"); }
catch (ex) {
    T.ok((ex.message === "foo"), "expected 'foo', got '" + ex.message + "'");
}

try { Test.Builder.die("bar"); }
catch (ex) {
    T.ok((ex.message === "bar"), "expected 'bar', got '" + ex.message + "'");
}

try { Test.Builder.die("baz"); }
catch (ex) {
    T.ok((ex.message === "baz"), "expected 'baz', got '" + ex.message + "'");
}
