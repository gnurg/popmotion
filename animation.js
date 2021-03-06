import { styler, spring, listen, pointer, value } from "popmotion";

//const popmotion = require("popmotion");
//const { styler, spring, listen, pointer, value } = popmotion;
// same as:
//const spring = window.popmotion.spring;

const ball = document.querySelector(".box");
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, "mousedown touchstart").start(e => {
    e.preventDefault();
    pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup touchend").start(() => {
    spring({
        from: ballXY.get(),
        velocity: ballXY.getVelocity(),
        to: { x: 0, y: 0 },
        stiffness: 200
        // mass : 1,
        // damping: 10
    }).start(ballXY);
})


