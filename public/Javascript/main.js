const playLists=await fetch('../../data/playList.json').then(playLists=>playLists.json());




const genererPieces=(playLists)=>
{
    const SectionFiches=document.querySelector('.fiches');
    const PiecesElemnts=document.createElement('div')

    for(let i=0;i<playLists.length;i+=1)
    {
        const article=playLists[i];
        

        const imageElement=document.createElement('img');
        imageElement.src=article.image;

        const titreElemnt=document.createElement('p');
        titreElemnt.innerHTML=article.titre;

        SectionFiches.appendChild(PiecesElemnts);
        PiecesElemnts.appendChild(imageElement);
        PiecesElemnts.appendChild(titreElemnt);


        
    }
}

genererPieces(playLists);
