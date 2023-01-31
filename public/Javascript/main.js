import { ajouterListenerAvis } from "./avis.js";

const reponse=await fetch('../../data/playList.json');
const playLists=await reponse.json();


ajouterListenerAvis();

const genererPieces=(playLists)=>
{
    
    

    for(let i=0;i<playLists.length;i+=1)
    {
        const article=playLists[i];

        const SectionFiches=document.querySelector('.fiches');
        const PiecesElemnts=document.createElement('article')
    
        PiecesElemnts.classList.add("personalize")
        

        const imageElement=document.createElement('img');
        imageElement.src=article.image;

        const titreElemnt=document.createElement('p');
        titreElemnt.innerText=article.titre;

        const avisBouton=document.createElement('button');
        avisBouton.textContent='ajouter un avis'
        avisBouton.dataset.id=article.id;

        SectionFiches.appendChild(PiecesElemnts);
        PiecesElemnts.appendChild(imageElement);
        PiecesElemnts.appendChild(titreElemnt);
        PiecesElemnts.appendChild(avisBouton);
    
    }
    
}

genererPieces(playLists);

const btnTrier=document.createElement('button')
btnTrier.textContent='trier le element';
btnTrier.style.color='white'
btnTrier.addEventListener('click',()=>{
    const piecesOrdonee=Array.from(playLists);
    piecesOrdonee.sort((a,b)=>a.prix -b.prix);

    document.querySelector('.fiches').innerHTML="";
    genererPieces(piecesOrdonee);
})

PiecesElemnts.appendChild(btnTrier);


const btnFilter=document.querySelector('.btnFilter')
btnFilter.addEventListener('click',()=>{
    const piecesFilter=playLists.filter((playList)=>playList.prix<30)

    document.querySelector('.fiches').innerHTML="";
    genererPieces(piecesFilter);
})
