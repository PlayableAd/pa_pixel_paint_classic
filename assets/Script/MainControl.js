const ColorDefault = {
       red: "#e20000",
       white: "#ffffff",
       green: "#158500",
       black: "#000000"
}
window.colorChoose = 1;
cc.Class({
       extends: cc.Component,
       properties: {
              SocksNode: cc.Node,
              blockModal: cc.Prefab,
              btnChoose: cc.Node,
              TouchPoint: cc.Node
       },
       onLoad() {
              cc.director.getPhysicsManager().enabled = true;
              cc.director.getPhysicsManager().debugDrawFlags = 0;
       },
       start() {
              const map = {
                     "compressionlevel": -1,
                     "height": 26,
                     "infinite": false,
                     "layers": [

                            {
                                   "draworder": "topdown",
                                   "id": 2,
                                   "name": "red",
                                   "objects": [
                                          {
                                                 "height": 15,
                                                 "id": 338,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 30,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 339,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 30,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 340,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 15,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 341,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 15,
                                                 "y": 285
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 342,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 45,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 343,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 30,
                                                 "y": 285
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 344,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 45,
                                                 "y": 285
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 345,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 30,
                                                 "y": 300
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 346,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 45,
                                                 "y": 300
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 347,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 30,
                                                 "y": 315
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 348,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 60,
                                                 "y": 300
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 349,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 45,
                                                 "y": 315
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 350,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 60,
                                                 "y": 285
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 351,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 60,
                                                 "y": 315
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 352,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 45,
                                                 "y": 330
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 353,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 75,
                                                 "y": 315
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 354,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 60,
                                                 "y": 330
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 355,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 75,
                                                 "y": 300
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 356,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 315
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 357,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 75,
                                                 "y": 330
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 358,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 330
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 359,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 75,
                                                 "y": 345
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 360,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 330
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 361,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 345
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 362,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 345
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 364,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 45,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 365,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 60,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 366,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 75,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 367,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 285
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 368,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 300
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 369,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 315
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 370,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 330
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 378,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 379,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 380,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 381,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 382,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 383,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 390,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 391,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 105
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 392,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 105
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 393,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 105
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 394,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 105
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 395,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 105
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 396,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 105
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 397,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 105
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 398,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 105
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 399,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 105
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 400,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 105
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 401,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 105
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 402,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 120
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 403,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 120
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 404,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 120
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 405,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 135
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 406,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 135
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 407,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 135
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 408,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 150
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 409,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 150
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 410,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 150
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 411,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 412,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 413,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 414,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 120
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 415,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 120
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 416,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 120
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 417,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 135
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 418,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 135
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 419,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 135
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 420,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 150
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 421,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 150
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 422,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 150
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 423,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 424,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 425,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 426,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 427,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 428,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 429,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 430,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 431,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 432,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 433,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 434,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 435,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 436,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 437,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 438,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 439,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 440,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 441,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 442,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 443,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 444,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 445,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 446,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 447,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 448,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 449,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 452,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 453,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 454,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 455,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 456,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 457,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 458,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 135
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 459,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 135
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 460,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 135
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 461,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 135
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 462,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 463,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 465,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 466,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 467,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 468,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 469,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 150
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 470,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 120
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 471,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 120
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 472,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 473,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 474,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 475,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 476,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 477,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 478,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 479,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 480,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 481,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 482,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 483,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 484,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 485,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 486,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 487,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 488,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 489,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 490,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 491,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 492,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 493,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 494,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 495,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 496,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 497,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 498,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 499,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 500,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 501,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 502,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 503,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 504,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 505,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 506,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 507,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 508,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 509,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 510,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 511,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 512,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 513,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 514,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 515,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 516,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 517,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 518,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 519,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 520,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 521,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 522,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 523,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 524,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 4
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 60
                                          }],
                                   "opacity": 1,
                                   "properties": [
                                          {
                                                 "name": "number",
                                                 "type": "int",
                                                 "value": 4
                                          }],
                                   "type": "objectgroup",
                                   "visible": false,
                                   "x": 0,
                                   "y": 0
                            },
                            {
                                   "draworder": "topdown",
                                   "id": 3,
                                   "name": "green",
                                   "objects": [
                                          {
                                                 "height": 15,
                                                 "id": 104,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 156,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 157,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 158,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 167,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 168,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 169,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 170,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 171,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 172,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 173,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 174,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 244,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 245,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 246,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 247,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 75,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 248,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 60,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 249,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 60,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 250,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 75,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 281,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 282,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 283,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 284,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 285,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 286,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 287,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 289,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 285
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 293,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 315
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 294,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 300
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 295,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 285
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 296,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 525,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 3
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 285
                                          }],
                                   "opacity": 1,
                                   "properties": [
                                          {
                                                 "name": "number",
                                                 "type": "int",
                                                 "value": 3
                                          }],
                                   "type": "objectgroup",
                                   "visible": true,
                                   "x": 0,
                                   "y": 0
                            },
                            {
                                   "draworder": "topdown",
                                   "id": 4,
                                   "name": "black",
                                   "objects": [
                                          {
                                                 "height": 15,
                                                 "id": 21,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 300,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 22,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 23,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 24,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 25,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 26,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 27,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 56,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 57,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 58,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 59,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 60,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 61,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 62,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 63,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 0
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 64,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 65,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 66,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 67,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 68,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 69,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 300,
                                                 "y": 15
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 70,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 300,
                                                 "y": 30
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 71,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 300,
                                                 "y": 45
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 72,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 300,
                                                 "y": 60
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 73,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 300,
                                                 "y": 75
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 75,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 76,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 77,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 78,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 79,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 80,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 81,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 82,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 83,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 84,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 85,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 86,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 87,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 88,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 90,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 300,
                                                 "y": 90
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 108,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 105
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 109,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 120
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 110,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 135
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 111,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 150
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 112,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 105
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 113,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 120
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 114,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 135
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 115,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 150
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 116,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 117,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 118,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 285,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 119,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 270,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 120,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 121,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 75,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 122,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 60,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 123,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 45,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 124,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 30,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 125,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 15,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 126,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 15,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 127,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 0,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 128,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 0,
                                                 "y": 285
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 129,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 15,
                                                 "y": 300
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 130,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 15,
                                                 "y": 315
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 131,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 30,
                                                 "y": 330
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 132,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 45,
                                                 "y": 345
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 134,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 60,
                                                 "y": 345
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 135,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 75,
                                                 "y": 360
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 136,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 345
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 137,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 345
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 138,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 360
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 139,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 360
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 140,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 330
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 141,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 255,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 142,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 240,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 143,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 144,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 145,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 285
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 146,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 300
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 147,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 2
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 315
                                          }],
                                   "opacity": 1,
                                   "properties": [
                                          {
                                                 "name": "number",
                                                 "type": "int",
                                                 "value": 2
                                          }],
                                   "type": "objectgroup",
                                   "visible": false,
                                   "x": 0,
                                   "y": 0
                            },
                            {
                                   "draworder": "topdown",
                                   "id": 5,
                                   "name": "white",
                                   "objects": [
                                          {
                                                 "height": 15,
                                                 "id": 179,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 120
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 184,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 120
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 185,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 210,
                                                 "y": 150
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 186,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 150
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 187,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 150
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 188,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 150
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 189,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 190,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 225,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 191,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 120
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 192,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 135
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 193,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 165
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 194,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 195,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 196,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 197,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 198,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 199,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 200,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 195,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 201,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 297,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 30,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 298,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 45,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 299,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 60,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 300,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 75,
                                                 "y": 285
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 301,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 300
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 302,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 330
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 303,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 315
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 304,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 75,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 305,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 307,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 180
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 308,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 309,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 310,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 195
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 311,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 312,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 180,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 313,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 317,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 318,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 150,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 319,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 320,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 321,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 210
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 322,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 323,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 45,
                                                 "y": 225
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 324,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 60,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 325,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 75,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 326,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 270
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 327,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 105,
                                                 "y": 285
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 328,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 300
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 329,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 75,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 330,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 240
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 331,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 90,
                                                 "y": 255
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 336,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 285
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 337,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 120,
                                                 "y": 300
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 527,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 165,
                                                 "y": 300
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 528,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 285
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 529,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 300
                                          },
                                          {
                                                 "height": 15,
                                                 "id": 530,
                                                 "name": "",
                                                 "properties": [
                                                        {
                                                               "name": "number",
                                                               "type": "int",
                                                               "value": 1
                                                        }],
                                                 "rotation": 0,
                                                 "type": "",
                                                 "visible": true,
                                                 "width": 15,
                                                 "x": 135,
                                                 "y": 315
                                          }],
                                   "opacity": 1,
                                   "properties": [
                                          {
                                                 "name": "number",
                                                 "type": "int",
                                                 "value": 1
                                          }],
                                   "type": "objectgroup",
                                   "visible": true,
                                   "x": 0,
                                   "y": 0
                            }],
                     "tilewidth": 15,
                     "type": "map",
                     "version": "1.6",
                     "width": 21
              }
              map.layers.map((colorList) => colorList.objects.map((item) => {
                     var node = cc.instantiate(this.blockModal);
                     node.parent = this.SocksNode;
                     const hexColor = this.findColor(colorList.name)
                     node.name = `${item.properties[0].value}-${hexColor}`
                     node.setPosition(item.x, item.y);
                     // node.children[0].color = new cc.Color().fromHEX(hexColor);
                     node.children[item.properties[0].value].active = true;
              }))
              //choose number and color
              this.btnChoose.children.map((color, index) => {
                     color.on('touchend', function (event) {
                            console.log("chooseColor", index);
                            window.colorChoose = index + 1
                     });
              })
              //touch position
              this.node.on("touchmove", function (event) {
                     this.TouchPoint.x = event.getLocation().x - 640;
                     this.TouchPoint.y = event.getLocation().y - 360;
              }, this);
       },
       findColor(colorName) {
              for (const key in ColorDefault) {
                     if (key == colorName) {
                            return ColorDefault[key];
                     }
              }
       },
       update(dt) {
              this.btnChoose.children.map((color, index) => {
                     if (window.colorChoose == index + 1) {
                            color.opacity = 255;
                     } else {
                            color.opacity = 30
                     }
              })
       },
});
