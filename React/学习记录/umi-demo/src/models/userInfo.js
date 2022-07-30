import * as user from '../util/userInfo';

export default {
  state: null,
  reducers: {
    setUserInfo(state, { payload }) {
      if (!payload) {
        user.removeUserInfoToLocalStorage();
        return (state = null);
      } else {
        user.setUserInfoToLocalStorage(payload);
        return (state = payload);
      }
    },
    removeUserInfo(state, { payload }) {
      user.removeUserInfoToLocalStorage();
      return (state = false);
    },
    getUserInfo(state) {
      return (state = user.getUserInfoToLocalStorage());
    },
  },
  effects: {
    *asyncGetUserInfo({ payload }, { call, put }) {
      // 用户登录操作时运行 传递用户账户信息，验证用户
      const result = yield call(checking, payload);
      yield put({
        type: 'setUserInfo',
        payload: result ? payload : false,
      });
    },
    *asyncCheckingUserInfo(action, { call, put }) {
      // app启动时运行一次 传递本地用户信息，验证用户
      let userInfo = user.getUserInfoToLocalStorage();
      const result = yield call(checking, userInfo);
      if (result) {
        yield put({
          type: 'setUserInfo',
          payload: userInfo,
        });
        return true;
      } else {
        yield put({
          type: 'removeUserInfo',
          payload: false
        });
        return false;
      }
    },
  },
};

function checking(user = {}) {
  return new Promise((resolve) => {
    ((user) => {
      setTimeout(() => {
        if (user.id === 'nihao' && user.pwd === "123456") {
          resolve(true);
        }
        resolve(false);
      }, 200);
    })(user)
  })
}
