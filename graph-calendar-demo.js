// 示例：使用 Microsoft Graph API 获取日历事件
const axios = require('axios');

async function getCalendarEvents(accessToken, userId) {
  const url = `https://graph.microsoft.com/v1.0/users/${userId}/calendarView`;
  const response = await axios.get(url, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    },
    params: {
      startDateTime: new Date().toISOString(),
      endDateTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    }
  });
  return response.data.value;
}

// 说明：此代码用于学习 Microsoft Graph API 日历功能
console.log('This project demonstrates M365 calendar integration.');
