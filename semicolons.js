;// require('semicolons') ==> they are REQUIRED!;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
var fs = require('fs');;;;;;;;;;;;;;;;;;;;;;;;;;;
require.extensions['.js'] = (function (orig) {;;;
;;return function (mod, f) {;;;;;;;;;;;;;;;;;;;;;
;;;;var data = fs.readFileSync(f, 'utf8');;;;;;;;
;;;;if (data.match(/[^;]\s*\n/)) {;;;;;;;;;;;;;;;
;;;;;;var errStr = 'Unsafe \\n without ; in '+ f;
;;;;;;throw new Error(errStr);;;;;;;;;;;;;;;;;;;;
;;;;};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;return orig.call(this, mod, f);;;;;;;;;;;;;;;
;;};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
})(require.extensions['.js']);;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
             ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
             ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
             ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
      ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;      
      ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;      
      ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;      
