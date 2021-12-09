cc.Class({
    extends: cc.Component,
    onBeginContact: function (contact, selfCollider, otherCollider) {
        if (window.colorChoose == otherCollider.node.name.slice(0, 1)) {
            otherCollider.node.children[0].color = new cc.Color().fromHEX(`${otherCollider.node.name.slice(2, 9)}`)
            otherCollider.node.children.slice(1).map((item) => item.opacity = 0)
        }
    }
});
