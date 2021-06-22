function GoToSQA()
{
	console.log('in GoToSQA function');
	var env_value = document.getElementById("ENV").value, ins_ID = document.getElementById("floatingInput").value, debug_mode = document.getElementById("DebugMode"), url="";
	console.log("env_value= "+env_value);
	console.log("ins_ID= "+ins_ID);
	console.log("debug_mode= "+debug_mode);
	if (debug_mode.checked) {
		switch(env_value.valueOf()) 
			{
				// URL example: // https://sqa-ap01.alma.exlibrisgroup.com/mng/login?institute=61USC_INST&&productCode=esploro&debug=true&auth=local
				case "AP01":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "NA01":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "NA02":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "NA03":
				url="https://sqa03-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "NA04":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "NA05":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "CN01":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "EU00":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "EU01":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "EU02":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "EU03":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "EU04":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				default:
				// code block
			}
	} else {
		switch(env_value.valueOf()) 
			{
				case "AP01":
				url="http://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID+"&productCode=esploro&auth=local";
				break;
				case "NA01":
				url="http://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID+"&productCode=esploro&auth=local";
				break;
				case "NA02":
				url="http://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID+"&productCode=esploro&auth=local";
				break;
				case "NA03":
				url="http://sqa03-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID+"&productCode=esploro&auth=local";
				break;
				case "NA04":
				url="http://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID+"&productCode=esploro&auth=local";
				break;
				case "NA05":
				url="http://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID+"&productCode=esploro&auth=local";
				break;
				case "CN01":
				url="http://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID+"&productCode=esploro&auth=local";
				break;
				case "EU00":
				url="http://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID+"&productCode=esploro&auth=local";
				break;
				case "EU01":
				url="http://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID+"&productCode=esploro&auth=local";
				break;
				case "EU02":
				url="http://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID+"&productCode=esploro&auth=local";
				break;
				case "EU03":
				url="http://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID+"&productCode=esploro&auth=local";
				break;
				case "EU04":
				url="http://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID+"&productCode=esploro&auth=local";
				break;
			}
	}

	
	window.open(url,'_blank');
return false;
}

function RunAPI()
{
	console.log('in RunAPI() function')
	var env_value = document.getElementById("ENVAPI").value, ins_ID_API = document.getElementById("instIDAPI").value, API_val = document.getElementById("APIVal").value;
	console.log("env_value= "+env_value);
	console.log("ins_ID_API= "+ins_ID_API);
	console.log("API_val= "+API_val);

	url="http://AlmaSDK-exl_impl-institutionCode-" + ins_ID_API + ":a12345678A" + "@sqa-" + env_value + ".alma.exlibrisgroup.com" + API_val;
	var WindowAlert = {
		A: function () {alert(url)}
	}
	WindowAlert.A();
	

	//console.log(url);
	window.open(url,'_blank');
return false;
}


function fillOutDropMenu(s1,s2) {
	var s1 = document.getElementById('API');
	var s2 = document.getElementById('Resource');
	s2.innerHTML = "";
	if(s1.value == "Researchers"){
		var optionArray = ["|","/esploro/v1/researchers|/esploro/v1/researchers", "/esploro/v1/researchers/{researcheID}|/esploro/v1/researchers/{researcheID}", "/esploro/v1/researchers/{orcid:.+}/token|/esploro/v1/researchers/{orcid:.+}/token", "/esploro/v1/researchers/test|/esploro/v1/researchers/test"];
		}else if(s1.value == "Assets"){
		var optionArray = ["|","/esploro/v1/assets|/esploro/v1/assets", "/esploro/v1/assets/{assetIds}|/esploro/v1/assets/{assetIds}", "/esploro/v1/assets/test|/esploro/v1/assets/test"];
	}else if(s1.value == "Configurations"){
		var optionArray = ["|","/esploro/v1/researchconf/code-tables/{codeTableName}|/esploro/v1/researchconf/code-tables/{codeTableName}", "/esploro/v1/researchconf/md-import-profiles|/esploro/v1/researchconf/md-import-profiles","/esploro/v1/researchconf/md-import-profiles/{profile_id}|/esploro/v1/researchconf/md-import-profiles/{profile_id}", "/esploro/v1/researchconf/jobs|/esploro/v1/researchconf/jobs", "/esploro/v1/researchconf/jobs/{job_id}|/esploro/v1/researchconf/jobs/{job_id}", "/esploro/v1/researchconf/jobs/{job_id}/instances|/esploro/v1/researchconf/jobs/{job_id}/instances", "/esploro/v1/researchconf/jobs/{job_id}/instances/{instance_id}|/esploro/v1/researchconf/jobs/{job_id}/instances/{instance_id}", "/esploro/v1/researchconf/sets|/esploro/v1/researchconf/sets", "/esploro/v1/researchconf/sets/{set_id}|/esploro/v1/researchconf/sets/{set_id}", "/esploro/v1/researchconf/sets/{set_id}/members|/esploro/v1/researchconf/sets/{set_id}/members", "/esploro/v1/researchconf/test|/esploro/v1/researchconf/test"];
	}else if(s1.value == "Analytics"){
	var optionArray = ["|","/esploro/v1/researchanalytics/paths|/esploro/v1/researchanalytics/paths", "/esploro/v1/researchanalytics/paths/{path:.+}|/esploro/v1/researchanalytics/paths/{path:.+}", "/esploro/v1/researchanalytics/reports|/esploro/v1/researchanalytics/reports", "/esploro/v1/researchanalytics/test|/esploro/v1/researchanalytics/test"];
	}else if(s1.value == "Organizations"){
		var optionArray = ["|","/esploro/v1/organizations/internal|/esploro/v1/organizations/internal", "/esploro/v1/organizations/internal/{organizationCode}|/esploro/v1/organizations/internal/{organizationCode}", "/esploro/v1/organizations/test|/esploro/v1/organizations/test"];
	}
	for (var option in optionArray){
		var pair = optionArray[option].split("|");
		var newOption = document.createElement("option");
		newOption.value = pair[0];
		newOption.innerHTML = pair[1];
		s2.options.add(newOption);
	}
}

function chooseAPIResource(data) {
	document.getElementById ("APIVal").value = data.value;
}

function clickToHideOrShow() {
    var elementToHide = document.getElementById("RunAPIInfo");
    if (elementToHide.style.display === "none") {
        elementToHide.style.display = "block";
    } else {
        elementToHide.style.display = "none";
    }
}

function GoToLinks()
{
	console.log('in GoToLinks function');
	var env_value = document.getElementById("ENV").value, ins_ID = document.getElementById("floatingInput").value, url="";
	console.log("env_value= "+env_value);
	console.log("ins_ID= "+ins_ID);
		switch(env_value.valueOf()) 
			{
				// URL example: // https://sqa-ap01.alma.exlibrisgroup.com/mng/login?institute=61USC_INST&&productCode=esploro&debug=true&auth=local
				case "AP01":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "NA01":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "NA02":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "NA03":
				url="https://sqa03-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "NA04":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "NA05":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "CN01":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "EU00":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "EU01":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "EU02":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "EU03":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				break;
				case "EU04":
				url="https://sqa-" + env_value + ".alma.exlibrisgroup.com/mng/login?institute="+ ins_ID +"&productCode=esploro&debug=true&auth=local";
				default:
				// code block
			}
	window.open(url,'_blank');
return false;
}