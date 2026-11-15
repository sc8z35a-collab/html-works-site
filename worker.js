// ルート "/" を index.html（ハブ）へ内部で振り向けるだけの最小Worker。
// それ以外は静的アセットをそのまま返す。
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      url.pathname = "/index.html";
      return env.ASSETS.fetch(new Request(url, request));
    }
    return env.ASSETS.fetch(request);
  },
};
