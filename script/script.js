//탭 제목 클릭 시 탭 활성화 디자인 적용하기(border)
//탭 제목 클릭 시 관련 탭내용 보이기/나머지 숨기기
const btn = document.querySelectorAll('.category a')
const tab = document.querySelectorAll('.tab_content .tab')
const after = document.querySelectorAll('catergoty a::after')
for(let i of tab){i.style.display='none'}
tab[0].style.display = 'flex'

btn.forEach((i, index)=>{
    console.log(i,index)
    i.addEventListener('mouseover',(event)=>{
        event.preventDefault(); //href 기능 막기
        for(let i of tab){i.style.display='none'}
        tab[index].style.display = 'flex'
    })
})
btn.forEach((i, index)=>{
    i.addEventListener('mouseover', ()=>{
        for(let j of after){j.style.display='none'}
        after.style.display = 'flex'
    })
})