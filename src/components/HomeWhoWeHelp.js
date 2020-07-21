import React, {useEffect, useState} from "react";
import FunctionButton from "./FunctionButton";
import ThreePartArticle from "./ThreePartArticle";


const HomeWhoWeHelp = () => {
    const [displayed, setDisplayed] = useState(1);

    const [pageCount, setPageCount] = useState(1);

    const [pageDisplay, setPageDisplay] = useState(0)

    const [collectionData, setCollectionData] = useState(null)

    const [organizationsData, setOrganizationsData] = useState(null)

    const [foundationData, setFoundationData] = useState(null)


    const [data, SetData] = useState(null)


    const whoWeHelpDescriptionArray = [
        "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra vitae mi eu pulvinar. Pellentesque finibus pellentesque mauris a semper. Nunc vitae ullamcorper ex, in fermentum elit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing. Vivamus viverra vitae mi eu pulvinar. Pellentesque finibus pellentesque mauris a semper. Nunc vitae ullamcorper ex, in fermentum elit."
    ]

    const whoWeHelpArticleType = [
        "Fundacja",
        "Organizacja",
        "Zbiórka"
    ]

    const API = "http://localhost:3000";

// Pobranie damych z bazy.
    useEffect(() => {
        databaseConnect();
        SetData(organizationsData)

    }, []);


    // Seter artykułów ustawia odpowiednie dane do hooks na podstawie których renderują się odpowiednie artykuły.

    const ArticleSeter=(data,display)=>{
        SetData(data)
        setDisplayed(display)
        setPageDisplay(0)
        let result;
        result = data.length / 3;
        if (result <= 1) {
            return setPageCount(0)
        } else if (result > Math.round((result))) {
            return setPageCount(Math.round((result)) + 1)
        } else {
            return setPageCount(Math.round(result))
        }
    }


    const databaseConnect = () => {

        fetch(`${API}/db/`)

            .then(response => response.json())

            .then(data => {
                setCollectionData(data.collection)

                setOrganizationsData(data.organizations)

                setFoundationData(data.fundation)

                SetData(data.organizations)

                ArticleSeter(data.organizations,1)

            })
            .catch(error => {
                console.log(error);
            });
    }

    // Fabryka artykułów.


   let whoWeHelpArticle;
   if(data !== null){
       if(data.length < 3){
           whoWeHelpArticle= (
               <>
                   {data.map((item) => (
                       <ThreePartArticle
                           articleClassName={"who_we_help_article"}
                           articleTitle={`${whoWeHelpArticleType[displayed]}: ${item.name}`}
                           articleHeader={item.request}
                           articleContent={item.purpose}
                       />
                   ))}
               </>
           )

       }else{
           whoWeHelpArticle= (
               <>
                   {data[pageDisplay*3] === undefined ? null :
                       <ThreePartArticle articleClassName={"who_we_help_article"}
                                         articleTitle={`${whoWeHelpArticleType[displayed]}: ${data[pageDisplay*3].name}`}
                                         articleHeader={data[pageDisplay*3].request}
                                         articleContent={data[pageDisplay*3].purpose}
                       />
                   }

                   {data[pageDisplay * 3 + 1] === undefined ? null :
                       <ThreePartArticle articleClassName={"who_we_help_article"}
                                         articleTitle={`${whoWeHelpArticleType[displayed]}: ${data[pageDisplay * 3 + 1].name}`}
                                         articleHeader={data[pageDisplay * 3 + 1].request}
                                         articleContent={data[pageDisplay * 3 + 1].purpose}
                       />
                   }

                   {data[pageDisplay * 3 + 2] === undefined ? null :
                       <ThreePartArticle articleClassName={"who_we_help_article"}
                                         articleTitle={`${whoWeHelpArticleType[displayed]}: ${data[pageDisplay * 3 + 2].name}`}
                                         articleHeader={data[pageDisplay * 3 + 2].request}
                                         articleContent={data[pageDisplay * 3 + 2].purpose}
                       />
                   }

               </>
           )
       }
   }

// Wyliczenie i utworzenie ile guzików dla stron wygenerować.
   let PageButton = [] ;
   if(pageCount !== 0){
     for(let i = 0; i < pageCount; i++){
         PageButton.push(i)
     }
   }

// przełączenie na inna sekcje i pobranie danych z bazy.
    const handleFoundationClick = () => {

        ArticleSeter(foundationData,0)

    }

   const handleOrganisationClick = () => {

       ArticleSeter(organizationsData,1)
    }


   const handleCollectionClick =() =>{

       ArticleSeter(collectionData,2)

   }

    return (
        <>
            <section className={'who_We_Help_Section'} name={"who_we_help"}>
                <article className={'who_we_help_content_article'}>
                    <h2 className={"who_we_help_heading"}>Komu pomagamy ?</h2>
                    <div className={'who_we_help_button_container'}>
                        <FunctionButton buttonClassName={`fundation_button who_we_help_navigation ${displayed === 0 ? "active" :""}`} buttonFunction={()=>handleFoundationClick()} buttonText={'Fundacjom'} />
                        <FunctionButton buttonClassName={`organizations_button who_we_help_navigation ${displayed === 1 ? "active" :""}`} buttonFunction={()=>handleOrganisationClick()} buttonText={'Organizacjom pozarządowym'} />
                        <FunctionButton buttonClassName={`local_collection_button who_we_help_navigation ${displayed === 2 ? "active" :""}`} buttonFunction={()=>handleCollectionClick() } buttonText={'Lokalnym zbiórkom'} />
                    </div>
                    <div className={'who_we_help_content_container'}>
                        <h2 className={'who_we_help_description'}>{whoWeHelpDescriptionArray[displayed]}</h2>
                        {whoWeHelpArticle}
                        {pageCount === 0 ? null :
                            <div className={'who_we_help_button_container'} >
                                {PageButton.map((pageNumber) => (
                                    <FunctionButton
                                        key={pageNumber}
                                        buttonClassName={`who_we_help_page_button ${pageNumber === pageDisplay ? "active" :""}`}
                                        buttonFunction={() => setPageDisplay(pageNumber)}
                                        buttonText={pageNumber + 1}
                                    />
                                ))}
                            </div>
                        }
                    </div>
                </article>
            </section>
        </>
    )
}

export default HomeWhoWeHelp;
