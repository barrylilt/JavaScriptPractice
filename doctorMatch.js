/**
 * 
 */

var doctors=[
		["Tarek Abousheta", "Dentistry", "San Jose", 4],
		["Brian Higgins", "Dentistry", "Saratoga", 4],
		["Grant Shimizu", "Orthodontics", "San Jose", 3],
		["Bryan Bui", "Cardiology", "Santa Clara", 2],
		["Jane Varner", "Allergy", "Sunnyvale", 3],
		["Dave Washington", "Pediatrics", "Cupertino", 4],
		["Jonanthan Scott", "Obstetrics", "San Francisco", 3],
		["Trvis Gordan", "Allergy", "Fremont", 4],
		["Dan Jordyn", "Allergy", "Fremont", 3],
		["Jenifer Cho", "Allergy", "Fremont", 2],
		["Theodore Chow", "Allergy", "Fremont", 3],
		["Dennis Sheehan", "Cardiology", "Redwood City", 4],
		["Bruce McAuley", "Family Medicine","Milpitas", 3],
		["Anthony Chan", "Obstetrics", "Milpitas", 4],
		["Roger Winkle", "Obstetrics", "San Francisco", 2],
		["Melissa Kong", "Obstetrics", "Cupertino", 5],
		["Tomoaki Hinohara", "Internal Medicine", "San Jose", 4],
		["Mara Giattina", "Internal Medicine", "San Jose", 4],
		["Mary Larson", "Internal Medicine", "Fremont", 3],
		["Bruce Saal", "Dermatology", "Los Gatos", 5],
		["Minh Dang", "Dermatology", "San Carlos", 4], 
		["David Berman", "Surgeon", "Palo Alto", 4],
		["Duke Khuu", "Surgeon", "Palo Alto", 3],
		["Michelle Fiore", "Surgeon", "Redwood City", 2]		
	];

function findDoctor(doctor){		
	//this map will use speciality+area as key, and an array of doctors as value
	var map = new Map();
	
	//this map will use doctor name as key and an array of information as value
	var docMap=new Map();
	
	//going through  doctors directory to store the data into the two maps
	for(var i=0; i<doctors.length; i++){
		var docName=doctors[i][0];
		var specialty=doctors[i][1];
		var area=doctors[i][2];
		var rating=doctors[i][3];
		
		var key=doctors[i][1]+"/"+ doctors[i][2];
		
	    docMap.set(docName, [key, specialty, area, rating ]);
		
		
		if (!map.has(key)){			
			var doclist=[];	
			doclist.push([docName, specialty, area, rating]);
			
			map.set(key, doclist);
			
		}
		else if(map.has(key)){
			var doclist=map.get(key);		
			var detail=[docName, specialty, area, rating];
			
			doclist.push(detail);
			map.set(key, doclist);
			
		}
	
	}
	
	console.log("Similar doctors as "+doctor);
	
	//if the input doctor name is found in the directory
	if(docMap.has(doctor)){
		var condition=docMap.get(doctor)[0];	
		  		
		var result=map.get(condition);
		
		//if we found similar doctors in the directory
		if(result.length>1){
		   result = result.sort(function(a,b) {
			 return b[3] - a[3];
			 }); 
	       return result;
	     }
	//no similar doctor found
	    else return "There is no similar doctor found" ;
	}
	//the input doctor is not found
	return "Doctor "+ doctor + " is not found";
}

//unit test 
console.log(findDoctor('Tarek Abousheta')+'\n');
console.log(findDoctor('Dan Jordyn')+'\n');
console.log(findDoctor('Yifei Qian')+'\n');
console.log(findDoctor('Dave Washington')+'\n');
console.log(findDoctor('David Berman')+'\n');
console.log(findDoctor('Brian Higgins')+'\n');
console.log(findDoctor('Grant Shimizu')+'\n');
console.log(findDoctor('Jonanthan Scott')+'\n');
console.log(findDoctor('Bryan Bui')+'\n');
console.log(findDoctor('Jane Varner')+'\n');
console.log(findDoctor('Trvis Gordan')+'\n');
console.log(findDoctor('Jenifer Cho')+'\n');
console.log(findDoctor('Dennis Sheehan')+'\n');
console.log(findDoctor('Bruce McAuley')+'\n');
console.log(findDoctor('Anthony Chan')+'\n');
console.log(findDoctor('Roger Winkle')+'\n');
console.log(findDoctor('Melissa Kong')+'\n');
console.log(findDoctor('Tomoaki Hinohara')+'\n');
console.log(findDoctor('Mara Giattina')+'\n');
console.log(findDoctor('Mary Larson')+'\n');
console.log(findDoctor('Bruce Saal')+'\n');
console.log(findDoctor('Minh Dang')+'\n');
console.log(findDoctor('David Berman')+'\n');

