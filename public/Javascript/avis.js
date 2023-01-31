export function ajouterListenerAvis()
{
    const pieceElemnts=document.querySelectorAll('.fiches article button');
    for(let i=0;i<pieceElemnts.length;i+=1)
    {
        pieceElemnts[i].addEventListener('click', async (event)=>{
            const id=event.target.dataset.id;
            const reponse=await fetch(`http://localhost:8081/pieces/${id}/avis`);
            const avis=await reponse.json();

            const avisElement=event.target.parentElemnt;
            const element=document.createElement('p');

            for(let i=0;i<avis.length;i+=1)
            {
                element.innerHTML +=`${avis[i].utilisateur} : ${avis[i].commentaire}`;
            }
            avisElement.appendChild(element);
        })
    }
}