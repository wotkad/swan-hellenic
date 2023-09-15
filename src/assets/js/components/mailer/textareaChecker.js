export default function textareaChecker() {
  let textarea = $('textarea');
  textarea.on('input', resize);
  function resize(_e) {
    let event = _e || event || window.event;
    let getElement = event.target || event.srcElement;
        getElement.style.height = "auto";
        getElement.style.height = Math.max(getElement.scrollHeight, getElement.offsetHeight)+"px"
  }
}
textareaChecker();