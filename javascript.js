/*

context.fillRect(40,40,100,100);


context.beginPath();
context.moveTo(40,40);
context.lineTo(340,40);
context.lineTo(300,80);
context.closePath();
context.stroke();
context.fill();

context.beginPath();//每次调用beginPath()都会清空以前路径
context.arc(230,90,50,0,Math.PI/3,true);
//context.arc(230,90,50,0,Math.PI/3,false);
context.stroke();

context.fillStyle = "rgb(255,0,0)";
context.fillRect(100,100,100,100);
context.fillStyle = "rgb(100,100,100)";
context.fillRect(250,100,100,100);
context.fillStyle = "rgb(0,255,100)";
context.fillRect(400,100,100,100);

context.strokeStyle = "rgb(100,100,100)";
context.strokeRect(100,100,100,100);

var text = "Hello World!";
context.font = "30px arial";

//context.strokeText(text,40,40);
context.fillStyle = "#f3e522";
context.fillRect(100,100,100,100);
context.fillText(text,40,40);

canvas.prop("width",$(window).get(0).innerWidth);
canvas.prop("height",$(window).get(0).innerHeight);

context.fillRect(0,0,canvas.width(),canvas.height());
//context.clearRect(150,150,100,100);

context.strokeStyle = "#66ccff";
context.strokeRect(100,100,100,100);
context.save();

context.strokeStyle = "#22ee66";
context.strokeRect(250,100,100,100);

context.restore();
context.strokeRect(400,100,100,100);

context.fillRect(100,100,100,100);

context.translate(150,0);
context.fillstyle = "#hhccff";
context.fillRect(100,100,100,100);

context.translate(-50,-50);
context.scale(1.5,1.5);
context.fillRect(100,100,100,100);


//绘制出一个正方形
context.translate(300,300);
context.scale(2,1);
context.rotate(Math.PI/2);
context.fillRect(0,0,100,50);


context.transform(2,0,0,2,-100,-100);
context.fillRect(100,100,100,100);

//了解matrix
context.setTransform(1,0,0,1,0,0);
xScale = Math.cos(Math.PI/4);
ySkew = -Math.sin(Math.PI/4);
xSkew = Math.sin(Math.PI/4);
yScale = Math.cos(Math.PI/4);
xTrans = 200;
yTrans = 200;
context.transform(xScale,ySkew,xSkew,yScale,xTrans,yTrans);
context.fillRect(-50,-50,100,100);

//context.fillStyle = "rgb(63,169,245)";
context.fillRect(50,50,100,100);
//context.globalAlpha = 0.5;
//context.fillStyle = ""
context.fillRect(100,100,100,100);
//context.globalAlpha = 0.5;
context.fillRect(150,150,100,100);

context.fillStyle = "rgba(0,0,0,0.5)";
context.fillRect(300,300,100,100);
context.globalAlpha = 0.5;
context.fillRect(350,350,100,100);

//context.globalCompositeOperation = "destination-over";
context.fillStyle = "rgb(63,169,245)";//blue-destionation
context.fillRect(50,50,100,100);
//context.globalCompositeOperation = "source-atop";//atop有点类似蒙版
//context.globalCompositeOperation = "destination-atop";
//context.globalCompositeOperation = "source-in";//在source和destination交叉区域绘制source
//context.globalCompositeOperation = "destination-in";
//context.globalCompositeOperation = "source-out";//在source和destination交叉区域外绘制source
//context.globalCompositeOperation = "destination-out";
//context.globalCompositeOperation = "lighter";//重叠部分rgb相加,最大255
//context.globalCompositeOperation = "copy";//与顺序无关，只绘制源，覆盖掉目标
//context.globalCompositeOperation = "xor"//与lighter类似，但是重叠部分为透明


context.fillStyle = "rgb(255,123,172)";//pink-source
context.fillRect(100,100,100,100);

context.shadowBlur = 0;
context.shadowColor = "rgba(0,0,0,0.2)";
context.shadowOffsetX = 10;
context.shadowOffsetY = 10;
context.fillRect(50,50,100,100);

context.shadowColor = "rgb(0,0,0)";
//context.shadowOffsetX = 20;
//context.shadowOffsetY = 10;
context.lineWidth = 2;
context.shadowBlur = 10;
context.beginPath();
context.arc(100,100,50,0,2*Math.PI,false);
context.closePath();
context.strokeStyle = "rgb(0,0,0)";
context.stroke();

gradient = context.createLinearGradient(0,0,0,canvas.height());
gradient.addColorStop(0,"rgb(0,0,0)");
gradient.addColorStop(1,"rgb(255,255,255)");

context.fillStyle = gradient;
//context.fillRect(0,0,canvas.width(),canvas.height());
context.fillRect(500,500,100,100);

context.fillStyle = gradient;
//context.fillRect(0,0,canvas.width(),canvas.height());

//paint a triangle
//gradient = context.createRadialGradient(300,300,10,100,100,50);
gradient = context.createRadialGradient(700,350,100,700,350,800);
gradient.addColorStop(0,"rgb(0,0,0)");
gradient.addColorStop(1,"rgb(150,150,150)");

context.beginPath()
context.moveTo(350,500);
context.lineTo(1050,500);
context.lineTo(700,100);
context.closePath();
context.fill();

context.beginPath();
context.moveTo(50,250);
context.quadraticCurveTo(250,100,450,250);
context.stroke();

context.beginPath();
context.moveTo(50,250);
context.bezierCurveTo(150,50,350,450,450,250);
//context.closePath();
context.stroke();

dataURL = canvas.get(0).toDataURL();
img = $("<img></img>");
img.attr("src",dataURL);

canvas.replaceWith(img);

context.save();
context.fillRect(50,50,100,100);

context.fillStyle = "rgb(255,0,0)";
context.fillRect(100,100,100,100);

context.restore();
context.fillRect(150,150,100,100);

image = new Image();
image.src = "pic/1.jpg";
$(image).load(function(){
	context.shadowBlur = 30;
	context.shadowColor = "rgba(0,0,0,0.5)";
	context.setTransform(1,0,0,1,0,0);
	context.transform(-1,0,0,1,1150,0);
	//context.drawImage(image,50,50,800,500,(canvas.width()-image.width)/2+50,(canvas.height()-image.height)/2+50,800,500);
	context.drawImage(image,0,0);
	
})

canvas.click(function(e){
	canvasOffset = canvas.offset();
	canvasX = Math.floor(e.pageX-canvasOffset.left);
	canvasY = Math.floor(e.pageY-canvasOffset.top);
	imageData = context.getImageData(canvasX,canvasY,1,1);
	pixel = imageData.data;
	pixelColor = "rgba(" + pixel[0] + "," + pixel[1] + "," + pixel[2] + "," + pixel[3] + ")";
	//$("body").css("background-color",pixelColor);
	context.strokeStyle = pixelColor;
	context.clearRect(1000,300,300,300);
	context.lineWidth = 7;
	context.beginPath();
	context.arc(1150,400,50,0,2*Math.PI,false);
	context.closePath();
	context.stroke();
})

image = new Image();
image.src = "pic/1.jpg";
$(image).load(function(){
	context.drawImage(image,0,0);
})

imageData = context.createImageData(200,200);
pixels = imageData.data;
numPixels = imageData.width * imageData.height;
for(i=0;i<numPixels;i++){
	pixels[i*4] = Math.floor(Math.random()*255);
	pixels[i*4+1] = Math.floor(Math.random()*255);
	pixels[i*4+2] = Math.floor(Math.random()*255);
	pixels[i*4+3] = 255;
}
context.putImageData(imageData,0,0);

//随机绘制马赛克
	imageData = context.createImageData(500,500);
	pixels = imageData.data;
	numTileRows = 10;
	numTileCols = 10;
	tileWidth = imageData.width/numTileRows;
	tileHeight = imageData.height/numTileCols;
	for(i = 0;i<numTileRows;i++)
		for(j = 0;j<numTileCols;j++){
			red = Math.floor(Math.random()*255);
			green = Math.floor(Math.random()*255);
			blue = Math.floor(Math.random()*255);
			//ipos = (i*numTileCols+j)*tileWidth*tileHeight;
			for(k = 0;k<tileHeight;k++){
				//tpos = ipos + k*imageData.width;
				for(g = 0;g<tileWidth;g++){
					//rpos = tpos + g;
					trueX = j*tileWidth+g;
					trueY = i*tileHeight+k;
					pos = (trueY*imageData.width+trueX)*4;
					pixels[pos] = red;
					pixels[pos+1] = green;
					pixels[pos+2] =blue;
					pixels[pos+3] = 255;
				}
			}
		}
		context.putImageData(imageData,0,0);

//图片反相
image = new Image();
image.src = "pic/1.jpg";
$(image).load(function(){
	context.drawImage(image,0,50,1000,600,180,20,1000,600);
	imageData = context.getImageData(0,0,canvas.width(),canvas.height());
	pixels = imageData.data;//注意imageData.data不是一个传统意义上的数组，它的length属性不指它的长度，而是像素个数总和
	var numPixels = pixels.length;
	context.clearRect(0,0,canvas.width(),canvas.height());
	for(i=0;i<numPixels;i++){
		pixels[i*4] = 255-pixels[i*4];
		pixels[i*4+1] = 255-pixels[i*4+1];
		pixels[i*4+2] = 255-pixels[i*4+2];
	}
	context.putImageData(imageData,0,0);
})

//图片灰度，图片黑白
image = new Image();
image.src = "pic/1.jpg";
$(image).load(function(){
	context.drawImage(image,0,50,1000,600,180,20,1000,600);
	imageData = context.getImageData(0,0,canvas.width(),canvas.height());
	pixels = imageData.data;//注意imageData.data不是一个传统意义上的数组，它的length属性不指它的长度，而是像素个数总和
	var numPixels = pixels.length;
	context.clearRect(0,0,canvas.width(),canvas.height());
	for(i=0;i<numPixels;i++){
		average = (pixels[i*4] + pixels[i*4+1] +pixels[i*4+2])/3;
		pixels[i*4] = average;
		pixels[i*4+1] = average;
		pixels[i*4+2] = average;
	}
	context.putImageData(imageData,0,0);
})

//自定义图片像素化
	image = new Image();
	image.src = "pic/1.jpg";
	$(image).load(function(){
		context.drawImage(image,0,0,canvas.height(),canvas.height(),0,0,canvas.height(),canvas.height());
		imageData = context.getImageData(0,0,canvas.width(),canvas.height());
		pixels = imageData.data;
		context.clearRect(0,0,canvas.width(),canvas.height());
		numTileRows = 58;
		numTileCols = 25;
		tileWidth = Math.ceil(imageData.width/numTileRows);
		tileHeight = Math.ceil(imageData.height/numTileCols);
		
		for(r = 0;r<numTileRows;r++)
			for(c = 0;c<numTileCols;c++){
				x = c*tileWidth+tileWidth/2;
				y = r*tileHeight+tileHeight/2;
				pos = (Math.ceil(y)*imageData.width+Math.ceil(x))*4;
				red = pixels[pos];
				green = pixels[pos+1];
				blue = pixels[pos+2];
				context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
				//context.fillRect(x-tileWidth/2,y-tileHeight/2,tileWidth,tileHeight);
				context.beginPath();
				context.arc(x,y,Math.ceil(tileWidth/2),0,2*Math.PI,false);
				context.fill();
				}
		})


//视频像素化
	video = $("#myVideo");

	$("#play").click(function(){
		video.get(0).play();
	})


	$("#stop").click(function(){
		video.get(0).pause();
	})

	video.bind("play",function(){
		drawCanvas();
	})

var drawCanvas = function(){
	if(video.get(0).paused||video.get(0).ended)
		return false;	
	context.drawImage(video.get(0),0,0,1000,560);
	imageData = context.getImageData(0,0,canvas.width(),canvas.height());
	pixels = imageData.data;

	context.clearRect(0,0,canvas.width(),canvas.height);
	numTileRows = 36;
	numTileCols = 64;

	tileWidth = imageData.width/numTileCols;
	tileHeight = imageData.height/numTileRows;


	for(r = 0;r<numTileRows;r++)
		for(c = 0;c<numTileCols;c++){
			x = c*tileWidth+tileWidth/2;
			y = r*tileHeight+tileHeight/2;

			pos = (Math.floor(y)*imageData.width+Math.floor(x))*4;

			red = pixels[pos];
			green = pixels[pos+1];
			blue = pixels[pos+2];

			context.fillStyle = "rgb("+red+","+green+","+blue+")";
			//context.fillRect(x-tileWidth/2,y-tileHeight/2,tileWidth,tileHeight);
			context.beginPath();
			context.arc(x,y,tileWidth/2,0,2*Math.PI,false);
			context.closePath();
			context.fill();
		}

	setTimeout(drawCanvas,30);

		context.fillRect(shapes[i].x,shapes[i].y,shapes[i].width,shapes[i].height);
		shapes[i].x = Math.random()*canvasWidth;
		shapes[i].y = Math.random()*canvasHeight;
		shapes[i].width = shapes[i].height = Math.random()*50;	

	for(i = 0;i<20;i++){
		shape = new Shape();
		shape.x = Math.random()*canvasWidth;
		shape.y = Math.random()*canvasHeight;
		shape.width = shape.height = Math.random()*50;
		shapes.push(shape);
	}



}

	//context.clearRect(0,0,canvasWidth,canvasHeight);
	//context.fillRect(250+Math.random()*10-5,250+Math.random()*10-5,50,50);
	//angle+=1;
	//x = 400+100*Math.cos(angle*Math.PI/180);
	//y = 400+100*Math.sin(angle*Math.PI/180);
	//context.fillRect(x,y,1,1);


var canvas;
var context;
var playAnimation = true;
var startButton;
var stopButton;
var canvasWidth;
var canvasHeight;
var x = 0;
var shapes = new Array();
//var angle = 0;


$(document).ready(function(){
	canvas = $("#myCanvas");
	canvas.prop("width",$(window).get(0).innerWidth);
	canvas.prop("height",$(window).get(0).innerHeight);
	context = canvas.get(0).getContext("2d");

	canvasWidth = canvas.width();
	canvasHeight = canvas.height();

	startButton = $("#startAnimation");
	stopButton = $("#stopAnimation");

	stopButton.hide();



	startButton.click(function(){
		$(this).hide();
		stopButton.show();

		playAnimation = true;
		animate();
	})


	stopButton.click(function(){
		$(this).hide();
		startButton.show();
		playAnimation = false;
	})


	for(i=0;i<10;i++){
		x = Math.random()*250;
		y = Math.random()*250;
		width = height = Math.random()*30;
		shapes.push(new Shape(x,y,width,height));
	}









})



function animate(){
	if(playAnimation)
		setTimeout(animate,33);
	context.clearRect(0,0,canvasWidth,canvasHeight);
	for(i=0;i<shapes.length;i++){
		//context.fillRect(shapes[i].x,shapes[i].y,shapes[i].width,shapes[i].height);
		tmpshape = shapes[i];
		if(tmpshape.x<0)
			tmpshape.reverseX = false;
		else if(tmpshape.x+tmpshape.width>canvasWidth)
			tmpshape.reverseX = true;
		if(tmpshape.y<0)
			tmpshape.reverseY = false;
		else if(tmpshape.y+tmpshape.height>canvasHeight)
			tmpshape.reverseY = true;
		if(!tmpshape.reverseX)
			tmpshape.x += 2;
		else
			tmpshape.x -= 2;
		if(!tmpshape.reverseY)
			tmpshape.y += 2;
		else
			tmpshape.y -= 2;
		context.fillRect(tmpshape.x,tmpshape.y,tmpshape.width,tmpshape.height);
	}







}



var Shape = function(x,y,width,height){
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.reverseX = false;
	this.reverseY = false;
}


*/
var canvas;
var context;
var canvasOffsetX;
var canvasOffsetY;
var canvasWidth;
var canvasHeight;
var mouseDown = false;
var dropX;
var dropY;
var dashLength = 2;
var image = new Image();
var ratio;
var imageInitWidth = 600;
var headCanvas;
var headContext;
var headPWidth = 200;

window.onload = function(){
	img = $("img");
	ratio = parseInt(img.css("width"))/imageInitWidth;
	img.css("width","600");
	picWidth = $("img").css("width");
	picHeight = $("img").css("height");
	picX = $("img").css("left");
	picY = $("img").css("top");
	$("#imageCut").attr("width",picWidth).attr("height",picHeight).css("left",picX).css("top",picY);
	blackCover = $("<div></div");
	blackCover.css("width",picWidth).css("height",picHeight).css("left",picX).css("position","absolute").css("top",picY).css("background-color","rgba(0,0,0,0.7)").css("z-index","2");
	$("body").append(blackCover);
	canvas = $("#imageCut");
	context = canvas.get(0).getContext("2d");
	canvasOffsetX = parseInt(picX);
	canvasOffsetY = parseInt(picY);
	canvasWidth = parseInt(picWidth);
	canvasHeight = parseInt(picHeight);
	image.src = $("img").attr("src");
	headCanvas = $("#headPhoto");
	headContext = headCanvas.get(0).getContext("2d");
}

$("html").mousedown(function(e){
	if(e.pageX>=canvasOffsetX && e.pageX<=canvasOffsetX+canvasWidth && e.pageY>=canvasOffsetY && e.pageY<=canvasOffsetY+canvasHeight){
		mouseDown = true;
		dropX = e.pageX-canvasOffsetX;
		dropY = e.pageY-canvasOffsetY;
		//alert(dropX);
	}
})


$("html").mouseup(function(){
	mouseDown = false;
})


$("html").mousemove(function(e){
	if(!mouseDown)
		return;
	if(e.pageX<canvasOffsetX || e.pageY<canvasOffsetY || e.pageX>canvasOffsetX+canvasWidth || e.pageY>canvasOffsetY+canvasHeight)
		return;
	ex = e.pageX-canvasOffsetX;
	ey = e.pageY-canvasOffsetY;
	lengthX = Math.abs(ex-dropX);
	lengthY = Math.abs(ey-dropY);
	length = lengthX<lengthY?lengthX:lengthY;
	if(ex>dropX){
		dx = 1;		
		sx = dropX;
	}
	else{
		dx = -1;
		sx = dropX-length;
	}
	if(ey>dropY){
		dy = 1;
		sy = dropY;
	}
	else{
		dy = -1;
		sy = dropY-length;
	}



	context.clearRect(0,0,canvas.width(),canvas.height());
	context.strokeStyle = "rgb(255,255,255)";
	
	context.beginPath();
	context.moveTo(dropX,dropY);
	context.lineTo(dropX+dx*length,dropY);
	context.lineTo(dropX+dx*length,dropY+dy*length)
	context.lineTo(dropX,dropY+dy*length);
	context.lineTo(dropX,dropY);
	context.closePath();
	context.stroke();


	context.drawImage(image,sx*ratio,sy*ratio,length*ratio,length*ratio,sx,sy,length,length);
	//$("h1").html(sx);
	mx = (dropX*2+dx*length)/2;
	my = (dropY*2+dy*length)/2;

	for(x = dropX,y = my,cl = 0;cl<length;cl+=2*dashLength){
		context.beginPath();
		context.moveTo(x,y);
		context.lineTo(x+dx*dashLength,y);
		context.closePath();
		context.stroke();
		x += 2*dx*dashLength;
	}

	for(x = mx,y = dropY,cl = 0;cl<length;cl+=2*dashLength){
		context.beginPath();
		context.moveTo(x,y);
		context.lineTo(x,y+dy*dashLength);
		context.closePath();
		context.stroke();
		y += 2*dy*dashLength;
	}

	headCanvas.attr("width",headPWidth);
	headCanvas.attr("height",headPWidth);
	headContext.drawImage(image,sx*ratio,sy*ratio,length*ratio,length*ratio,0,0,headPWidth,headPWidth);

	$("h1").html(headCanvas.width());

})

