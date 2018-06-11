
let angle = 0;
const rect_width = 35;
let maxDistance;


function setup(){
    createCanvas(600, 600, WEBGL);
    maxDistance = dist(0, 0, 400, 400);
}


function draw() {
    background(175);
    translate(0, 240, -90);
    rotateX(-PI / 8);
    rotateY(-PI / 4);
    for(let z = 0; z < width; z += rect_width) {
        for(let x = 0; x < width; x += rect_width) {
            push();
            let distance = dist(x , z, width / 2, width / 2);
            let offset = map(distance, 0, maxDistance, 4, -4);
            const rect_height = map(sin(angle + offset), -1, 1, 0, 300);
            normalMaterial(250);
            translate(x - width , 0, z - height / 1.15);
            box(rect_width, rect_height, rect_width);
            pop();
        }
    }
    angle += 0.04;
}