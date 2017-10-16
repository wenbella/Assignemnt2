// Initialize the arrays
var grade = [69.95,56.98,78.62,96.1,90.3,72.24,92.34,60.00,81.43,86.22,88.33,9.03,49.93,52.34,53.11,50.10,88.88,55.32,55.69,61.68,70.44,70.54,90.00,71.11,80.01];
var lowerBounds = [['Max',100.00,0],['A+',95.00,0],['A',90.00,0],['A-',85.00,0],['B+',80.00,0],['B',75.00,0],['B-',70.00,0],['C+',65.00,0],['C',60.00,0],['C-',55.00,0],['D',50.00,0],['F',0.00,0]];
// You can also define the lowerBounds array as a josn object to be more readable like below
/*var lowerBounds = [{
    level:'A+',
    lowerBound:95,
    count:0
}...]*/
var inputTag = 'txt';

function insertNewBoundRow(tableId, level,lowerBound){
    var tableRef = document.getElementById(tableId).getElementsByTagName('tbody')[0];

    // Insert a row in the table at the last row
    var newRow = tableRef.insertRow(tableRef.rows.length);
    var index = 0;

    // Insert level cell
    var levelCell = newRow.insertCell(index++);
    var levelNode = document.createTextNode(level);
    levelCell.appendChild(levelNode);

    // Insert bound cell
    var boundCell = newRow.insertCell(index++);
    var boundNode = document.createElement('input');
    boundNode.type = 'text';
    boundNode.id = inputTag + level;
    boundNode.value =parseFloat(Math.round(lowerBound * 100) / 100).toFixed(2);
    boundCell.appendChild(boundNode);
}

function insertNewHistogramRow(tableId, level,count){
    var tableRef = document.getElementById(tableId).getElementsByTagName('tbody')[0];

        // Insert a row in the table at the last row
        var newRow = tableRef.insertRow(tableRef.rows.length);
        var index = 0;

        // Insert level cell
        var levelCell = newRow.insertCell(index++);
        var levelNode = document.createTextNode(level);
        levelCell.appendChild(levelNode);

        // Insert histogram cell
        var hisCell = newRow.insertCell(index++);
        var CountO = count==0?'-':'';
        for(i=0;i<count;i++){
            CountO += 'O'
        }

        var hisNode = document.createTextNode(CountO);
        hisCell.appendChild(hisNode);
}

function init(){
    for(index=0;index<lowerBounds.length;index++){
        if(index > 0){
            insertNewHistogramRow('histogramTable',lowerBounds[index][0],lowerBounds[index][2]);
        }
        insertNewBoundRow('boundTable',lowerBounds[index][0],lowerBounds[index][1]);
    }
}

setTimeout(()=>{ init();}, 1);
