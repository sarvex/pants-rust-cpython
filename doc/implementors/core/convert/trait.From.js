(function() {var implementors = {};
implementors["cpython"] = [{"text":"impl&lt;'p&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cpython/struct.PythonObjectDowncastError.html\" title=\"struct cpython::PythonObjectDowncastError\">PythonObjectDowncastError</a>&lt;'p&gt;&gt; for <a class=\"struct\" href=\"cpython/struct.PyErr.html\" title=\"struct cpython::PyErr\">PyErr</a>","synthetic":false,"types":["cpython::err::PyErr"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'a <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"enum\" href=\"cpython/enum.PyStringData.html\" title=\"enum cpython::PyStringData\">PyStringData</a>&lt;'a&gt;","synthetic":false,"types":["cpython::objects::string::PyStringData"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'a [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u16.html\">u16</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"enum\" href=\"cpython/enum.PyStringData.html\" title=\"enum cpython::PyStringData\">PyStringData</a>&lt;'a&gt;","synthetic":false,"types":["cpython::objects::string::PyStringData"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'a [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"enum\" href=\"cpython/enum.PyStringData.html\" title=\"enum cpython::PyStringData\">PyStringData</a>&lt;'a&gt;","synthetic":false,"types":["cpython::objects::string::PyStringData"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cpython/struct.PyErr.html\" title=\"struct cpython::PyErr\">PyErr</a>&gt; for <a class=\"struct\" href=\"cpython/serde/struct.Error.html\" title=\"struct cpython::serde::Error\">Error</a>","synthetic":false,"types":["cpython::serde::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"cpython/serde/struct.Error.html\" title=\"struct cpython::serde::Error\">Error</a>&gt; for <a class=\"struct\" href=\"cpython/struct.PyErr.html\" title=\"struct cpython::PyErr\">PyErr</a>","synthetic":false,"types":["cpython::err::PyErr"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()