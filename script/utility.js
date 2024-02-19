

function getElementConvertValue(elementId){
  const element = document.getElementById(elementId).innerText;
  const result = parseInt(element);
  return result
}

function setElementInnerByValue(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}

