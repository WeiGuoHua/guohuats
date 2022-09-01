/**
 * 封装的方法以及用法
 * 打开数据库
 */
const openDB = (dbName: string, storeName: any, version = 1) => {
  return new Promise((resolve, reject) => {
    let indexedDB = window.indexedDB;
    let db;
    const request = indexedDB.open(dbName, version);
    request.onsuccess = function (event: any) {
      db = event.target.result; // 数据库对象
      resolve(db);
    };

    request.onerror = function (event) {
      reject(event);
    };

    request.onupgradeneeded = function (event: any) {
      // 数据库创建或升级的时候会触发
      console.log("onupgradeneeded");
      db = event.target.result; // 数据库对象
      let objectStore;
      if (!db.objectStoreNames.contains(storeName)) {
        objectStore = db.createObjectStore(storeName, { keyPath: "id" }); // 创建表
        // objectStore.createIndex('name', 'name', { unique: true }) // 创建索引 可以让你搜索任意字段
      }
    };
  });
};

/**
 * 新增数据
 */
const addData = (db: any, storeName: any, data: any) => {
  return new Promise((resolve, reject) => {
    let request = db
      .transaction([storeName], "readwrite") // 事务对象 指定表格名称和操作模式（"只读"或"读写"）
      .objectStore(storeName) // 仓库对象
      .add(data);

    request.onsuccess = function (event: any) {
      resolve(event);
    };

    request.onerror = function (event: any) {
      throw new Error(event.target.error);
    };
  });
};

/**
 * 通过主键读取数据
 */
const getDataByKey = (db: any, storeName: any, key: any) => {
  return new Promise((resolve, reject) => {
    let transaction = db.transaction([storeName]); // 事务
    let objectStore = transaction.objectStore(storeName); // 仓库对象
    let request = objectStore.get(key);

    request.onerror = function (event: any) {
      reject(event);
    };

    request.onsuccess = function (event: any) {
      resolve(request.result);
    };
  });
};

/**
 * 通过游标读取数据
 */
const cursorGetData = (db: any, storeName: any) => {
  let list: any[] = [];
  let store = db
    .transaction(storeName, "readwrite") // 事务
    .objectStore(storeName); // 仓库对象
  let request = store.openCursor(); // 指针对象
  return new Promise((resolve, reject) => {
    request.onsuccess = function (e: any) {
      let cursor = e.target.result;
      if (cursor) {
        // 必须要检查
        list.push(cursor.value);
        cursor.continue(); // 遍历了存储对象中的所有内容
      } else {
        resolve(list);
      }
    };
    request.onerror = function (e: any) {
      reject(e);
    };
  });
};

/**
 * 通过索引读取数据
 */
const getDataByIndex = (
  db: any,
  storeName: any,
  indexName: any,
  indexValue: any
) => {
  let store = db.transaction(storeName, "readwrite").objectStore(storeName);
  let request = store.index(indexName).get(indexValue);
  return new Promise((resolve, reject) => {
    request.onerror = function (e: any) {
      reject(e);
    };
    request.onsuccess = function (e: any) {
      resolve(e.target.result);
    };
  });
};

/**
 * 通过索引和游标查询记录
 */
const cursorGetDataByIndex = (
  db: any,
  storeName: any,
  indexName: any,
  indexValue: any
) => {
  let list: any[] = [];
  let store = db.transaction(storeName, "readwrite").objectStore(storeName); // 仓库对象
  let request = store
    .index(indexName) // 索引对象
    .openCursor(IDBKeyRange.only(indexValue)); // 指针对象
  return new Promise((resolve, reject) => {
    request.onsuccess = function (e: any) {
      let cursor = e.target.result;
      if (cursor) {
        list.push(cursor.value);
        cursor.continue(); // 遍历了存储对象中的所有内容
      } else {
        resolve(list);
      }
    };
    request.onerror = function (ev: any) {
      reject(ev);
    };
  });
};

/**
 * 更新数据
 */
const updateDB = (db: any, storeName: any, data: any) => {
  let request = db
    .transaction([storeName], "readwrite") // 事务对象
    .objectStore(storeName) // 仓库对象
    .put(data);

  return new Promise((resolve, reject) => {
    request.onsuccess = function (ev: any) {
      resolve(ev);
    };

    request.onerror = function (ev: any) {
      resolve(ev);
    };
  });
};

/**
 * 删除数据
 */
const deleteDB = (db: any, storeName: any, id: any) => {
  let request = db
    .transaction([storeName], "readwrite")
    .objectStore(storeName)
    .delete(id);

  return new Promise((resolve, reject) => {
    request.onsuccess = function (ev: any) {
      resolve(ev);
    };

    request.onerror = function (ev: any) {
      resolve(ev);
    };
  });
};

/**
 * 删除数据库
 */
const deleteDBAll = (dbName: any) => {
  console.log(dbName);
  let deleteRequest = window.indexedDB.deleteDatabase(dbName);
  return new Promise((resolve, reject) => {
    deleteRequest.onerror = function (event) {
      console.log("删除失败");
    };
    deleteRequest.onsuccess = function (event) {
      console.log("删除成功");
    };
  });
};

/**
 * 关闭数据库
 */
const closeDB = (db: any) => {
  db.close();
  console.log("数据库已关闭");
};

export  {
  openDB,
  addData,
  getDataByKey,
  cursorGetData,
  getDataByIndex,
  cursorGetDataByIndex,
  updateDB,
  deleteDB,
  deleteDBAll,
  closeDB
};
