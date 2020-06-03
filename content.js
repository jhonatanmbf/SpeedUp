const interval = setInterval(()=>{
    const header =document.querySelector('._3auIg')
    if(header){
        console.log(header)
        clearInterval(interval)
        const button = document.createElement('button')
        
        button.innerHTML='2X'
        button.classList.add('AudioTime')
        
        button.addEventListener('click',()=>{
            const audios=document.querySelectorAll('audio')
            console.log(audios)
            audios.forEach((audio)=>{
                audio.playbackRate=2
                console.log(audios)
            })
        })
        header.appendChild(button)
    }
}, 1000)

