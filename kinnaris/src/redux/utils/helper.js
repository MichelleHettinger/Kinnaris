import ElementsArray from './elements';

export const elementPicker = (userInput) => {
  //Find the right elements, then setState for found elements.
  const listElements = [];
  const listElements2 = [];
  const listElements3 = [];

  // Loop through every typed letter
  for (let i = 0; i < userInput.length; i++) {
    if (i === 0) {
      //Loop through all elements
      for (let j = 0; j < ElementsArray.length; j++) {
        //If the letters at position i match, push that element to the array
        if (userInput.charAt(i) === ElementsArray[j].name.charAt(i).toLowerCase() || userInput.charAt(i) === ElementsArray[j].acronym.charAt(i).toLowerCase()) {
          listElements.push(ElementsArray[j]);
        }
      }
    } else if (i === 1) {
      //Loop through the first list of elements
      for (let j = 0; j < listElements.length; j++) {
        //If the letters at position i match, push that element to a new array
        if (userInput.charAt(i) === listElements[j].name.charAt(i).toLowerCase() || userInput.charAt(i) === listElements[j].acronym.charAt(i).toLowerCase()) {
          listElements2.push(listElements[j]);
        }
      }
    } else if (i === 2) {
      //Loop through the second list of elements
      for (let j = 0; j < listElements2.length; j++) {
        //If the letters at position i match, push that element to a new array
        if (userInput.charAt(i) === listElements2[j].name.charAt(i).toLowerCase() || userInput.charAt(i) === listElements2[j].acronym.charAt(i).toLowerCase()) {
          listElements3.push(listElements2[j]);
        }
      }
    }
  }

  //Depending on how many letters were typed in, display the appropriate array
  if (userInput.length === 0) {
    return listElements;
  } else if (userInput.length === 1) {
    //console.log(listElements);
    return listElements;
  } else if (userInput.length === 2) {
    //console.log(listElements2);
    if (listElements2.length === 0) {
      return listElements;
    }

    return listElements2;
  } else if (userInput.length === 3) {
    //console.log(listElements3);

    if (listElements3.length === 0) {
      return listElements2;
    }

    return listElements3;
  } else if (userInput.length > 3) {
    if (listElements3.length > 0) {
      return listElements3;
    } else if (listElements2.length > 0) {
      return listElements2;
    } else if (listElements2.length > 0) {
      return listElements;
    }
  }

  return true;
};

export const adjustElement = (element, pm) => {
  switch (pm) {
    case '+': {
      return element.multiplier + 1;
    }

    case '-': {
      return element.multiplier - 1;
    }

    default:
      return element;
  }
};
