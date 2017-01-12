// JavaScript Document 

// change Display
	function d(val) {
			document.getElementById("d").value = val;
	}
	
// Type numbera and operators
	function v(val) {
			document.getElementById("d").value += val;
	}
	
//evaluate the equation
function e() {
			try{
					d(eval(document.getElementById("d").value));
			}
			catch(err) {
					d("error");
			}
}
