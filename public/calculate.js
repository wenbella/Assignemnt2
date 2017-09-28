// Initialize the arrays
var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03,49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];
var lowerBounds = [['Max',100.00,0],['A+',95.00,0],['A',90.00,0],['A-',85.00,0],['B+',80.00,0],['B',75.00,0],['B-',70.00,0],['C+',65.00,0],['C',60.00,0],['C-',55.00,0],['D',50.00,0],['F',0.00,0]];

function insertNewBoundRow(tableId, level,lowerBound, rowIndex){
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
    boundNode.value = parseFloat(Math.round(lowerBound * 100) / 100).toFixed(2);
    boundCell.appendChild(boundNode);

    //bind input box text changed event
    boundNode.onchange = (e)=>{
        var newVal = parseFloat(Math.round(e.target.value * 100) / 100).toFixed(2)
        var isValid = false;
        if(newVal){
            switch(rowIndex){
                case 0: isValid = newVal > parseFloat(lowerBounds[rowIndex+1][1])? true: false; break;
                case lowerBounds.length -1: isValid = newVal > 0 && newVal < parseFloat(lowerBounds[rowIndex-1][1])? true: false; break;
                default:isValid = newVal < parseFloat(lowerBounds[rowIndex-1][1]) && newVal > parseFloat(lowerBounds[rowIndex+1][1])? true: false;break;
            }
        }

        if(isValid){
            e.target.value = newVal;
            lowerBounds[rowIndex][1] = newVal;
            distribute();
            renderHistogram();
        }else{
            alert('invalid input!');
            //put back the original value
            e.target.value = parseFloat(Math.round(lowerBounds[rowIndex][1] * 100) / 100).toFixed(2);
        }
    }
}

function insertNewHistogramRow(tableId, level,count, rowIndex){
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

function distribute(){
    //Init the original count to 0
    for(boundIndex=0;boundIndex<lowerBounds.length;boundIndex++){
        lowerBounds[boundIndex][2] = 0;
    }

    for(gradeIndex=0;gradeIndex<grades.length;gradeIndex++){
        var grade = grades[gradeIndex];

        for(boundIndex=0;boundIndex<lowerBounds.length;boundIndex++){
            // use '>' in case that hardcode grade is greater than the max value, although it doesn't make sense
            if(grade >= lowerBounds[0][1]){
                ++lowerBounds[1][2];
                break;
            }

            if(boundIndex > 0 && grade >= lowerBounds[boundIndex][1]){
                ++lowerBounds[boundIndex][2];
                break;
            }
        }
    }
}

function renderHistogram(){
    var trs = document.getElementById('histogramTable').getElementsByTagName('tr');
    for(i=0;i<trs.length; i++){
        var countTd = trs[i].getElementsByTagName('td')[1];
        var count = lowerBounds[i+1][2];
        var CountO = count==0?'-':'';
        for(j=0;j<count;j++){
            CountO += 'O';
        }
        countTd.innerHTML = CountO;
    }
}

function init(){
    distribute();
    for(index=0;index<lowerBounds.length;index++){
        if(index > 0){
            insertNewHistogramRow('histogramTable',lowerBounds[index][0],lowerBounds[index][2],index);
        }
        insertNewBoundRow('boundTable',lowerBounds[index][0],lowerBounds[index][1],index);
    }
}


setTimeout(()=>{ init();}, 1);
