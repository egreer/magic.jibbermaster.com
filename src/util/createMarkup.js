export const createMarkup = (text) => {
  if (!text) {
    return text;
  }
  text = text.replace(/\r\n/g, "<br />").replace(/[\r\n]/g, "<br />");
  text = text.replace(/{CHAOS}/g, '<i class="ms ms-chaos"></i>');
  text = text.replace(/CHAOS/g, '<i class="ms ms-chaos"></i>');
  text = text.replace(/{W}/g, '<i class="ms ms-w ms-cost"></i>');
  text = text.replace(/{U}/g, '<i class="ms ms-u ms-cost"></i>');
  text = text.replace(/{B}/g, '<i class="ms ms-b ms-cost"></i>');
  text = text.replace(/{R}/g, '<i class="ms ms-r ms-cost"></i>');
  text = text.replace(/{G}/g, '<i class="ms ms-g ms-cost"></i>');
  text = text.replace(/{C}/g, '<i class="ms ms-c ms-cost"></i>');
  text = text.replace(/\{1\}/g, '<i class="ms ms-1 ms-cost"></i>');
  text = text.replace(/\{2\}/g, '<i class="ms ms-2 ms-cost"></i>');
  text = text.replace(/\{3\}/g, '<i class="ms ms-3 ms-cost"></i>');
  text = text.replace(/\{T\}/g, '<i class="ms ms-tap"></i>');
  text = text.replace(/{X}/g, '<i class="ms ms-x ms-cost"></i>');
  text = text.replace(/X/g, '<i class="ms ms-x"></i>');
  text = text.replace(/\((.*)\)/g, "<small><em>($1)</em></small>");
  return text;
};
