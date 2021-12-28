
export const cellColor = "white";
export const wallColor = "red";
export const entryColor = "blue";
export const exitColor = "green";
export const searchColor = "lightgrey";
export const pathColor = "yellow";

export const cellType = 0;
export const wallType = 1;
export const entryType = 2;
export const exitType = 3;
export const searchType = 4;
export const pathType = 5;

export const clickTypeToColorMap = new Map([
  [cellType, cellColor],
  [wallType, wallColor],
  [entryType, entryColor],
  [exitType, exitColor],
  [searchType, searchColor],
  [pathType, pathColor],
]);

export const cellWidth = 25;
export const cellGap = 2;