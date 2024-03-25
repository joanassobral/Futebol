let imageListContainer = document.getElementById("imageListContainer");
let names = ["Marcelo Gomes dos Santos", "Elinton Firmino de Almeida", "Julian Germain", "Leila Aparecida Mendes", "Emerson Teixeira", "Paulo Murilo Barbosa Fernandes", "Marcos Antônio Barbosa dos Santos", "Carlos André Cecilio", "Fabiano Libério de Oliveira", "Alcidimar Alice do Vale", "Helder Júnior da Silva", "Gleison da Silva Luís", "Michel Luís dos Santos", "Marcos Roberto Soares dos Santos", "David Borges Júnior", "Janaína Soares dos Santos", "Diego Verner dos Santos", "José de Paulo Antônio da Silva", "Robson Jonas Divino Nazário", "Jeferson Jesus dos Santos", "Andre Libério de Oliveira", "William dos Santos", "Daniel Luís da Silva", "José Marcelo da Silva", "Aldair José Antônio da Silva", "Carlos André Cecílio", "Murilo Godoy", "Beluzene Aparecida Fernandez", "Paulo Henrique de Souza", "Leandro Xavier de Souza", "Jaqueline da Silva"];
let firstimgIDs = ["0.png","1.png","2.png","5.png","5a.png","6.png","7.png","8.png","10.png","11.png","12.png","12a.png","13.png","15.png","15a.png","16.png","17a.png","19.png","19a.png","20.png","21.png","22.png","24.png","26.png","28.png","30.png","31.png","32.png","33.png","34.png","35.png"]

let imgLists = [ ["0.png", "4.png"],
                 ["1.png", "14.png","18.png"],
                 ["2.png","3.png","14a.png","25.png","25a.png","36.png"],
                 ["5.png","17.png"],
                 ["5a.png","9.png","23.png"]]


let frame_container = document.getElementById("frame_halfscreen_right_end");

for(i=0;i<names.length;i++){

    let name = document.createElement("p")
        name.innerText = names[i]
        name.classList.add("imageListName")
        imageListContainer.appendChild(name)

        let img1src = "Images/" + firstimgIDs[i];

        name.addEventListener("click",()=>{
            frame_container.innerHTML = ""

            let img1 = document.createElement("img");
                img1.classList.add("imageListImg")
                img1.src = img1src;
                frame_container.appendChild(img1);
            
        })
}