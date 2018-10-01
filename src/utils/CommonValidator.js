export default function CommonValidator(pObj = {}){
	debugger;

    Object.keys(pObj).map((key)=> {
    	console.log(key + "->" + pObj[key].value);
    });

	console.log("Cmmon functions "+pObj);

}