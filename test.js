d1 = new Date()
for (var d=new Date();(new Date()) -d < 3000;){};

const inject = obj => Comp => props => <Comp {...obj} {...props}/>

console.log('--------------------')
d2 = new Date()
console.log(d2 - d1)





