$(document).ready(function() {
    function init() {
        var points = [];
        var lines = [];

        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var width = canvas.width = window.innerWidth;
        var height = canvas.height = window.innerHeight;
        var focal_length = 300;
        var needsUpdate = true;
        var mouse_angle_x;
        var mouse_angle_y;

        //set the 0,0 position of the canvas to the center of the canvas, making it like a cartesian plane
        context.translate(width/2, height/2);

        //M FRONT
        points[0]  = {x:-620, y:  300, z: 250 };
        points[1]  = {x:-620, y: -300, z: 250 };
        points[2]  = {x:-470, y: -300, z: 250 };
        points[3]  = {x:-320, y:  -50, z: 250 };
        points[4]  = {x:-170, y: -300, z: 250 };
        points[5]  = {x: -20, y: -300, z: 250 };
        points[6]  = {x: -20, y:  300, z: 250 };
        points[7]  = {x:-170, y:  300, z: 250 };
        points[8]  = {x:-170, y:  -50, z: 250 };
        points[9]  = {x:-245, y:  100, z: 250 };
        points[10] = {x:-395, y:  100, z: 250 };
        points[11] = {x:-470, y:  -50, z: 250 };
        points[12] = {x:-470, y:  300, z: 250 };
        //M BACK
        points[13]  = {x:-620, y:  300, z: -150 };
        points[14]  = {x:-620, y: -300, z: -150 };
        points[15]  = {x:-470, y: -300, z: -150 };
        points[16]  = {x:-320, y:  -50, z: -150 };
        points[17]  = {x:-170, y: -300, z: -150 };
        points[18]  = {x: -20, y: -300, z: -150 };
        points[19]  = {x: -20, y:  300, z: -150 };
        points[20]  = {x:-170, y:  300, z: -150 };
        points[21]  = {x:-170, y:  -50, z: -150 };
        points[22]  = {x:-245, y:  100, z: -150 };
        points[23]  = {x:-395, y:  100, z: -150 };
        points[24]  = {x:-470, y:  -50, z: -150 };
        points[25]  = {x:-470, y:  300, z: -150 };
        //W FRONT
        points[26]  = {x:  20, y:-300, z: 250 };
        points[27]  = {x:  20, y: 300, z: 250 };
        points[28]  = {x: 170, y: 300, z: 250 };
        points[29]  = {x: 320, y:  50, z: 250 };
        points[30]  = {x: 470, y: 300, z: 250 };
        points[31]  = {x: 620, y: 300, z: 250 };
        points[32]  = {x: 620, y:-300, z: 250 };
        points[33]  = {x: 470, y:-300, z: 250 };
        points[34]  = {x: 470, y:  50, z: 250 };
        points[35]  = {x: 395, y:-100, z: 250 };
        points[36]  = {x: 245, y:-100, z: 250 };
        points[37]  = {x: 170, y:  50, z: 250 };
        points[38]  = {x: 170, y:-300, z: 250 };
        //W BACK
        points[39]  = {x:  20, y:-300, z: -150 };
        points[40]  = {x:  20, y: 300, z: -150 };
        points[41]  = {x: 170, y: 300, z: -150 };
        points[42]  = {x: 320, y:  50, z: -150 };
        points[43]  = {x: 470, y: 300, z: -150 };
        points[44]  = {x: 620, y: 300, z: -150 };
        points[45]  = {x: 620, y:-300, z: -150 };
        points[46]  = {x: 470, y:-300, z: -150 };
        points[47]  = {x: 470, y:  50, z: -150 };
        points[48]  = {x: 395, y:-100, z: -150 };
        points[49]  = {x: 245, y:-100, z: -150 };
        points[50]  = {x: 170, y:  50, z: -150 };
        points[51]  = {x: 170, y:-300, z: -150 };

        function deg2rad(deg) {
            var rad = (deg * Math.PI)/180;
            return rad;
        }

        function set_render_position() {
            for(var i=0; i<points.length; i++) {
                var p = points[i], 
                    scale = focal_length / (focal_length + 1000);

                p.sx = scale * p.rx;
                p.sy = scale * p.ry;

            }
        }

        function setRenderVars() {
            for(var i =0; i <points.length; i++) {
                var p = points[i];
                p.rx = p.x;
                p.ry = p.y;
                p.rz = p.z;
            }
        }

        function update() {
            if(needsUpdate) {
                context.clearRect(-width/2, -height/2, width, height);
                set_render_position();

                //draw lines for M
                context.strokeStyle = '#fff';
                context.beginPath();
                drawline(0,1,2,3,4,5,6,7,8,9,10,11,12,0);
                context.stroke();
                context.beginPath();
                context.strokeStyle = '#666';
                drawline(13,14,15,16,17,18,19,20,21,22,23,24,25,13);
                drawline(13,0);
                drawline(14,1);
                drawline(15,2);
                drawline(16,3);
                drawline(17,4);
                drawline(18,5);
                drawline(19,6);
                drawline(20,7);
                drawline(21,8);
                drawline(22,9);
                drawline(23,10);
                drawline(24,11);
                drawline(25,12);
                context.stroke();

                //draw lines for W
                context.strokeStyle = '#fff';
                context.beginPath();
                drawline(26,27,28,29,30,31,32,33,34,35,36,37,38,26);
                context.stroke();
                context.beginPath();
                context.strokeStyle = '#666';
                drawline(39,40,41,42,43,44,45,46,47,48,49,50,51,39);
                drawline(26,39);
                drawline(27,40);
                drawline(28,41);
                drawline(29,42);
                drawline(30,43);
                drawline(31,44);
                drawline(32,45);
                drawline(33,46);
                drawline(34,47);
                drawline(35,48);
                drawline(36,49);
                drawline(37,50);
                drawline(38,51);
                context.stroke();

                needsUpdate = false;
            }
            requestAnimationFrame(update);
        }

        function drawline() {
            var p = points[arguments[0]];
            context.moveTo(p.sx, p.sy);
            for(var i=0; i<arguments.length; i++) {
                context.lineTo(points[arguments[i]].sx, points[arguments[i]].sy);
            }
        }

        $('#canvas').mousemove(function( event ) {
            var mouse_x = event.pageX;
            var mouse_y = event.pageY;
            var theta = Math.atan((mouse_x - canvas.width/2) / -1900);
            var delta = Math.atan((mouse_y - canvas.height/2) / -1900);

            var change_needed = false;

            if(mouse_angle_x != theta){
                mouse_angle_x = theta;
                change_needed = true;

            }
            if(mouse_angle_y != delta){
                mouse_angle_y = delta;
                change_needed = true;
            }

            if(change_needed){
                rotateXaxis(mouse_angle_y);
                rotateYaxis(mouse_angle_x);
                update();
            }
        });

        function rotateYaxis(r){
            var cos = Math.cos(r);
            var sin = Math.sin(r);
            for(var i=0; i<points.length; i++){
                var p = points[i];
                var x = (p.x * cos) - (p.z * sin);
                var z = (p.z * cos) + (p.x * sin);

                p.rx = x;
                p.rz = z;
            }

            needsUpdate = true;
        }
        function rotateXaxis(r){
            var cos = Math.cos(r);
            var sin = Math.sin(r);
            for(var i=0; i<points.length; i++){
                var p = points[i];
                var y = (p.y * cos) - (p.z * sin);
                var z = (p.z * cos) + (p.y * sin);

                p.ry = y;
                p.rz = z;
            }

            needsUpdate = true;
        }
        setRenderVars();
        update();
    }
    init();
    $( window ).resize(function() {		
        init();
    });
});
