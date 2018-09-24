"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App;
(function (App) {
    class Talk {
        static GetGreeting(now) {
            let h = now.getHours();
            if (h < 5) {
                return "Welcome back!";
            }
            else if (h < 12) {
                return "Good morning!";
            }
            else if (h < 16) {
                return "Good afternoon!";
            }
            else if (h < 22) {
                return "Good evening!";
            }
            else {
                return "Welcome back!";
            }
        }
    }
    App.Talk = Talk;
})(App = exports.App || (exports.App = {}));
//# sourceMappingURL=app-talk.js.map