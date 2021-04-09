document.querySelectorAll('.accordion__button').forEach((item)=>{
    item.addEventListener('click',()=>{    //Evento de click
        let accordionCollapse=item.nextElementSibling;
        if(!item.classList.contains('open')){
            accordionCollapse.style.display='block';
            let accordionHeight = accordionCollapse.clientHeight;
            setTimeout(() => {
                accordionCollapse.style.height=accordionHeight+'px';
                accordionCollapse.style.display="";
            }, 1);

            accordionCollapse.classList='accordion__collapse collapsing';

            setTimeout(() => {
                accordionCollapse.classList='accordion__collapse collapse open'
            }, 300);
        }
        else{
            accordionCollapse.classList='accordion__collapse collapsing';
            
            setTimeout(() => {
                accordionCollapse.style.height='0px';
            }, 1);

            setTimeout(() => {
                accordionCollapse.classList='accordion__collapse collapse'
                accordionCollapse.style.height="";
            }, 300);
        }

        item.classList.toggle('open')
    });
});