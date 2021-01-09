(function() {var implementors = {};
implementors["combine"] = [{"text":"impl&lt;R:&nbsp;AsyncRead&gt; AsyncBufRead for BufReader&lt;R&gt;","synthetic":false,"types":[]}];
implementors["tokio_util"] = [{"text":"impl&lt;L, R&gt; AsyncBufRead for Either&lt;L, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: AsyncBufRead,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsyncBufRead,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()