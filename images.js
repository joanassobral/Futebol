const arrayRange = (start,stop,step) => 
    Array.from(
        {length: (stop-start) / step+1},
        (value,index)=> start + index * step
    );

let numberArray = arrayRange(1,36,1)

let doubleImgArray = [5,12,14,15,17,19,20,21,22,25,29,30,34];
        let doubleImgClickLeft = [14,17,20];
        let doubleImgClickBoth = [5,19,22];

let smallImgArray = [5, 6, 12, 14, 15, 17, 18, 20, 21, 22, 25, 29, 30, 33];
let mediumImgArray = [0, 3, 4, 7, 8, 9, 10, 11, 13, 16, 19, 26, 27, 28, 31, 32, 34, 35, 36];
let bigImgArray = [1, 2, 23, 24];
                 //                              !       5                                      10                                      15               !                      20                                      25              27                      30                                      35
let clickableAreaLeft = [226,    460,    180,   130,    60,     50,     130,    115,    95,     92,     53,     121,    40,     58,     77,     118,    48,     31,     90,     46,     63,     24,     120,    138,    20,     95,     58,     108,    20,     84,     30,     66,     30,     5,      5,      231];
let clickableAreaTop = [180,     235,    95,    25,     25,     125,    40,     60,     95,     194,    202,    29,     10,     58,     40,     155,    35,     10,     33,     85,     35,     5,      50,     220,    270,    70,     5,      50,     35,     80,     85,     70,     85,     190,    105,    97];
let clickableAreaWidth = [5,     15,     180,   80,     80,     45,     150,    50,     120,    19,     43,     7,      215,    47,     70,     10,     30,     78,     20,      7,      10,     56,     220,    28,     75,     23,     68,     30,     65,     20,     50,     65,     10,     185,    280,    78];
let clickableAreaHeight = [5,    15,     55,    30,     30,     55,     150,    60,     50,     19,     43,     7,      100,    45,     55,     10,     65,     85,     56,     7,      23,     56,     180,    28,     88,     23,     80,     100,    145,    35,     50,     190,    30,     60,     55,     15];
let clickableAreaBorder = [50,   50,     0,     0,      20,     0,      -7,     20,     0,      50,     50,     50,     20,     50,     10,     50,     10,     50,     50,     50,     30,     50,     40,     50,     20,     50,     0,      30,     10,     10,     10,     20,     30,     0,      0,      0];
let clickableAreaRotate = [0,    0,      0,     0,      0,      0,      0,      0,      -7,     0,      0,      0,      0,      0,      0,      0,      25,     0,      2,      0,      -38,    0,      0,      0,      0,      0,      -7,     25,     0,      0,      0,      0,      20,     13,     -15,    -3];


let frame_container = document.getElementById("frame_container");
let current_page = document.getElementById("current_page");
let current_page_number = 1;


function imageChange(){
            var index = Math.floor(Math.random()*numberArray.length);

            function setImgSize(img_element){
                if (smallImgArray.includes(numberArray[index])){
                    img_element.style.minHeight = "120vw"
                    img_element.style.minWidth = "120vw"
                }
                if (mediumImgArray.includes(numberArray[index])){
                    img_element.style.minHeight = "200vw"
                    img_element.style.minWidth = "200vw"
                    
                }
                if (bigImgArray.includes(numberArray[index])){
                    img_element.style.minHeight = "300vw"
                    img_element.style.minWidth = "300vw"
                }
            }

            function buildClickableArea(clickableArea,top,left,width,height,borderRadius,rotate){
                    clickableArea.classList.add("clickableArea")
                    clickableArea.style.top = top + "vw";
                    clickableArea.style.left = left + "vw";
                    clickableArea.style.width = width + "vw";
                    clickableArea.style.height = height + "vw";
                    clickableArea.style.borderRadius = borderRadius + "vw";
                    clickableArea.style.transform = "rotate(" + rotate + "deg)";
                    clickableArea.addEventListener("click",()=>{
                        if(current_page_number == 37){
                            location.replace("end.html");
                        } else {
                                imageChange()
                        }
                    });
            }

            function placeClickableArea2(clickableArea2){

                let top; let left; let width; let height; let borderRadius; let rotate;

                if (numberArray[index] == 5){
                    top = 40; left = 87; width = 45; height = 45; borderRadius = 50; rotate = 0;
                } else if (numberArray[index] == 19){
                    top = 116; left = 65; width = 55; height = 38; borderRadius = 0; rotate = 2;
                } else if (numberArray[index] == 22){
                    top = 62; left = 37; width = 50; height = 77; borderRadius = 0; rotate = 15;
                } else if (numberArray[index] == 27){
                    top = 112; left = 72; width = 68; height = 48; borderRadius = 0; rotate = -5;
                }
                buildClickableArea(clickableArea2,top,left,width,height,borderRadius,rotate);
            }

                frame_container.innerHTML = "";
                    current_page_number++;
                    current_page.innerText = current_page_number;

                if(doubleImgArray.includes(numberArray[index])){

                    let frame_left = document.createElement("div");
                        frame_left.classList.add("frame_halfscreen");
                        frame_left.id = "frame_halfscreen_left";
                        frame_container.appendChild(frame_left)

                    let frame_right = document.createElement("div");
                        frame_right.classList.add("frame_halfscreen");
                        frame_right.id = "frame_halfscreen_right";
                        frame_container.appendChild(frame_right)

                        let image_left = document.createElement("img");
                            setImgSize(image_left)
                            image_left.src = "Images/" + numberArray[index] + ".png";
                            frame_left.appendChild(image_left);

                        let image_right = document.createElement("img");
                            setImgSize(image_right)
                            image_right.src = "Images/" + numberArray[index] + "a.png";
                            frame_right.appendChild(image_right);

                        let clickableArea = document.createElement("div")
                            buildClickableArea(clickableArea,clickableAreaTop[index],clickableAreaLeft[index],clickableAreaWidth[index],clickableAreaHeight[index],clickableAreaBorder[index],clickableAreaRotate[index])


                            if(doubleImgClickLeft.includes(numberArray[index])){
                                frame_left.appendChild(clickableArea)

                            } else if(doubleImgClickBoth.includes(numberArray[index])) {
                                frame_left.appendChild(clickableArea)

                                let clickableArea2 = document.createElement("div");
                                placeClickableArea2(clickableArea2);
                                    frame_right.appendChild(clickableArea2);

                            } else {
                                frame_right.appendChild(clickableArea)
                            }

                } else {

                    let frame_full = document.createElement("div");
                        frame_full.classList.add("frame_fullscreen");
                        frame_container.appendChild(frame_full)

                    let full_page_image = document.createElement("img");
                        setImgSize(full_page_image)
                        full_page_image.src = "Images/" + numberArray[index] + ".png";
                        frame_full.appendChild(full_page_image);

                    let clickableArea = document.createElement("div")
                        buildClickableArea(clickableArea,clickableAreaTop[index],clickableAreaLeft[index],clickableAreaWidth[index],clickableAreaHeight[index],clickableAreaBorder[index],clickableAreaRotate[index])

                        frame_full.appendChild(clickableArea);
                        
                    if (numberArray[index] == 27){
                        let clickableArea2 = document.createElement("div");
                                    placeClickableArea2(clickableArea2);
                                    frame_full.appendChild(clickableArea2);
                        let clickableArea3 = document.createElement("div");
                                    buildClickableArea(clickableArea3,268,112,18,22,20,-5)
                                    frame_full.appendChild(clickableArea3);
                    }

                }

                if(current_page_number == 2){
                    makeTextbox(intro_title_pt,intro_pt,intro_title_eng,intro_eng);
                }else if(current_page_number == 3){
                    makeTextbox(history_title_pt,history_pt,history_title_eng,history_eng);
                } else if(current_page_number == 37){
                    makeTextbox("",end_pt,"",end_eng);
                } else{
                    if(numberArray[index] == 12){
                        makeTextbox("",a_pt,"",a_eng);
                    }
                    if(numberArray[index] == 14){
                        makeTextbox("",b_pt,"",b_eng);
                    }
                    if(numberArray[index] == 15){
                        makeTextbox("",c_pt,"",c_eng);
                    }
                    if(numberArray[index] == 19){
                        makeTextbox("",d_pt,"",d_eng);
                    }
                    if(numberArray[index] == 30){
                        makeTextbox("",e_pt,"",e_eng);
                    }
                }
                

                numberArray.splice(index,1);
                clickableAreaTop.splice(index,1);
                clickableAreaLeft.splice(index,1);
                clickableAreaWidth.splice(index,1);
                clickableAreaHeight.splice(index,1);
                clickableAreaBorder.splice(index,1);
                clickableAreaRotate.splice(index,1);

}

let firstClickableArea = document.getElementById("firstClickableArea")
    firstClickableArea.addEventListener("click",()=>{
    imageChange()
})