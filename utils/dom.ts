export function unhide(el: Element | null | undefined) {
  if (!el) return;
  (el as HTMLElement).classList.remove("hide");
}

export function unhideAll(page_num: number, queries: string[]) {
  queries.forEach((query) => {
    const query_els = document.querySelectorAll(`.page${page_num} ${query}`);
    if (query_els) {
      query_els.forEach((el) => {
        unhide(el);
      });
    }
  });
}

export async function sendViewPageTracking(page_num: number) {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token") || "";
    // Mock tracking
    console.log(`[Tracking] Page view: ${page_num}, Token: ${token || 'none'}`);
  } catch (e) {
    // 静默失败，保持与 2024 行为一致
    console.warn("sendViewPageTracking failed", e);
  }
}

