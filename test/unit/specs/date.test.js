// const obj = require('../../../src/modules/date/index');
import date from '../../../src/modules/date/index'
test('formatTime 测试能否返回格式化后的时间',() => {
    expect(date.formatTime(1586934316925)).toBe('2020-4-15 15:5:16');
})

