import 'magnific-popup/dist/magnific-popup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../theme/ionicons.min.css';

window._ = require("lodash");

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

window.Popper = require("popper.js").default;
window.$ = window.jQuery = require("jquery");

require("magnific-popup/dist/jquery.magnific-popup");
require("filterizr/dist/jquery.filterizr.min");
