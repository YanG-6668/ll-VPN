export default function is_touch_device() {
    if (!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch)) {
        return document.body.classList.add('no-touch');
    }
    // return 'ontouchstart' in window || navigator.maxTouchPoints;
};
