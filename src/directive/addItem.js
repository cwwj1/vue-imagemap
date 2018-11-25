import _ from '../assets/util.js';
import operations from '../assets/operations.js';

export default function addItem(el, binding, vnod) {
    // console.log("el", el);

    let self = vnod.context;

    // console.log('self', self);

    el.addEventListener("mousedown", handleMouseDown);

    function handleMouseDown(e) {
        e && e.preventDefault();

        let itemInfo = {
            top: _.getDistanceY(e, el), // 鼠标点击处 相对于 目标节点（容器的坐标值）
            left: _.getDistanceX(e, el),
            width: 0,
            height: 0
        };

        // console.log('itemInfo', itemInfo);
        let container = _.getOffset(el);  // 容器的宽高

        let setting = {
            topPer: _.decimalPoint(itemInfo.top / container.height),
            leftPer: _.decimalPoint(itemInfo.left / container.width),
            widthPer: 0,
            heightPer: 0
        };

        // console.log('setting', setting);

        let preX = _.getPageX(e);
        let preY = _.getPageY(e);

        // console.log('preX:', preX, 'preY:', preY);

        // console.log('self:', self);

        self.addItem(setting);

        el.addEventListener("mousemove", handleMouseMove);
        el.addEventListener("mouseup", handleMouseUp);

        function handleMouseMove(e) {
            e && e.preventDefault();

            let moveX = _.getPageX(e) - preX;
            let moveY = _.getPageY(e) - preY;
            preX = _.getPageX(e);
            preY = _.getPageY(e);

            // 先不考虑移动方向，仅考虑右下方拖拽点
            let minLimit = 0;
            let styleInfo = operations.dealBR(itemInfo, moveX, moveY, minLimit);

            // 边界值处理
            itemInfo = operations.dealEdgeValue(itemInfo, styleInfo, container);

            // console.log(el.lastElementChild.style);

            // let top = itemInfo.top + 'px';
            // let left = itemInfo.left + 'px';
            // let width = itemInfo.width + 'px';
            // let height = itemInfo.height + 'px';
            // let cssText = 'top:' + top + '; left:' + left + '; width:' + width + '; height:' + height;

            // el.lastElementChild.style.cssText = cssText;

        Object.assign(el.lastElementChild.style, {
            top: `${itemInfo.top}px`,
            left: `${itemInfo.left}px`,
            width: `${itemInfo.width}px`,
            height: `${itemInfo.height}px`
        })
            
        }

        function handleMouseUp(e) {
            let perInfo = {
                topPer: _.decimalPoint(itemInfo.top / container.height),
                leftPer: _.decimalPoint(itemInfo.left / container.width),
                widthPer: _.decimalPoint(itemInfo.width / container.width),
                heightPer: _.decimalPoint(itemInfo.height / container.height)
            };

            self.changeItem(perInfo);
            // 创建热区后默认弹出数据设置框
            // self.setItem();

            el.removeEventListener("mousemove", handleMouseMove);
            el.removeEventListener("mouseup", handleMouseUp);
            
        }
    }

    return () => {
        el.removeEventListener("mousedown", handleMouseDown);
    };
}