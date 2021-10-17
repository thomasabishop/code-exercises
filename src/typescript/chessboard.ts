import addition from "./testImport";

function chessboardTs(totalRows: number) {
  const rowTypeOne = " # # # #";
  const rowTypeTwo = "# # # # ";
  const newline = "\n";

  for (let i = 1; i <= totalRows; i++) {
    if (i % 2 === 0) {
      console.log(rowTypeOne + newline);
    } else {
      console.log(rowTypeTwo + newline);
    }
  }
}

chessboardTs(8);
console.log(addition(2, 2));
