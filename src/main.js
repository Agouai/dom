const after=dom.create("<div id=after>after</div>")
console.log(after)

dom.after(test,after)

const before=dom.create("<div id=before>before</div>")
console.log(before)
dom.before(after,before)

const child=dom.create("<div id=child>child</div>")
dom.append(after,child)
console.log(child)

const parent=dom.create("<div id=parent>parent</div>")
dom.wrap(before,parent)

const remove1=dom.create("<div id=remove1>remove1</div>")
dom.append(remove,remove1)
dom.remove(remove1)

//const empty1=dom.empty(window.empty) 为什么这里把爸爸也删除掉了
//console.log(empty1)//这里的疑问是为什么empty最后return了一个数组，但是打印出来的结果却是undefined

const attr=dom.create("<div id=attr>改标签测试</div>")
dom.after(empty,attr)
dom.attr(attr, 'title','hi,i am Sam')
const attr1=dom.attr(attr,'title')
console.log(`title:${attr1}`)//这句代码又出现问题了。。。。

dom.text(text, '改文本测试')
const x=dom.text(text1)
console.log(x)

dom.style(test,{border:'1px solid red',color:'blue'})
const y=dom.style(test,'border')
console.log(y)
dom.style(test,'border','1px solid black')

dom.class.add(test,'red')
dom.class.remove(test,'red')
dom.class.add(test,'blue')
console.log(dom.class.has(test,'blue'))

const fn=()=>{
    console.log('点击了')
}
dom.on(test,'click',fn)
//dom.off(test,'click',fn)

dom.after(test,test2)
const testDiv=dom.find('#test')[0]//#在这里是什么意思哪些地方需要这个#号我在编写div的id的时候用了这个#号是不是可以理解为这个#就是id的意思
console.log(testDiv)
console.log(dom.find('.red',test2)[0])

console.log(dom.siblings(child1))

console.log(dom.next(child1))
 
console.log(dom.previous(child2))


const f=dom.find('#eachDiv')[0]
console.log(f)
console.log(dom.children(f))
dom.each(dom.children(f),(n)=>dom.style(n,'color','red'))

console.log(dom.index(f2))

const a=dom.find('.red',redDiv)[0]
console.log(a)
dom.style(a,'color','blue')

const b=dom.find('#blue')
console.log(b)
dom.each(b,(n)=>dom.style(n,'color','blue'))