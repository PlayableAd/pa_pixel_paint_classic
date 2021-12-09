
cc.Class({
    extends: cc.Component,

    properties: {
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.node.children[window.colorChoose].on('touchmove', function (event) {
            console.log(event.target);
            event.target.opacity = 10
        });
    },

    update (dt) {
    },
});
