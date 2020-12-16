(function() {var implementors = {};
implementors["cpython"] = [{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PyErr.html\" title=\"struct cpython::PyErr\">PyErr</a>","synthetic":true,"types":["cpython::err::PyErr"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PyModule.html\" title=\"struct cpython::PyModule\">PyModule</a>","synthetic":true,"types":["cpython::objects::module::PyModule"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PyObject.html\" title=\"struct cpython::PyObject\">PyObject</a>","synthetic":true,"types":["cpython::objects::object::PyObject"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PyType.html\" title=\"struct cpython::PyType\">PyType</a>","synthetic":true,"types":["cpython::objects::typeobject::PyType"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PyUnicode.html\" title=\"struct cpython::PyUnicode\">PyString</a>","synthetic":true,"types":["cpython::objects::string::PyString"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PyBytes.html\" title=\"struct cpython::PyBytes\">PyBytes</a>","synthetic":true,"types":["cpython::objects::string::PyBytes"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PyBool.html\" title=\"struct cpython::PyBool\">PyBool</a>","synthetic":true,"types":["cpython::objects::boolobject::PyBool"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PyCapsule.html\" title=\"struct cpython::PyCapsule\">PyCapsule</a>","synthetic":true,"types":["cpython::objects::capsule::PyCapsule"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PyDict.html\" title=\"struct cpython::PyDict\">PyDict</a>","synthetic":true,"types":["cpython::objects::dict::PyDict"]},{"text":"impl&lt;'p&gt; Freeze for <a class=\"struct\" href=\"cpython/struct.PyIterator.html\" title=\"struct cpython::PyIterator\">PyIterator</a>&lt;'p&gt;","synthetic":true,"types":["cpython::objects::iterator::PyIterator"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PyList.html\" title=\"struct cpython::PyList\">PyList</a>","synthetic":true,"types":["cpython::objects::list::PyList"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PyInt.html\" title=\"struct cpython::PyInt\">PyLong</a>","synthetic":true,"types":["cpython::objects::num::PyLong"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PyFloat.html\" title=\"struct cpython::PyFloat\">PyFloat</a>","synthetic":true,"types":["cpython::objects::num::PyFloat"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PySequence.html\" title=\"struct cpython::PySequence\">PySequence</a>","synthetic":true,"types":["cpython::objects::sequence::PySequence"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PySet.html\" title=\"struct cpython::PySet\">PySet</a>","synthetic":true,"types":["cpython::objects::set::PySet"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.NoArgs.html\" title=\"struct cpython::NoArgs\">NoArgs</a>","synthetic":true,"types":["cpython::objects::tuple::NoArgs"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.PyTuple.html\" title=\"struct cpython::PyTuple\">PyTuple</a>","synthetic":true,"types":["cpython::objects::tuple::PyTuple"]},{"text":"impl&lt;'p&gt; Freeze for <a class=\"struct\" href=\"cpython/struct.Python.html\" title=\"struct cpython::Python\">Python</a>&lt;'p&gt;","synthetic":true,"types":["cpython::python::Python"]},{"text":"impl&lt;'p&gt; Freeze for <a class=\"struct\" href=\"cpython/struct.PythonObjectDowncastError.html\" title=\"struct cpython::PythonObjectDowncastError\">PythonObjectDowncastError</a>&lt;'p&gt;","synthetic":true,"types":["cpython::python::PythonObjectDowncastError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/struct.GILGuard.html\" title=\"struct cpython::GILGuard\">GILGuard</a>","synthetic":true,"types":["cpython::pythonrun::GILGuard"]},{"text":"impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"cpython/struct.GILProtected.html\" title=\"struct cpython::GILProtected\">GILProtected</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["cpython::pythonrun::GILProtected"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"cpython/struct.PyLeakedRef.html\" title=\"struct cpython::PyLeakedRef\">PyLeakedRef</a>&lt;'a, T&gt;","synthetic":true,"types":["cpython::sharedref::PyLeakedRef"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"cpython/struct.PyLeakedRefMut.html\" title=\"struct cpython::PyLeakedRefMut\">PyLeakedRefMut</a>&lt;'a, T&gt;","synthetic":true,"types":["cpython::sharedref::PyLeakedRefMut"]},{"text":"impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"cpython/struct.PySharedRef.html\" title=\"struct cpython::PySharedRef\">PySharedRef</a>&lt;'a, T&gt;","synthetic":true,"types":["cpython::sharedref::PySharedRef"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"cpython/struct.PySharedRefCell.html\" title=\"struct cpython::PySharedRefCell\">PySharedRefCell</a>&lt;T&gt;","synthetic":true,"types":["cpython::sharedref::PySharedRefCell"]},{"text":"impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"cpython/struct.UnsafePyLeaked.html\" title=\"struct cpython::UnsafePyLeaked\">UnsafePyLeaked</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,&nbsp;</span>","synthetic":true,"types":["cpython::sharedref::UnsafePyLeaked"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"enum\" href=\"cpython/enum.PyStringData.html\" title=\"enum cpython::PyStringData\">PyStringData</a>&lt;'a&gt;","synthetic":true,"types":["cpython::objects::string::PyStringData"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.BaseException.html\" title=\"struct cpython::exc::BaseException\">BaseException</a>","synthetic":true,"types":["cpython::objects::exc::BaseException"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.Exception.html\" title=\"struct cpython::exc::Exception\">Exception</a>","synthetic":true,"types":["cpython::objects::exc::Exception"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.LookupError.html\" title=\"struct cpython::exc::LookupError\">LookupError</a>","synthetic":true,"types":["cpython::objects::exc::LookupError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.AssertionError.html\" title=\"struct cpython::exc::AssertionError\">AssertionError</a>","synthetic":true,"types":["cpython::objects::exc::AssertionError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.AttributeError.html\" title=\"struct cpython::exc::AttributeError\">AttributeError</a>","synthetic":true,"types":["cpython::objects::exc::AttributeError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.BlockingIOError.html\" title=\"struct cpython::exc::BlockingIOError\">BlockingIOError</a>","synthetic":true,"types":["cpython::objects::exc::BlockingIOError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.BrokenPipeError.html\" title=\"struct cpython::exc::BrokenPipeError\">BrokenPipeError</a>","synthetic":true,"types":["cpython::objects::exc::BrokenPipeError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.ChildProcessError.html\" title=\"struct cpython::exc::ChildProcessError\">ChildProcessError</a>","synthetic":true,"types":["cpython::objects::exc::ChildProcessError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.ConnectionAbortedError.html\" title=\"struct cpython::exc::ConnectionAbortedError\">ConnectionAbortedError</a>","synthetic":true,"types":["cpython::objects::exc::ConnectionAbortedError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.ConnectionError.html\" title=\"struct cpython::exc::ConnectionError\">ConnectionError</a>","synthetic":true,"types":["cpython::objects::exc::ConnectionError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.ConnectionRefusedError.html\" title=\"struct cpython::exc::ConnectionRefusedError\">ConnectionRefusedError</a>","synthetic":true,"types":["cpython::objects::exc::ConnectionRefusedError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.ConnectionResetError.html\" title=\"struct cpython::exc::ConnectionResetError\">ConnectionResetError</a>","synthetic":true,"types":["cpython::objects::exc::ConnectionResetError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.EOFError.html\" title=\"struct cpython::exc::EOFError\">EOFError</a>","synthetic":true,"types":["cpython::objects::exc::EOFError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.EnvironmentError.html\" title=\"struct cpython::exc::EnvironmentError\">EnvironmentError</a>","synthetic":true,"types":["cpython::objects::exc::EnvironmentError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.FileExistsError.html\" title=\"struct cpython::exc::FileExistsError\">FileExistsError</a>","synthetic":true,"types":["cpython::objects::exc::FileExistsError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.FileNotFoundError.html\" title=\"struct cpython::exc::FileNotFoundError\">FileNotFoundError</a>","synthetic":true,"types":["cpython::objects::exc::FileNotFoundError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.FloatingPointError.html\" title=\"struct cpython::exc::FloatingPointError\">FloatingPointError</a>","synthetic":true,"types":["cpython::objects::exc::FloatingPointError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.IOError.html\" title=\"struct cpython::exc::IOError\">IOError</a>","synthetic":true,"types":["cpython::objects::exc::IOError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.ImportError.html\" title=\"struct cpython::exc::ImportError\">ImportError</a>","synthetic":true,"types":["cpython::objects::exc::ImportError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.IndexError.html\" title=\"struct cpython::exc::IndexError\">IndexError</a>","synthetic":true,"types":["cpython::objects::exc::IndexError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.InterruptedError.html\" title=\"struct cpython::exc::InterruptedError\">InterruptedError</a>","synthetic":true,"types":["cpython::objects::exc::InterruptedError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.IsADirectoryError.html\" title=\"struct cpython::exc::IsADirectoryError\">IsADirectoryError</a>","synthetic":true,"types":["cpython::objects::exc::IsADirectoryError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.KeyError.html\" title=\"struct cpython::exc::KeyError\">KeyError</a>","synthetic":true,"types":["cpython::objects::exc::KeyError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.KeyboardInterrupt.html\" title=\"struct cpython::exc::KeyboardInterrupt\">KeyboardInterrupt</a>","synthetic":true,"types":["cpython::objects::exc::KeyboardInterrupt"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.MemoryError.html\" title=\"struct cpython::exc::MemoryError\">MemoryError</a>","synthetic":true,"types":["cpython::objects::exc::MemoryError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.NameError.html\" title=\"struct cpython::exc::NameError\">NameError</a>","synthetic":true,"types":["cpython::objects::exc::NameError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.NotADirectoryError.html\" title=\"struct cpython::exc::NotADirectoryError\">NotADirectoryError</a>","synthetic":true,"types":["cpython::objects::exc::NotADirectoryError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.NotImplementedError.html\" title=\"struct cpython::exc::NotImplementedError\">NotImplementedError</a>","synthetic":true,"types":["cpython::objects::exc::NotImplementedError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.OSError.html\" title=\"struct cpython::exc::OSError\">OSError</a>","synthetic":true,"types":["cpython::objects::exc::OSError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.OverflowError.html\" title=\"struct cpython::exc::OverflowError\">OverflowError</a>","synthetic":true,"types":["cpython::objects::exc::OverflowError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.PermissionError.html\" title=\"struct cpython::exc::PermissionError\">PermissionError</a>","synthetic":true,"types":["cpython::objects::exc::PermissionError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.ProcessLookupError.html\" title=\"struct cpython::exc::ProcessLookupError\">ProcessLookupError</a>","synthetic":true,"types":["cpython::objects::exc::ProcessLookupError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.ReferenceError.html\" title=\"struct cpython::exc::ReferenceError\">ReferenceError</a>","synthetic":true,"types":["cpython::objects::exc::ReferenceError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.RuntimeError.html\" title=\"struct cpython::exc::RuntimeError\">RuntimeError</a>","synthetic":true,"types":["cpython::objects::exc::RuntimeError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.SyntaxError.html\" title=\"struct cpython::exc::SyntaxError\">SyntaxError</a>","synthetic":true,"types":["cpython::objects::exc::SyntaxError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.SystemError.html\" title=\"struct cpython::exc::SystemError\">SystemError</a>","synthetic":true,"types":["cpython::objects::exc::SystemError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.SystemExit.html\" title=\"struct cpython::exc::SystemExit\">SystemExit</a>","synthetic":true,"types":["cpython::objects::exc::SystemExit"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.TimeoutError.html\" title=\"struct cpython::exc::TimeoutError\">TimeoutError</a>","synthetic":true,"types":["cpython::objects::exc::TimeoutError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.TypeError.html\" title=\"struct cpython::exc::TypeError\">TypeError</a>","synthetic":true,"types":["cpython::objects::exc::TypeError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.ValueError.html\" title=\"struct cpython::exc::ValueError\">ValueError</a>","synthetic":true,"types":["cpython::objects::exc::ValueError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.ZeroDivisionError.html\" title=\"struct cpython::exc::ZeroDivisionError\">ZeroDivisionError</a>","synthetic":true,"types":["cpython::objects::exc::ZeroDivisionError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.BufferError.html\" title=\"struct cpython::exc::BufferError\">BufferError</a>","synthetic":true,"types":["cpython::objects::exc::BufferError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.UnicodeDecodeError.html\" title=\"struct cpython::exc::UnicodeDecodeError\">UnicodeDecodeError</a>","synthetic":true,"types":["cpython::objects::exc::UnicodeDecodeError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.UnicodeEncodeError.html\" title=\"struct cpython::exc::UnicodeEncodeError\">UnicodeEncodeError</a>","synthetic":true,"types":["cpython::objects::exc::UnicodeEncodeError"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/exc/struct.UnicodeTranslateError.html\" title=\"struct cpython::exc::UnicodeTranslateError\">UnicodeTranslateError</a>","synthetic":true,"types":["cpython::objects::exc::UnicodeTranslateError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"cpython/argparse/struct.ParamDescription.html\" title=\"struct cpython::argparse::ParamDescription\">ParamDescription</a>&lt;'a&gt;","synthetic":true,"types":["cpython::argparse::ParamDescription"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/buffer/struct.PyBuffer.html\" title=\"struct cpython::buffer::PyBuffer\">PyBuffer</a>","synthetic":true,"types":["cpython::buffer::PyBuffer"]},{"text":"impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"cpython/buffer/struct.ReadOnlyCell.html\" title=\"struct cpython::buffer::ReadOnlyCell\">ReadOnlyCell</a>&lt;T&gt;","synthetic":true,"types":["cpython::buffer::ReadOnlyCell"]},{"text":"impl Freeze for <a class=\"enum\" href=\"cpython/buffer/enum.ElementType.html\" title=\"enum cpython::buffer::ElementType\">ElementType</a>","synthetic":true,"types":["cpython::buffer::ElementType"]},{"text":"impl Freeze for <a class=\"enum\" href=\"cpython/py_class/enum.CompareOp.html\" title=\"enum cpython::py_class::CompareOp\">CompareOp</a>","synthetic":true,"types":["cpython::py_class::CompareOp"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/py_class/gc/struct.TraverseError.html\" title=\"struct cpython::py_class::gc::TraverseError\">TraverseError</a>","synthetic":true,"types":["cpython::py_class::gc::TraverseError"]},{"text":"impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"cpython/py_class/gc/struct.VisitProc.html\" title=\"struct cpython::py_class::gc::VisitProc\">VisitProc</a>&lt;'a&gt;","synthetic":true,"types":["cpython::py_class::gc::VisitProc"]},{"text":"impl Freeze for <a class=\"struct\" href=\"cpython/serde/struct.Error.html\" title=\"struct cpython::serde::Error\">Error</a>","synthetic":true,"types":["cpython::serde::error::Error"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()