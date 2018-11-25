import _ from '../assets/util.js';
import operations from '../assets/operations.js';

export default function changeSize(el, binding, vnod) {

    let self = vnod.context;

    el.addEventListener('mousedown', handleMouseDown, false);

    function handleMouseDown (e) {
        console.log('changeSize mousedown');

        let pointer = e.target.dataset.pointer;
        if (!pointer) {
            return;
        }
        e && e.stopPropagation();
    
        let zone = el.parentNode;

        let setting = self.setting;

        let container = _.getOffset(zone.parentNode);

        let itemInfo = {
            width: _.getOffset(zone).width || 0,
            height: _.getOffset(zone).height || 0,
            top: setting.topPer * container.height || 0,
            left: setting.leftPer * container.width || 0
        };

        let preX = _.getPageX(e);
        let preY = _.getPageY(e);
        let flag;

        window.addEventListener('mousemove', handleMove, false)
        window.addEventListener('mouseup', handleMouseUp, false)

        function handleMove(e) {
            e && e.stopPropagation();
            flag = true;

            let moveX = _.getPageX(e) - preX;
            let moveY = _.getPageY(e) - preY;

            preX = _.getPageX(e);
            preY = _.getPageY(e);

            // 处理选中不同拖拽点时的情况
            let styleInfo = operations[pointer](itemInfo, moveX, moveY);

            // 边界值处理
            itemInfo = operations.dealEdgeValue(itemInfo, styleInfo, container);
            

            Object.assign(zone.style, {
                top: `${itemInfo.top}px`,
                left: `${itemInfo.left}px`,
                width: `${itemInfo.width}px`,
                height: `${itemInfo.height}px`
            })

        }

        function handleMouseUp(e) {
            console.log('changeSize handleMouseUp');
            e && e.stopPropagation();
            if(flag) {;
                flag = false;

                // let perInfo = {
                //     topPer: _.decimalPoint(itemInfo.top / container.height),
                //     leftPer: _.decimalPoint(itemInfo.left / container.width),
                //     widthPer: _.decimalPoint(itemInfo.width / container.width),
                //     heightPer: _.decimalPoint(itemInfo.height / container.height)
                // }
    
                self.changeInfo({
                    topPer: _.decimalPoint(itemInfo.top / container.height),
                    leftPer: _.decimalPoint(itemInfo.left / container.width),
                    widthPer: _.decimalPoint(itemInfo.width / container.width),
                    heightPer: _.decimalPoint(itemInfo.height / container.height)
                })
    
                Object.assign(zone.style, {
                    top: `${itemInfo.top}px`,
                    left: `${itemInfo.left}px`,
                    width: `${itemInfo.width}px`,
                    height: `${itemInfo.height}px`
                })
            }
           
            
            
            window.removeEventListener('mousemove', handleMove)
            window.removeEventListener('mouseup', handleMouseUp)
        }

    }

    return () => {
        el.removeEventListener("mousedown", handleMouseDown);
    };
    
}