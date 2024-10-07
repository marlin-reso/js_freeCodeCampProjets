const character = "#";
const count = 8;
const row =[];
for(let i=1; i<=count;i++){

    row.push(character.repeat(i+1));
}

function padRow(rowNumber, rowCount){
    return " ".repeat(rowCount-rowNumber) + character.repeat(2*rowNumber - 1) + " ".repeat(rowCount-rowNumber);
}
console.log(padRow(9,12));

   
