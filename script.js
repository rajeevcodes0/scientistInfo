let imageContainers = document.getElementsByClassName("image-container");


let data = [
    {
        name:"💻Alan Kay",
        info: "Alan Kay, in full Alan Curtis Kay, (born May 17, 1940, Springfield, Massachusetts, U.S.), American computer scientist and winner of the 2003 A.M. Turing Award, the highest honour in computer science, for his contributions to object-oriented programming languages, including Smalltalk, and to personal computing."
    },
    {
        name:"💻Alan Turing",
        info: "Alan Turing, in full Alan Mathison Turing, (born June 23, 1912, London, England—died June 7, 1954, Wilmslow, Cheshire), British mathematician and logician who made major contributions to mathematics, cryptanalysis, logic, philosophy, and mathematical biology and also to the new areas later named computer science, cognitive science, artificial intelligence, and artificial life."
    },
    {
        name:"💻Barbara Liskov",
        info: "Barbara Liskov (born November 7, 1939 as Barbara Jane Huberman) is an American computer scientist who has made pioneering contributions to programming languages and distributed computing. Her notable work includes the development of the Liskov substitution principle which describes the fundamental nature of data abstraction, and is used in type theory (see subtyping) and in object-oriented programming. Her work was recognized with the 2008 Turing Award, the highest distinction in computer science. "
    },
    {
        name:"💻Dennis Ritche",
        info: "Dennis MacAlistair Ritchie (September 9, 1941 – c. October 12, 2011) was an American computer scientist. He created the C programming language and, with long-time colleague Ken Thompson, the Unix operating system and B programming language. Ritchie and Thompson were awarded the Turing Award from the ACM in 1983, the Hamming Medal from the IEEE in 1990 and the National Medal of Technology from President Bill Clinton in 1999. Ritchie was the head of Lucent Technologies System Software Research Department when he retired in 2007. He was the R in K&R C, and commonly known by his username dmr. "
    },
    {
        name:"💻Donald Knuth",
        info: "Donald Ervin Knuth (/kəˈnuːθ/ kə-NOOTH; born January 10, 1938) is an American computer scientist, mathematician, and professor emeritus at Stanford University. He is the 1974 recipient of the ACM Turing Award, informally considered the Nobel Prize of computer science. Knuth has been called the 'father of the analysis of algorithms'.He is the author of the multi-volume work The Art of Computer Programming. He contributed to the development of the rigorous analysis of the computational complexity of algorithms and systematized formal mathematical techniques for it. In the process he also popularized the asymptotic notation. In addition to fundamental contributions in several branches of theoretical computer science, Knuth is the creator of the TeX computer typesetting system, the related METAFONT font definition language and rendering system, and the Computer Modern family of typefaces. "
    },
    {
        name:"💻Jhon McCarthy",
        info: "John McCarthy, (born September 4, 1927, Boston, Massachusetts, U.S.—died October 24, 2011, Stanford, California), American mathematician and computer scientist who was a pioneer in the field of artificial intelligence (AI); his main research in the field involved the formalization of commonsense knowledge."
    },
    {
        name:"💻Jhon Von Newman",
        info: "John von Neumann (/vɒn ˈnɔɪmən/; Hungarian: Neumann János Lajos, pronounced [ˈnɒjmɒn ˈjaːnoʃ ˈlɒjoʃ]; December 28, 1903 – February 8, 1957) was a Hungarian-American mathematician, physicist, computer scientist, engineer and polymath. Von Neumann was regarded as perhaps the mathematician with the widest coverage of the subject in his time and was said to have been 'the last representative of the great mathematicians who were equally at home in pure and applied mathematics'. He integrated pure and applied sciences. "
    },
    {
        name:"💻Vint Cerf",
        info: "Widely known as a “Father of the Internet,” Cerf is the co-designer of the TCP/IP protocols and the architecture of the Internet. In December 1997, President Bill Clinton presented the U.S. National Medal of Technology to Cerf and his colleague, Robert E. Kahn, for founding and developing the Internet."
    },
    {
        name:"💻Ken Thompson",
        info: "Kenneth Lane Thompson (born February 4, 1943) is an American pioneer of computer science. Thompson worked at Bell Labs for most of his career where he designed and implemented the original Unix operating system."
    },
    {
        name:"💻Tim Bernes Lee",
        info: "Sir Timothy John Berners-Lee OM KBE FRS FREng FRSA FBCS (born 8 June 1955), also known as TimBL, is an English computer scientist best known as the inventor of the World Wide Web. He is a Professorial Fellow of Computer Science at the University of Oxford and a professor at the Massachusetts Institute of Technology (MIT). Berners-Lee proposed an information management system on 12 March 1989, then implemented the first successful communication between a Hypertext Transfer Protocol (HTTP) client and server via the Internet in mid-November."
    }
]

for(let i=0;i<imageContainers.length;i++){


    imageContainers[i].addEventListener("click",function(event){

        let scientistInfoContainer = document.getElementsByClassName("scientist-info-container")[0];
        //disabling click on screens that support hover
        // if(document.body.clientWidth>700){
        //     return;
        // }


        let allUnselectedContainers = document.querySelectorAll(":not(.selected).image-container");
        console.log(this.classList.contains("selected"));
        if(this.classList.contains("selected")){

            scientistInfoContainer.style.display="none";
            
            this.classList.remove("selected")

            allUnselectedContainers = document.querySelectorAll(":not(.selected).image-container");

            for(let i=0;i<allUnselectedContainers.length;i++){
                allUnselectedContainers[i].style.display="block";
            }


            let imageRows = document.getElementsByClassName("image-row");

            console.log(imageRows);
            //remove transform from the image rows so that fixed can be applied to the image container
            for(let i=0;i<imageRows.length;i++){
                if(i%2===0){

                    if(document.body.clientWidth<600){
                        imageRows[i].style.transform="translateX(1vh)";
                    }else{
                        imageRows[i].style.transform="translateX(20vh)";
                    }
                    
                }
            }


            return;

        }

        //remove the selected class from all the containers
        // for(let i=0;i<imageContainers.length;i++){
        //     imageContainers[i].classList.remove("selected");
        // }

        //then add the selected class to the clicked container
        this.classList.add("selected");

        let selectedScientistName = this.getElementsByClassName("name")[0].innerText;

        let selectedScientistInfo = data.filter((scientist)=>{
            return scientist.name === selectedScientistName;
        })[0].info;


        let scientistNameDiv = document.getElementsByClassName("scientist-name")[0];
        let scientistInfoDiv = document.getElementsByClassName("scientist-info")[0];

        scientistNameDiv.innerText = selectedScientistName;
        scientistInfoDiv.innerText = selectedScientistInfo;
        //remove the transform from all the image-rows
        let imageRows = document.getElementsByClassName("image-row");


        //remove transform from the image rows so that fixed can be applied to the image container
        for(let i=0;i<imageRows.length;i++){
            imageRows[i].style.transform="unset";
        }

        allUnselectedContainers = document.querySelectorAll(":not(.selected).image-container");

        for(let i=0;i<allUnselectedContainers.length;i++){
            allUnselectedContainers[i].style.display="none";
        }

        scientistInfoContainer.style.display="block";

    })
}