let _ = {};

/**
 * 简单对象合并
 * 注意：这里只能合并第一层子属性，第二层没办法
 * @param  {Object} o1
 * @param  {Object} o2
 * @param  {Boolean} override
 * @return {Object} 返回合并后的对象
 */
_.extend = (o1, o2, override = false) => {
    for(let i in o2){
        if(o1[i] === undefined || o1[i] === null || override){
            if(o2[i] !== undefined){
                o1[i] = o2[i];
            }
        }
    }
    return o1;
};

/**
 * 判断链接是否符合要求
 * @param {String} url
 * @return {Boolean} 返回判断结果
 */
_.checkUrl = (url, patternStr) => {
    let pattern = new RegExp(patternStr ||
        '^((.*?:)?\\/\\/)' +                                    // 协议（有无协议皆可，不对协议类型做强校验）
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' +   // 域名
        '((\\d{1,3}\\.){3}\\d{1,3}))' +                         // IP 地址
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +                     // 端口和通道
        '(\\?[\\d\\D]*)?' +                                     // 查询参数(允许一切字符)
        '(\\#[-a-z\\d_]*)?$', 'ig');                            // 锚点
    return pattern.test(url);
};

/**
 * 获取节点的宽高
 * @param  {Object} elem  传入节点
 * @return {Object}       节点的宽高
 */
_.getOffset = function(elem = {}) {
    return {
        width: elem.clientWidth || 0,
        height: elem.clientHeight || 0
    };
}

/**
 * 获取兼容过的 pageX
 * @param  {Object} e
 * @return {Number}
 */
_.getPageX = (e = {}) => {
    // return e.hasOwnProperty('pageX') ? e.pageX : e.touches[0].pageX;
    return e.pageX;
};

/**
 * 获取兼容过的 pageY
 * @param  {Object} e
 * @return {Number}
 */
_.getPageY = (e = {}) => {
    // console.log('e.pageY', e.pageY);
    // return e.hasOwnProperty('pageY') ? e.pageY : e.touches[0].pageY;
    return e.pageY;
};

/**
 * 获取鼠标点击处相对于目标节点的横坐标值
 * @param  {Object} e           鼠标点击事件
 * @param  {Object} container   目标节点
 * @return {Number}             鼠标点击处距离目标节点起点的横坐标
 */
_.getDistanceX = (e = {}, container = {}) => {
    return _.getPageX(e) - (container.getBoundingClientRect().left + window.pageXOffset);
};

/**
 * 获取鼠标点击处相对于目标节点的纵坐标值
 * @param  {Object} e           鼠标点击事件
 * @param  {Object} container   目标节点
 * @return {Number}             鼠标点击处距离目标节点起点的纵坐标
 */
_.getDistanceY = (e = {}, container = {}) => {
    return _.getPageY(e) - (container.getBoundingClientRect().top + window.pageYOffset);
};

/**
 * 获取 10 的常量值次方的幂结果
 * @return {Number}
 */
_.getMultiple = (decimalPlaces = 4) => {
    return Math.pow(10, decimalPlaces);
};

/**
 * 限制小数位数
 * @param  {Number} num  传入的待处理数字
 * @return {Number}      处理后返回的数字
 */
_.decimalPoint = (val = 0) => {
    return Math.round(val * _.getMultiple()) / _.getMultiple() || 0;
};

export default _;