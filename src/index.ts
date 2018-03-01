console.log('parent');

declare var __webpack_require__: any;
interface Window {
  __parent_webpack_require__: any;
}

window.__parent_webpack_require__ = __webpack_require__;

async function ensureParentRequireIsComplete() {
  await import('./ensureParentRequireIsComplete');
}

ensureParentRequireIsComplete();
