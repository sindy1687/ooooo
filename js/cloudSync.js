// CloudSync: Google Sheets (Apps Script) based cloud save/load
// Fill in your deployed GAS Web App URL below
(function(){
  const WEB_APP_URL = window.GAS_WEB_APP_URL || 'PUT_YOUR_GAS_WEB_APP_URL_HERE';

  // 夾帶「所有」 localStorage 資料（不再使用白名單）

  function collectData() {
    const all = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      all[k] = localStorage.getItem(k);
    }
    return all;
  }

  async function saveAll(userId, passkey) {
    if (!WEB_APP_URL || WEB_APP_URL.includes('PUT_YOUR_GAS_WEB_APP_URL_HERE')) {
      throw new Error('尚未設定 GAS Web App URL');
    }
    const payload = JSON.stringify({ localStorage: collectData(), ts: Date.now() });
    // NOTE: 不加自訂 JSON header，維持簡單請求，避免 CORS preflight
    const res = await fetch(WEB_APP_URL, {
      method: 'POST',
      body: JSON.stringify({ action: 'save', userId, passkey, data: payload })
    });
    return res.json();
  }

  async function loadAll(userId, passkey, mergeMode = 'replace') {
    if (!WEB_APP_URL || WEB_APP_URL.includes('PUT_YOUR_GAS_WEB_APP_URL_HERE')) {
      throw new Error('尚未設定 GAS Web App URL');
    }
    // 優先嘗試 JSONP，避開 CORS 限制（需要 GAS 端支援 doGet JSONP）
    try {
      const json = await jsonpLoad({ userId, passkey });
      return applyLoaded(json, mergeMode);
    } catch (_) {
      // 後備方案：嘗試簡單 POST（若 GAS 部署環境允許 CORS）
      const res = await fetch(WEB_APP_URL, {
        method: 'POST',
        body: JSON.stringify({ action: 'load', userId, passkey })
      });
      const json = await res.json();
      return applyLoaded(json, mergeMode);
    }
  }

  function applyLoaded(json, mergeMode) {
    if (!json.ok) throw new Error(json.error || 'load_failed');
    if (!json.data) return { ok: true, empty: true };
    const parsed = JSON.parse(json.data);
    const ls = parsed.localStorage || {};
    if (mergeMode === 'replace') {
      // 可選：清理本地不存在於雲端的鍵（目前僅覆蓋，不清理）
      Object.keys(ls).forEach(k => localStorage.setItem(k, ls[k]));
    } else {
      // 合併：逐鍵覆蓋現有值
      Object.keys(ls).forEach(k => localStorage.setItem(k, ls[k]));
    }
    return { ok: true, updatedAt: json.updatedAt, checksum: json.checksum };
  }

  function jsonpLoad({ userId, passkey, timeoutMs = 10000 }) {
    return new Promise((resolve, reject) => {
      const cbName = '__cloudsync_cb_' + Math.random().toString(36).slice(2);
      const url = new URL(WEB_APP_URL);
      url.searchParams.set('action', 'load');
      url.searchParams.set('userId', userId);
      if (passkey) url.searchParams.set('passkey', passkey);
      url.searchParams.set('callback', cbName);

      const timer = setTimeout(() => {
        cleanup();
        reject(new Error('jsonp_timeout'));
      }, timeoutMs);

      function cleanup() {
        clearTimeout(timer);
        try { delete window[cbName]; } catch(_){}
        if (script && script.parentNode) script.parentNode.removeChild(script);
      }

      window[cbName] = (data) => { cleanup(); resolve(data); };

      const script = document.createElement('script');
      script.src = url.toString();
      script.onerror = () => { cleanup(); reject(new Error('jsonp_error')); };
      document.head.appendChild(script);
    });
  }

  window.CloudSync = { saveAll, loadAll };
})();
