//$("#wrapper").load("sidebar.html")
//index.html
//display the creat app element, when a user click the new app button
var apps;
if ((typeof localStorage.getItem('apps') !== "undefined") &&
 (localStorage.getItem('apps') !== null))
	apps = JSON.parse(localStorage.getItem('apps'));
else {
	apps = [];
}
//var apps = JSON.parse() || [];
$("#new-app-btn").on("click", function(){
	document.querySelector("#create-app").style.display = "block";
	//create an new app, when a user click 'create button'
	var createBtn = document.querySelector("#choose-create");
	if(createBtn){
		createBtn.addEventListener("click",function(){
			//create app array for exisiting apps
			var appname = document.getElementsByTagName("input")[0].value;
			console.log('appname_value: '+ appname);
			//save the appname to the local storage
			if(appname){
				// console.log('appname_localstorage: '+ appname);
				localStorage.setItem("app-name", appname);
				apps.push(appname);
				//localStorage.setItem('apps', apps);
				localStorage.setItem('apps', JSON.stringify(apps));
				console.log('apps array:'+apps);
				console.log('apps JSON.stringify:'+JSON.stringify(apps));
				//redirect from index page to detail_app_page
				//JS
				//window.location.replace("detail_app_page.html");
				//Jquery
				//localStorage.getItem('apps');
				apps = JSON.parse(localStorage.getItem('apps'));
				var url = "detail_app_page.html";
				$(location).attr('href',url);
			}
		});
	}
});


//empty the text in the text field, when a user click the 'cancel button'
var cancelBtn = document.querySelector("#cancel-create");
if(cancelBtn){
	cancelBtn.addEventListener("click",function(){
		$('#empty-text').val('');
	});
}

//detail_app_page.html
var lengthApp = apps.length - 1;
var getAppName = apps[lengthApp];
console.log(getAppName);
if(getAppName){
	console.log("if getName"+getAppName);
	$('#name-app').html(getAppName);
}

$(function() {
	//change app name
	$('#js-change-appname').on('click', function () {
		var changed = $('#rename-app').val();
		$('#name-app').text( changed );
	});

	//toggle start/stop button
	$('#main-button').on('click', function () {
		var $el = $(this),
		textNode = this.lastChild;

		$el.find('span').toggleClass('glyphicon-play glyphicon-stop');
		textNode.nodeValue = ($el.hasClass('main-button') ? 'Stop' : 'Start')
		$el.toggleClass('main-button');
	});

});

$(function myFunction() {
	var $myDropdown = document.getElementById("myDropdown")
	if ($myDropdown) {
		$myDropdown.classList.toggle("show");
	}
})
//$("#wrapper").load("sidebar.html")
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
