import Mock from "mockjs";
export default Mock.mock("/addUser", "post", {
  success: true,
  message: "@cparagraph",
  // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
  "user": {
    "id": "@id",
    "name": "@cname",
    "age|1-100": 100,
    "birthday": "@date('yyyy-MM-dd')",
    "sex|1": ["男", "女"],
  }
});

Mock.mock("/serachUser", "post", {
  success: true,
  message: "成功",
  // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
  "list|1-5": [
    {
      id: "@id",
      name: "@cname",
      "age|1-100": 100,
      birthday: "@date('yyyy-MM-dd')",
      "sex|1": ["男", "女"]
    }
  ]
});
Mock.mock("/deleteUser", "post", {
  success: true,
  message: "成功",
  // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
  code:200
});
Mock.mock("/getUserDetail", "get", {
  success: true,
  message: "成功",
  // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
  code: 200,
  user: {
    id: "@id",
    name: "@cname",
    "age|1-100": 100,
    birthday: "@date('yyyy-MM-dd')",
    "sex|1": ["男", "女"]
  }
});


