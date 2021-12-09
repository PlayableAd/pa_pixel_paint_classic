
cc.Class({
    extends: cc.Component,

    properties: {
    },
    start() {
        this.node.children[window.colorChoose].on('touchmove', function (event) {
            event.target.opacity = 10
        });
    },

    update (dt) {
    },
});
