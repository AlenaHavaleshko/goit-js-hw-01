function getElementWidth (content, padding, border) {
 const numericalContent = Number.parseFloat(content);
 const numericalPadding = Number.parseFloat(padding);
 const numericalBorder = Number.parseFloat(border);
 
 const commonWidth = numericalContent + (numericalPadding * 2) + (numericalBorder * 2);
 return commonWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200