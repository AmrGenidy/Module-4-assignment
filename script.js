var names=new Array();
names[0]="Amr";
names[1]="Ahmed";
names[2]="Youss";
names[3]="yaso";
names[4]="gasser";
names[5]="fady";
names[6]="larry";
names[7]="paula";
names[8]="food";
names[9]="gym";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
