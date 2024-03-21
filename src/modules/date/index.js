import { isNil } from 'lodash'
import { format, multiply, bignumber } from 'mathjs'
/*
    将时间戳格式化成标准时间
    @param time {number} 时间戳
    @param ft {string} 标准时间的格式
    @return {String}
 */
export const formatTime = function (time) {
    let date = new Date(time);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let currentDate = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let info = year + '-' + month + '-' + currentDate + ' ' + hour + ':' + minute + ':' + seconds;
    const val = [1, 2, 3].includes(1)
    return info + val;   
}

export const formatPriceFromYuanToFen = (fenPrice = 0) => {
    const yuanPrice = format(multiply(bignumber(fenPrice), 100), {
      notation: 'fixed'
    })
    return Number.parseInt(yuanPrice, 10)
}

//判断是否为有效内容，不为 undefined, null 或空
export const isValidContent = (content) => {
    if (isNil(content)) return false
    if (content === '') return false
    return true
}