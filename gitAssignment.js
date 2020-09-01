var colors=["yellow","red","pink"];

function container(color) {
  var that = this;
  this.number = 0;
  this.element = document.createElement("div");
  //styling
  
  this.element.style.height = "100px";
  this.element.style.width = "200px";
  this.element.style.display = "flex";
  this.element.style.textAlign = "center";
  this.element.style.fontSize = "18px";
  this.element.style.justifyContent = "center";
  this.element.style.alignItems = "center";
  this.element.style.borderRadius = "10px";
  this.element.style.backgroundColor=color;
  
  
  this.element.addEventListener("click",
                                function(){that.increase();})
  
  this.element.innerHTML = this.number;
  
  document.body.appendChild(this.element);
}

container.prototype.increase = function(){
  this.number = this.number+1;
  this.element.innerHTML = this.number;
}

for (var i = 0; i < colors.length; i++) {
  var container1=new container(colors[i]);
}