
cc.Class({
    extends: cc.Component,

    properties: {
    },
    onBeginContact(contact, selfCollider, otherCollider) {
        // selfCollider.enabled = false;
    },
    start() {
        this.node.children[window.colorChoose].on('touchmove', function (event) {
            event.target.opacity = 10
        });
    },

    update(dt) {
    },
});
