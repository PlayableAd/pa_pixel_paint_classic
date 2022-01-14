const ColorDefault = {
    green1: "#024f01",
    green2: "#92bc00",
    red1: "#66000d",
    red2: "#ba0c2f",
    red3: "#ff0f40",
}
window.colorChoose = 1;
window.totalPixel = 0;
let curentColor = window.colorChoose;
let BgSound;
let data = {}

cc.Class({
    extends: cc.Component,
    properties: {
        targetNode: cc.Node,
        blockModal: cc.Prefab,
        btnChoose: cc.Node,
        TouchPoint: cc.Node,
        TutorialNode: cc.Node,
        WingameNode: cc.Node,
        JsonMap: cc.JsonAsset,
        BgSound: cc.AudioClip,
        WinSound: cc.AudioClip
    },
    onLoad() {
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().debugDrawFlags = 0;
    },
    start() {
        console.log(this.JsonMap)

        for (let i = 1; i < this.JsonMap.json.layers.length; i++) {
            const element = this.JsonMap.json.layers[i];
            console.log("🚀 ~ file: MainControl3.js ~ line 34 ~ start ~ element", element)
            element.objects.map((item, index) => {
                data[`${element.properties[0].value}`] = {};
                data[`${element.properties[0].value}`]["name"] = element.name;
                data[`${element.properties[0].value}`]["quantity"] = element.objects.length;
                //create block node
                var node = cc.instantiate(this.blockModal);
                node.parent = this.targetNode;
                const hexColor = this.findColor(element.name)
                node.name = `${item.properties[0].value}-${hexColor}`
                node.setPosition(item.x, item.y);
                node.children[item.properties[0].value].active = true;
                window.totalPixel++;
                // console.log(window.totalPixel);
            })
            console.log(data);

        }
        //choose number and color
        this.btnChoose.children.map((color, index) => {
            color.on('touchend', function (event) {
                // console.log("chooseColor", index);
                window.colorChoose = index + 1
            });
        })
        //touch position
        this.node.on("touchstart", function (event) {
            this.TouchPoint.x = event.getLocation().x - 640;
            this.TouchPoint.y = event.getLocation().y - 360;
        }, this);
        this.node.on("touchmove", function (event) {
            this.TouchPoint.x = event.getLocation().x - 640;
            this.TouchPoint.y = event.getLocation().y - 360;
        }, this);

        this.TutorialNode.on("touchstart", function (event) {
            // console.log("touch");
            this.TutorialNode.off("touchmove"),
                this.TutorialNode.active = false;
            // BgSound = cc.audioEngine.play(this.BgSound, true, 1);
        }, this);
        this.renderBlockNotPaint();
        // console.log(data);
    },
    findColor(colorName) {
        for (const key in ColorDefault) {
            if (key == colorName) {
                return ColorDefault[key];
            }
        }
    },
    renderBlockNotPaint() {
        this.targetNode.children.map((block) => {
            //ô đã chọn để tô
            if ((block.name.slice(0, 1) == window.colorChoose) && block.name.slice(10, 16) !== "filled") {
                block.children[0].color = new cc.Color().fromHEX(`#a1a1a1`);
                block.children[block.name.slice(0, 1)].opacity = 255;

                //chưa tô
            } else if ((block.name.slice(0, 1) !== window.colorChoose) && block.name.slice(10, 16) !== "filled") {
                block.children[0].color = new cc.Color().fromHEX(`#cccccc`);
                block.children[block.name.slice(0, 1)].opacity = 100;
            }
        })
    },
    update(dt) {
        this.btnChoose.children.map((color, index) => {
            if (window.colorChoose == index + 1) {
                color.opacity = 255;
            } else {
                color.opacity = 30
            }
        })
        if (curentColor !== window.colorChoose) {
            this.renderBlockNotPaint();
            curentColor = window.colorChoose;
        }
        if (window.totalPixel == 0) {
            cc.tween(this.WingameNode)
                .delay(1)
                .to(1, { opacity: 255 })
                .call(() => {
                    cc.audioEngine.play(this.WinSound, false, 1);
                })
                .start()
            cc.tween(this.WingameNode.children[1])
                .delay(1)
                .to(1, { scale: 0.2 }, { easing: 'sineIn' })
                .start()
            this.WingameNode.on("touchstart", function () {
                // cc.audioEngine.stop(BgSound)
                console.log("GOTOSTORE")
            })
            window.totalPixel = -1;

        }
        //auto change colorChoose
        if (window.currentPixelFilled == data[window.colorChoose].quantity) {
            if (window.colorChoose !== Object.keys(data).length) {
                window.colorChoose++;
                window.currentPixelFilled = 0;
                this.renderBlockNotPaint();
            }
        }
    },
});
