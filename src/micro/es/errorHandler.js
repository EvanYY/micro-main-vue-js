/**
 * @author evan_yangyang
 * @since 2020-7-24
 */
export { addErrorHandler, removeErrorHandler } from 'single-spa'
export function addGlobalUncaughtErrorHandler (errorHandler) {
  window.addEventListener('error', errorHandler)
  window.addEventListener('unhandledrejection', errorHandler)
}
export function removeGlobalUncaughtErrorHandler (errorHandler) {
  window.removeEventListener('error', errorHandler)
  window.removeEventListener('unhandledrejection', errorHandler)
}
