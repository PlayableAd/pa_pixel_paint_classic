
window.currentPixelFilled = 0;
cc.Class({
    extends: cc.Component,
    onBeginContact: function (contact, selfCollider, otherCollider) {
        //cut name to take number and color to fill color
        if (window.colorChoose == otherCollider.node.name.slice(0, 1)) {
            otherCollider.node.name = `${otherCollider.node.name}-filled`;
            otherCollider.node.children[0].color = new cc.Color().fromHEX(`${otherCollider.node.name.slice(2, 9)}`),
                otherCollider.enabled = false;
            window.totalPixel--;
            window.currentPixelFilled++;
            //hide all node number orther 
            otherCollider.node.children.slice(1).map((item) => {
                item.opacity = 0;
            });
        }
    }
});
