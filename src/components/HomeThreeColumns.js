import React, {useState,useEffect} from "react";
import ThreePartArticle from "./ThreePartArticle";

const HomeThreeColumns = () => {

    const [activity, setActivity] = useState(0)
    const [organizations, setOrganizations] = useState(0)
    const [collection, setCollection] = useState(0)

    const API = "http://localhost:3000";

    useEffect(()=>{

        fetch(`${API}/db`)

            .then(response => response.json())

            .then(data => {

                let result = 0;

                for(let i=0; i<data.activity.length; i++){

                    result = result + data.activity[i].cast_bag;

                }

                setActivity(result)

                setCollection(data.collection.length)

                setOrganizations(data.organizations.length)

            })

            .catch(error => {
                console.log(error);
            });
    });



    return (
        <>
           <section className={"homeThreeColumns"}>
               <ThreePartArticle articleClassName={"threeColumnArticle first"}
                                 articleTitle={activity}
                                 articleHeader={"ODDANYCH WORKÓW"}
                                 articleContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non nibh urna. Mauris vitae sapien mauris."}
               />
               <ThreePartArticle articleClassName={"threeColumnArticle second"}
                                 articleTitle={organizations}
                                 articleHeader={"WSPARTYCH ORGANIZACJI"}
                                 articleContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non nibh urna. Mauris vitae sapien mauris."}
               />
               <ThreePartArticle articleClassName={"threeColumnArticle third"}
                                 articleTitle={collection}
                                 articleHeader={"ZORGANIZOWANYCH ZBIÓREK"}
                                 articleContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non nibh urna. Mauris vitae sapien mauris."}
               />

           </section>
        </>
    );
};
export default HomeThreeColumns;