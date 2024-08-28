/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
async function scheduleTimer({
    providerRes,
    parserRes
  } = {}) {
    return {
        totalWeek: 20, // 总周数：[1, 30]之间的整数
        startSemester: '', // 开学时间：时间戳，13位长度字符串，推荐用代码生成
        startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
        showWeekend: true, // 是否显示周末
        forenoon: 5, // 上午课程节数：[1, 10]之间的整数
        afternoon: 5, // 下午课程节数：[0, 10]之间的整数
        night: 2, // 晚间课程节数：[0, 10]之间的整数
        sections: [
            { section: 1, startTime: "08:40", endTime: "09:20" },
            { section: 2, startTime: "09:25", endTime: "10:05" },
            { section: 3, startTime: "10:25", endTime: "11:05" },
            { section: 4, startTime: "11:10", endTime: "11:50" },
            { section: 5, startTime: "11:50", endTime: "13:30" },
            { section: 6, startTime: "13:30", endTime: "14:10" },
            { section: 7, startTime: "14:15", endTime: "14:55" },
            { section: 8, startTime: "15:15", endTime: "15:55" },
            { section: 9, startTime: "16:00", endTime: "16:40" },
            { section: 10, startTime: "16:40", endTime: "18:30" },
            { section: 11, startTime: "18:30", endTime: "19:10" },
            { section: 12, startTime: "19:15", endTime: "19:55" },
        ], // 课程时间表，注意：总长度要和上边配置的节数加和对齐
    }
  }