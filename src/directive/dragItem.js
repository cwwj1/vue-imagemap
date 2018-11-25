import _ from '../assets/util.js';
import operations from '../assets/operations.js';

export default function dragItem(el, binding, vnod) {

    let self = vnod.context;
    // console.log('el.className', el.className);
    // if (el.className.indexOf('item-wrap') > -1) {
    //     el.addEventListener('mousedown', handleMouseDown, false);
    // }

    el.addEventListener('mousedown', handleMouseDown, false);

    function handleMouseDown (e) {
        console.log('dragItem mousedown');
        e && e.stopPropagation();

        let container = _.getOffset(el.parentNode);
        let preX = _.getPageX(e);
        let preY = _.getPageY(e);
        let topPer, leftPer;

        window.addEventListener('mousemove', handleMove, false)
        window.addEventListener('mouseup', handleMouseUp, false)

        function handleMove(e) {
            e && e.stopPropagation();

            let setting = self.setting;


            let moveX = _.getPageX(e) - preX;
            let moveY = _.getPageY(e) - preY;


            topPer = _.decimalPoint(Number(moveY / container.height) + Number(setting.topPer));
            leftPer = _.decimalPoint(Number(moveX / container.width) + Number(setting.leftPer));

            // console.log(Number(moveY / container.height) + Number(setting.topPer));

            // console.log('moveX', moveX, 'container.height', container.height, 'topPer', topPer);
           

            if (topPer < 0) {
                topPer = 0;
                moveY = -container.height * setting.topPer;
            }

            if (leftPer < 0) {
                leftPer = 0
                moveX = -container.width * setting.leftPer;
            }
      
              if (topPer + setting.heightPer > 1) {
                topPer = 1 - setting.heightPer;
                moveY = container.height * (topPer - setting.topPer)
            }
      
            if (leftPer + setting.widthPer > 1) {
                leftPer = 1 - setting.widthPer
                moveX = container.width * (leftPer - setting.leftPer);
            }
      
            el.style.transform = `translate(${moveX}px, ${moveY}px)`;

        }

        function handleMouseUp(e) {
            console.log('dragItem handleMouseUp');
            e && e.stopPropagation();

            if (topPer && leftPer) {
                self.changeInfo({
                    topPer,
                    leftPer,
                })
            }

            el.style.transform = 'translate(0, 0)';

            // console.log('结束移动的topPer', topPer, 'leftPer', leftPer);

            
            
            
            
            window.removeEventListener('mousemove', handleMove)
            window.removeEventListener('mouseup', handleMouseUp)
        }

    }

    return () => {
        el.removeEventListener("mousedown", handleMouseDown);
    };
    
}