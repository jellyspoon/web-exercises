function incrementCounter (element, value) {
  console.log(`Adding ${value} to "${element.id}" element`)
  var currenttValue = Number(element.innerText)
  element.innerText = currenttValue + value
}