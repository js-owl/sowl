import { generate } from "critical";
// const critical = require("critical");
// плагин видит какие стили подключаются в index.html
critical.generate({
  base: "./",
  src: "index.html",
  css: ["_css/style.css"],
  target: {
    css: "critical.css",
    uncritical: "uncritical.css",
  },
  // размер первоначального экрана
  width: 480,
  height: 430,
  // стили, к-рые должны попасть в critical
  include: [".footer"],
  // стили, к-рые НЕ должны попасть в critical
  ignore: { rule: [/hljs/] },
});
