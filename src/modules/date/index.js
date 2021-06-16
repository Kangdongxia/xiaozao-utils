/*
 @file date 格式化
 @author:kangdongxia
 @createdBy:@2021.06.15
*/
export default {
    /*
    将时间戳格式化成标准时间
    @param time {number} 时间戳
    @param ft {string} 标准时间的格式
    @return {String}
    */
    formatTime: function(time, fmt="yyyy-MM-dd hh:mm:ss"){
        let ret;
        let date = new Date(time);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let currentDate = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let seconds = date.getSeconds();
        let info = year + '-' + month + '-' + currentDate + ' ' + hour + ':' + minute + ':' + seconds;
        return info;   
    }
}