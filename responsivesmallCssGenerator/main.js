
        //Getting Element From body 
        const box = document.querySelector(".box");
        const width = document.querySelector(".width input");
        const height = document.querySelector(".height input");
        const opacity = document.querySelector(".opacity input");
        const borderRadius = document.querySelector(".border-radius input");
        //Getting Element for Box-Shadow
        const bx = document.querySelector(".x");
        const by= document.querySelector(".y");
        const blurRadius = document.querySelector(".br");
        const spredRadius = document.querySelector(".sr");
        const color = document.querySelector(".color");
        const getStyle = document.querySelector(".getStyle");
        const reset = document.querySelector(".reset");
        width.addEventListener("input",()=>
        {
            let val = +width.value;
            val+="px";
            box.style.width = val;
        })
        height.addEventListener("input",()=>
        {
            let val = +height.value;
            val+="px";
            box.style.height = val;
        })
        opacity.addEventListener("input",()=>
        {
            let val = +opacity.value;
            val=val/100;
            box.style.opacity = val;
        })
        borderRadius.addEventListener("input",()=>
        {
            let val = borderRadius.value;
            val+="px";
            document.documentElement.style.setProperty("--borderRadius",val);
        })
        bx.addEventListener("input",()=>
        {
            let val = +bx.value;
            val+="px";
            document.documentElement.style.setProperty("--x",val)
        })
        by.addEventListener("input",()=>
        {
            let val = +by.value;
            val+="px";
            document.documentElement.style.setProperty("--y",val)
        })
        blurRadius.addEventListener("input",()=>
        {
            let val = +blurRadius.value;
            val+="px";
            document.documentElement.style.setProperty("--bR",val)
        })
        spredRadius.addEventListener("input",()=>
        {
            let val = +spredRadius.value;
            val+="px";
            document.documentElement.style.setProperty("--sR",val)
        })
        color.addEventListener("input",()=>
        {
            let val = color.value;
            document.documentElement.style.setProperty("--clr",val)
        })
        getStyle.addEventListener("click",()=>
        {
            let code = generate();
            navigator.clipboard.writeText(code);
            alert("Copy to Clipboard");
            
        })
        function generate()
        {
            let str= "";
            let arr = ["height","width","opacity","backgroundColor","boxShadow"]
            arr.forEach((pro)=>
            {
                str+="\t";
                str+=pro;
                str+=":"
                str+=getComputedStyle(box)[pro];
                str+=";\n";
            })
            let html = 'paste in html  <div class="box"></div>\n';
            let css= `paste css make sure to change name of backgroundColor to background-color\n
            and boxShadow to box-shadow\n
            .box{\n${str}\n}`;
            return(html+css);

        }
        reset.addEventListener("click",()=>
        {

            document.documentElement.style.setProperty("--x",0);
            document.documentElement.style.setProperty("--y",0);
            document.documentElement.style.setProperty("--bR",0);
            document.documentElement.style.setProperty("--sR",0);
            document.documentElement.style.setProperty("--clr","black");
            document.documentElement.style.setProperty("--borderRadius",0);
            box.style.height = "100px";
            box.style.width = "100px";
            box.style.opacity = "1";
        })