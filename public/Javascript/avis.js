export function ajouterListenerAvis()
{
    const pieceElemnts=document.querySelectorAll('.fiches article button');
    for(let i=0;i<pieceElemnts.length;i+=1)
    {
        pieceElemnts[i].addEventListener('click', async (event)=>{
            const id=event.target.dataset.id;
            const reponse=await fetch(`http://localhost:8081/${id}/avis`);
            const avis=await reponse.json();
        })
    }
}