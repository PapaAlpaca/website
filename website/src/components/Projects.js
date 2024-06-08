import React from 'react';
import ProjTile from "./ProjTile";
import "./Projects.css"

function Projects(props) {
    return (
        <>
            <div className={"container"}>
                <div className={"col"}>
                    <ProjTile
                        title={"Title"}
                        subtitle={"Subtitle"}
                        description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
                        img={"https://soyacincau.com/wp-content/uploads/2020/09/200925-ponyo049.jpg"}
                        url={"www.google.com"}
                    />
                    <ProjTile
                        title={"Title"}
                        subtitle={"Subtitle"}
                        description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
                        img={"https://ghiblicollection.com/cdn/shop/files/MailPopUpImage@2x.png?v=1688148914"}
                        url={"www.google.com"}
                    />
                </div>
                <div className={"col"}>
                    <ProjTile
                        title={"Title 2"}
                        subtitle={"Subsubtitle"}
                        description={"ahdskhgljkahgdkjlhgjkahfjkhalkg hahkldhgjklahjklghadjklsfhjkalghe uwiahlgkjdshguirehaljkdhsj kghjkaelhsiuodlghejlakhsjdfuiel ahgjkdahsdfuilehuailgrhjks ldhfjkaghjkrelahjfksdalf"}
                        img={"https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg"}
                    />
                    <ProjTile
                        title={"Title"}
                        subtitle={"Subtitle"}
                        description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
                        img={"https://ghiblicollection.com/cdn/shop/products/Howls_Cover_SB_72dpi.png?v=1675275651"}
                        url={"www.google.com"}
                    />
                </div>
            </div>
        </>
        // window.width <= 100 ? oneCol : doubleCol
        // <>
        //     <div className={"container"}>
        //         <ProjTile
        //             title={"Title"}
        //             subtitle={"Subtitle"}
        //             description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
        //             img={"https://soyacincau.com/wp-content/uploads/2020/09/200925-ponyo049.jpg"}
        //             url={"www.google.com"}
        //         />
        //         <ProjTile
        //             title={"Title 2"}
        //             subtitle={"Subsubtitle"}
        //             description={"ahdskhgljkahgdkjlhgjkahfjkhalkg hahkldhgjklahjklghadjklsfhjkalghe uwiahlgkjdshguirehaljkdhsj kghjkaelhsiuodlghejlakhsjdfuiel ahgjkdahsdfuilehuailgrhjks ldhfjkaghjkrelahjfksdalf"}
        //             img={"https://upload.wikimedia.org/wikipedia/commons/7/78/Image.jpg"}
        //         />
        //     </div>
        //     <div className={"container"}>
        //         <ProjTile
        //             title={"Title"}
        //             subtitle={"Subtitle"}
        //             description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
        //             img={"https://soyacincau.com/wp-content/uploads/2020/09/200925-ponyo049.jpg"}
        //         />
        //         <ProjTile
        //             title={"Title 2"}
        //             subtitle={"Subsubtitle"}
        //             description={"ahdskhgljkahgdkjlhgjkahfjkhalkg hahkldhgjklahjklghadjklsfhjkalghe uwiahlgkjdshguirehaljkdhsj kghjkaelhsiuodlghejlakhsjdfuiel ahgjkdahsdfuilehuailgrhjks ldhfjkaghjkrelahjfksdalf"}
        //             img={""}
        //         />
        //     </div>
        // </>
    );
}

export default Projects;