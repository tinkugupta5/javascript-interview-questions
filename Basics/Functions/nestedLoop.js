function printNumberPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            
            row = row + j + ' ';
        }

        console.log(row);
    }
}

 
printNumberPattern(3);

