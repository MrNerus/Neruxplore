// Nav Bar
function myFunction() {
    var x = document.getElementById("NavigiateUL");
    if (x.className === "NavUL") {
        x.className += "responsiveNav";
    } else {
        x.className = "NavUL";
    }
}

//Sidebar
function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// popup functuons
function photoshop_list_open() {
    document.getElementById("PopupPSD").style.display = "block";
}

function photoshop_list_close() {
    document.getElementById("PopupPSD").style.display = "none";
}

function camera_lst_open() {
    document.getElementById("PopupCam").style.display = "block";
}

function camera_list_close() {
    document.getElementById("PopupCam").style.display = "none";
}

function blender_lst_open() {
    document.getElementById("PopupBlend").style.display = "block";
}

function blender_list_close() {
    document.getElementById("PopupBlend").style.display = "none";
}

function python_lst_open() {
    document.getElementById("PopupPy").style.display = "block";
}

function python_list_close() {
    document.getElementById("PopupPy").style.display = "none";
}

function Nerus_Contact_Open() {
    document.getElementById("PopupContactArd").style.display = "block";
}

function Nerus_Contact_Close() {
    document.getElementById("PopupContactArd").style.display = "none";
}

function Somebody_Contact_Open() {
    document.getElementById("PopupContactSomebody").style.display = "block";
}

function Somebody_Contact_Close() {
    document.getElementById("PopupContactSomebody").style.display = "none";
}

function Another_Contact_Open() {
    document.getElementById("PopupContactAnother").style.display = "block";
}

function Another_Contact_Close() {
    document.getElementById("PopupContactAnother").style.display = "none";
}

// fetch api for photoshop card
fetch('photoshop.json') //takes photoshop.json from server
    .then(function(responsePsd) {
        return responsePsd.json();
    })
    .then(function(dataPsd) {
        appendDataPsd(dataPsd);
    })
    .catch(function(errPsd) {
        console.log('error: ' + errPsd);
    });

function appendDataPsd(dataPsd) {
    var containerPsd = document.getElementById("psdlst"); //takes the ul
    for (var itemPsd = 0; itemPsd < dataPsd.length; itemPsd++) { //loops through all items in JSON
        var insPsd = document.createElement("li"); //creates element "li"
        insPsd.innerHTML = `<table class="TableList">
							<tr>
								<td class="TableAvatar">
									<img src="${dataPsd[itemPsd].image}" alt="" class="ListAvatar">
								</td>
								<td class="TableLable">
									<section class="white-text">${dataPsd[itemPsd].title}<br>
									${dataPsd[itemPsd].aurthor}</section>
								</td>
							</tr>
						</table>`
        containerPsd.appendChild(insPsd); //insert above code in created li (looped for every dictionary in json)
    }
}

// search filter for photoshop
function SearchPsd() {
    // Declare variables
    var input, filter, uls, lis, as, is, txtValue;
    input = document.getElementById('PsdLstSearch');
    filter = input.value.toUpperCase();
    uls = document.getElementById("psdlst");
    lis = uls.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (is = 0; is < lis.length; is++) {
        as = lis[is].getElementsByTagName("section")[0];
        txtValue = as.textContent || as.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            lis[is].style.display = "";
        } else {
            lis[is].style.display = "none";
        }
    }
}


// fetch api for camera card
fetch('camera.json')
    .then(function(responseCam) {
        return responseCam.json();
    })
    .then(function(dataCam) {
        appendDataCam(dataCam);
    })
    .catch(function(errCam) {
        console.log('error: ' + errCam);
    });

function appendDataCam(dataCam) {
    var containerCam = document.getElementById("camlst");
    for (var itemCam = 0; itemCam < dataCam.length; itemCam++) {
        var insCam = document.createElement("li");
        insCam.innerHTML = `<table class="TableList">
							<tr>
								<td class="TableAvatar">
									<img src="${dataCam[itemCam].image}" alt="" class="ListAvatar">
								</td>
								<td class="TableLable">
									<section class="white-text">${dataCam[itemCam].title}<br>
									${dataCam[itemCam].aurthor}</section>
								</td>
							</tr>
						</table>`
        containerCam.appendChild(insCam);
    }
}

// search filter for camera
function SearchCam() {
    // Declare variables
    var input, filter, uls, lis, as, is, txtValue;
    input = document.getElementById('CamLstSearch');
    filter = input.value.toUpperCase();
    uls = document.getElementById("camlst");
    lis = uls.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (is = 0; is < lis.length; is++) {
        as = lis[is].getElementsByTagName("section")[0];
        txtValue = as.textContent || as.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            lis[is].style.display = "";
        } else {
            lis[is].style.display = "none";
        }
    }
}


// fetch api for blender card
fetch('blender.json')
    .then(function(responseBlend) {
        return responseBlend.json();
    })
    .then(function(dataBlend) {
        appendDataBlend(dataBlend);
    })
    .catch(function(errBlend) {
        console.log('error: ' + errBlend);
    });

function appendDataBlend(dataBlend) {
    var containerBlend = document.getElementById("blendlst");
    for (var itemBlend = 0; itemBlend < dataBlend.length; itemBlend++) {
        var insBlend = document.createElement("li");
        insBlend.innerHTML = `<table class="TableList">
								<tr>
									<td class="TableAvatar">
										<img src="${dataBlend[itemBlend].image}" alt="" class="ListAvatar">
									</td>
									<td class="TableLable">
										<section class="white-text">${dataBlend[itemBlend].title}<br>
										${dataBlend[itemBlend].aurthor}</section>
									</td>
								</tr>
							</table>`
        containerBlend.appendChild(insBlend);
    }
}

// search filter for blender
function SearchBlend() {
    // Declare variables
    var input, filter, uls, lis, as, is, txtValue;
    input = document.getElementById('BlendLstSearch');
    filter = input.value.toUpperCase();
    uls = document.getElementById("blendlst");
    lis = uls.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (is = 0; is < lis.length; is++) {
        as = lis[is].getElementsByTagName("section")[0];
        txtValue = as.textContent || as.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            lis[is].style.display = "";
        } else {
            lis[is].style.display = "none";
        }
    }
}

// fetch api for python card
fetch('python.json')
    .then(function(responsePy) {
        return responsePy.json();
    })
    .then(function(dataPy) {
        appendDataPy(dataPy);
    })
    .catch(function(errPy) {
        console.log('error: ' + errPy);
    });

function appendDataPy(dataPy) {
    var containerPy = document.getElementById("pylst");
    for (var itemPy = 0; itemPy < dataPy.length; itemPy++) {
        var insPy = document.createElement("li");
        insPy.innerHTML = `<table class="TableList">
							<tr>
								<td class="TableAvatar">
									<img src="${dataPy[itemPy].image}" alt="" class="ListAvatar">
								</td>
								<td class="TableLable">
									<section class="white-text">${dataPy[itemPy].title}<br>
									${dataPy[itemPy].aurthor}</section>
								</td>
							</tr>
						</table>`
        containerPy.appendChild(insPy);
    }
}

// search filter for python
function SearchPy() {
    // Declare variables
    var input, filter, uls, lis, as, is, txtValue;
    input = document.getElementById('PyLstSearch');
    filter = input.value.toUpperCase();
    uls = document.getElementById("pylst");
    lis = uls.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (is = 0; is < lis.length; is++) {
        as = lis[is].getElementsByTagName("section")[0];
        txtValue = as.textContent || as.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            lis[is].style.display = "";
        } else {
            lis[is].style.display = "none";
        }
    }
}


// fetch api for Ard's contact card
fetch('ardcontact.json') //takes ardcontact.json from server
    .then(function(responseArdInfo) {
        return responseArdInfo.json();
    })
    .then(function(dataArdInfo) {
        appendDataArdInfo(dataArdInfo);
    })
    .catch(function(errArdInfo) {
        console.log('error: ' + errArdInfo);
    });

function appendDataArdInfo(dataArdInfo) {
    var containerArdInfo = document.getElementById("ArdContactList"); //takes the ul
    for (var itemArdInfo = 0; itemArdInfo < dataArdInfo.length; itemArdInfo++) { //loops through all items in JSON
        var insArdInfo = document.createElement("li"); //creates element "li"
        insArdInfo.innerHTML = `<table class="TableList">
							<tr>
								<td class="TableAvatar">
                                    <img src="${dataArdInfo[itemArdInfo].Avtr}" alt="" class="ListAvatar">
								</td>
								<td class="TableLable">
									<section class="white-text">${dataArdInfo[itemArdInfo].SiteName} : ${dataArdInfo[itemArdInfo].UserName}<br>
									<a class="white-text" href="${dataArdInfo[itemArdInfo].hlink}">Go There</a></section>
								</td>
							</tr>
						</table>`
        containerArdInfo.appendChild(insArdInfo); //insert above code in created li (looped for every dictionary in json)
    }
}

// search filter for Ard Contacts
function SearchArdContact() {
    // Declare variables
    var input, filter, uls, lis, as, is, txtValue;
    input = document.getElementById('ArdContactListSearch'); //Searchbar ID
    filter = input.value.toUpperCase();
    uls = document.getElementById("ArdContactList"); //ul id
    lis = uls.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (is = 0; is < lis.length; is++) {
        as = lis[is].getElementsByTagName("section")[0];
        txtValue = as.textContent || as.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            lis[is].style.display = "";
        } else {
            lis[is].style.display = "none";
        }
    }
}

// fetch api for Somebody's contact card
fetch('somebodycontact.json') //takes photoshop.json from server
    .then(function(responseSomebodyInfo) {
        return responseSomebodyInfo.json();
    })
    .then(function(dataSomebodyInfo) {
        appendDataSomebodyInfo(dataSomebodyInfo);
    })
    .catch(function(errSomebodyInfo) {
        console.log('error: ' + errSomebodyInfo);
    });

function appendDataSomebodyInfo(dataSomebodyInfo) {
    var containerSomebodyInfo = document.getElementById("SomebodyContactList"); //takes the ul
    for (var itemSomebodyInfo = 0; itemSomebodyInfo < dataSomebodyInfo.length; itemSomebodyInfo++) { //loops through all items in JSON
        var insSomebodyInfo = document.createElement("li"); //creates element "li"
        insSomebodyInfo.innerHTML = `<table class="TableList">
                                        <tr>
                                            <td class="TableAvatar">
                                                <img src="${dataSomebodyInfo[itemSomebodyInfo].Avtr}" alt="" class="ListAvatar">
                                            </td>
                                            <td class="TableLable">
                                                <section class="white-text">${dataSomebodyInfo[itemSomebodyInfo].SiteName} : ${dataSomebodyInfo[itemSomebodyInfo].UserName}<br>
                                                <a class="white-text" href="${dataSomebodyInfo[itemSomebodyInfo].hlink}">Go There</a></section>
                                            </td>
                                        </tr>
                                    </table>`
        containerSomebodyInfo.appendChild(insSomebodyInfo); //insert above code in created li (looped for every dictionary in json)
    }
}

// search filter for Somebody Contacts
function SearchSomebodyContact() {
    // Declare variables
    var input, filter, uls, lis, as, is, txtValue;
    input = document.getElementById('SomebodyContactListSearch'); //Searchbar ID
    filter = input.value.toUpperCase();
    uls = document.getElementById("SomebodyContactList"); //ul id
    lis = uls.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (is = 0; is < lis.length; is++) {
        as = lis[is].getElementsByTagName("section")[0];
        txtValue = as.textContent || as.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            lis[is].style.display = "";
        } else {
            lis[is].style.display = "none";
        }
    }
}

// fetch api for Another's contact card
fetch('anothercontact.json') //takes photoshop.json from server
    .then(function(responseAnotherInfo) {
        return responseAnotherInfo.json();
    })
    .then(function(dataAnotherInfo) {
        appendDataAnotherInfo(dataAnotherInfo);
    })
    .catch(function(errAnotherInfo) {
        console.log('error: ' + errAnotherInfo);
    });

function appendDataAnotherInfo(dataAnotherInfo) {
    var containerAnotherInfo = document.getElementById("AnotherContactList"); //takes the ul
    for (var itemAnotherInfo = 0; itemAnotherInfo < dataAnotherInfo.length; itemAnotherInfo++) { //loops through all items in JSON
        var insAnotherInfo = document.createElement("li"); //creates element "li"
        insAnotherInfo.innerHTML = `<table class="TableList">
                                    <tr>
                                        <td class="TableAvatar">
                                            <img src="${dataAnotherInfo[itemAnotherInfo].Avtr}" alt="" class="ListAvatar">
                                        </td>
                                        <td class="TableLable">
                                            <section class="white-text">${dataAnotherInfo[itemAnotherInfo].SiteName} : ${dataAnotherInfo[itemAnotherInfo].UserName}<br>
                                            <a class="white-text" href="${dataAnotherInfo[itemAnotherInfo].hlink}">Go There</a></section>
                                        </td>
                                    </tr>
                                </table>`
        containerAnotherInfo.appendChild(insAnotherInfo); //insert above code in created li (looped for every dictionary in json)
    }
}

// search filter for Another Contacts
function SearchAnotherContact() {
    // Declare variables
    var input, filter, uls, lis, as, is, txtValue;
    input = document.getElementById('AnotherContactListSearch'); //Searchbar ID
    filter = input.value.toUpperCase();
    uls = document.getElementById("AnotherContactList"); //ul id
    lis = uls.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (is = 0; is < lis.length; is++) {
        as = lis[is].getElementsByTagName("section")[0];
        txtValue = as.textContent || as.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            lis[is].style.display = "";
        } else {
            lis[is].style.display = "none";
        }
    }
}