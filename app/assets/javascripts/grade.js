var grades=[];
var range=[];
var count=[];
var letgd=[];

for(i=0;i < gon.mycnt; i++)	{
	grades[i] = gon.myarr[i];
}
var he=function(){

	range[0]= parseFloat(document.getElementById("max").value);
	if(isNaN(range[0]))
		alert("'Max' range error");
	range[1]= parseFloat(document.getElementById("A+").value);
	if(range[0]<=range[1]|| typeof range[1] === 'string'){
		alert("'A+' range error");
		}
	range[2]= parseFloat(document.getElementById("A").value);
	if(range[1]<=range[2]){
		alert("'A' range error");
		}
	range[3]= parseFloat(document.getElementById("A-").value);
	if(range[2]<=range[3]){
		alert("'A-' range error");
		}
	range[4]= parseFloat(document.getElementById("B+").value);
	if(range[3]<=range[4]){
		alert("'B+' range error");
		}
	range[5]= parseFloat(document.getElementById("B").value);
	if(range[4]<=range[5]){
		alert("'B' range error");
		}
	range[6]= parseFloat(document.getElementById("B-").value);
	if(range[5]<=range[6]){
		alert("'B-' range error");
		}
	range[7]= parseFloat(document.getElementById("C+").value);
	if(range[6]<=range[7]){
		alert("'C+' range error");
		}
	range[8]= parseFloat(document.getElementById("C").value);
	if(range[7]<=range[8]){
		alert("'C' range error");
		}
	range[9]= parseFloat(document.getElementById("C-").value);
	if(range[8]<=range[9]){
		alert("'C-' range error");
		}
	range[10]= parseFloat(document.getElementById("D").value);
	if(range[9]<=range[10]){
		alert("'D' range error");
		}
	range[11]= parseFloat(document.getElementById("F").value);
	if(range[10]<=range[11]){
		alert("'F' range error");
		}
	var size = range.length
	while(size--)
   	count[size] = 0;
var lt=["A+", "A","A-" ,"B+" ,"B" ,"B-" ,"C+" ,"C" ,"C-" ,"D" ,"F"];

	for(i=0;i < grades.length; i++)	{
      	  for(k=1;k<range.length; k++){
            if(grades[i]>=range[k]&&grades[i]<range[k-1]){
                count[k-1]=count[k-1]+1;
                letgd[i]= lt[k-1];
                gon.letgd[i]= lt[k-1];
                break;
            }
          }
        }
};
he();
