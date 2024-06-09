import React from 'react';
import ProjTile from "./ProjTile";
import "../css/styles.css"

function Projects(props) {
    return (
        <>
            <div className={"projects container"}>
                <div className={"col"}>
                    <ProjTile
                        title={"SafeScroll Chrome Extension"}
                        subtitle={"Dubhacks 2023 Winner"}
                        description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
                        img={"https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/623/924/datas/original.png"}
                        url={"https://devpost.com/software/safescroll"}
                    />
                    <ProjTile
                        title={"Title"}
                        subtitle={"Subtitle"}
                        description={"blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"}
                        img={"https://ghiblicollection.com/cdn/shop/files/MailPopUpImage@2x.png?v=1688148914"}
                        url={"https://www.google.com"}
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
                        img={"../images/icon.png"}
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