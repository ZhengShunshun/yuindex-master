/**
 * 默认配置
 * @author xinyang
 */
module.exports = {
  redisConfig: {
    host: "localhost",
    port: "6379",

    db: 2,
  },
  // MySQL 配置
  dbConfig: {
    database: "webIndex",
    username: "root",
    password: "root",
    host: "localhost",
    port: 3306,
  },
  // 百度翻译配置，自行申请免费版即可（https://fanyi-api.baidu.com/）
  baiduFanYiConfig: {
    appid: "20230825001793421",
    key: "8BOJUnmwQSIG0j3r3ZrN",
  },
};
