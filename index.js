var deliLine = [ ]

function takeANumber(line,number) {
  line.push(number)
                                                                          //add new name to the end of the array
  return `Welcome, you are number ${line.length} in line.`;              // return text output
}

function nowServing (line) {
  if (line.length === 0) {                                                        //check to see if anyone is in line
    return `There is nobody waiting to be served!`;                               // return text output if line is empty
  } else {
    var serving = line[0];                                                        //name variable at the front of the line
    line.shift()                                                                  //remove the name at the front of the line
     return `Currently serving ${serving}.`;                                      // return text output of the name removed
  }
  
}

function currentLine(line) {
  if (line.length === 0) {                                                        //check if the line is empty
    return `The line is currently empty.`
  } else {
    var lineList = `The line is currently: `                                      //if not empty, begin building the output string
    let i = 0                                                                     //declare iteration variable
    while (i+1 < line.length) {                                                   //add names to the output string with position
      var string = `${i+1}. ${line[i]}, `
      lineList = lineList + string
      i += 1;
    } 
    string = `${i+1}. ${line[i]}`                                                 //add final name, without comma.
    lineList = lineList + string
 return lineList;                                                                 // return the final output string.
    }
}