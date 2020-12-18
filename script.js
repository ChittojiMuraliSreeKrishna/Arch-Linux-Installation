var on1 = document.getElementById("home");
var on2 = document.getElementById("install");
var on3 = document.getElementById("aur");
var on4 = document.getElementById("Desktop");
var on5 = document.getElementById("Apps");
function home(){
      on1.style.display = "block";
      on2.style.display = "none";
      on3.style.display = "none";
      on4.style.display = "none";
      on5.style.display = "none";
    }
function install(){
      on1.style.display = "none";
      on2.style.display = "block";
      on3.style.display = "none";
      on4.style.display = "none";
      on5.style.display = "none";
    }
function aur(){
      on1.style.display = "none";
      on2.style.display = "none";
      on3.style.display = "block";
      on4.style.display = "none";
      on5.style.display = "none";
}
function desk(){
      on1.style.display = "none";
      on2.style.display = "none";
      on3.style.display = "none";
      on4.style.display = "block";
      on5.style.display = "none";
}
function APPS(){
      on1.style.display = "none";
      on2.style.display = "none";
      on3.style.display = "none";
      on4.style.display = "none";
      on5.style.display = "block";
}

  
  function apps(){
    var cas = document.getElementById("casual");
    var opt = document.getElementById("add-apps").value;
    var gog = document.getElementById("chrome");
    var vs = document.getElementById("vscode");
    var map = document.getElementById("moreapps");
    var m_p = document.getElementById("m-apps");
    var tmp = document.getElementById("termapps");
    var aws = document.getElementById("wiki");
    cas.innerHTML = "choose the option";
    
    if( opt == "google-chrome" ){
        gog.style.display = "block";
        vs.style.display = "none";
        map.style.display = "none";
        m_p.style.display = "none";
        tmp.style.display = "none";
        aws.style.display = "none";
    }else if(opt == "visual-studio"){
        gog.style.display = "none";
        vs.style.display = "block";
        map.style.display = "none";
        m_p.style.display = "none";
        tmp.style.display = "none";
        aws.style.display = "none";
    }else if (opt == "additional"){
        map.style.display = "block";
        gog.style.display = "none";
        vs.style.display = "none";
        m_p.style.display = "block";
        tmp.style.display = "none";
        aws.style.display = "none";
    }else if(opt == "terminal"){
        cas.innerHTML = "type the values correctly";
        tmp.style.display = "block";
        gog.style.display = "none";
        vs.style.display = "none";
        map.style.display = "none";
        m_p.style.display = "none";
        aws.style.display = "none";
    }else if(opt == "wiki-search"){
        aws.style.display = "block";
        gog.style.display = "none";
        vs.style.display = "none";
        map.style.display = "none";
        m_p.style.display = "none";
        tmp.style.display = "none";
        cas.innerHTML = "Everything related arch linux will be obtained by searching here";
    }else{
        gog.style.display = "none";
        vs.style.display = "none";
        map.style.display = "none";
        m_p.style.display = "none";
        tmp.style.display = "none";
        aws.style.display = "none";
        cas.innerHTML = "this has no options";
    }
}
  function gc(){
    var str = "yay -S google-chrome";
    alert(str);
  }
  function gcb(){
    alert("yay -S google-chrome-beta");
  }
  function cr(){
    alert("sudo pacman -S chromium")
  }
  function vs(){
      alert("sudo pacman -S code");
    }
    function vsb(){
      alert("yay -S visual-studio-code-bin");
    }
    function vsi(){
      alert("yay -S visual-studio-code-insiders");
    } 
    function vsg(){
      alert("yay -S code-git");
    }
    function mapps(){
      var appli = document.getElementsByName("cbox");
      var selectedItems = "";
      var nap = document.getElementById("m-apps");
      for(var i = 0; i < appli.length; i++){
        if(appli[i].type=="checkbox" && appli[i].checked==true){
          selectedItems+=appli[i].value+" ";
      }
      }
      nap.innerHTML = "sudo pacman -S "+selectedItems;
      if(selectedItems == 0){
        nap.innerHTML = "sudo pacman -Syy";
      }
    }
    function forfun(){
      var fun = document.getElementById("textinp").value.toLowerCase().trim();
      var napo = document.getElementById("t-apps");
      var normal = document.getElementById('normal');
      var community = document.getElementById('community');
      var package = document.getElementsByName('package').checked;
      var pac 
      if(normal.checked)
      {
        pac = "sudo pacman -S ";
      }else if(community.checked)
      {
        pac = "yay -S ";
      }else{
        pac = "search in google, the package name is: ";
      }
      var id = ["# ID's", "info", "textinp", "desktop", "window", "kde", "m-apps", "termapps", "gnome", "xfce", "lxde", "window", "t-apps", "i3", "home", "moreappps", "manager", "chrome", "vscode", "install", "Desktop", "aur", "APPS"];
      var clas = [".CLASS", "warning", "info", "logo", "nav-links", "burger"];
      var funct = ["FUNCTION()", "home", "install", "aur", "desk", "APPS", "apps", "gc", "gcb", "cr", "vs", "vsb", "vsi", "vsg", "mapps", "forfun", "manager", "kde", "gnome", "xfce", "lxde", "i3", "desktop", "window"];
        var perrow = 1, 
        count = 0, // Flag for current cell
        table = document.createElement("table"),
        row = table.insertRow();
      if(fun == "music"){
      napo.innerHTML = pac+"moc";
      }else if(fun == "file"){
      napo.innerHTML = pac+"ranger";
      }else if(fun == "urxvt"){
      napo.innerHTML = pac+"rxvt-unicode";
      }else if(fun == "text"){
      napo.innerHTML = pac+"vim";
      }else if(fun == "" && package == false){
      napo.innerHTML = "you haven't typed anything yet";
      }else if(fun == "id"){
      for (var i of id) {
        var cell = row.insertCell();
        cell.innerHTML = i;
        count++;
        if (count%perrow==0) {
          row = table.insertRow();
        }
      }
      napo.appendChild(table);
  }else if(fun == "clas"){
    for (var i of clas) {
        var cell = row.insertCell();
        cell.innerHTML = i;
        count++;
        if (count%perrow==0) {
          row = table.insertRow();
        }
      }
      napo.appendChild(table);
  }else if(fun == "funct"){
    for (var i of funct) {
        var cell = row.insertCell();
        cell.innerHTML = i;
        count++;
        if (count%perrow==0) {
          row = table.insertRow();
        }
      }
      napo.appendChild(table);
  }else{
      napo.innerHTML = "its not a correct option nor i am a google to search, try again";
      }
    }  
	function manager(){
	var man = document.getElementById("manager");
		if(man.style.display == "none"){
			man.style.display = "block";
		}else{
		man.style.display = "none";
		}
	}
    function kde(){
      var x = document.getElementById("kde");
      if(x.style.display == "none"){
        x.style.display = "block";
      }else{
        x.style.display = "none";
      }
    }
    function gnome(){
        var y = document.getElementById("gnome");
        if(y.style.display == "none"){
          y.style.display = "block"
        }else {
          y.style.display = "none"
        }
    }
    function xfce(){
      var z = document.getElementById("xfce");
      if(z.style.display == "none"){
        z.style.display = "block"
      }else{
        z.style.display = "none"
      }
    }
    function lxde(){
      var a = document.getElementById("lxde");
      if(a.style.display == "none"){
        a.style.display = "block"
      }else{
        a.style.display = "none"
      }
    }
    function i3(){
      var b = document.getElementById("i3");
      if(b.style.display == "none"){
        b.style.display = "block"
      }else{
        b.style.display = "none"
      }
    }
    function desktop(){
      var desk = document.getElementById("desktop");
      if(desk.style.display == "none"){
        desk.style.display = "block"
      }else{
        desk.style.display = "none"
      }
    }
    function windowm(){
      var wind = document.getElementById("window");
      if(wind.style.display == "none"){
        wind.style.display = "block"
      }else{
        wind.style.display = "none"
      }
    }
