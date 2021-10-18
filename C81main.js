canvas = 
document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

ctx.beginpath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 1;
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.arc(250, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(250,300, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 1;
ctx.rect(220, 180, 40, 0, 2* Math.PI);
ctx.stroke();

ctx.beginpath();
ctx.strokeStyle = "green";
ctx.lineWidth = 1;
ctx.rect(220, 250, 40, 0, 2* Math.PI);
ctx.stroke();