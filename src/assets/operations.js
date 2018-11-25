export default {

    /**
     * 改变热区大小时的边界情况处理
     * @param {Object} itemInfo   实际使用的热区模块数据
     * @param {Object} styleInfo  操作中的热区模块数据
     * @param {Object} container  图片区域的宽高数据
     */
    dealEdgeValue(itemInfo, styleInfo, container) {
        if(styleInfo.hasOwnProperty('left') && styleInfo.left < 0) {
            styleInfo.left = 0;
            styleInfo.width = itemInfo.width + itemInfo.left;
        }
        if(styleInfo.hasOwnProperty('top') && styleInfo.top < 0) {
            styleInfo.top = 0;
            styleInfo.height = itemInfo.height + itemInfo.top;
        }
        if(!styleInfo.hasOwnProperty('left') && styleInfo.hasOwnProperty('width')) {
            if(itemInfo.left + styleInfo.width > container.width) {
                styleInfo.width = container.width - itemInfo.left;
            }
        }
        if(!styleInfo.hasOwnProperty('top') && styleInfo.hasOwnProperty('height')) {
            if(itemInfo.top + styleInfo.height > container.height) {
                styleInfo.height = container.height - itemInfo.top;
            }
        }
        return Object.assign(itemInfo, styleInfo);
    },
    

    /**
     * 处理不同的拖拽点，大写字母表示含义：T-top，L-left，C-center，R-right，B-bottom
     * @param  {Object} itemInfo
     * @param  {Number} moveX
     * @param  {Number} moveY
     * @return {Object} 对过程数据进行处理
     */
    dealTL(itemInfo, moveX, moveY, minLimit = 48) {
        let styleInfo = {};
        let width = itemInfo.width - moveX;
        let height = itemInfo.height - moveY;
        if(width >= Math.min(minLimit, itemInfo.width)) {
            Object.assign(styleInfo, {
                width,
                left: itemInfo.left + moveX
            });
        }
        if(height >= Math.min(minLimit, itemInfo.height)) {
            Object.assign(styleInfo, {
                height,
                top: itemInfo.top + moveY
            });
        }
        return styleInfo;
    },
    dealTC(itemInfo, moveX, moveY, minLimit = 48) {
        let styleInfo = {};
        let height = itemInfo.height - moveY;
        if(height >= Math.min(minLimit, itemInfo.height)) {
            styleInfo = {
                height,
                top: itemInfo.top + moveY
            };
        }
        return styleInfo;
    },
    dealTR(itemInfo, moveX, moveY, minLimit = 48) {
        let styleInfo = {};
        let width = itemInfo.width + moveX;
        let height = itemInfo.height - moveY;
        if(width >= Math.min(minLimit, itemInfo.width)) {
            Object.assign(styleInfo, {
                width
            });
        }
        if(height >= Math.min(minLimit, itemInfo.height)) {
            Object.assign(styleInfo, {
                height,
                top: itemInfo.top + moveY
            });
        }
        return styleInfo;
    },
    dealCL(itemInfo, moveX, moveY, minLimit = 48) {
        let styleInfo = {};
        let width = itemInfo.width - moveX;
        if(width >= Math.min(minLimit, itemInfo.width)) {
            Object.assign(styleInfo, {
                width,
                left: itemInfo.left + moveX
            });
        }
        return styleInfo;
    },
    dealCR(itemInfo, moveX, moveY, minLimit = 48) {
        let styleInfo = {};
        let width = itemInfo.width + moveX;
        if(width >= Math.min(minLimit, itemInfo.width)) {
            Object.assign(styleInfo, {
                width
            });
        }
        return styleInfo;
    },
    dealBL(itemInfo, moveX, moveY, minLimit = 48) {
        let styleInfo = {};
        let width = itemInfo.width - moveX;
        let height = itemInfo.height + moveY;
        if(width >= Math.min(minLimit, itemInfo.width)) {
            Object.assign(styleInfo, {
                width,
                left: itemInfo.left + moveX
            });
        }
        if(height >= Math.min(minLimit, itemInfo.height)) {
            Object.assign(styleInfo, {
                height
            });
        }
        return styleInfo;
    },
    dealBC(itemInfo, moveX, moveY, minLimit = 48) {
        let styleInfo = {};
        let height = itemInfo.height + moveY;
        if(height >= Math.min(minLimit, itemInfo.height)) {
            Object.assign(styleInfo, {
                height
            });
        }
        return styleInfo;
    },
    dealBR(itemInfo, moveX, moveY, minLimit = 48) {
        let styleInfo = {};
        let width = itemInfo.width + moveX;
        let height = itemInfo.height + moveY;
        if(width >= Math.min(minLimit, itemInfo.width)) {
            Object.assign(styleInfo, {
                width
            });
        }
        if(height >= Math.min(minLimit, itemInfo.height)) {
            Object.assign(styleInfo, {
                height
            });
        }
        return styleInfo;
    }
    

}